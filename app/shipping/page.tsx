import Image from "next/image"
import Link from "next/link"
import { Truck, ShoppingBag, ExternalLink, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { businessInfo } from "@/lib/data"

const couriers = [
  { name: "JNE Express", logo: "/placeholder.svg?height=60&width=120" },
  { name: "J&T Express", logo: "/placeholder.svg?height=60&width=120" },
]

const ecommerce = [
  {
    name: "Shopee",
    link: businessInfo.socialMedia.shopee,
    logo: "/placeholder.svg?height=80&width=80",
    color: "bg-orange-500/10 border-orange-500/20",
    available: true,
  },
  {
    name: "Tokopedia",
    link: "#",
    logo: "/placeholder.svg?height=80&width=80",
    color: "bg-green-500/10 border-green-500/20",
    available: false,
  },
  {
    name: "Lazada",
    link: "#",
    logo: "/placeholder.svg?height=80&width=80",
    color: "bg-blue-500/10 border-blue-500/20",
    available: false,
  },
]

export default function ShippingPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Pengiriman</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pilihan metode pengiriman untuk kemudahan belanja Anda
          </p>
        </div>

        {/* Shipping Options */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* COD */}
          <Card className="hover:shadow-lg transition-shadow border-gold/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-3 bg-gold/10 rounded-full">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                COD (Bayar di Tempat)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Bayar langsung saat barang sampai di lokasi Anda. Tersedia untuk area Kota Padang dan sekitarnya.
              </p>
              <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                <p className="text-sm text-green-800 dark:text-green-200 font-medium">✓ Tersedia</p>
              </div>
            </CardContent>
          </Card>

          {/* Courier */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/10 rounded-full">
                  <Truck className="h-6 w-6 text-blue-500" />
                </div>
                Ekspedisi / Kurir
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Pengiriman ke seluruh Indonesia melalui jasa ekspedisi terpercaya.
              </p>
              <div className="flex items-center gap-4">
                {couriers.map((courier, index) => (
                  <div key={index} className="flex items-center justify-center p-2 bg-muted rounded-lg">
                    <Image
                      src={courier.logo || "/placeholder.svg"}
                      alt={courier.name}
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* E-Commerce */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
            <ShoppingBag className="h-5 w-5 text-gold" />
            Belanja di E-Commerce
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ecommerce.map((platform, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${platform.color}`}>
                <CardContent className="p-6 text-center">
                  <div className="h-20 flex items-center justify-center mb-4">
                    <Image
                      src={platform.logo || "/placeholder.svg"}
                      alt={platform.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-semibold mb-3">{platform.name}</h3>
                  {platform.available ? (
                    <Button asChild className="w-full" size="sm">
                      <Link href={platform.link} target="_blank" rel="noopener noreferrer">
                        Kunjungi Toko
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button disabled className="w-full bg-transparent" size="sm" variant="outline">
                      Segera Hadir
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Shopee Screenshot Mockup */}
        <div className="mt-12 max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-center">Preview Toko Shopee</h3>
          <Card className="overflow-hidden">
            <div className="relative bg-muted">
              <Image
                src="/online-store.jpg"
                alt="Shopee Store Preview"
                width={340}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
