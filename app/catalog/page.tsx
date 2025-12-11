import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/data"

export default function CatalogPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Koleksi Ijum Accessories</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan berbagai aksesoris trendy dengan harga terjangkau. Klik "Pesan" untuk langsung order via WhatsApp!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Info Banner */}
        <div className="mt-12 p-6 bg-primary text-primary-foreground rounded-2xl text-center">
          <h3 className="font-semibold text-lg mb-2">Cara Pemesanan</h3>
          <p className="text-primary-foreground/80">
            Klik tombol "Pesan" pada produk yang diinginkan → Anda akan diarahkan ke WhatsApp → Konfirmasi pesanan →
            Selesai!
          </p>
        </div>
      </div>
    </div>
  )
}
