import Link from "next/link"
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { businessInfo } from "@/lib/data"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Media Komunikasi</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hubungi kami melalui berbagai channel komunikasi di bawah ini. Tim kami siap membantu Anda!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-green-500/10 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-green-500" />
              </div>
              <CardTitle>WhatsApp Bisnis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold mb-4">{businessInfo.whatsapp}</p>
              <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
                <Link
                  href={`https://api.whatsapp.com/send?phone=${businessInfo.whatsapp.replace(/\D/g, "")}&text=${encodeURIComponent(`Halo Admin *${businessInfo.name}*, saya dari website ingin bertanya seputar produk.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat via WA
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Mail className="h-8 w-8 text-blue-500" />
              </div>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium mb-4 break-all">{businessInfo.email}</p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href={`mailto:${businessInfo.email}`}>Kirim Email</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gold/10 flex items-center justify-center">
                <Phone className="h-8 w-8 text-gold" />
              </div>
              <CardTitle>Telepon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold mb-4">{businessInfo.phone}</p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href={`tel:${businessInfo.phone}`}>Hubungi Sekarang</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-6 text-center">Informasi Tambahan</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-full">
                  <Clock className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-medium">Jam Operasional</h4>
                  <div className="flex flex-col gap-0.5">
                    {businessInfo.operationalHours.split(',').map((line, i) => (
                      <p key={i} className="text-muted-foreground">{line.trim()}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-full">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-medium">Lokasi Toko</h4>
                  <p className="text-sm text-muted-foreground">{businessInfo.address}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
              <p className="text-sm text-green-800 dark:text-green-200 text-center">
                💬 Respon tercepat melalui <strong>WhatsApp</strong>! Chat kami sekarang untuk layanan terbaik.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
