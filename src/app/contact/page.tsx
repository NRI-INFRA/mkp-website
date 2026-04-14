"use client";

import { useEffect, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="mkp-container page-hero-content">
          <span className="section-label">Get in Touch</span>
          <h1>Let&apos;s Build Your<br /><span style={{ color: "var(--green-primary)" }}>Energy Future</span></h1>
          <p>Tell us your requirements and our team will respond within 24 hours with a tailored proposal.</p>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="mkp-container">
          <div className="contact-grid">
            {/* Info */}
            <div className="contact-info reveal">
              <h2>How Can We Help?</h2>
              <p>
                Whether you&apos;re exploring a 500 kW rooftop or a 500 MW utility-scale hybrid,
                MKP Renewable Energy Pvt Limited has the expertise to turn your vision into operating megawatts.
              </p>

              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.84h3a2 2 0 012 1.72c.13 1 .38 1.97.73 2.91a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.94.35 1.91.6 2.91.73A2 2 0 0122 16.92z" />
                    </svg>
                  ),
                  label: "Regional Support",
                  value: "+91 99721 41144 (Mon - Sat, 9am - 7pm)",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: "Institutional Sales",
                  value: "nriinfratechblr@gmail.com",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Headquarters",
                  value: "NRI INFRA GROUP, #102_First Floor Brigade IRV center, Nallurhalli Road, Nallurhalli, Whitefield Bangalore-560066",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  label: "Response Portal",
                  value: "24/7 Response Portal — tracked ticketing system",
                },
              ].map((d) => (
                <div className="contact-detail" key={d.label}>
                  <div className="contact-detail-icon">{d.icon}</div>
                  <div>
                    <h4>{d.label}</h4>
                    <p>{d.value}</p>
                  </div>
                </div>
              ))}

            </div>

            {/* Form */}
            <div className="reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="contact-form-wrap">
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ fontSize: "3rem", marginBottom: "16px" }}>✅</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", marginBottom: "12px" }}>Message Received!</h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
                      Our team will review your requirements and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary"
                      style={{ marginTop: "28px" }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3>Request a Consultation</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group">
                          <label>First Name</label>
                          <input type="text" placeholder="Rahul" required />
                        </div>
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" placeholder="Mehta" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Company / Organisation</label>
                        <input type="text" placeholder="Acme Industries Pvt. Ltd." />
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" placeholder="rahul@acme.in" required />
                        </div>
                        <div className="form-group">
                          <label>Phone</label>
                          <input type="tel" placeholder="+91 98765 43210" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>I&apos;m interested in</label>
                        <select defaultValue="">
                          <option value="" disabled>Select a solution</option>
                          <option>Solar Energy</option>
                          <option>Wind Energy</option>
                          <option>Battery Storage (BESS)</option>
                          <option>Hybrid Systems</option>
                          <option>Bioenergy & Biogas</option>
                          <option>Green Hydrogen</option>
                          <option>Not sure — need consultation</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Approximate Capacity / Load</label>
                        <input type="text" placeholder="e.g. 2 MW, 10,000 units/month" />
                      </div>
                      <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="Tell us about your project, location, timeline, and any specific requirements..." />
                      </div>
                      <button type="submit" className="btn-primary form-submit">
                        Send Message →
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="map-container reveal" style={{ marginTop: "40px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.970176527845!2d77.72807027581515!3d12.97068581552553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13e3251958e9%3A0xf29e3f66c54fed82!2sBrigade%20IRV%20Centre!5e0!3m2!1sen!2sin!4v1744463162529!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "12px", filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
