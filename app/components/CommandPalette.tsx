"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  FileText,
  User,
  Briefcase,
  Code,
  Terminal,
  Target,
  Network,
} from "lucide-react";
import { type Section } from "./MainLayout";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (section: Section) => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onSelect,
}: CommandPaletteProps) {
  const sections = [
    { id: "home", icon: FileText, label: "README.md", shortcut: "1" },
    { id: "about", icon: User, label: "about.json", shortcut: "2" },
    {
      id: "experience",
      icon: Briefcase,
      label: "experience.js",
      shortcut: "3",
    },
    { id: "projects", icon: Code, label: "projects.tsx", shortcut: "4" },
    { id: "python", icon: Terminal, label: "python_skills.py", shortcut: "5" },
    { id: "goals", icon: Target, label: "future_goals.swift", shortcut: "6" },
    { id: "profiles", icon: Network, label: ".ssh/config", shortcut: "7" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 border-0">
        <Command className="rounded-lg border border-[#2D2D2D] bg-[#1C1C1C]">
          <CommandInput
            placeholder="Type a command or search..."
            className="border-b border-[#2D2D2D] h-12 text-[#D4D4D4]"
          />
          <CommandList className="max-h-[300px] overflow-y-auto">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup
              heading="Navigation"
              className="text-[#666666] text-xs uppercase"
            >
              {sections.map((section) => (
                <CommandItem
                  key={section.id}
                  onSelect={() => {
                    onSelect(section.id as Section);
                    onClose();
                  }}
                  className="flex items-center px-4 py-2 cursor-pointer text-[#D4D4D4] hover:bg-[#2D2D2D]"
                >
                  <section.icon className="mr-3 h-4 w-4" />
                  <span className="flex-1">{section.label}</span>
                  <kbd className="ml-auto text-[#666666]">
                    {section.shortcut}
                  </kbd>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
