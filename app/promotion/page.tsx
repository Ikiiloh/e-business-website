import Image from "next/image"
import Link from "next/link"
import { Play, Sparkles, ArrowRight, Percent, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { businessInfo } from "@/lib/data"

export default function PromotionPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Promosi & Pemasaran</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Promo spesial dan penawaran menarik untuk kamu, Bestie!
          </p>
        </div>

        {/* Main Banner */}
        <div className="relative max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden">
          <div className="aspect-[21/9] relative">
            <Image src="/placeholder.svg?height=400&width=900" alt="Promo Banner" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50 flex items-center">
              <div className="p-8 md:p-12 max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full text-sm font-medium text-gold mb-4">
                  <Sparkles className="h-4 w-4" />
                  PROMO SPESIAL
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Diskon Spesial Hari Ini!</h2>
                <p className="text-xl md:text-2xl text-white/90 mb-6">
                  Gelang Kapel Cuma <span className="text-gold font-bold">Rp15.000</span>!
                </p>
                <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-primary">
                  <Link href="/catalog">
                    Belanja Sekarang
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Ad Placeholder */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Video Iklan</h3>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Play className="h-10 w-10 text-primary ml-1" />
                </div>
                <p className="text-muted-foreground">Video Iklan Segera Hadir</p>
              </div>
            </div>
          </div>
        </div>

        {/* Promo Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-br from-gold/10 to-gold/5 border-gold/20">
            <CardContent className="p-6">
              <Percent className="h-10 w-10 text-gold mb-4" />
              <h3 className="text-xl font-semibold mb-2">Diskon Akhir Pekan</h3>
              <p className="text-muted-foreground mb-4">
                Setiap Sabtu-Minggu, dapatkan potongan harga spesial untuk semua produk!
              </p>
              <p className="text-sm text-gold font-medium">*Syarat dan ketentuan berlaku</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 border-pink-500/20">
            <CardContent className="p-6">
              <Gift className="h-10 w-10 text-pink-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Beli 3 Gratis 1</h3>
              <p className="text-muted-foreground mb-4">
                Borong aksesoris favoritmu! Beli 3 item, gratis 1 item dengan harga terendah!
              </p>
              <p className="text-sm text-pink-500 font-medium">*Berlaku untuk produk tertentu</p>
            </CardContent>
          </Card>
        </div>


      </div>
    </div>
  )
}
