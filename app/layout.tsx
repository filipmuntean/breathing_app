import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Viewport } from "next";
import { getSEOTags } from "@/lib/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";
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
      </head>
      <body>
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
       
       
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
        
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1660907750605458"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
