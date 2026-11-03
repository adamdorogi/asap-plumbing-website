import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { business } from "@/lib/business";
import "./globals.css";

const displayFont = localFont({
  src: [
    { path: "../../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-700-normal.woff2", weight: "700" },
    { path: "../../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-900-normal.woff2", weight: "900" },
  ],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = localFont({
  src: [
    { path: "../../node_modules/@fontsource/manrope/files/manrope-latin-400-normal.woff2", weight: "400" },
    { path: "../../node_modules/@fontsource/manrope/files/manrope-latin-500-normal.woff2", weight: "500" },
    { path: "../../node_modules/@fontsource/manrope/files/manrope-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.site),
  title: "ASAP Plumbing QLD | Your Local Brisbane Plumber",
  description: "From the dripping tap to the bathroom reno. Call Mike at ASAP Plumbing QLD for general plumbing, renovations and blocked drains in Brisbane. 0434 151 105.",
  applicationName: business.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: business.site,
    siteName: business.name,
    title: "Your local. On the job. | ASAP Plumbing QLD",
    description: "Straightforward plumbing for Brisbane homes, with Mike on the tools. Call 0434 151 105.",
  },
  twitter: { card: "summary_large_image", title: "ASAP Plumbing QLD | Your Local Brisbane Plumber" },
};

export const viewport: Viewport = { themeColor: "#e65012", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
