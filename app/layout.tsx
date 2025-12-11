import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from "@/context/cart-context"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Ijum Accessories - Studio Accessories Terbaik di Kota Padang",
  description:
    "Mulailah perjalanan gaya anda dengan accessories-accessories dari Studio Accessories Terbaik di Kota Padang. Kunjungi kami hari ini!",
  generator: "v0.app",
  keywords: ["aksesoris", "padang", "kacamata", "gelang", "kalung", "cincin", "fashion"],
}

export const viewport: Viewport = {
  themeColor: "#18181b",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}
