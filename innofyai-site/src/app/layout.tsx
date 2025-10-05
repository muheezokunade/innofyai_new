import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { SimpleFooter } from "@/components/simple-footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "InnofyAI - Micro AI SaaS for Real Business Growth",
  description: "Tools and services that convert visitors, speed replies, and reveal what works. AI-powered solutions for modern businesses.",
  keywords: ["AI", "SaaS", "automation", "lead generation", "customer experience", "business growth"],
  authors: [{ name: "InnofyAI" }],
  creator: "InnofyAI",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://innofyai.com",
    title: "InnofyAI - Micro AI SaaS for Real Business Growth",
    description: "Tools and services that convert visitors, speed replies, and reveal what works.",
    siteName: "InnofyAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "InnofyAI - Micro AI SaaS for Real Business Growth",
    description: "Tools and services that convert visitors, speed replies, and reveal what works.",
    creator: "@innofyai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          defaultTheme="system"
          storageKey="innofyai-ui-theme"
        >
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <SimpleFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}