"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Upcoming Projects", href: "/upcoming-projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="mkp-container">
        <Link href="/" className="nav-logo" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image 
            src="/logo.png" 
            alt="" 
            width={32} 
            height={32} 
            style={{ objectFit: "contain" }}
          />
          <span>MKP<span>.</span>energy</span>
        </Link>
        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={pathname === link.href ? "active" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={`mobile-toggle${mobileMenuOpen ? " open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
