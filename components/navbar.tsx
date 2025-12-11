"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { navLinks } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CartSheet } from "@/components/cart-sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo_ijum.svg" alt="Ijum Accessories Logo" width={40} height={40} className="h-10 w-10" />
          <span className="font-serif text-xl font-semibold tracking-tight">Ijum Accessories</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, 8).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="relative group">
            <button className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Lainnya
            </button>
            <div className="absolute right-0 top-full mt-1 w-48 rounded-lg border bg-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {navLinks.slice(8).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <CartSheet />

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                  <Image src="/logo_ijum.svg" alt="Ijum Accessories Logo" width={40} height={40} className="h-10 w-10" />
                  <span className="font-serif text-xl font-semibold">Ijum Accessories</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border/40"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
