"use client"

import Image from "next/image"
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/context/cart-context"
import { businessInfo, formatPrice } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export function CartSheet() {
    const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart()

    const handleCheckout = () => {
        const message = `Halo Admin *${businessInfo.name}*, saya ingin memesan:

${items
                .map(
                    (item, index) =>
                        `${index + 1}. ${item.name} (${item.quantity}x) - ${formatPrice(
                            item.price * item.quantity
                        )}`
                )
                .join("\n")}

*Total: ${formatPrice(totalPrice)}*

Mohon informasinya untuk pembayaran dan pengiriman. Terima kasih!`

        const encodedMessage = encodeURIComponent(message)
        const phoneNumber = businessInfo.whatsapp.replace(/\D/g, "")
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`

        window.open(whatsappUrl, "_blank")
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {totalItems > 0 && (
                        <Badge
                            variant="destructive"
                            className="absolute -right-1 -top-1 h-5 w-5 items-center justify-center rounded-full p-0 text-[10px]"
                        >
                            {totalItems}
                        </Badge>
                    )}
                    <span className="sr-only">Keranjang Belanja</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col sm:max-w-md">
                <SheetHeader>
                    <SheetTitle>Keranjang Belanja ({totalItems})</SheetTitle>
                </SheetHeader>
                {items.length > 0 ? (
                    <>
                        <ScrollArea className="flex-1 pr-4">
                            <div className="flex flex-col gap-4 py-4">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="relative h-20 w-20 overflow-hidden rounded-md border bg-muted">
                                            <Image
                                                src={item.image || "/placeholder.svg"}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between">
                                            <div className="flex justify-between gap-2">
                                                <h4 className="font-medium line-clamp-2 leading-tight">
                                                    {item.name}
                                                </h4>
                                                <p className="font-semibold text-primary">
                                                    {formatPrice(item.price)}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between gap-2">
                                                <div className="flex items-center gap-1 rounded-md border">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-7 w-7 rounded-none"
                                                        onClick={() =>
                                                            updateQuantity(item.id, item.quantity - 1)
                                                        }
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </Button>
                                                    <span className="w-8 text-center text-sm font-medium">
                                                        {item.quantity}
                                                    </span>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-7 w-7 rounded-none"
                                                        onClick={() =>
                                                            updateQuantity(item.id, item.quantity + 1)
                                                        }
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="space-y-4 pt-4">
                            <Separator />
                            <div className="flex items-center justify-between font-semibold">
                                <span>Total</span>
                                <span className="text-lg">{formatPrice(totalPrice)}</span>
                            </div>
                            <SheetFooter>
                                <Button className="w-full" onClick={handleCheckout}>
                                    Pesan via WhatsApp
                                </Button>
                            </SheetFooter>
                        </div>
                    </>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                            <ShoppingCart className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <p className="text-lg font-medium text-muted-foreground">
                            Keranjang anda masih kosong
                        </p>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}
