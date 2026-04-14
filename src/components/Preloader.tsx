"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ─── geometry ─────────────────────────────────────── */
const CX = 180;
const CY = 180;
const ARC_R = 126;
const ARC_C = 2 * Math.PI * ARC_R; // ≈ 791.7

/* ─── timing ────────────────────────────────────────── */
const TOTAL_MS = 2800;

/* ─── eased progress curve ──────────────────────────── */
function ease(t: number): number {
  if (t < 0.35) return (t / 0.35) * 32;
  if (t < 0.70) return 32 + ((t - 0.35) / 0.35) * 48;
  return 80 + ((t - 0.70) / 0.30) * 20;
}

/* ─── status steps ──────────────────────────────────── */
const STATUSES = [
  { at: 0,   msg: "BOOT SEQUENCE INITIATED" },
  { at: 12,  msg: "LOADING MODULES" },
  { at: 30,  msg: "CALIBRATING SENSORS" },
  { at: 50,  msg: "ESTABLISHING GRID LINK" },
  { at: 68,  msg: "CHARGING CAPACITORS" },
  { at: 84,  msg: "RUNNING DIAGNOSTICS" },
  { at: 95,  msg: "ALL SYSTEMS NOMINAL" },
  { at: 100, msg: "LAUNCH SEQUENCE ↗" },
];

/* ─── progress head dot position ───────────────────── */
function arcDot(pct: number) {
  const angle = (pct / 100) * 360 - 90;
  const rad = (angle * Math.PI) / 180;
  return {
    x: CX + ARC_R * Math.cos(rad),
    y: CY + ARC_R * Math.sin(rad),
  };
}

/* ─── component ─────────────────────────────────────── */
export interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress]   = useState(0);
  const [status, setStatus]       = useState(STATUSES[0].msg);
  const [phase, setPhase]         = useState<"loading" | "done">("loading");
  const [telem, setTelem]         = useState({ mw: "2.4", hz: "49.98", eff: "94.2" });
  const raf   = useRef<number>(0);
  const t0    = useRef<number>(0);

  /* live telemetry flicker */
  useEffect(() => {
    const id = setInterval(() => {
      setTelem({
        mw:  (2.1 + Math.random() * 0.8).toFixed(1),
        hz:  (49.94 + Math.random() * 0.12).toFixed(2),
        eff: (92.1 + Math.random() * 5.1).toFixed(1),
      });
    }, 900);
    return () => clearInterval(id);
  }, []);

  /* progress rAF loop */
  useEffect(() => {
    const tick = (ts: number) => {
      if (!t0.current) t0.current = ts;
      const t = Math.min((ts - t0.current) / TOTAL_MS, 1);
      const p = Math.floor(ease(t));

      setProgress(p);
      const s = [...STATUSES].reverse().find((s) => s.at <= p);
      if (s) setStatus(s.msg);

      if (t < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setStatus("LAUNCH SEQUENCE ↗");
        /* short hold at 100 % → then exit slide */
        setTimeout(() => setPhase("done"), 520);
      }
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  /* fire onComplete after exit animation finishes */
  const dashOffset = ARC_C * (1 - progress / 100);
  const dot        = arcDot(Math.min(progress, 99.9));

  return (
    <motion.div
      key="preloader"
      animate={phase === "done" ? { y: "-100%" } : { y: 0 }}
      transition={
        phase === "done"
          ? { duration: 0.72, ease: [0.76, 0, 0.24, 1] }
          : { duration: 0 }
      }
      onAnimationComplete={() => {
        if (phase === "done") onComplete();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#050a07",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontFamily: "var(--font-display), 'Syne', sans-serif",
        userSelect: "none",
      }}
    >
      {/* ── grid ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,255,136,0.045) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(0,255,136,0.045) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 65% 65% at 50% 50%, black 20%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      {/* ── ambient glow ── */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,255,136,0.07), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* ── corner HUD labels ── */}
      <span className="preloader-hud" style={hud("top", "left")}>MKP RENEWABLE ENERGY PVT LIMITED SYS v2.5.1</span>
      <span className="preloader-hud" style={hud("top", "right")}>© {new Date().getFullYear()}</span>
      <span className="preloader-hud" style={{ ...hud("bottom", "left"), color: "rgba(0,255,136,0.12)" }}>
        SECURE BOOT // OK
      </span>

      {/* ── bottom-right mini bar ── */}
      <div style={{ position: "absolute", bottom: 28, right: 28 }}>
        <div
          style={{
            width: 110,
            height: 2,
            background: "rgba(0,255,136,0.1)",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.15, ease: "linear" }}
            style={{
              height: "100%",
              background: "#00ff88",
              borderRadius: 2,
              boxShadow: "0 0 8px #00ff88",
            }}
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          MAIN SVG — rings + arc + corner brackets
      ══════════════════════════════════════════════════ */}
      <div style={{ position: "relative", width: "min(360px, 88vw)", height: "min(360px, 88vw)", flexShrink: 0 }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 360 360"
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          {/* ── corner bracket decorations ── */}
          {[
            "M 52 30 L 30 30 L 30 52",
            "M 308 30 L 330 30 L 330 52",
            "M 52 330 L 30 330 L 30 308",
            "M 308 330 L 330 330 L 330 308",
          ].map((d, i) => (
            <path
              key={i}
              d={d}
              fill="none"
              stroke="rgba(0,255,136,0.18)"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          ))}

          {/* ── faint static reference circle ── */}
          <circle cx={CX} cy={CY} r={174} fill="none" stroke="rgba(0,255,136,0.04)" strokeWidth="1" />

          {/* ── ring 1 — CW 18 s — dashed ── */}
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          >
            <circle cx={CX} cy={CY} r={106} fill="none" stroke="rgba(0,255,136,0.1)" strokeWidth="1" strokeDasharray="3 10" />
            {/* bright node top */}
            <circle cx={CX} cy={CY - 106} r={4.5} fill="#00ff88" style={{ filter: "drop-shadow(0 0 8px #00ff88)" }} />
            {/* dim nodes */}
            <circle cx={CX} cy={CY + 106} r={2.5} fill="rgba(0,255,136,0.35)" />
            <circle cx={CX - 106} cy={CY} r={2}   fill="rgba(0,255,136,0.2)" />
          </motion.g>

          {/* ── ring 2 — CCW 26 s — blue ── */}
          <motion.g
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          >
            <circle cx={CX} cy={CY} r={148} fill="none" stroke="rgba(0,212,255,0.07)" strokeWidth="1" />
            <circle cx={CX} cy={CY - 148} r={3.5} fill="#00d4ff" style={{ filter: "drop-shadow(0 0 6px #00d4ff)" }} />
            <circle cx={CX + 148} cy={CY}  r={2}   fill="rgba(0,212,255,0.25)" />
          </motion.g>

          {/* ── ring 3 — CW 42 s — faint outer ── */}
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          >
            <circle cx={CX} cy={CY} r={168} fill="none" stroke="rgba(0,255,136,0.04)" strokeWidth="1" strokeDasharray="2 14" />
            {/* equilateral triangle of nodes */}
            <circle cx={CX}             cy={CY - 168}          r={3}   fill="rgba(0,255,136,0.5)" style={{ filter: "drop-shadow(0 0 4px rgba(0,255,136,0.5))" }} />
            <circle cx={CX + 145.4}     cy={CY + 84}           r={2}   fill="rgba(0,255,136,0.2)" />
            <circle cx={CX - 145.4}     cy={CY + 84}           r={2}   fill="rgba(0,255,136,0.2)" />
          </motion.g>

          {/* ── arc track ── */}
          <circle
            cx={CX} cy={CY} r={ARC_R}
            fill="none"
            stroke="rgba(0,255,136,0.07)"
            strokeWidth="2"
          />

          {/* ── progress arc ── */}
          <motion.circle
            cx={CX} cy={CY} r={ARC_R}
            fill="none"
            stroke="#00ff88"
            strokeWidth="2.5"
            strokeDasharray={ARC_C}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${CX} ${CY})`}
            style={{
              filter:
                "drop-shadow(0 0 6px #00ff88) drop-shadow(0 0 18px rgba(0,255,136,0.35))",
            }}
            transition={{ strokeDashoffset: { duration: 0.15, ease: "linear" } }}
          />

          {/* ── moving head dot on arc ── */}
          {progress > 1 && progress < 100 && (
            <motion.circle
              cx={dot.x}
              cy={dot.y}
              r={5}
              fill="#00ff88"
              style={{ filter: "drop-shadow(0 0 12px #00ff88)" }}
              animate={{ r: [4.5, 6.5, 4.5] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          {/* ── scan line that sweeps down through ring area ── */}
          <motion.line
            x1={CX - 174} y1={0}
            x2={CX + 174} y2={0}
            stroke="rgba(0,255,136,0.15)"
            strokeWidth="1"
            animate={{ y1: [-174 + CY, 174 + CY], y2: [-174 + CY, 174 + CY] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
            style={{ filter: "blur(1px)" }}
          />
        </svg>

        {/* ── central content overlay ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          {/* pulsing orb */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 18px rgba(0,255,136,0.35), 0 0 50px rgba(0,255,136,0.1)",
                "0 0 38px rgba(0,255,136,0.65), 0 0 90px rgba(0,255,136,0.22)",
                "0 0 18px rgba(0,255,136,0.35), 0 0 50px rgba(0,255,136,0.1)",
              ],
              scale: [1, 1.07, 1],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 38% 35%, #00ff88, #006635)",
            }}
          />

          {/* logo */}
          <div
            style={{
              fontSize: "1rem",
              fontWeight: 800,
              color: "#f0f5f2",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            MKP
            <span style={{ color: "#00ff88" }}>.</span>
            energy
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          COUNTER + STATUS + TELEMETRY
      ══════════════════════════════════════════════════ */}

      {/* large % counter */}
      <div
        style={{
          fontSize: "clamp(3.5rem, 14vw, 5.5rem)",
          fontWeight: 800,
          letterSpacing: "-0.05em",
          color: "#00ff88",
          lineHeight: 1,
          marginTop: 6,
          textShadow: "0 0 40px rgba(0,255,136,0.55)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {String(progress).padStart(2, "0")}
        <span
          style={{
            fontSize: "1.8rem",
            color: "rgba(0,255,136,0.4)",
            fontWeight: 700,
          }}
        >
          %
        </span>
      </div>

      {/* status line */}
      <div
        style={{
          marginTop: 10,
          fontSize: "0.62rem",
          letterSpacing: "0.28em",
          color: "#4a6a55",
          textTransform: "uppercase",
          fontFamily: "var(--font-body), 'DM Sans', monospace",
        }}
      >
        {status}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.9, repeat: Infinity }}
        >
          _
        </motion.span>
      </div>

      {/* telemetry bar */}
      <div
        style={{
          display: "flex",
          gap: 40,
          marginTop: 36,
          paddingTop: 20,
          borderTop: "1px solid rgba(0,255,136,0.07)",
        }}
      >
        {(
          [
            { label: "OUTPUT", val: telem.mw,  unit: "MW" },
            { label: "FREQ",   val: telem.hz,  unit: "Hz" },
            { label: "EFF",    val: telem.eff, unit: "%" },
          ] as const
        ).map(({ label, val, unit }) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                color: "#3a5545",
                marginBottom: 6,
                textTransform: "uppercase",
                fontFamily: "var(--font-body), monospace",
              }}
            >
              {label}
            </div>
            <motion.div
              key={val}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.9rem",
                color: "rgba(0,255,136,0.55)",
                letterSpacing: "0.04em",
              }}
            >
              {val}
              <span style={{ fontSize: "0.65rem", marginLeft: 2 }}>{unit}</span>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── tiny helper for corner label styles ─── */
function hud(
  v: "top" | "bottom",
  h: "left" | "right"
): React.CSSProperties {
  return {
    position: "absolute",
    [v]: 26,
    [h]: 28,
    fontSize: "0.57rem",
    letterSpacing: "0.14em",
    color: "rgba(0,255,136,0.18)",
    fontFamily: "var(--font-body), 'DM Sans', monospace",
    textTransform: "uppercase",
  };
}
