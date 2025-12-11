import Link from "next/link"
import Image from "next/image"
import { Sparkles, Phone, Mail, MapPin, Clock } from "lucide-react"
import { businessInfo, navLinks } from "@/lib/data"

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-white rounded-full p-1">
                <Image
                  src="/logo_ijum.svg"
                  alt="Ijum Accessories Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="font-serif text-xl font-semibold">{businessInfo.name}</span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">{businessInfo.tagline}</p>
            <p className="text-xs text-primary-foreground/50">NIB: {businessInfo.nib}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Menu</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.slice(0, 7).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* More Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Lainnya</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.slice(7).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-gold shrink-0" />
                <span className="text-sm text-primary-foreground/70">{businessInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-sm text-primary-foreground/70">{businessInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-sm text-primary-foreground/70">{businessInfo.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-1 text-gold shrink-0" />
                <div className="flex flex-col text-sm text-primary-foreground/70 gap-0.5">
                  {businessInfo.operationalHours.split(',').map((line, i) => (
                    <span key={i}>{line.trim()}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
