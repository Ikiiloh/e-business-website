import Image from "next/image"
import Link from "next/link"
import { MessageCircle, MapPin, ShoppingBag, Facebook, Music2, Phone, Mail, Instagram, Youtube } from "lucide-react"
import "./linktree.css"
import { businessInfo } from "@/lib/data"

const links = [
  {
    title: "WhatsApp",
    description: "Chat langsung dengan kami",
    href: `https://wa.me/${businessInfo.whatsapp}`,
    icon: MessageCircle,
    color: "bg-green-500/10 text-green-600 hover:bg-green-500/20",
  },
  {
    title: "TikTok",
    description: businessInfo.socialMedia.tiktokUsername,
    href: businessInfo.socialMedia.tiktok,
    icon: Music2,
    color: "bg-pink-500/10 text-pink-600 hover:bg-pink-500/20",
  },
  {
    title: "Facebook",
    description: "Follow halaman kami",
    href: businessInfo.socialMedia.facebook,
    icon: Facebook,
    color: "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20",
  },
  {
    title: "Shopee",
    description: "Belanja di Shopee",
    href: businessInfo.socialMedia.shopee,
    icon: ShoppingBag,
    color: "bg-orange-500/10 text-orange-600 hover:bg-orange-500/20",
  },
  {
    title: "Lokasi Toko",
    description: "Lihat di Google Maps",
    href: "/location",
    icon: MapPin,
    color: "bg-red-500/10 text-red-600 hover:bg-red-500/20",
  },
  {
    title: "Instagram",
    description: "Follow us on Instagram",
    href: "https://www.instagram.com/ijumaccesories?igsh=Ymd0aWp3eWducThz",
    icon: Instagram,
    color: "bg-pink-500/10 text-pink-600 hover:bg-pink-500/20",
  },
  {
    title: "YouTube Shorts",
    description: "Watch our Shorts on YouTube",
    href: "https://youtube.com/shorts/LCWtEu0_sks?feature=share",
    icon: Youtube,
    color: "bg-red-500/10 text-red-600 hover:bg-red-500/20",
  },
];

export default function LinktreePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 py-16 max-w-md">
        {/* Profile Header */}
        <div className="text-center mb-10">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden p-2">
            <Image
              src="/logo_ijum.svg"
              alt="Ijum Accessories Logo"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="font-serif text-2xl font-bold mb-2">{businessInfo.name}</h1>
          <p className="text-sm text-muted-foreground mb-1">{businessInfo.socialMedia.tiktokUsername}</p>
          <p className="text-xs text-muted-foreground">Studio Accessories Terbaik di Kota Padang</p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-4 p-4 rounded-xl border bg-card hover:shadow-md transition-all duration-300 ${link.color}`}
            >
              <div className="p-3 rounded-full bg-background">
                <link.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{link.title}</h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-10 p-6 rounded-xl bg-card border">
          <h3 className="font-medium mb-4 text-center">Informasi Kontak</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" />
              <span className="text-muted-foreground">{businessInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold" />
              <span className="text-muted-foreground">{businessInfo.email}</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-gold mt-0.5" />
              <span className="text-muted-foreground">{businessInfo.address}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} {businessInfo.name}
        </p>
      </div>
    </div>
  )
}
