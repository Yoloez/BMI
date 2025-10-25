"use client"

import { useState, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface BMRResult {
  bmr: number
  tdee: {
    sedentary: number
    light: number
    moderate: number
    active: number
    veryActive: number
  }
}

export function BMRCalculator() {
  const [age, setAge] = useState<string>("")
  const [weight, setWeight] = useState<string>("")
  const [height, setHeight] = useState<string>("")
  const [gender, setGender] = useState<"male" | "female">("male")

  const result: BMRResult | null = useMemo(() => {
    const a = Number.parseFloat(age)
    const w = Number.parseFloat(weight)
    const h = Number.parseFloat(height)

    if (!a || !w || !h || a <= 0 || w <= 0 || h <= 0) return null

    // Mifflin-St Jeor Formula
    let bmr: number
    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161
    }

    // Activity multipliers
    const tdee = {
      sedentary: Math.round(bmr * 1.2),
      light: Math.round(bmr * 1.375),
      moderate: Math.round(bmr * 1.55),
      active: Math.round(bmr * 1.725),
      veryActive: Math.round(bmr * 1.9),
    }

    return {
      bmr: Math.round(bmr),
      tdee,
    }
  }, [age, weight, height, gender])

  return (
    <div className="w-full">
      <Card className="p-8 shadow-lg border-0">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">BMR Calculator</h1>
          <p className="text-muted-foreground text-sm">
            Hitung kebutuhan kalori harian Anda berdasarkan metabolisme basal
          </p>
        </div>

        {/* Input Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Gender Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Jenis Kelamin</Label>
            <div className="flex gap-3">
              <button
                onClick={() => setGender("male")}
                className={`flex-1 py-3 rounded-lg font-medium transition-all duration-300 ${
                  gender === "male"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Laki-laki
              </button>
              <button
                onClick={() => setGender("female")}
                className={`flex-1 py-3 rounded-lg font-medium transition-all duration-300 ${
                  gender === "female"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Perempuan
              </button>
            </div>
          </div>

          {/* Age Input */}
          <div className="space-y-2">
            <Label htmlFor="age" className="text-sm font-medium">
              Usia (tahun)
            </Label>
            <Input
              id="age"
              type="number"
              placeholder="Masukkan usia Anda"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="h-12 text-base border-2 border-border focus:border-primary transition-colors"
            />
          </div>

          {/* Weight Input */}
          <div className="space-y-2">
            <Label htmlFor="weight" className="text-sm font-medium">
              Berat Badan (kg)
            </Label>
            <Input
              id="weight"
              type="number"
              placeholder="Masukkan berat badan Anda"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="h-12 text-base border-2 border-border focus:border-primary transition-colors"
            />
          </div>

          {/* Height Input */}
          <div className="space-y-2">
            <Label htmlFor="height" className="text-sm font-medium">
              Tinggi Badan (cm)
            </Label>
            <Input
              id="height"
              type="number"
              placeholder="Masukkan tinggi badan Anda"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="h-12 text-base border-2 border-border focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Result Section */}
        {result ? (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* BMR Result */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
              <p className="text-muted-foreground text-sm mb-2">Basal Metabolic Rate (BMR)</p>
              <p className="text-5xl font-bold text-foreground">{result.bmr}</p>
              <p className="text-muted-foreground text-xs mt-2">kalori per hari (saat istirahat)</p>
            </div>

            {/* TDEE Results */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Total Daily Energy Expenditure (TDEE)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-muted rounded-lg p-4 border border-border/50">
                  <p className="text-xs text-muted-foreground mb-1">Sedentary (Jarang olahraga)</p>
                  <p className="text-2xl font-bold text-foreground">{result.tdee.sedentary}</p>
                  <p className="text-xs text-muted-foreground mt-1">kalori/hari</p>
                </div>

                <div className="bg-muted rounded-lg p-4 border border-border/50">
                  <p className="text-xs text-muted-foreground mb-1">Light (1-3x seminggu)</p>
                  <p className="text-2xl font-bold text-foreground">{result.tdee.light}</p>
                  <p className="text-xs text-muted-foreground mt-1">kalori/hari</p>
                </div>

                <div className="bg-muted rounded-lg p-4 border border-border/50">
                  <p className="text-xs text-muted-foreground mb-1">Moderate (3-5x seminggu)</p>
                  <p className="text-2xl font-bold text-foreground">{result.tdee.moderate}</p>
                  <p className="text-xs text-muted-foreground mt-1">kalori/hari</p>
                </div>

                <div className="bg-muted rounded-lg p-4 border border-border/50">
                  <p className="text-xs text-muted-foreground mb-1">Active (6-7x seminggu)</p>
                  <p className="text-2xl font-bold text-foreground">{result.tdee.active}</p>
                  <p className="text-xs text-muted-foreground mt-1">kalori/hari</p>
                </div>

                <div className="bg-muted rounded-lg p-4 border border-border/50 md:col-span-2">
                  <p className="text-xs text-muted-foreground mb-1">Very Active (2x sehari)</p>
                  <p className="text-2xl font-bold text-foreground">{result.tdee.veryActive}</p>
                  <p className="text-xs text-muted-foreground mt-1">kalori/hari</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="bg-muted rounded-lg p-4 border border-border/50">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Catatan:</span> Gunakan nilai TDEE sesuai dengan tingkat
                aktivitas Anda untuk mempertahankan berat badan. Kurangi 300-500 kalori untuk menurunkan berat badan,
                atau tambahkan untuk menaikkan berat badan.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-muted rounded-lg p-6 text-center text-muted-foreground">
            <p className="text-sm">Masukkan data Anda untuk melihat hasil perhitungan BMR dan TDEE</p>
          </div>
        )}
      </Card>

      {/* Footer */}
      <p className="text-center text-xs text-muted-foreground mt-6">
        Hasil ini hanya untuk referensi. Konsultasikan dengan ahli gizi atau dokter untuk rekomendasi yang lebih akurat.
      </p>
    </div>
  )
}
