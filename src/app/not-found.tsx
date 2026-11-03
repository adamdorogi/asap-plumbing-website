import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { business } from "@/lib/business";

export default function NotFound() {
  return <main id="main" className="not-found"><p>404</p><h1>A wrong turn.<br />Let’s get you sorted.</h1><p>That page isn’t here. Head back home, or give Mike a call.</p><div><Link className="button" href="/">Back to home<ArrowUpRight aria-hidden="true" /></Link><a className="text-link" href={business.phoneHref}>Call {business.phone}</a></div></main>;
}
