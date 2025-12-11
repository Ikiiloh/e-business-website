export const businessInfo = {
  name: "Ijum Accessories",
  nib: "1012250068621",
  tagline:
    "Mulailah perjalanan gaya anda dengan accessories-accessories dari Studio Accessories Terbaik di Kota Padang. Kunjungi kami hari ini!",
  address: "Jl. Sekayan, Balai Gadang, Kec. Koto Tangah, Kota Padang, Sumatera Barat 25586",
  whatsapp: "+62 823-6446-3264",
  phone: "+62 823-6446-3264",
  email: "jumadilj856@gmail.com",
  owner: "Jumadil",
  operationalHours: "Sen - Jum: 09:00 - 20:00, Sab - Ming & Libur: TUTUP",
  socialMedia: {
    tiktok: "https://www.tiktok.com/@ijum.accessories?is_from_webapp=1&sender_device=pc",
    tiktokUsername: "@ijum.accessories",
    facebook: "https://www.facebook.com/share/1GBVgPAvVr/",
    shopee: "https://id.shp.ee/2qL6L1u",
  },
  bankInfo: {
    bank: "Bank Nagari Syariah",
    accountNumber: "0401.0220.36946-6",
    accountName: "Jumadil",
  },
}

export const products = [
  { id: 1, name: "Kacamata", price: 10000, image: "/trendy-sunglasses-accessories.jpg", category: "eyewear" },
  { id: 2, name: "Gelang Besi", price: 8000, image: "/metal-bracelet-jewelry.jpg", category: "bracelet" },
  { id: 3, name: "Gelang Hitam", price: 3000, image: "/black-bracelet-fashion.jpg", category: "bracelet" },
  { id: 4, name: "Gelang Hitam Premium", price: 5000, image: "/premium-black-bracelet.jpg", category: "bracelet" },
  { id: 5, name: "Gelang Kapel", price: 15000, image: "/couple-bracelet-pair.jpg", category: "bracelet" },
  { id: 6, name: "Kalung Jarum", price: 15000, image: "/needle-pendant-necklace.jpg", category: "necklace" },
  { id: 7, name: "Kalung Biasa", price: 15000, image: "/simple-elegant-necklace.jpg", category: "necklace" },
  { id: 8, name: "Ikat Pinggang", price: 15000, image: "/fashion-belt-accessories.jpg", category: "belt" },
  { id: 9, name: "Cincin", price: 10000, image: "/fashion-ring-jewelry.jpg", category: "ring" },
  { id: 10, name: "Bendo", price: 15000, image: "/headband-hair-accessories.jpg", category: "headwear" },
]

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Linktree", href: "/linktree" },
  { name: "Sosial Media", href: "/social-media" },
  { name: "Kontak", href: "/contact" },
  { name: "Katalog", href: "/catalog" },
  { name: "Dokumentasi", href: "/documentation" },
  { name: "Pembayaran", href: "/payment" },
  { name: "Lokasi", href: "/location" },
  { name: "Konsumen", href: "/customers" },
  { name: "Kerjasama", href: "/partnership" },
  { name: "Promosi", href: "/promotion" },
  { name: "Kebijakan", href: "/policy" },
  { name: "Pengiriman", href: "/shipping" },
  { name: "Tentang Kami", href: "/about" },
  { name: "Pengaduan", href: "/complaint" },
]

export const dummyCustomers = [
  { id: 1, name: "Siti A.", phone: "0812-XXX-XXX", avatar: "/woman-avatar-portrait.jpg" },
  { id: 2, name: "Budi S.", phone: "0813-XXX-XXX", avatar: "/man-avatar-portrait.jpg" },
  { id: 3, name: "Rina P.", phone: "0857-XXX-XXX", avatar: "/young-woman-avatar.png" },
  { id: 4, name: "Andi M.", phone: "0878-XXX-XXX", avatar: "/young-man-avatar.png" },
  { id: 5, name: "Dewi L.", phone: "0856-XXX-XXX", avatar: "/asian-woman-avatar.png" },
]

export const partners = [
  { id: 1, name: "JNE Express Padang", type: "Logistik", logo: "/jne-express-logo-shipping.jpg" },
  { id: 2, name: "Supplier Aksesoris Jakarta", type: "Supplier", logo: "/jewelry-supplier-logo.jpg" },
  { id: 3, name: "J&T Express", type: "Logistik", logo: "/jt-express-logo-shipping.jpg" },
]
