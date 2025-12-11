import { MapPin, Clock, Phone, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { businessInfo } from "@/lib/data"

export default function LocationPage() {
  const today = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Lokasi Toko</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kunjungi toko offline kami untuk melihat langsung koleksi aksesoris terlengkap
          </p>
        </div>

        {/* Map */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448.67815597267077!2d100.3538952!3d-0.8251053!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4c7301462de09%3A0x30ed0d40e8e9c6bc!2sIjum%20Accessoris!5e1!3m2!1sid!2sid!4v1765450684431!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Store Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-full shrink-0">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Alamat</h3>
                  <p className="text-sm text-muted-foreground">{businessInfo.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-full shrink-0">
                  <Clock className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Jam Buka</h3>
                  <p className="text-sm text-muted-foreground">{businessInfo.operationalHours}</p>
                  <p className="text-xs text-muted-foreground">Setiap Hari</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-full shrink-0">
                  <Phone className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telepon</h3>
                  <p className="text-sm text-muted-foreground">{businessInfo.phone}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-full shrink-0">
                  <Calendar className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Tanggal Disahkan</h3>
                  <p className="text-sm text-muted-foreground">{today}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Store Name Card */}
        <div className="mt-8 max-w-md mx-auto">
          <Card className="bg-primary text-primary-foreground text-center">
            <CardContent className="p-6">
              <h2 className="font-serif text-2xl font-bold mb-2">{businessInfo.name}</h2>
              <p className="text-primary-foreground/70 text-sm">Studio Accessories Terbaik di Kota Padang</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
