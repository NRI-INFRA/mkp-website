"use client";

import { useEffect } from "react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Link from "next/link";
import Image from "next/image";


/* ── SVG Icon Components ── */
const SolarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
  </svg>
);

const WindIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.7 7.7a2.5 2.5 0 111.8 4.3H2" />
    <path d="M9.6 4.6A2 2 0 1111 8H2" />
    <path d="M12.6 19.4A2 2 0 1014 16H2" />
  </svg>
);

const BatteryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
    <line x1="23" y1="13" x2="23" y2="11" />
    <line x1="5" y1="10" x2="5" y2="14" />
    <line x1="9" y1="10" x2="9" y2="14" />
    <line x1="13" y1="10" x2="13" y2="14" />
  </svg>
);

const HybridIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const BioenergyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 20h10" />
    <path d="M10 20c5.5-2.5.8-6.4 3-10" />
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
    <path d="M14.1 6a7 7 0 00-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
  </svg>
);

const HydrogenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2v7.527a2 2 0 01-.211.896L4.72 20.55a1 1 0 00.9 1.45h12.76a1 1 0 00.9-1.45l-5.069-10.127A2 2 0 0114 9.527V2" />
    <path d="M8.5 2h7" />
    <path d="M7 16.5h10" />
  </svg>
);

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <BackgroundPaths 
        title="Powering the Future"
        badge="Pioneering Clean Energy Since 2020"
        description="End-to-end renewable energy infrastructure for enterprises, industries, and communities — from feasibility to full-scale deployment."
        actions={
          <>
            <Link href="/solutions" className="btn-primary">
              Explore Solutions
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-secondary">Request a Consultation</Link>
          </>
        }
        stats={
          <>
            {[
              { value: "500+", label: "MW Deployed" },
              { value: "200+", label: "Projects" },
              { value: "12+", label: "States" },
              { value: "98%", label: "Retention" },
            ].map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </>
        }
      />

      {/* ======== MARQUEE ======== */}
      <section className="marquee-section">
        <div className="marquee-track">
          {[
            "Solar PV Systems",
            "Wind Energy",
            "Battery Storage",
            "Hybrid Systems",
            "Bioenergy",
            "Green Hydrogen",
            "Energy-as-a-Service",
            "Net Zero Solutions",
            "Solar PV Systems",
            "Wind Energy",
            "Battery Storage",
            "Hybrid Systems",
            "Bioenergy",
            "Green Hydrogen",
            "Energy-as-a-Service",
            "Net Zero Solutions",
          ].map((item, i) => (
            <div className="marquee-item" key={i}>
              <span className="dot"></span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ======== ABOUT ======== */}
      <section className="about section-padding" id="about">
        <div className="mkp-container">
          <div className="about-grid">
            <div className="about-visual reveal">
              <div className="grid-overlay"></div>
              <div className="about-visual-inner">
                <Image 
                  src="/images/visuals/energy_core.png" 
                  alt="Energy Core" 
                  fill 
                  className="about-visual-image"
                />
                <div className="energy-ring"></div>
                <div className="energy-ring-2"></div>
                <div className="energy-core"></div>
              </div>
            </div>
            <div className="about-content reveal" style={{ transitionDelay: "0.15s" }}>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">Engineering Tomorrow&apos;s Energy Grid</h2>
              <p className="highlight-text">
                MKP Renewable Energy Pvt Limited delivers{" "}
                <strong>vertically integrated renewable energy infrastructure</strong> —
                from initial feasibility studies through design, procurement, construction,
                and ongoing operations. We combine deep engineering expertise with
                financial innovation to accelerate the clean energy transition.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <h4>Full Lifecycle Ownership</h4>
                    <p>From concept to commissioning and 25-year O&amp;M — one partner, zero gaps.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Technology Agnostic</h4>
                    <p>Solar, wind, storage, bioenergy, or hybrid — we design the optimal mix for your needs.</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                      <path d="M2 12h20" />
                      <path d="M12 2a15 15 0 014 10 15 15 0 01-4 10 15 15 0 01-4-10A15 15 0 0112 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Pan-India Presence</h4>
                    <p>Operational across 12+ states with on-ground teams and regional expertise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== SOLUTIONS ======== */}
      <section className="solutions section-padding" id="solutions">
        <div className="mkp-container">
          <div className="reveal">
            <span className="section-label">Our Solutions</span>
            <h2 className="section-title">
              Multi-Source Clean Energy
              <br />
              at Scale
            </h2>
            <p className="section-subtitle">
              Comprehensive renewable energy solutions engineered for maximum ROI,
              reliability, and sustainability.
            </p>
          </div>
          <div className="solutions-grid">
            {[
              {
                icon: <SolarIcon />,
                title: "Solar Energy",
                desc: "Ground-mount, rooftop, and floating PV systems from 100 kW to 500 MW. Mono PERC, bifacial, and tracker-based designs.",
                delay: "0s",
              },
              {
                icon: <WindIcon />,
                title: "Wind Energy",
                desc: "Onshore wind farms with advanced turbine technology. Site assessment, micro-siting, and grid integration included.",
                delay: "0.08s",
              },
              {
                icon: <BatteryIcon />,
                title: "Battery Storage (BESS)",
                desc: "Li-ion and emerging chemistry solutions for peak shaving, frequency regulation, and renewable firming.",
                delay: "0.16s",
              },
              {
                icon: <HybridIcon />,
                title: "Hybrid Systems",
                desc: "Solar + Wind + Storage + DG backup for uninterrupted power. AI-optimized dispatch for maximum efficiency.",
                delay: "0.24s",
              },
              {
                icon: <BioenergyIcon />,
                title: "Bioenergy & Biogas",
                desc: "Waste-to-energy plants using agricultural residue, MSW, and industrial biomass. CBG and power co-generation.",
                delay: "0.32s",
              },
              {
                icon: <HydrogenIcon />,
                title: "Green Hydrogen",
                desc: "Electrolysis-based hydrogen production powered by captive renewables. Future-proof fuel infrastructure.",
                delay: "0.4s",
              },
            ].map((card) => (
              <div
                className="solution-card reveal"
                key={card.title}
                style={{ transitionDelay: card.delay }}
              >
                <div className="solution-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <Link href="/solutions" className="solution-link">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== PROCESS ======== */}
      <section className="section-padding" id="process">
        <div className="mkp-container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>
              How It Works
            </span>
            <h2 className="section-title">From Vision to Voltage</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Our battle-tested 5-phase methodology ensures every project is delivered
              on time, on budget, and beyond spec.
            </p>
          </div>
          <div className="process-steps">
            {[
              {
                num: "01",
                title: "Consultation & Feasibility",
                desc: "Site survey, resource assessment, and techno-economic modeling",
                delay: "0s",
              },
              {
                num: "02",
                title: "Design & Engineering",
                desc: "Detailed engineering, simulation, and regulatory compliance",
                delay: "0.08s",
              },
              {
                num: "03",
                title: "Procurement & Build",
                desc: "Tier-1 equipment sourcing, construction management, and QA",
                delay: "0.16s",
              },
              {
                num: "04",
                title: "Commissioning",
                desc: "Grid synchronization, performance testing, and handover",
                delay: "0.24s",
              },
              {
                num: "05",
                title: "O&M & Optimization",
                desc: "Predictive maintenance, remote monitoring, and yield optimization",
                delay: "0.32s",
              },
            ].map((step) => (
              <div
                className="process-step reveal"
                key={step.num}
                style={{ transitionDelay: step.delay }}
              >
                <div className="step-number">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== PROJECTS ======== */}
      <section className="projects section-padding" id="projects">
        <div className="mkp-container">
          <div className="reveal" style={{ textAlign: "center" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>
              Future Projects
            </span>
            <h2 className="section-title">Scaling the Future</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Active pipeline featuring 1 GW+ of utility-scale and C&I renewable energy projects.
            </p>
          </div>
          <div className="projects-grid">
            <div className="project-card reveal">
              <div className="project-thumb">
                <Image 
                  src="/images/projects/karnataka_solar_acres.png" 
                  alt="Mincheri Solar Park" 
                  fill 
                  className="project-image"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="capacity-badge">30 MW</span>
              </div>
              <div className="project-info">
                <p className="project-type">Utility-Scale Solar</p>
                <h3>Mincheri Solar Park</h3>
                <p>125-acre solar development in Bellary, Karnataka. Scaling future energy horizons.</p>
              </div>
            </div>
            <div className="project-card reveal" style={{ transitionDelay: "0.08s" }}>
              <div className="project-thumb">
                <Image 
                  src="/images/projects/hagaribommanahalli_solar.png" 
                  alt="Hagaribommanahalli Green Energy" 
                  fill 
                  className="project-image"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="capacity-badge">7 MW</span>
              </div>
              <div className="project-info">
                <p className="project-type">Solar Energy Park</p>
                <h3>Hagaribommanahalli Green Energy</h3>
                <p>30-acre high-yield solar development in Karnataka, engineering for precision grid stability.</p>
              </div>
            </div>
            <div className="project-card reveal" style={{ transitionDelay: "0.16s" }}>
              <div className="project-thumb">
                <Image 
                  src="/images/projects/ap_hybrid.png" 
                  alt="Satya Sai RE Hub" 
                  fill 
                  className="project-image"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="capacity-badge">150 MW</span>
              </div>
              <div className="project-info">
                <p className="project-type">Wind + Solar Hybrid</p>
                <h3>Satya Sai RE Hub</h3>
                <p>Integrated renewable energy development in Andhra Pradesh&apos;s wind-solar corridors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== VISION ======== */}
      <section className="vision section-padding" id="vision">
        <div className="vision-bg"></div>
        <div className="mkp-container">
          <div className="reveal">
            <span className="section-label" style={{ justifyContent: "center" }}>
              Future Energy
            </span>
            <h2 className="section-title">The Road to Net Zero</h2>
            <p className="section-subtitle">
              We are investing in the technologies that will define the next century of
              energy — green hydrogen, long-duration storage, and intelligent microgrids.
            </p>
          </div>
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <p className="vision-statement">
              &ldquo;We are building the infrastructure for tomorrow&apos;s energy ecosystem —
              one project, one megawatt, one community at a time.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <section className="cta-section section-padding">
        <div className="mkp-container">
          <div className="cta-inner reveal">
            <span className="section-label">Get Started</span>
            <h2 className="section-title">
              Ready to Switch to
              <br />
              Clean Energy?
            </h2>
            <p className="section-subtitle">
              Let&apos;s design the optimal renewable energy solution for your business.
              Our team responds within 24 hours.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn-primary">
                Request a Consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/solutions" className="btn-secondary">
                View Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
