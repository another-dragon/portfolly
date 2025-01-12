import { FileText, User, Briefcase, Code, Mail, Terminal, Target } from 'lucide-react'

interface NavbarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const sections = [
    { id: 'home', icon: FileText, label: 'README.md' },
    { id: 'about', icon: User, label: 'about.json' },
    { id: 'experience', icon: Briefcase, label: 'experience.js' },
    { id: 'projects', icon: Code, label: 'projects.tsx' },
    { id: 'python', icon: Terminal, label: 'python_skills.py' },
    { id: 'goals', icon: Target, label: 'future_goals.swift' },
    { id: 'contact', icon: Mail, label: 'contact.html' },
  ]

  return (
    <nav className="bg-[#272822] border-b border-[#49483E] p-2 flex items-center overflow-x-auto">
      <div className="mr-4 flex-shrink-0">
        <span className="text-[#F8F8F2] font-semibold">Your Name</span>
        <span className="text-[#75715E] text-sm ml-2 font-mono">
          {'{'}solutions: (frontend | backend | automation | "*") =&gt; 💡{'}'}
        </span>
      </div>
      <div className="flex">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex items-center px-3 py-1 mr-1 rounded-t ${
              activeSection === section.id
                ? 'bg-[#3E3D32] text-[#F8F8F2]'
                : 'bg-[#272822] text-[#75715E] hover:bg-[#3E3D32] hover:text-[#F8F8F2]'
            }`}
          >
            <section.icon className="mr-1" size={14} />
            <span className="text-sm whitespace-nowrap">{section.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

