import { Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { businessInfo } from "@/lib/data"

export default function PartnershipPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Kerjasama</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Partner dan mitra yang mendukung operasional Ijum Accessories
          </p>
        </div>



        {/* CTA */}
        <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Tertarik Menjadi Partner?</h3>
            <p className="text-primary-foreground/70 mb-6">
              Kami selalu terbuka untuk kerjasama yang saling menguntungkan. Hubungi kami untuk informasi lebih lanjut.
            </p>
            <Button asChild variant="secondary">
              <a href={`mailto:${businessInfo.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Hubungi Kami
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
