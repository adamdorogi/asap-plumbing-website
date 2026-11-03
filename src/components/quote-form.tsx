"use client";

import { ArrowUpRight, Check, Copy, Mail, Pencil } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import { business, services } from "@/lib/business";

type EnquiryDraft = { body: string; href: string };

export function QuoteForm({ defaultService }: { defaultService: string }) {
  const [draft, setDraft] = useState<EnquiryDraft | null>(null);
  const [phoneError, setPhoneError] = useState("");
  const [copyMessage, setCopyMessage] = useState("");
  const nameInput = useRef<HTMLInputElement>(null);
  const phoneInput = useRef<HTMLInputElement>(null);
  const draftPanel = useRef<HTMLDivElement>(null);

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const value = (name: string) => String(fields.get(name) ?? "").trim();
    const phone = value("phone");
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 8 || digits.length > 15) {
      setPhoneError("Enter a phone number with 8–15 digits so Mike can reach you.");
      phoneInput.current?.focus();
      return;
    }
    setPhoneError("");
    const subject = `Plumbing enquiry: ${value("service")} — ${value("suburb")}`;
    const body = [
      "Hi Mike,",
      "",
      `I'd like to enquire about ${value("service").toLowerCase()}.`,
      "",
      `Name: ${value("name")}`,
      `Phone: ${phone}`,
      value("email") ? `Email: ${value("email")}` : "",
      `Suburb: ${value("suburb")}`,
      "",
      "About the job:",
      value("message"),
      "",
      "Thanks!",
      value("name"),
    ].filter((line) => line !== null).join("\n");
    setDraft({ body, href: `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}` });
    setCopyMessage("");
    requestAnimationFrame(() => draftPanel.current?.focus());
  }

  async function copyEnquiry() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.body);
      setCopyMessage("Enquiry copied. Paste it into an email to asapplumbingqld@gmail.com.");
    } catch {
      setCopyMessage("Select the enquiry text below and copy it into your email.");
    }
  }

  return (
    <div className="enquiry-content">
      <form className="quote-form" onSubmit={prepareEnquiry} hidden={draft !== null}>
        <div className="field-row">
          <div className="form-field">
            <label htmlFor="enquiry-name">Your name <span aria-hidden="true">*</span></label>
            <input ref={nameInput} id="enquiry-name" name="name" autoComplete="name" placeholder="Full name" required minLength={2} maxLength={80} />
          </div>
          <div className="form-field">
            <label htmlFor="enquiry-phone">Phone number <span aria-hidden="true">*</span></label>
            <input ref={phoneInput} id="enquiry-phone" name="phone" type="tel" autoComplete="tel" placeholder="04xx xxx xxx" required maxLength={30} aria-invalid={phoneError ? true : undefined} aria-describedby={phoneError ? "phone-error" : undefined} onInput={() => { if (phoneError) setPhoneError(""); }} />
            {phoneError ? <p className="field-error" id="phone-error" role="alert">{phoneError}</p> : null}
          </div>
        </div>
        <div className="field-row">
          <div className="form-field">
            <label htmlFor="enquiry-email">Email <span className="optional">(optional)</span></label>
            <input id="enquiry-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={150} />
          </div>
          <div className="form-field">
            <label htmlFor="enquiry-suburb">Your suburb <span aria-hidden="true">*</span></label>
            <input id="enquiry-suburb" name="suburb" autoComplete="address-level2" placeholder="e.g. Coorparoo" required maxLength={100} />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="enquiry-service">What can we help with? <span aria-hidden="true">*</span></label>
          <select id="enquiry-service" name="service" defaultValue={defaultService} required>
            {services.map((service) => <option key={service.name} value={service.name}>{service.name}</option>)}
            <option value="Something else">Something else / not sure</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="enquiry-message">A little about the job <span aria-hidden="true">*</span></label>
          <textarea id="enquiry-message" name="message" rows={4} placeholder="What's happening, and when would you like a hand?" required minLength={10} maxLength={2000} />
        </div>
        <button className="button button-dark enquiry-submit" type="submit">Prepare email enquiry<ArrowUpRight aria-hidden="true" /></button>
        <p className="form-note">We’ll prepare an email for you to review and send. Fields marked * are required. Your details stay in your browser until you send the email.</p>
        <noscript><p>Please email <a href={`mailto:${business.email}`}>{business.email}</a> or call <a href={business.phoneHref}>{business.phone}</a> to enquire.</p></noscript>
      </form>
      {draft ? (
        <div className="enquiry-draft" ref={draftPanel} tabIndex={-1}>
          <Check className="draft-check" size={38} aria-hidden="true" />
          <h3>Your enquiry is ready.</h3>
          <p>Open it in your email app, review the details and hit send. It hasn’t been sent yet.</p>
          <a className="button button-dark" href={draft.href}><Mail aria-hidden="true" />Open email app<ArrowUpRight aria-hidden="true" /></a>
          <div className="draft-tools">
            <button type="button" onClick={copyEnquiry}><Copy size={17} aria-hidden="true" />Copy enquiry</button>
            <button type="button" onClick={() => { setDraft(null); requestAnimationFrame(() => nameInput.current?.focus()); }}><Pencil size={17} aria-hidden="true" />Edit details</button>
          </div>
          <p className="copy-status" role="status">{copyMessage}</p>
          <details className="draft-preview"><summary>View your enquiry</summary><pre>{draft.body}</pre></details>
          <p className="form-note">Prefer to send it yourself? Email <a href={`mailto:${business.email}`}>{business.email}</a>.</p>
        </div>
      ) : null}
    </div>
  );
}
