import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Viewport } from "next";
import { getSEOTags } from "@/lib/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";
import Head from "next/head";
const font = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      <head>

      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1660907750605458"
     crossOrigin="anonymous"></Script>
      </head>
      <body>
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1660907750605458"
     crossOrigin="anonymous"></Script>

  <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1660907750605458"
      crossOrigin="anonymous"></Script>
  <ins className="adsbygoogle"
      style={{ 
        display: 'block', 
        // You can adjust width and height if needed
        width: '100%' 
      }}
      data-ad-client="ca-pub-1660907750605458"
      data-ad-slot="4225636729"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
<Script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</Script>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
