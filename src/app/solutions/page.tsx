"use client";

import { useEffect } from "react";
import Link from "next/link";

const solutions = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
      </svg>
    ),
    title: "Solar Energy",
    tag: "100 kW – 500 MW",
    desc: "Ground-mount, rooftop, and floating PV systems. Mono PERC, bifacial, and single-axis tracker designs engineered for maximum yield at minimum LCOE.",
    features: ["Site survey & resource assessment", "Mono PERC & bifacial modules", "Single-axis tracker systems", "Grid integration & SCADA", "25-year O&M contract"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.7 7.7a2.5 2.5 0 111.8 4.3H2" />
        <path d="M9.6 4.6A2 2 0 1111 8H2" />
        <path d="M12.6 19.4A2 2 0 1114 16H2" />
      </svg>
    ),
    title: "Wind Energy",
    tag: "1 MW – 200 MW",
    desc: "Onshore wind farms with IEC Class turbines. Advanced micro-siting, shadow flicker analysis, and grid synchronisation for maximum capacity factors.",
    features: ["Wind resource assessment & CFD modelling", "Micro-siting & turbine selection", "Foundation design & civil works", "Grid synchronisation", "Remote monitoring"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="6" width="18" height="12" rx="2" />
        <line x1="23" y1="13" x2="23" y2="11" />
        <line x1="5" y1="10" x2="5" y2="14" />
        <line x1="9" y1="10" x2="9" y2="14" />
        <line x1="13" y1="10" x2="13" y2="14" />
      </svg>
    ),
    title: "Battery Storage (BESS)",
    tag: "500 kWh – 500 MWh",
    desc: "Lithium-ion and emerging chemistry BESS for peak shaving, frequency regulation, and renewable firming. AI-optimised charge-discharge dispatch.",
    features: ["LFP & NMC cell selection", "BMS & EMS integration", "Peak shaving & arbitrage", "Frequency regulation (PFR/SFR)", "10-year performance guarantee"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Hybrid Systems",
    tag: "Solar + Wind + Storage",
    desc: "Multi-source renewable systems with AI-optimised dispatch. Achieve 24/7 green power supply with zero diesel backup for industrial and commercial consumers.",
    features: ["Multi-source hybrid design", "AI dispatch optimisation", "Zero-diesel 24/7 supply", "DG backup integration", "Real-time remote monitoring"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
        <path d="M14.1 6a7 7 0 00-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
      </svg>
    ),
    title: "Bioenergy & Biogas",
    tag: "500 kW – 20 MW",
    desc: "Waste-to-energy plants using agricultural residue, MSW, and industrial biomass. CBG production and power co-generation for rural and agri-industrial clusters.",
    features: ["Feedstock assessment", "Anaerobic digestion design", "CBG & power co-gen", "Digestate management", "Carbon credit monetisation"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 2v7.527a2 2 0 01-.211.896L4.72 20.55a1 1 0 00.9 1.45h12.76a1 1 0 00.9-1.45l-5.069-10.127A2 2 0 0114 9.527V2" />
        <path d="M8.5 2h7M7 16.5h10" />
      </svg>
    ),
    title: "Green Hydrogen",
    tag: "Pilot – Industrial Scale",
    desc: "Electrolysis-based hydrogen production powered by captive renewables. From pilot plants to industrial-scale facilities for fertiliser, steel, and transport sectors.",
    features: ["PEM & alkaline electrolysis", "Captive RE integration", "Compression & storage", "Fuel cell & mobility use cases", "Regulatory & offtake support"],
  },
];

const models = [
  { abbr: "EPC", title: "Engineering, Procurement & Construction", desc: "Turnkey project delivery with fixed-price contracts and performance guarantees." },
  { abbr: "OPEX", title: "Operating Expense Model", desc: "Zero capex for the client — MKP owns, operates, and maintains the asset. You pay only for energy consumed." },
  { abbr: "PPA", title: "Power Purchase Agreement", desc: "Long-term energy supply at a fixed or indexed tariff, lower than grid rates, with no upfront investment." },
  { abbr: "RESCO", title: "Renewable Energy Service Company", desc: "Bundled financing, installation, and O&M with guaranteed savings vs. grid tariff across 10–25 year tenors." },
];

export default function SolutionsPage() {
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
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="mkp-container page-hero-content">
          <span className="section-label">What We Build</span>
          <h1>Multi-Source Clean Energy<br /><span style={{ color: "var(--green-primary)" }}>at Scale</span></h1>
          <p>Comprehensive renewable energy solutions engineered for maximum ROI, grid reliability, and long-term sustainability.</p>
        </div>
      </section>

      {/* ── Solutions Grid ── */}
      <section className="solutions section-padding">
        <div className="mkp-container">
          <div className="reveal">
            <span className="section-label">Our Portfolio</span>
            <h2 className="section-title">Six Technology Verticals</h2>
            <p className="section-subtitle">From the sun to the atom — we deliver the full clean energy spectrum.</p>
          </div>
          <div className="solutions-grid">
            {solutions.map((s, i) => (
              <div className="solution-card reveal" key={s.title} style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="solution-icon">{s.icon}</div>
                <div style={{
                  display: "inline-block", fontSize: "0.7rem", fontWeight: 600,
                  background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.15)",
                  borderRadius: "100px", padding: "3px 10px", color: "var(--green-primary)",
                  marginBottom: "12px", letterSpacing: "0.04em",
                }}>{s.tag}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
                  {s.features.map((f) => (
                    <li key={f} style={{ fontSize: "0.8rem", color: "var(--text-dim)", display: "flex", gap: "8px", alignItems: "center" }}>
                      <span style={{ color: "var(--green-primary)", fontSize: "0.6rem" }}>▸</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="solution-link">Request a Quote →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Business Models ── */}
      <section className="models section-padding">
        <div className="mkp-container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Flexible Financing</span>
            <h2 className="section-title">Choose Your Model</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              We structure every project around your capital position and risk appetite.
            </p>
          </div>
          <div className="models-grid">
            {models.map((m, i) => (
              <div className="model-card reveal" key={m.abbr} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="model-abbr">{m.abbr}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="mkp-container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>How It Works</span>
            <h2 className="section-title">From Vision to Voltage</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Our battle-tested 5-phase methodology — on time, on budget, beyond spec.
            </p>
          </div>
          <div className="process-steps">
            {[
              { num: "01", title: "Consultation & Feasibility", desc: "Site survey, resource assessment, and techno-economic modelling" },
              { num: "02", title: "Design & Engineering", desc: "Detailed engineering, simulation, and regulatory compliance" },
              { num: "03", title: "Procurement & Build", desc: "Tier-1 equipment sourcing, construction management, and QA" },
              { num: "04", title: "Commissioning", desc: "Grid synchronisation, performance testing, and handover" },
              { num: "05", title: "O&M & Optimisation", desc: "Predictive maintenance, remote monitoring, and yield optimisation" },
            ].map((step, i) => (
              <div className="process-step reveal" key={step.num} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="step-number">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section section-padding">
        <div className="mkp-container">
          <div className="cta-inner reveal">
            <span className="section-label">Get Started</span>
            <h2 className="section-title">Ready to Go Renewable?</h2>
            <p className="section-subtitle">Tell us your load profile and we&apos;ll design the optimal solution within 48 hours.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn-primary">Request a Consultation</Link>
              <Link href="/upcoming-projects" className="btn-secondary">View Upcoming Projects</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
