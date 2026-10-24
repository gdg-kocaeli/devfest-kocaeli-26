"use client";

import { useEffect, useRef, useState } from "react";
import { assets } from "../assets";
import { event, featuredSpeakers, hasProgram, navigation } from "../data";
import { AssetImage } from "./shared/asset-image";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }

    const desktop = window.matchMedia("(min-width: 701px)");
    function handleResize() {
      if (desktop.matches) setMenuOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleResize);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="header container"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}
    >
      <a className="brand" href="#" aria-label="DevFest Kocaeli ana sayfa" onClick={() => setMenuOpen(false)}>
        <AssetImage image={assets.hero.logo} className="brand-logo" />
        <span className="brand-wordmark">
          <b className="brand-name">DevFest</b>
          <small className="brand-location">Kocaeli {event.year}</small>
        </span>
      </a>
      <button
        ref={toggleRef}
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          {menuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      <nav id="site-navigation" className={menuOpen ? "is-open" : undefined} aria-label="Ana menü">
        <span className="mobile-menu-label">DevFest Kocaeli’yi Keşfet</span>
        {navigation.filter(
          (item) =>
            (item.href !== "#konusmacilar" || featuredSpeakers.length > 0) &&
            (item.href !== "#program" || hasProgram),
        ).map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
            <svg className="menu-link-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        ))}
      </nav>
    </header>
  );
}
