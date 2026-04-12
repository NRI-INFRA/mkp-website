"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const milestones = [
  { year: "2020", title: "Founded", desc: "MKP Renewable Energy Pvt Limited incorporated in Bangalore with a mission to accelerate India's clean energy transition." },
  { year: "2021", title: "First 10 MW", desc: "Commissioned our first utility-scale solar project in Rajasthan, delivering power to 6,000 homes." },
  { year: "2022", title: "Series A Funding", desc: "Raised ₹120 Cr to expand into wind energy and battery storage verticals." },
  { year: "2023", title: "Pan-India Expansion", desc: "Reached 12 states with 200+ MW deployed across solar, wind, and hybrid systems." },
  { year: "2024", title: "Green Hydrogen Pilot", desc: "Launched India's first captive green hydrogen facility powered by on-site solar." },
  { year: "2025", title: "500 MW Milestone", desc: "Crossed 500 MW of total installed capacity — powering 300,000+ homes across India." },
];

const values = [
  { title: "Engineering First", desc: "Every project starts with rigorous science — resource assessment, simulation, and stress-testing before a single rupee is committed." },
  { title: "Long-term Partnership", desc: "We operate the assets we build. Our incentives are aligned with your 25-year energy goals, not just the handover date." },
  { title: "Innovation by Default", desc: "From AI-optimised dispatch to emerging storage chemistries, we continuously upgrade our technology stack." },
  { title: "Net Zero Commitment", desc: "We measure and offset our own construction footprint, because accountability starts at home." },
];

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="mkp-container page-hero-content">
          <span className="section-label">About MKP Renewable Energy Pvt Limited</span>
          <h1>Building India&apos;s<br /><span style={{ color: "var(--green-primary)" }}>Clean Energy Future</span></h1>
          <p>
            From a small team with a big vision to one of India&apos;s fastest-growing
            renewable energy developers — here&apos;s our story.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="mkp-container">
          <div className="about-grid">
            <div className="about-visual reveal">
              <div className="grid-overlay" />
              <div className="about-visual-inner">
                <Image 
                  src="/images/visuals/energy_core.png" 
                  alt="Energy Core" 
                  fill 
                  className="about-visual-image"
                />
                <div className="energy-ring" />
                <div className="energy-ring-2" />
                <div className="energy-core" />
              </div>
            </div>
            <div className="about-content reveal" style={{ transitionDelay: "0.15s" }}>
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">Engineering Tomorrow&apos;s Grid</h2>
              <p className="highlight-text">
                MKP Renewable Energy Pvt Limited delivers <strong>vertically integrated renewable infrastructure</strong> —
                from initial feasibility through design, procurement, construction, and 25-year O&amp;M.
                We combine deep engineering with financial innovation to make clean energy
                the obvious economic choice.
              </p>
              <div className="about-features">
                {[
                  { icon: "⚙️", title: "Full Lifecycle Ownership", desc: "From concept to commissioning and long-term operations — one partner, zero gaps." },
                  { icon: "⚡", title: "Technology Agnostic", desc: "Solar, wind, storage, bioenergy, or hybrid — we design the optimal mix for your needs." },
                  { icon: "🌏", title: "Pan-India Presence", desc: "Operational across 12+ states with on-ground teams and regional expertise." },
                ].map((f) => (
                  <div className="about-feature" key={f.title}>
                    <div className="about-feature-icon">{f.icon}</div>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-padding">
        <div className="mkp-container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="benefits-grid" style={{ marginTop: "60px" }}>
            {values.map((v, i) => (
              <div className="benefit-item reveal" key={v.title} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="benefit-number">0{i + 1}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="mkp-container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Our Journey</span>
            <h2 className="section-title">Five Years of Impact</h2>
          </div>
          <div style={{ maxWidth: "800px", margin: "60px auto 0", display: "flex", flexDirection: "column", gap: "0" }}>
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="reveal"
                style={{
                  display: "flex",
                  gap: "32px",
                  paddingBottom: i < milestones.length - 1 ? "48px" : "0",
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "50%",
                    background: "var(--bg-card)", border: "2px solid var(--green-dark)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "0.75rem",
                    color: "var(--green-primary)",
                  }}>{m.year}</div>
                  {i < milestones.length - 1 && (
                    <div style={{ width: "1px", flex: 1, background: "var(--border-color)", marginTop: "8px" }} />
                  )}
                </div>
                <div style={{ paddingTop: "10px" }}>
                  <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "8px" }}>
                    {m.title}
                  </h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>{m.desc}</p>
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
            <span className="section-label">Join Us</span>
            <h2 className="section-title">Build the Future With Us</h2>
            <p className="section-subtitle">We&apos;re always looking for passionate engineers, financiers, and operators.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn-primary">Get in Touch</Link>
              <Link href="/solutions" className="btn-secondary">Explore Solutions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
