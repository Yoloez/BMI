"use client";

import React from "react";

interface HeaderProps {
  activeTab: "bmi" | "bmr";
  setActiveTab: (tab: "bmi" | "bmr") => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-md bg-black/30 mx-auto md:mx-[320px] px-2 border-black rounded-bl-2xl rounded-br-2xl sm:py-0 py-2">
      <div className="md:flex-row flex-col flex items-center justify-between max-w-4xl mx-auto px-4 py-4 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white">Kalkulator Kesehatan</h1>
          <p className="text-sm text-green-200 mt-1">Hitung kesehatan Anda dengan akurat</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("bmi")}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${activeTab === "bmi" ? "bg-primary text-primary-foreground shadow-lg" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
          >
            BMI Calculator
          </button>
          <button
            onClick={() => setActiveTab("bmr")}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${activeTab === "bmr" ? "bg-primary text-primary-foreground shadow-lg" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
          >
            BMR Calculator
          </button>
        </div>
      </div>
    </header>
  );
};
