import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="mkp-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Image 
                src="/logo.png" 
                alt="" 
                width={32} 
                height={32} 
                style={{ objectFit: "contain" }}
              />
              <span>MKP<span>.</span>energy</span>
            </Link>
            <p>
              Pioneering clean energy infrastructure across India — from feasibility
              to full-scale deployment. Building the grid of tomorrow, today.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter / X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/solutions">Our Solutions</Link>
            <Link href="/upcoming-projects">Upcoming Projects</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          {/* Connect */}
          <div className="footer-col">
            <h4>Connect</h4>
            <Link href="/contact" style={{ color: "var(--green-primary)", fontWeight: 600 }}>+91 99721 41144</Link>
            <a href="mailto:nriinfratechblr@gmail.com">nriinfratechblr@gmail.com</a>
            <Link href="/contact" style={{ fontSize: "0.8rem", lineHeight: "1.5", color: "var(--text-secondary)" }}>
              NRI INFRA GROUP, #102_First Floor Brigade IRV center, Nallurhalli Road, Nallurhalli, Whitefield Bangalore-560066
            </Link>
            <Link href="/contact">24/7 Support Portal</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MKP Renewable Energy Pvt Limited. All rights reserved.</p>
          <p>
            <Link href="#">Privacy Policy</Link>
            {" · "}
            <Link href="#">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
