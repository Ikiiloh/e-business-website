import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CustomersPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Testimoni Konsumen</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Apa kata mereka tentang produk dan layanan Ijum Accessories
          </p>
        </div>

        {/* Testimonial Card */}
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center">"Produk luar biasa!"</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Image
              src="/testi1.jpg"
              alt="Testimoni Pelanggan"
              width={400}
              height={400}
              className="object-cover rounded-md mb-4"
            />
            <p className="text-sm text-muted-foreground text-center">- Nama Pelanggan</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
