'use client'

import { Command } from 'lucide-react'
import { type Section } from './MainLayout'

interface TopBarProps {
  activeSection: Section
  onCommandPalette: () => void
}

export default function TopBar({ activeSection, onCommandPalette }: TopBarProps) {
  return (
    <div className="h-12 border-b border-[#2D2D2D] flex items-center justify-between px-4 bg-[#1C1C1C]">
      <div className="flex items-center space-x-2">
        <span className="text-[#666666]">~/portfolio/</span>
        <span className="text-[#D4D4D4]">{activeSection}</span>
      </div>
      <button 
        onClick={onCommandPalette}
        className="flex items-center space-x-2 px-3 py-1.5 rounded text-sm text-[#D4D4D4] hover:bg-[#2D2D2D] transition-colors"
      >
        <Command size={14} />
        <span>Command Palette</span>
        <kbd className="ml-2 px-2 py-0.5 text-xs bg-[#2D2D2D] rounded text-[#666666]">⌘K</kbd>
      </button>
    </div>
  )
}

