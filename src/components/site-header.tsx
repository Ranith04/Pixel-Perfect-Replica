import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const navItems = [
  { to: "/how-it-works", label: "How It Works" },
  { to: "/quality", label: "Quality Promise" },
  { to: "/partner", label: "Become a Partner" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const o = () => setScrolled(window.scrollY > 40);
    o();
    window.addEventListener("scroll", o);
    return () => window.removeEventListener("scroll", o);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !isHome;

  return (
    <nav className={solid ? "scrolled" : undefined}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          My<span>Check</span>Store
        </Link>
        <ul className="nav-links">
          {navItems.map((n) => (
            <li key={n.to}>
              <Link to={n.to} activeProps={{ className: "active" }}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <Link to="/login" className="btn-ghost">
            Log In
          </Link>
          <Link to="/partner" className="btn-primary">
            Join as Partner →
          </Link>
        </div>
        <button className="hamburger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-menu${open ? " open" : ""}`}>
        {navItems.map((n) => (
          <Link key={n.to} to={n.to}>
            {n.label}
          </Link>
        ))}
        <Link to="/login">Log In</Link>
        <Link to="/partner" style={{ color: "var(--amber)" }}>
          Join as Partner →
        </Link>
      </div>
    </nav>
  );
}
