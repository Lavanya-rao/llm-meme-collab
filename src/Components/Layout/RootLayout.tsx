import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./RootLayout.css";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const loc = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => setMenuOpen(false), [loc.pathname]);
  const headerClass = loc.pathname === "/consent" ? "site-header site-header--blue" : "site-header";

  return (
    <div>
      <header className={headerClass} aria-hidden={loc.pathname === "/consent" ? "false" : "true"}>
        <div className="header-inner">
          <a className="brand" href="/">
            <img src="/src/assets/logo.svg" className="brand-logo" alt="MemeCollab logo" />
            <div>
              <div className="brand-title">MemeCollab</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>AI + Human Meme Study</div>
            </div>
          </a>

          <button className="nav-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((s) => !s)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          <nav id="primary-nav" className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary">
            <NavLink to="/" className="nav-link" end onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/task/ai-first" className="nav-link" onClick={() => setMenuOpen(false)}>
              AI Task
            </NavLink>
            <NavLink to="/task/human-first" className="nav-link" onClick={() => setMenuOpen(false)}>
              Human Task
            </NavLink>
          </nav>

          <div className="header-cta">
            <NavLink to="/consent" className="nav-link">Consent</NavLink>
            <a className="nav-link" href="https://example.org" target="_blank" rel="noreferrer">Help</a>
          </div>
        </div>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} MemeCollab — Built with ❤️ for research
      </footer>
    </div>
  );
}
