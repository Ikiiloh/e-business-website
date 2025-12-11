"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useToast } from "@/hooks/use-toast"

export type CartItem = {
    id: number
    name: string
    price: number
    image: string
    quantity: number
}

type CartContextType = {
    items: CartItem[]
    addToCart: (product: Omit<CartItem, "quantity">) => void
    removeFromCart: (id: number) => void
    updateQuantity: (id: number, quantity: number) => void
    clearCart: () => void
    totalItems: number
    totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])
    const { toast } = useToast()

    // Load cart from local storage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem("cart")
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart))
            } catch (error) {
                console.error("Failed to parse cart from local storage", error)
            }
        }
    }, [])

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items))
    }, [items])

    const addToCart = (product: Omit<CartItem, "quantity">) => {
        const existingItem = items.find((item) => item.id === product.id)

        if (existingItem) {
            toast({
                title: "Produk diperbarui",
                description: `Jumlah ${product.name} bertambah di keranjang`,
            })
            setItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            )
        } else {
            toast({
                title: "Produk ditambahkan",
                description: `${product.name} telah ditambahkan ke keranjang`,
            })
            setItems((prevItems) => [...prevItems, { ...product, quantity: 1 }])
        }
    }

    const removeFromCart = (id: number) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id))
    }

    const updateQuantity = (id: number, quantity: number) => {
        if (quantity < 1) return
        setItems((prevItems) =>
            prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
        )
    }

    const clearCart = () => {
        setItems([])
    }

    const totalItems = items.reduce((total, item) => total + item.quantity, 0)
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}
