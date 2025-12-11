import { Clock } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
            <Clock className="h-12 w-12 text-gold animate-pulse" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Dokumentasi</h1>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Segera Hadir</h2>
          <p className="text-muted-foreground">
            Halaman dokumentasi sedang dalam tahap pengembangan. Nantikan update foto dan video kegiatan kami segera!
          </p>
        </div>
      </div>
    </div>
  )
}
