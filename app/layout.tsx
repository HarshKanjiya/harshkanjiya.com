import MeshReloader from "@/components/mesh-reloader";
import { Analytics } from "@vercel/analytics/next"
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import { Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import "./globals.css";
import { META_THEME_COLORS, SITE_INFO } from "@/config/site";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: `${SITE_INFO.name}`,
    template: `%s · ${SITE_INFO.name}`,
  },
  description: SITE_INFO.description,
  applicationName: SITE_INFO.name,
  keywords: SITE_INFO.keywords,
  creator: SITE_INFO.name,
  authors: [{ name: SITE_INFO.name, url: SITE_INFO.url }],
  publisher: SITE_INFO.name,
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: SITE_INFO.url,
  },
  openGraph: {
    title: SITE_INFO.name,
    description: SITE_INFO.description,
    url: SITE_INFO.url,
    siteName: SITE_INFO.name,
    type: "website",
    images: [{ url: SITE_INFO.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_INFO.name,
    description: SITE_INFO.description,
    images: [SITE_INFO.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  themeColor: [{ media: "(prefers-color-scheme: light)", color: META_THEME_COLORS.light }, { media: "(prefers-color-scheme: dark)", color: META_THEME_COLORS.dark }],
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  adjustFontFallback: false
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  adjustFontFallback: false
});

const ScrollToTop = dynamic(() =>
  import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop)
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-50`}
        suppressHydrationWarning
      >
        <Head>
          <link
            rel="preconnect"
            href="https://assets.harshkanjiya.com"
            crossOrigin=""
          />
          <link
            rel="dns-prefetch"
            href="https://assets.harshkanjiya.com"
          />
          <Script src="https://assets.harshkanjiya.com/js/meshCanvas.js" strategy="beforeInteractive" />
        </Head>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <Analytics />
            <MeshReloader />
            <SiteHeader />
            <div className="w-full max-w-4xl mx-auto px-2 md:px-12 relative flex flex-col justify-start items-start overflow-x-hidden min-h-min">
              {/* Left vertical line */}
              <div className="w-[1px] h-full absolute left-0 top-0 bg-[rgba(55,50,47,0.12)] dark:bg-[rgba(255,255,255,0.12)] shadow-[1px_0px_0px_white] dark:shadow-[1px_0px_0px_black] z-0 opacity-60"></div>

              {/* Right vertical line */}
              <div className="w-[1px] h-full absolute right-0 top-0 bg-[rgba(55,50,47,0.12)] dark:bg-[rgba(255,255,255,0.12)] shadow-[1px_0px_0px_white] dark:shadow-[1px_0px_0px_black] z-0 opacity-60"></div>

              <main className="w-full h-full">
                {children}
              </main>
            </div>
            <SiteFooter />
            <ScrollToTop />
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
