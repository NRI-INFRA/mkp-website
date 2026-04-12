"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    type: "Utility-Scale Solar",
    name: "Rajasthan Solar Park",
    capacity: "50 MW",
    state: "Rajasthan",
    year: "2023",
    desc: "Ground-mount PV with single-axis trackers. Mono PERC bifacial modules. Powering 30,000+ homes annually.",
    image: "/images/projects/rajasthan_solar.png",
    cat: "Solar",
    gradient: "linear-gradient(135deg, #0d1a0d, #001a10)",
    impact: "65,000 tCO₂/yr avoided",
  },
  {
    type: "Hybrid + Storage",
    name: "Maharashtra Industrial Complex",
    capacity: "20 MW / 40 MWh",
    state: "Maharashtra",
    year: "2023",
    desc: "Solar + BESS for a major auto-parts manufacturer. 24/7 RE supply, zero diesel backup.",
    image: "/images/projects/maharashtra_hybrid.png",
    cat: "Hybrid",
    gradient: "linear-gradient(135deg, #0d1a14, #002840)",
    impact: "₹4.2 Cr/year savings",
  },
  {
    type: "Bioenergy",
    name: "Karnataka Biogas Cluster",
    capacity: "5 MW",
    state: "Karnataka",
    year: "2022",
    desc: "Agricultural waste-to-energy plant producing CBG and grid-quality power from paddy straw.",
    image: "/images/projects/karnataka_biogas.png",
    cat: "Bioenergy",
    gradient: "linear-gradient(135deg, #0d1a0d, #1a2e10)",
    impact: "12,000 tonnes/yr biomass used",
  },
  {
    type: "Utility-Scale Wind",
    name: "Tamil Nadu Wind Farm",
    capacity: "100 MW",
    state: "Tamil Nadu",
    year: "2024",
    desc: "Onshore wind farm with 25 × 4 MW IEC Class II turbines. CUF of 38% — one of highest in South India.",
    image: "/images/projects/tamilnadu_wind.png",
    cat: "Wind",
    gradient: "linear-gradient(135deg, #0a1020, #001030)",
    impact: "200,000 tCO₂/yr avoided",
  },
  {
    type: "Rooftop Solar",
    name: "Pune IT Campus",
    capacity: "3.5 MW",
    state: "Maharashtra",
    year: "2022",
    desc: "Ballasted rooftop installation across 8 buildings. Net-metering connected, 90% daytime self-sufficiency.",
    image: "/images/projects/pune_rooftop.png",
    cat: "Solar",
    gradient: "linear-gradient(135deg, #1a1000, #2a1800)",
    impact: "₹1.1 Cr/year savings",
  },
  {
    type: "Green Hydrogen Pilot",
    name: "Gujarat H₂ Facility",
    capacity: "500 kg/day",
    state: "Gujarat",
    year: "2024",
    desc: "India's first captive green hydrogen facility powered by on-site 10 MW solar. PEM electrolysis, Type-IV storage.",
    image: "/images/projects/gujarat_hydrogen.png",
    cat: "Hydrogen",
    gradient: "linear-gradient(135deg, #000d1a, #001025)",
    impact: "Pilot for 10,000 kg/day scale-up",
  },
  {
    type: "Floating Solar",
    name: "Madhya Pradesh Reservoir",
    capacity: "25 MW",
    state: "Madhya Pradesh",
    year: "2024",
    desc: "First floating solar installation on a state irrigation reservoir. Dual benefit: power generation + reduced evaporation.",
    image: "/images/projects/mp_floating.png",
    cat: "Solar",
    gradient: "linear-gradient(135deg, #001010, #001a20)",
    impact: "40M litres water saved/yr",
  },
  {
    type: "C&I Solar + Storage",
    name: "Hyderabad Pharma Cluster",
    capacity: "8 MW / 16 MWh",
    state: "Telangana",
    year: "2023",
    desc: "Multi-site solar+storage deployment for a pharmaceutical manufacturing cluster. 99.97% uptime SLA.",
    image: "/images/projects/hyderabad_pharma.png",
    cat: "Hybrid",
    gradient: "linear-gradient(135deg, #0d0d1a, #100028)",
    impact: "Zero grid dependency 6am–8pm",
  },
  {
    type: "Wind + Solar Hybrid",
    name: "Andhra Pradesh RE Hub",
    capacity: "200 MW",
    state: "Andhra Pradesh",
    year: "2025",
    desc: "Flagship hybrid project combining 120 MW solar and 80 MW wind with shared grid connectivity and unified SCADA.",
    image: "/images/projects/ap_hybrid.png",
    cat: "Hybrid",
    gradient: "linear-gradient(135deg, #0a1a0a, #001505)",
    impact: "400,000+ homes powered",
  },
];

const filters = ["All", "Solar", "Wind", "Hybrid", "Bioenergy", "Hydrogen"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [active]);

  const visible = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="mkp-container page-hero-content">
          <span className="section-label">Our Portfolio</span>
          <h1>Delivering Impact<br /><span style={{ color: "var(--green-primary)" }}>at Scale</span></h1>
          <p>500+ MW deployed across 9 states. Proven execution across utility-scale, C&I, and distributed energy projects.</p>
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

      {/* ── Projects ── */}
      <section className="section-padding">
        <div className="mkp-container">
          {/* Filter tabs */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "48px" }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "100px",
                  border: `1px solid ${active === f ? "var(--green-primary)" : "var(--border-color)"}`,
                  background: active === f ? "rgba(0,255,136,0.1)" : "transparent",
                  color: active === f ? "var(--green-primary)" : "var(--text-secondary)",
                  fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.82rem",
                  cursor: "pointer", transition: "all 0.2s", letterSpacing: "0.02em",
                }}
              >{f}</button>
            ))}
          </div>

          <div className="projects-grid">
            {visible.map((p, i) => (
              <div className="project-card reveal" key={p.name} style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="project-thumb">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="project-image"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                    position: "absolute", top: "12px", left: "12px",
                    fontSize: "0.65rem", fontWeight: 600, color: "var(--text-dim)",
                    background: "rgba(0,0,0,0.5)", borderRadius: "100px", padding: "3px 10px",
                  }}>{p.state} · {p.year}</span>
                </div>
                <div className="project-info">
                  <p className="project-type">{p.type}</p>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div style={{
                    marginTop: "12px", padding: "8px 14px",
                    background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.1)",
                    borderRadius: "8px", fontSize: "0.78rem", color: "var(--green-dim)",
                    display: "inline-block",
                  }}>⚡ {p.impact}</div>
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
