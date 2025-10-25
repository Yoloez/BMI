import { BMICalculator } from "@/components/bmi-calculator"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <BMICalculator />
    </main>
  )
}
