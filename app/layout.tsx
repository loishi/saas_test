import "~/styles/globals.css";

import { fontHeading, fontSans, fontUrban } from "~/assets/fonts";
import { Analytics } from "~/components/analytics";
import { ModalProvider } from "~/components/modal-provider";
import { ThemeProvider } from "~/components/providers";
import { TailwindIndicator } from "~/components/tailwind-indicator";
import { Toaster } from "~/components/ui/toaster";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Prisma",
    "PlanetScale",
    "Auth.js",
    "shadcn ui",
    "Resend",
    "React Email",
    "Stripe"
  ],
  authors: [
    {
      name: "loishi",
    },
  ],
  creator: "loishi",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@loishi",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/KUCC_Logo_Apple_180x180.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="ja" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontUrban.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
          <Toaster />
          <ModalProvider />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
