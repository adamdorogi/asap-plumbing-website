import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { SiteHeader, Wordmark } from "@/components/site-header";
import { QuoteForm } from "@/components/quote-form";
import { business, services } from "@/lib/business";

const suburbs = ["Woolloongabba", "Coorparoo", "East Brisbane", "Kangaroo Point", "Bulimba", "Camp Hill", "Greenslopes", "South Brisbane"];
const faqs = [
  { question: "Can I call outside normal business hours?", answer: "Yes. ASAP Plumbing QLD is listed as open 24 hours. For an urgent plumbing problem, call Mike on 0434 151 105 to discuss what is happening and confirm current availability. Arrival times depend on the job and location." },
  { question: "Do you help with bathroom renovations?", answer: "Yes, renovations are part of what we do. From plumbing rough-ins to installing a statement vanity, Mike can talk through the plumbing your project needs. Have a look at the real Bulimba vanity installation above, then get in touch about your plans." },
  { question: "Which Brisbane suburbs do you service?", answer: "We’re based around Woolloongabba and Coorparoo, working in central Brisbane and nearby suburbs. Give Mike your suburb when you call or enquire so he can confirm coverage and availability for your address." },
  { question: "How do I arrange a quote?", answer: "Call Mike directly, or use the form below to prepare an email enquiry. Include your suburb, a description of the job and your preferred timing. You can attach photos in your email app before sending — they’re especially useful for repairs and renovation plans." },
];

export default async function Home({ searchParams }: { searchParams: Promise<{ service?: string | string[] }> }) {
  const params = await searchParams;
  const defaultService = typeof params.service === "string" && services.some((service) => service.name === params.service) ? params.service : services[0].name;
  const schema = {
    "@context": "https://schema.org", "@type": "Plumber", name: business.name, url: business.site,
    telephone: "+61434151105", email: business.email,
    address: { "@type": "PostalAddress", streetAddress: "855 Stanley St", addressLocality: "Woolloongabba", addressRegion: "QLD", postalCode: "4102", addressCountry: "AU" },
    geo: { "@type": "GeoCoordinates", latitude: -27.4873541, longitude: 153.0389881 },
    areaServed: { "@type": "City", name: "Brisbane" },
    openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
    sameAs: [business.facebook, business.maps],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
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
              <a className="hours-sign" href={business.phoneHref} aria-label="Call Mike, open 24 hours">24/7</a>
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
            <div className="mike-intro" id="about">
              <h3>Mike. Your local plumber.</h3>
              <p>A Brisbane local, a licensed plumber, and the person on the other end of the phone. From an everyday repair to the plumbing behind your next reno, let’s get it sorted.</p>
              <a className="text-link" href={business.phoneHref}>Have a chat with Mike<ArrowUpRight size={20} aria-hidden="true" /></a>
            </div>
          </aside>
          <div className="services-content">
            <h2 id="services-heading">A small leak. A big renovation. Sorted.</h2>
            <p className="services-lead">For the things that can’t wait, and the things you’ve been meaning to get to.</p>
            <div className="service-list">
              {services.map((service) => (
                <details className="service-row" key={service.name} name="plumbing-service">
                  <summary><span><h3>{service.name}</h3><span className="service-summary">{service.summary}</span></span><span className="service-arrow"><ArrowUpRight aria-hidden="true" /></span></summary>
                  <div className="service-expanded"><p>{service.description}</p><p className="service-includes">{service.includes}</p><Link className="text-link" href={`/?service=${encodeURIComponent(service.name)}#contact`}>Enquire about {service.name.toLowerCase()}<ArrowRight size={18} aria-hidden="true" /></Link></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="work-section section-anchor" aria-labelledby="work-heading">
          <div className="section-topline">
            <h2 id="work-heading">THE FINISH IS<br />IN THE DETAILS.</h2>
            <div><p>A little of what we’ve been working on.<br />Real jobs. Real Brisbane homes.</p><a className="text-link" href={business.facebook} target="_blank" rel="noopener noreferrer">More from the tools on Facebook<ArrowUpRight size={20} aria-hidden="true" /></a></div>
          </div>
          <div className="project-grid">
            <a className="project" href="https://www.facebook.com/photo/?fbid=122124131163297259" target="_blank" rel="noopener noreferrer" aria-label="See the Bulimba stone vanity installation on Facebook">
              <div className="project-image vanity-image"><Image src="/images/bulimba-stone-vanity.webp" alt="The actual freestanding stone vanity installed by ASAP Plumbing QLD in Bulimba." fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
              <div className="project-caption"><div><h3>A statement in stone.</h3><p>Stone vanity installation · Bulimba</p></div><ArrowUpRight aria-hidden="true" /></div>
            </a>
            <a className="project" href={business.facebook} target="_blank" rel="noopener noreferrer" aria-label="See ASAP Plumbing QLD renovation plumbing work on Facebook">
              <div className="project-image rough-in-image"><Image src="/images/plumbing-rough-in.webp" alt="Actual renovation plumbing rough-in by ASAP Plumbing QLD, fitted within a timber wall frame." fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
              <div className="project-caption"><div><h3>Good work starts underneath.</h3><p>Renovation plumbing · Behind the walls</p></div><ArrowUpRight aria-hidden="true" /></div>
            </a>
          </div>
          <p className="photo-credit">Project and plumber photographs from ASAP Plumbing QLD. The bathroom hero image is AI-generated and illustrative.</p>
        </section>

        <section className="urgent-section" aria-labelledby="urgent-heading">
          <div><h2 id="urgent-heading">PLUMBING DOESN’T<br />WATCH THE CLOCK.</h2><div className="open-hours"><Clock3 size={19} aria-hidden="true" /><span>Open 24 hours, 7 days a week.</span></div></div>
          <div className="urgent-action"><p>A leak that won’t wait? Call Mike, explain the problem and confirm availability.</p><a className="button" href={business.phoneHref}><Phone fill="currentColor" aria-hidden="true" />{business.phone}<ArrowUpRight aria-hidden="true" /></a><span>For urgent jobs, calling is the quickest way to get in touch.</span></div>
        </section>

        <section className="local-section" aria-labelledby="local-heading">
          <div className="local-content"><h2 id="local-heading">RIGHT HERE.<br />IN BRISBANE.</h2><p>Based around Woolloongabba and Coorparoo, working in central Brisbane and the neighbourhoods around it.</p><div className="suburb-list" aria-label="Nearby Brisbane suburbs">{suburbs.map((suburb) => <span key={suburb}>{suburb}</span>)}</div><p className="coverage-note">A little further out? Give Mike a call to check your suburb.</p><a className="text-link" href={business.maps} target="_blank" rel="noopener noreferrer"><MapPin size={18} aria-hidden="true" />Find us on Google Maps<ArrowUpRight size={18} aria-hidden="true" /></a></div>
          <div className="local-map"><iframe title="ASAP Plumbing QLD in Woolloongabba, Brisbane" src="https://maps.google.com/maps?q=Asap%20plumbing%20qld%20Woolloongabba&z=13&output=embed" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" /><div className="map-caption"><MapPin size={19} aria-hidden="true" /><span>Woolloongabba, Brisbane QLD</span><a href={business.maps} target="_blank" rel="noopener noreferrer" aria-label="Open ASAP Plumbing QLD on Google Maps"><ArrowUpRight size={23} aria-hidden="true" /></a></div></div>
        </section>

        <section className="faq-section" aria-labelledby="faq-heading">
          <div className="faq-intro"><h2 id="faq-heading">GOOD QUESTIONS.<br />STRAIGHT ANSWERS.</h2><p>Can’t find what you need?<br /><a className="text-link" href={business.phoneHref}>Just ask Mike<ArrowUpRight size={18} aria-hidden="true" /></a></p></div>
          <div className="faq-list">{faqs.map((faq) => <details className="faq-row" key={faq.question}><summary>{faq.question}<ChevronDown size={23} aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div>
        </section>

        <section className="community-section" aria-labelledby="community-heading"><div><h2 id="community-heading">Worked with Mike?</h2><p>Your word means a lot. Share your experience on Google, or catch the latest jobs and updates on Facebook.</p></div><div className="community-links"><a className="text-link" href={business.maps} target="_blank" rel="noopener noreferrer">Find us &amp; leave a Google review<ArrowUpRight size={20} aria-hidden="true" /></a><a className="text-link" href={business.facebook} target="_blank" rel="noopener noreferrer">See the latest on Facebook<ArrowUpRight size={20} aria-hidden="true" /></a></div></section>

        <section id="contact" className="contact-section section-anchor" aria-labelledby="contact-heading">
          <div className="contact-intro"><h2 id="contact-heading">LET’S GET<br />IT SORTED.</h2><p>A quick fix or a fresh start.<br />Tell Mike what you’ve got in mind.</p><a className="contact-number" href={business.phoneHref}>{business.phone}<ArrowUpRight aria-hidden="true" /></a><a className="contact-email" href={`mailto:${business.email}`}>{business.email}</a><div className="contact-points"><span><ShieldCheck size={20} aria-hidden="true" />Licensed plumber</span><span><MapPin size={20} aria-hidden="true" />Brisbane &amp; surrounds</span><span><Check size={20} aria-hidden="true" />Direct contact with Mike</span></div><p className="urgent-note">Need urgent help? Please call to discuss availability.</p></div>
          <QuoteForm key={defaultService} defaultService={defaultService} />
        </section>
      </main>
      <footer className="site-footer"><div className="footer-main"><div><Wordmark footer /><p>Fast. Reliable. Done right.</p></div><div className="footer-contact"><a href={business.phoneHref}><Phone size={16} aria-hidden="true" />{business.phone}</a><a href={`mailto:${business.email}`}><Mail size={16} aria-hidden="true" />{business.email}</a><a href={business.maps} target="_blank" rel="noopener noreferrer"><MapPin size={16} aria-hidden="true" />{business.address}</a></div><div className="footer-navigation"><a href="#services">Services<ArrowUpRight size={15} aria-hidden="true" /></a><a href="#work">Our work<ArrowUpRight size={15} aria-hidden="true" /></a><a href={business.facebook} target="_blank" rel="noopener noreferrer">Facebook<ArrowUpRight size={15} aria-hidden="true" /></a></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} ASAP Plumbing QLD.</p><p>Local people. Good plumbing.</p><Link href="/privacy">Privacy</Link></div></footer>
      <div className="mobile-contact-bar">
        <a href={business.phoneHref}><Phone size={20} aria-hidden="true" />Call Mike</a>
        <a href="#contact">Get a quote<ArrowUpRight size={20} aria-hidden="true" /></a>
      </div>
    </>
  );
}
