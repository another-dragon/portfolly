import { FileText, GitBranch, Terminal, Book, Workflow } from 'lucide-react'
import { type Section } from './MainLayout'

interface SidebarProps {
  activeSection: Section
  setActiveSection: (section: Section) => void
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const sections: { id: Section; icon: React.ElementType }[] = [
    { id: 'home', icon: FileText },
    { id: 'about', icon: GitBranch },
    { id: 'experience', icon: Terminal },
    { id: 'projects', icon: Book },
    { id: 'python', icon: Workflow },
  ]

  return (
    <div className="w-16 bg-[#252526] border-r border-[#3E3E42] flex flex-col items-center py-4 space-y-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => setActiveSection(section.id)}
          className={`p-2 rounded-lg ${
            activeSection === section.id
              ? 'bg-[#37373D] text-[#D4D4D4]'
              : 'text-[#858585] hover:bg-[#2A2D2E] hover:text-[#D4D4D4]'
          }`}
        >
          <section.icon size={24} />
        </button>
      ))}
    </div>
  )
}

