"use client"

import { useState } from "react"
import { BMICalculator } from "@/components/bmi-calculator"
import { BMRCalculator } from "@/components/bmr-calculator"

export default function Home() {
  const [activeTab, setActiveTab] = useState<"bmi" | "bmr">("bmi")

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/80">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Health Calculator</h1>
              <p className="text-sm text-muted-foreground mt-1">Hitung kesehatan Anda dengan akurat</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("bmi")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "bmi"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              BMI Calculator
            </button>
            <button
              onClick={() => setActiveTab("bmr")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "bmr"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              BMR Calculator
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="animate-in fade-in duration-300">
          {activeTab === "bmi" && <BMICalculator />}
          {activeTab === "bmr" && <BMRCalculator />}
        </div>
      </div>
    </main>
  )
}
