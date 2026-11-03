"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { business } from "@/lib/business";

const navigation = [
  ["Services", "#services"],
  ["Our work", "#work"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;

export function Wordmark({ footer = false }: { footer?: boolean }) {
  return (
    <Link href="/" className={`wordmark${footer ? " wordmark-footer" : ""}`} aria-label="ASAP Plumbing QLD home">
      <span className="wordmark-asap">ASAP</span>
      <span className="wordmark-divider" aria-hidden="true">/</span>
      <span className="wordmark-name">PLUMBING QLD</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Wordmark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="button header-phone" href={business.phoneHref} aria-label={`Call ASAP Plumbing QLD on ${business.phone}`}>
          <Phone size={23} strokeWidth={2.3} aria-hidden="true" />
          <span>{business.phone}</span>
        </a>
        <button
          ref={menuButton}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open ? (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight aria-hidden="true" /></a>
          ))}
          <a href={business.phoneHref} onClick={() => setOpen(false)}>Call Mike <span>{business.phone}</span></a>
        </nav>
      ) : null}
    </header>
  );
}
