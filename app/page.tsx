import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Shield, Truck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { businessInfo, products } from "@/lib/data"

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-sm font-medium text-gold">
                <Shield className="h-4 w-4" />
                NIB: {businessInfo.nib}
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                <span className="text-gold">Ijum</span> Accessories
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg text-pretty">
                {businessInfo.tagline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/catalog">
                    Belanja Sekarang
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/location">
                    <MapPin className="mr-2 h-4 w-4" />
                    Kunjungi Toko
                  </Link>
                </Button>
              </div>

              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold">Buka:</span>
                  {businessInfo.operationalHours.split(',').map((line, i) => (
                    <span key={i}>{line.trim()}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl rotate-6" />
                <div className="absolute inset-0 bg-card rounded-3xl shadow-2xl overflow-hidden">
                  <Image
                    src="/toko.png"
                    alt="Ijum Accessories Collection"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-y bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Terpercaya", desc: "Terdaftar NIB resmi" },
              { icon: Truck, title: "Pengiriman", desc: "COD & Ekspedisi" },
              { icon: Clock, title: "Jam Buka", desc: "09:00 - 20:00" },
              { icon: MapPin, title: "Lokasi", desc: "Kota Padang" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-gold/10 rounded-full">
                  <item.icon className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">Produk Unggulan</h2>
              <p className="text-muted-foreground">Koleksi aksesoris terbaik pilihan kami</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/catalog">
                Lihat Semua
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Kunjungi Toko Kami</h2>
              <p className="text-primary-foreground/70 leading-relaxed">
                Temukan koleksi lengkap aksesoris kami di toko offline. Kami siap membantu Anda menemukan aksesoris yang
                sempurna.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold mt-1 shrink-0" />
                  <p className="text-primary-foreground/80">{businessInfo.address}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 mt-0.5 text-gold shrink-0" />
                  <div className="flex flex-col text-primary-foreground/80 gap-0.5">
                    <span>Jam Operasional:</span>
                    {businessInfo.operationalHours.split(',').map((line, i) => (
                      <span key={i}>{line.trim()}</span>
                    ))}
                  </div>
                </div>
              </div>
              <Button asChild variant="secondary" size="lg">
                <Link href="/location">
                  Lihat Peta Lokasi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448.67815597267077!2d100.3538952!3d-0.8251053!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4c7301462de09%3A0x30ed0d40e8e9c6bc!2sIjum%20Accessoris!5e1!3m2!1sid!2sid!4v1765450684431!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
