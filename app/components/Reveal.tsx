"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wraps children and reveals them with a smooth transition when scrolled into view.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  animation = "fade-up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animation?: "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const base = "transition-all duration-700 ease-out";

  const hiddenStyles: Record<string, string> = {
    "fade-up": "opacity-0 translate-y-10",
    "fade-in": "opacity-0",
    "scale-in": "opacity-0 scale-95",
    "slide-left": "opacity-0 -translate-x-10",
    "slide-right": "opacity-0 translate-x-10",
  };

  const visibleStyles: Record<string, string> = {
    "fade-up": "opacity-100 translate-y-0",
    "fade-in": "opacity-100",
    "scale-in": "opacity-100 scale-100",
    "slide-left": "opacity-100 translate-x-0",
    "slide-right": "opacity-100 translate-x-0",
  };

  return (
    <div
      ref={ref}
      className={`${base} ${
        visible ? visibleStyles[animation] : hiddenStyles[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}