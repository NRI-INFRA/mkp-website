"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    type: "Utility-Scale Solar",
    name: "Mincheri Solar Park",
    capacity: "30 MW",
    state: "Karnataka",
    year: "2026",
    desc: "A landmark solar development project spanning 125 acres of high-yield terrain in Bellary. Engineering for maximum grid stability and efficiency.",
    image: "/images/projects/karnataka_solar_acres.png",
    cat: "Solar",
    gradient: "linear-gradient(135deg, #0d1a0d, #001a10)",
    impact: "45,000 tCO₂/yr avoided",
  },
  {
    type: "Solar Energy Park",
    name: "Hagaribommanahalli Green Energy",
    capacity: "7 MW",
    state: "Karnataka",
    year: "2026",
    desc: "A precision-engineered 30-acre solar development near Hagaribommanahalli. Designed for high-density power yield and seamless grid integration.",
    image: "/images/projects/hagaribommanahalli_solar.png",
    cat: "Solar",
    gradient: "linear-gradient(135deg, #0d1a10, #052010)",
    impact: "10,500 tCO₂/yr avoided",
  },
  {
    type: "Wind + Solar Hybrid",
    name: "Satya Sai RE Hub",
    capacity: "150 MW",
    state: "Andhra Pradesh",
    year: "2026",
    desc: "Strategic renewable energy development in Palasamudram and Penukonda. Integrated multi-source plant for consistent regional power supply.",
    image: "/images/projects/ap_hybrid.png",
    cat: "Hybrid",
    gradient: "linear-gradient(135deg, #0a1a0a, #001505)",
    impact: "220,000 tCO₂/yr avoided",
  },
];

export default function ProjectsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const visible = projects;

  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="mkp-container page-hero-content">
          <span className="section-label">Future Readiness</span>
          <h1>Upcoming<br /><span style={{ color: "var(--green-primary)" }}>Projects</span></h1>
          <p>Exploring the next frontier of energy infrastructure. Scaling our impact with 1 GW+ in the active pipeline across 12+ states.</p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: "var(--bg-secondary)", padding: "40px 0", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="mkp-container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0", justifyContent: "space-around" }}>
            {[
              { value: "500+", label: "MW Deployed" },
              { value: "9", label: "States" },
              { value: "200+", label: "Projects" },
              { value: "98%", label: "On-time Delivery" },
              { value: "750k+", label: "Homes Powered" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center", padding: "0 24px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 800, color: "var(--green-primary)" }}>{s.value}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-dim)", marginTop: "4px", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming Projects ── */}
      <section className="section-padding">
        <div className="mkp-container">
          <div className="upcoming-list">
            {visible.map((p, i) => (
              <div
                className={`landscape-card reveal ${i % 2 !== 0 ? "reversed" : ""}`}
                key={p.name}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="project-thumb">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="project-image"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="project-placeholder" style={{ background: p.gradient }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                  )}
                  <span className="capacity-badge">{p.capacity}</span>
                  <span style={{
                    position: "absolute", top: "24px", left: "24px",
                    fontSize: "0.7rem", fontWeight: 600, color: "var(--text-primary)",
                    background: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)",
                    borderRadius: "100px", padding: "5px 14px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    zIndex: 2
                  }}>{p.state} · {p.year}</span>
                </div>
                <div className="project-info">
                  <p className="project-type">{p.type}</p>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div style={{
                    marginTop: "auto", padding: "10px 18px",
                    background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.15)",
                    borderRadius: "100px", fontSize: "0.85rem", color: "var(--green-primary)",
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    fontWeight: 600, width: "fit-content"
                  }}>
                    <span style={{ fontSize: "1.1rem" }}>⚡</span> {p.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section section-padding">
        <div className="mkp-container">
          <div className="cta-inner reveal">
            <span className="section-label">Start Your Project</span>
            <h2 className="section-title">Add Your Project to Our Portfolio</h2>
            <p className="section-subtitle">From 500 kW to 500 MW — our team responds within 24 hours.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn-primary">Request a Consultation</Link>
              <Link href="/solutions" className="btn-secondary">View Solutions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
