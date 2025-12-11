"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, Clock, CheckCircle2, Send, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { businessInfo } from "@/lib/data"

const steps = [
  { icon: MessageCircle, title: "Chat WA", description: "Hubungi admin via WhatsApp" },
  { icon: Send, title: "Kirim Bukti", description: "Sertakan foto/video sebagai bukti" },
  { icon: Clock, title: "Proses", description: "Tunggu respon dalam 1x24 jam" },
  { icon: CheckCircle2, title: "Solusi", description: "Terima solusi terbaik dari kami" },
]

export default function ComplaintPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const phoneNumber = businessInfo.whatsapp.replace(/\D/g, "")
    const message = `Halo Admin, saya ingin mengajukan pengaduan:

Nama: ${formData.name}
No HP: ${formData.phone}

Keluhan:
${formData.message}`

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Layanan Pengaduan Pelanggan</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami siap membantu menyelesaikan keluhan Anda dengan cepat dan profesional
          </p>
        </div>

        {/* Info Card */}
        <Card className="max-w-3xl mx-auto mb-12 bg-gold/5 border-gold/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gold/10 rounded-full">
                <AlertCircle className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Dilayani Langsung oleh Owner</h3>
                <p className="text-muted-foreground">
                  Setiap pengaduan akan ditangani langsung oleh <strong>{businessInfo.owner}</strong> untuk memastikan
                  solusi terbaik bagi Anda.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-xl font-semibold mb-6 text-center">Alur Pengaduan</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary flex items-center justify-center relative">
                  <step.icon className="h-7 w-7 text-primary-foreground" />
                  <span className="absolute -top-1 -right-1 w-6 h-6 bg-gold text-primary text-xs font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-medium mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Complaint Form */}
        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Form Pengaduan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input
                  id="name"
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">No. HP / WhatsApp</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="08xx-xxxx-xxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Pesan / Keluhan</Label>
                <Textarea
                  id="message"
                  placeholder="Jelaskan keluhan Anda secara detail..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                <MessageCircle className="mr-2 h-4 w-4" />
                Kirim via WhatsApp
              </Button>
            </form>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                Atau hubungi langsung: <strong>{businessInfo.phone}</strong>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
