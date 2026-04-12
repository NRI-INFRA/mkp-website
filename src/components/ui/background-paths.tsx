"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export interface BackgroundPathsProps {
  title: string;
  badge?: string;
  description?: string;
  actions?: ReactNode;
  stats?: ReactNode;
}

const DURATIONS = [20, 25, 22, 28, 21, 24, 27, 19, 23, 26, 30, 18];

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    opacity: Math.min(0.03 + i * 0.008, 0.25),
    width: 0.5 + i * 0.03,
    duration: DURATIONS[i % DURATIONS.length],
  }));

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 696 316"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke={`rgba(0,255,136,${path.opacity})`}
          strokeWidth={path.width}
          initial={{ pathLength: 0.3, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3], pathOffset: [0, 1, 0] }}
          transition={{ duration: path.duration, repeat: Infinity, ease: "linear", delay: path.id * 0.25 }}
        />
      ))}
    </svg>
  );
}

export function BackgroundPaths({ title, badge, description, actions, stats }: BackgroundPathsProps) {
  const words = title.split(" ");

  return (
    <section className="hero">
      {/* Background: orbs + grid + animated SVG paths */}
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="hero-grid" />
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="mkp-container" style={{ width: "100%", zIndex: 2, position: "relative" }}>
        <div className="hero-content">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-badge"
            >
              <span className="pulse" />
              {badge}
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className={i === words.length - 1 ? "gradient-text" : undefined}
                style={{ display: "inline-block", marginRight: "0.3em" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-desc"
            >
              {description}
            </motion.p>
          )}

          {actions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52 }}
              className="hero-actions"
            >
              {actions}
            </motion.div>
          )}

          {stats && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="hero-stats"
            >
              {stats}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
