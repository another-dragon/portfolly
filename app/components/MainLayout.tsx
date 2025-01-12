"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import TopBar from "./TopBar";
import MainContent from "./MainContent";

const CommandPalette = dynamic(() => import("./CommandPalette"), {
  ssr: false,
});

const TerminalInput = dynamic(() => import("./TerminalInput"), {
  ssr: false,
  loading: () => (
    <div className="border-t border-[#2D2D2D] bg-[#1C1C1C] p-4">
      <div className="animate-pulse h-6 bg-[#2D2D2D] rounded w-64" />
    </div>
  ),
});

export type Section =
  | "readme"
  | "about"
  | "experience"
  | "projects"
  | "python"
  | "goals"
  | "profiles";

export default function MainLayout() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>("readme");
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) {
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }

      if (!isCommandPaletteOpen && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const sections: Section[] = [
          "readme",
          "about",
          "experience",
          "projects",
          "python",
          "goals",
          "profiles",
        ];
        const num = parseInt(e.key);
        if (num >= 1 && num <= 7) {
          setActiveSection(sections[num - 1]);
        }
      }
    };

    if (mounted) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isCommandPaletteOpen, mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex h-screen bg-[#1C1C1C] text-[#D4D4D4]">
      <div className="flex-1 flex flex-col">
        <TopBar
          activeSection={activeSection}
          onCommandPalette={() => setIsCommandPaletteOpen(true)}
        />
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-auto">
            <MainContent activeSection={activeSection} />
          </div>
          <TerminalInput />
        </div>
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onSelect={(section) => {
            setActiveSection(section as Section);
            setIsCommandPaletteOpen(false);
          }}
        />
      </div>
    </div>
  );
}
