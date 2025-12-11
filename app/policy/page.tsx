import { FileText, Package, Video, Phone, AlertCircle, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { businessInfo } from "@/lib/data"

const policies = [
  {
    icon: Package,
    title: "Pengembalian Barang",
    description:
      "Barang yang sudah dibeli tidak dapat ditukar atau dikembalikan, kecuali terdapat cacat produksi yang terlihat saat diterima.",
  },
  {
    icon: AlertCircle,
    title: "Waktu Pengiriman",
    description:
      "Pengiriman dilakukan setiap hari pada pukul 17:00 WIB. Pesanan setelah jam tersebut akan dikirim keesokan harinya.",
  },
  {
    icon: Video,
    title: "Komplain",
    description:
      "Setiap komplain wajib menyertakan video unboxing sebagai bukti. Komplain tanpa video tidak dapat diproses.",
  },
  {
    icon: Phone,
    title: "Pengaduan",
    description: `Untuk pengaduan, silakan hubungi Admin ${businessInfo.owner} melalui WhatsApp di nomor ${businessInfo.phone}.`,
  },
]

export default function PolicyPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Kebijakan Toko</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aturan dan kebijakan yang berlaku di Ijum Accessories
          </p>
        </div>

        {/* Policies */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {policies.map((policy, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-gold/10 rounded-lg">
                    <policy.icon className="h-5 w-5 text-gold" />
                  </div>
                  {policy.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{policy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Ringkasan Kebijakan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Barang tidak dapat ditukar (kecuali cacat saat diterima)",
                "Pengiriman setiap jam 17:00 WIB",
                "Komplain wajib sertakan video unboxing",
                "Hubungi Admin Jumadil untuk pengaduan",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
