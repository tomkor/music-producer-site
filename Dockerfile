# =============================================================================
# Multi-stage Dockerfile for Next.js 16 — optimized for Coolify
# Stage 1: Install dependencies (cached layer)
# Stage 2: Build the app (standalone output)
# Stage 3: Minimal production image (no node_modules, no source)
# =============================================================================

# ── Stage 1: deps ─────────────────────────────────────────────────────────────
FROM node:22-alpine AS deps

# Check for security updates at build time
RUN apk upgrade --no-cache

WORKDIR /app

# Copy lockfile + package.json first for maximum cache hit
COPY package.json package-lock.json ./

# Install ALL deps (including devDeps needed for build)
RUN --mount=type=cache,target=/root/.npm \
    npm ci --include=dev

# ── Stage 2: builder ──────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

RUN apk upgrade --no-cache

WORKDIR /app

# Copy installed node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY . .

# Disable telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

# Build with standalone output — generates .next/standalone with minimal server
RUN npm run build

# ── Stage 3: runner (production) ──────────────────────────────────────────────
FROM node:22-alpine AS runner

# Security: run as non-root user
RUN apk upgrade --no-cache && \
    addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 -G nodejs

WORKDIR /app

# Security: read-only filesystem-friendly — only write to .next/cache
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Copy standalone server output (minimal — no node_modules in image)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Create writable cache directory for ISR/revalidation
RUN mkdir -p .next/cache && chown -R nextjs:nodejs .next/cache

# Switch to non-root user
USER nextjs

# Expose port (Coolify will map this)
EXPOSE 3000

# Health check — verifies the server responds
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Start the standalone server (no `next start` — just node server.js)
CMD ["node", "server.js"]