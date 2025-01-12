'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  return (
    <header className="py-6 px-4 md:px-6 flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full">
      <div className="text-2xl font-bold">Your Name</div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="#about"><Button variant="ghost">About</Button></Link></li>
          <li><Link href="#experience"><Button variant="ghost">Experience</Button></Link></li>
          <li><Link href="#projects"><Button variant="ghost">Projects</Button></Link></li>
          <li><Link href="#contact"><Button variant="ghost">Contact</Button></Link></li>
        </ul>
      </nav>
    </header>
  )
}

