// src/app/page.tsx

import Button from "@/components/ui/Button/Button";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome to Neu Home</h1>
      <Button variant="default" size="md" className="mt-4">
        Get Started
      </Button>
    </main>
  )
}
