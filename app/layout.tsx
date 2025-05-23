import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ClientLayout } from "@/components/client-layout"
import { ClientAudioProvider } from "@/components/client-audio-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "N.OVA",
  description: "A modern web3 application",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ClientAudioProvider>
            <ClientLayout>
              {children}
            </ClientLayout>
          </ClientAudioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}