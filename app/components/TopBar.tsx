"use client";

import { Command } from "lucide-react";
import { type Section } from "./MainLayout";

interface TopBarProps {
  activeSection: Section;
  onCommandPalette: () => void;
}

export default function TopBar({
  activeSection,
  onCommandPalette,
}: TopBarProps) {
  return (
    <div className="h-12 border-b border-[#2D2D2D] flex items-center justify-between px-4 bg-[#1C1C1C]">
      <div className="flex items-center">
        <div className="flex items-center space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-[#fe5f57] relative group hover:after:content-['×'] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:text-[#4c0002] hover:after:text-[10px] hover:after:font-bold"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e] relative group hover:after:content-['−'] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:text-[#4c0002] hover:after:text-[10px] hover:after:font-bold"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840] relative group hover:after:content-['+'] hover:after:absolute hover:after:top-1/2 hover:after:-translate-y-1/2 hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:text-[#4c0002] hover:after:text-[10px] hover:after:font-bold"></div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[#666666]">~/portfolio/</span>
          <span className="text-[#D4D4D4]">{activeSection}</span>
        </div>
      </div>
      <button
        onClick={onCommandPalette}
        className="flex items-center space-x-2 px-3 py-1.5 rounded text-sm text-[#D4D4D4] hover:bg-[#2D2D2D] transition-colors"
      >
        <Command size={14} />
        <span>Command Palette</span>
        <kbd className="ml-2 px-2 py-0.5 text-xs bg-[#2D2D2D] rounded text-[#666666]">
          ⌘K
        </kbd>
      </button>
    </div>
  );
}
