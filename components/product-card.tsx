"use client"

import Image from "next/image"
import { MessageCircle, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { formatPrice, businessInfo } from "@/lib/data"
import { useCart } from "@/context/cart-context"

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: number
    image: string
    category: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const phoneNumber = businessInfo.whatsapp.replace(/\D/g, "")
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    `Halo, saya tertarik dengan ${product.name} seharga ${formatPrice(product.price)}`
  )}`

  return (
    <Card className="group overflow-hidden border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
      </div>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-medium text-foreground">{product.name}</h3>
          <p className="text-lg font-semibold text-gold">{formatPrice(product.price)}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button
            className="w-full bg-primary hover:bg-primary/90"
            size="sm"
            onClick={() => addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image
            })}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart
          </Button>
          <Button asChild variant="outline" size="sm" className="w-full">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-2" />
              Beli
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
