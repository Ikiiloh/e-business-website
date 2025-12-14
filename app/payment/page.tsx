import Link from "next/link"
import Image from "next/image"
import { Banknote, QrCode, Building2, Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { businessInfo } from "@/lib/data"

export default function PaymentPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Metode Pembayaran</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pilih metode pembayaran yang paling nyaman untuk Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Cash */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-green-500/10 flex items-center justify-center">
                <Banknote className="h-8 w-8 text-green-500" />
              </div>
              <CardTitle>Bayar Tunai (Cash)</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">Pembayaran langsung di toko offline kami</p>
              <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-900">
                <p className="text-sm text-green-800 dark:text-green-200 font-medium">✓ Tersedia</p>
              </div>
              <div className="mt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/location">
                    <MapPin className="mr-2 h-4 w-4" />
                    Lihat Alamat Toko
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Bank Transfer */}
          <Card className="hover:shadow-lg transition-shadow border-gold/50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gold/10 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-gold" />
              </div>
              <CardTitle>Transfer Bank</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Bank</p>
                  <p className="font-semibold">{businessInfo.bankInfo.bank}</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">No. Rekening</p>
                  <p className="font-semibold font-mono">{businessInfo.bankInfo.accountNumber}</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Atas Nama</p>
                  <p className="font-semibold">{businessInfo.bankInfo.accountName}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* E-Wallet & QRIS */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-blue-500/10 flex items-center justify-center">
                <QrCode className="h-8 w-8 text-blue-500" />
              </div>
              <CardTitle>E-Wallet & QRIS</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">Pembayaran digital dengan dompet elektronik</p>


              <Image src="/qris.jpg" alt="QRIS" width={200} height={200} className="mx-auto my-4" />

            </CardContent>
          </Card>
        </div>

        {/* Note */}
        <div className="mt-12 max-w-2xl mx-auto">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Catatan Penting:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-primary-foreground/80">
                <li>Konfirmasi pembayaran transfer melalui WhatsApp</li>
                <li>Sertakan bukti transfer saat konfirmasi</li>
                <li>Pesanan diproses setelah pembayaran diterima</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
