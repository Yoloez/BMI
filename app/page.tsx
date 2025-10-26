"use client";

import { useState } from "react";
import { BMICalculator } from "@/components/bmi-calculator";
import { BMRCalculator } from "@/components/bmr-calculator";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"bmi" | "bmr">("bmi");

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <Image src="/healthy.jpg" alt="Background" fill priority className="object-cover -z-10" />

      {/* Optional overlay biar teks tetap terbaca */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-10 text-white">
        <div className="animate-in fade-in duration-300">
          {activeTab === "bmi" && <BMICalculator />}
          {activeTab === "bmr" && <BMRCalculator />}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
