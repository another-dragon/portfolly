'use client'

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to My Portfolio</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        I'm a [Your Profession] passionate about [Your Interests/Specialties].
        Let's create something amazing together!
      </p>
      <Button size="lg">View My Work</Button>
    </section>
  )
}

