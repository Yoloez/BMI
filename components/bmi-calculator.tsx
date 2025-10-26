"use client";

import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BMIResult {
  bmi: number;
  category: string;
  categoryColor: string;
}

export function BMICalculator() {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");

  const result: BMIResult | null = useMemo(() => {
    const h = Number.parseFloat(height);
    const w = Number.parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) return null;

    // Convert height from cm to meters
    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters * heightInMeters);

    let category = "";
    let categoryColor = "";

    if (bmi < 18.5) {
      category = "Kurus";
      categoryColor = "text-yellow-900";
    } else if (bmi < 25) {
      category = "Normal";
      categoryColor = "text-green-500";
    } else if (bmi < 30) {
      category = "Gemuk";
      categoryColor = "text-yellow-500";
    } else {
      category = "Obesitas";
      categoryColor = "text-red-500";
    }

    return {
      bmi: Math.round(bmi * 10) / 10,
      category,
      categoryColor,
    };
  }, [height, weight]);

  return (
    <div className="w-full">
      <Card className="p-8 shadow-lg border-0">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">Kalkulator BMI</h1>
          <p className="text-muted-foreground text-sm">Hitung BMI Anda dengan mudah dan cepat</p>
        </div>

        {/* Input Section */}
        <div className="space-y-6 mb-8">
          {/* Height Input */}
          <div className="space-y-2">
            <Label htmlFor="height" className="text-sm font-medium">
              Tinggi Badan (cm)
            </Label>
            <Input id="height" type="number" placeholder="Masukkan tinggi badan Anda" value={height} onChange={(e) => setHeight(e.target.value)} className="h-12 text-base border-2 border-border focus:border-primary transition-colors" />
          </div>

          {/* Weight Input */}
          <div className="space-y-2">
            <Label htmlFor="weight" className="text-sm font-medium">
              Berat Badan (kg)
            </Label>
            <Input id="weight" type="number" placeholder="Masukkan berat badan Anda" value={weight} onChange={(e) => setWeight(e.target.value)} className="h-12 text-base border-2 border-border focus:border-primary transition-colors" />
          </div>
        </div>

        {/* Result Section */}
        {result ? (
          <div className="bg-muted rounded-lg p-6 text-center space-y-4 animate-in fade-in duration-300">
            <div>
              <p className="text-muted-foreground text-sm mb-2">Indeks Massa Tubuh Anda</p>
              <p className="text-5xl font-bold text-foreground">{result.bmi}</p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-muted-foreground text-sm mb-1">Kategori</p>
              <p className={`text-2xl font-semibold ${result.categoryColor}`}>{result.category}</p>
            </div>

            {/* BMI Categories Info */}
            <div className="pt-4 border-t border-border text-left space-y-2 text-xs text-muted-foreground">
              <div className="flex justify-between">
                <span>Kurus:</span>
                <span>{"< 18.5"}</span>
              </div>
              <div className="flex justify-between">
                <span>Normal:</span>
                <span>18.5 - 24.9</span>
              </div>
              <div className="flex justify-between">
                <span>Gemuk:</span>
                <span>25 - 29.9</span>
              </div>
              <div className="flex justify-between">
                <span>Obesitas:</span>
                <span>≥ 30</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-muted rounded-lg p-6 text-center text-muted-foreground">
            <p className="text-sm">Masukkan tinggi dan berat badan Anda untuk melihat hasil</p>
          </div>
        )}
      </Card>

      {/* Footer */}
      <p className="text-center text-xs text-white mt-6">Hasil ini hanya untuk referensi. Konsultasikan dengan dokter untuk informasi kesehatan yang akurat.</p>
    </div>
  );
}
