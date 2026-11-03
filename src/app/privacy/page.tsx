import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { business } from "@/lib/business";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = { title: "Privacy | ASAP Plumbing QLD", description: "How enquiries work on the ASAP Plumbing QLD website.", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return <><SiteHeader /><main id="main" className="legal-page"><Link className="text-link" href="/"><ArrowLeft size={18} aria-hidden="true" />Back to home</Link><h1>Your privacy.</h1><p>This website gives you a simple way to contact ASAP Plumbing QLD.</p><h2>Your enquiries</h2><p>The enquiry form prepares an email in your browser. The website does not send or store your form details on a server. You choose whether to open the email in your email app and send it to {business.email}. You can also call {business.phone} directly.</p><h2>External services</h2><p>The site is hosted by Vercel, which may process standard technical request information to deliver and secure the website. The embedded Google Map connects to Google when it loads. Links to Google Maps and Facebook take you to those services, where their own privacy policies apply.</p><h2>Cookies and analytics</h2><p>This site does not add advertising cookies, tracking pixels or analytics scripts of its own. Embedded services may use their own technologies.</p><h2>Contact</h2><p>For questions about an enquiry or your information, contact <a href={`mailto:${business.email}`}>{business.email}</a> or call <a href={business.phoneHref}>{business.phone}</a>.</p><p className="legal-updated">Last updated 3 November 2026.</p></main></>;
}
