import Image from "next/image"
import { User, Award, Package, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { businessInfo } from "@/lib/data"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Pengelola & Pemilik</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Kenalan dengan tim di balik Ijum Accessories</p>
        </div>

        {/* Owner Profile */}
        <div className="max-w-3xl mx-auto mb-16">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="aspect-square md:aspect-auto relative bg-muted">
                <Image
                  src="/profile-owner.png"
                  alt={businessInfo.owner}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 rounded-full text-sm font-medium text-gold mb-4 w-fit">
                  <Award className="h-4 w-4" />
                  Owner & Founder
                </div>
                <h2 className="font-serif text-3xl font-bold mb-4">{businessInfo.owner}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founder Ijum Accessories yang berdedikasi menyediakan aksesoris trendy dengan harga terjangkau bagi
                  warga Padang. Dengan passion di bidang fashion dan aksesoris, kami berkomitmen memberikan produk
                  berkualitas dan pelayanan terbaik.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4 text-red-500" />
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Team */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-center">Tim Kami</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                    <Image
                      src="/profile-owner.png"
                      alt="Admin"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{businessInfo.owner}</h3>
                    <p className="text-sm text-muted-foreground">Admin & Customer Service</p>
                    <div className="flex items-center gap-1 mt-1">
                      <User className="h-3 w-3 text-gold" />
                      <span className="text-xs text-gold">Online</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
                    <Image
                      src="/profile-owner.png"
                      alt="Tim Packing"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{businessInfo.owner}</h3>
                    <p className="text-sm text-muted-foreground">Tim Packing & Pengiriman</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Package className="h-3 w-3 text-gold" />
                      <span className="text-xs text-gold">Siap Kirim</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision */}
        <div className="mt-12 max-w-2xl mx-auto">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Visi Kami</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Menjadi studio aksesoris terdepan di Kota Padang yang menyediakan produk fashion berkualitas dengan
                harga terjangkau, serta memberikan pengalaman berbelanja yang menyenangkan bagi setiap pelanggan.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
