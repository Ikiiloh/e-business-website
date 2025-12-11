import Link from "next/link"
import Image from "next/image"
import { Music2, Facebook, Phone, Mail, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { businessInfo, products } from "@/lib/data"

const socialCards = [
  {
    platform: "TikTok",
    username: businessInfo.socialMedia.tiktokUsername,
    link: businessInfo.socialMedia.tiktok,
    icon: Music2,
    color: "bg-gradient-to-br from-pink-500 to-pink-600",
  },
  {
    platform: "Facebook",
    username: "Ijum Accessories",
    link: businessInfo.socialMedia.facebook,
    icon: Facebook,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
]

const feedImages = products.map(product => product.image).slice(0, 9)

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Media Sosial</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ikuti kami di media sosial untuk update produk terbaru, promo menarik, dan inspirasi gaya!
          </p>
        </div>

        {/* Social Media Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
          {socialCards.map((social, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`p-6 ${social.color} text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <social.icon className="h-8 w-8" />
                    <div>
                      <h3 className="font-semibold text-lg">{social.platform}</h3>
                      <p className="text-white/80 text-sm">{social.username}</p>
                    </div>
                  </div>

                </div>
              </div>
              <CardContent className="p-4">
                <Button asChild className="w-full bg-transparent" variant="outline">
                  <Link href={social.link} target="_blank" rel="noopener noreferrer">
                    Kunjungi {social.platform}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feed Mockup */}
        <div className="mb-16">
          <h2 className="font-serif text-2xl font-bold mb-6 text-center">Feed Kami</h2>
          <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-3xl mx-auto">
            {feedImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Feed post ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
                  <ExternalLink className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bio Info */}
        <Card className="max-w-xl mx-auto">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4 text-center">Info di Bio</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold" />
                <span>{businessInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold" />
                <span>{businessInfo.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5" />
                <span>{businessInfo.address}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
