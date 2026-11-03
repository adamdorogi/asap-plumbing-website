import Image from "next/image";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { business } from "@/lib/business";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <h1 id="hero-heading"><span>YOUR LOCAL.</span><span>ON THE JOB.</span></h1>
            <p>From the dripping tap to the bathroom reno.<br className="wide-break" /> Straightforward plumbing for Brisbane homes,<br className="wide-break" /> with Mike on the tools.</p>
            <div className="hero-actions">
              <a className="button button-call" href={business.phoneHref}>Call Mike {business.phone}<ArrowUpRight aria-hidden="true" /></a>
              <a className="button button-outline" href="#contact">Get a quote</a>
            </div>
            <div className="hero-details">
              <span>Licensed plumber</span>
              <span>Brisbane &amp; surrounds</span>
              <a className="hours-sign" href={business.phoneHref} aria-label="Call Mike, open 24 hours">24/7<ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
          <figure className="hero-figure">
            <div className="hero-photo">
              <Image src="/images/brisbane-bathroom.png" alt="Sunlight across white bathroom tiles, a timber vanity and chrome tapware. Illustrative bathroom image." fill sizes="(max-width: 760px) 100vw, 50vw" preload />
            </div>
            <div className="local-stamp" aria-label="Local plumber, Brisbane Queensland"><span>LOCAL<br />PLUMBER /<br />BRISBANE<br />QLD</span></div>
            <figcaption>Good plumbing. Good people.</figcaption>
          </figure>
        </section>
        <nav className="service-sign" aria-label="Explore plumbing services">
          <a href="#services">REPAIRS <ArrowRight aria-hidden="true" /></a>
          <a href="#services">RENOVATIONS <ArrowRight aria-hidden="true" /></a>
          <a href="#services">DRAINAGE <ArrowRight aria-hidden="true" /></a>
          <a href="#services">HOT WATER <ArrowRight aria-hidden="true" /></a>
        </nav>
        <section id="services" className="services-section section-anchor" aria-labelledby="services-heading">
          <aside className="mike-aside">
            <div className="mike-photo"><Image src="/images/mike-plumber.png" alt="Mike from ASAP Plumbing QLD, on the tools beside a hot water system." fill sizes="(max-width: 760px) 100vw, 35vw" /></div>
          </aside>
          <div className="services-content"><h2 id="services-heading">A small leak. A big renovation. Sorted.</h2></div>
        </section>
      </main>
      <div className="mobile-contact-bar">
        <a href={business.phoneHref}><Phone size={20} aria-hidden="true" />Call Mike</a>
        <a href="#contact">Get a quote<ArrowUpRight size={20} aria-hidden="true" /></a>
      </div>
    </>
  );
}
