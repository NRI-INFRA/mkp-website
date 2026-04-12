"use client";

import { useEffect } from "react";
import Link from "next/link";

const articles = [
  {
    cat: "Company News",
    date: "April 8, 2026",
    title: "MKP Renewable Energy Pvt Limited Crosses 500 MW Milestone",
    desc: "We commissioned our 500th megawatt of clean energy capacity in Andhra Pradesh, cementing our position among India's top-10 renewable developers.",
    readTime: "4 min read",
  },
  {
    cat: "Insights",
    date: "March 25, 2026",
    title: "Why Green Hydrogen Will Define India's 2040 Energy Mix",
    desc: "An analysis of India's hydrogen mission, current electrolyser economics, and what it takes to make green H₂ cost-competitive by 2032.",
    readTime: "8 min read",
  },
  {
    cat: "Policy",
    date: "March 12, 2026",
    title: "MNRE's New BESS Tender: What Developers Need to Know",
    desc: "Breaking down the 4,000 MWh standalone storage tender — capacity mix, viability gap funding, and how developers should position their bids.",
    readTime: "6 min read",
  },
  {
    cat: "Technology",
    date: "February 28, 2026",
    title: "Bifacial Solar + Single-Axis Trackers: The Numbers",
    desc: "Field data from 12 of our installations shows the bifacial tracker combination delivers 18–24% higher yield vs fixed-tilt mono PERC.",
    readTime: "5 min read",
  },
  {
    cat: "Project Update",
    date: "February 14, 2026",
    title: "Gujarat Green Hydrogen Pilot: First 90-Day Report",
    desc: "Our 500 kg/day PEM electrolysis plant has achieved 94% system efficiency and validated the pathway to ₹200/kg green hydrogen by 2028.",
    readTime: "7 min read",
  },
  {
    cat: "Insights",
    date: "January 30, 2026",
    title: "Floating Solar: The Hidden Opportunity in Indian Reservoirs",
    desc: "India has 5+ million hectares of water bodies. Even 10% coverage could add 300 GW of solar capacity while reducing evaporation losses.",
    readTime: "6 min read",
  },
  {
    cat: "Company News",
    date: "January 15, 2026",
    title: "MKP Renewable Energy Pvt Limited Raises ₹500 Cr in Series B Funding",
    desc: "The round was led by a Singapore-based infrastructure fund and will accelerate our green hydrogen and long-duration storage pipeline.",
    readTime: "3 min read",
  },
  {
    cat: "Policy",
    date: "December 20, 2025",
    title: "RPO Trajectory 2030: What Obligated Entities Must Do Now",
    desc: "With RPO targets rising to 43% by 2030, C&I consumers face rising costs for non-compliance. Here's the cheapest path to meet obligations.",
    readTime: "5 min read",
  },
  {
    cat: "Technology",
    date: "December 5, 2025",
    title: "LFP vs NMC BESS: Which Chemistry for Indian Conditions?",
    desc: "High ambient temperatures, grid instability, and 10-year performance requirements demand a different chemistry choice than temperate markets.",
    readTime: "7 min read",
  },
];

const catColors: Record<string, string> = {
  "Company News": "#00ff88",
  "Insights": "#00d4ff",
  "Policy": "#ffaa00",
  "Technology": "#cc88ff",
  "Project Update": "#00ff88",
};

export default function NewsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [featured, ...rest] = articles;

  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="mkp-container page-hero-content">
          <span className="section-label">News & Insights</span>
          <h1>Stories from the<br /><span style={{ color: "var(--green-primary)" }}>Clean Energy Frontier</span></h1>
          <p>Project updates, market intelligence, technology deep-dives, and policy analysis from the MKP Renewable Energy Pvt Limited team.</p>
        </div>
      </section>

      {/* ── Featured ── */}
      <section style={{ padding: "80px 0 0", background: "var(--bg-secondary)" }}>
        <div className="mkp-container">
          <span className="section-label">Featured Story</span>
          <div
            className="featured-article reveal"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)", borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div className="featured-thumb" style={{
              background: "linear-gradient(135deg, #050a07, #003020)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(0,255,136,0.2)" strokeWidth="0.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <div className="featured-body">
              <span style={{
                display: "inline-block", fontSize: "0.7rem", fontWeight: 600,
                background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.15)",
                borderRadius: "100px", padding: "4px 12px", color: catColors[featured.cat] || "var(--green-primary)",
                marginBottom: "16px",
              }}>{featured.cat}</span>
              <p style={{ fontSize: "0.78rem", color: "var(--text-dim)", marginBottom: "12px" }}>
                {featured.date} · {featured.readTime}
              </p>
              <h2 style={{
                fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 800,
                lineHeight: 1.2, marginBottom: "16px", color: "var(--text-primary)",
              }}>{featured.title}</h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.9rem", marginBottom: "28px" }}>{featured.desc}</p>
              <Link href="#" className="btn-primary" style={{ padding: "12px 28px", fontSize: "0.85rem" }}>Read Article →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Articles Grid ── */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="mkp-container">
          <span className="section-label">Latest Articles</span>
          <div className="news-grid">
            {rest.map((a, i) => (
              <Link href="#" className="news-card reveal" key={a.title} style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="news-thumb">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                  <span className="news-cat" style={{ color: catColors[a.cat] || "var(--green-primary)" }}>{a.cat}</span>
                </div>
                <div className="news-info">
                  <p className="news-date">{a.date} · {a.readTime}</p>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="cta-section section-padding">
        <div className="mkp-container">
          <div className="cta-inner reveal">
            <span className="section-label">Stay Informed</span>
            <h2 className="section-title">Clean Energy Intelligence, Monthly</h2>
            <p className="section-subtitle">Policy updates, technology deep-dives, and market insights — delivered to your inbox.</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "32px", flexWrap: "wrap" }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  padding: "14px 20px", width: "300px", maxWidth: "100%",
                  background: "var(--bg-secondary)", border: "1px solid var(--border-color)",
                  borderRadius: "100px", color: "var(--text-primary)",
                  fontFamily: "var(--font-body)", fontSize: "0.9rem", outline: "none",
                }}
              />
              <button className="btn-primary" style={{ whiteSpace: "nowrap" }}>Subscribe →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
