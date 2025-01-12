import React from 'react';

export default function HomeSection() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-[#569CD6] text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
      <div className="bg-[#252526] p-4 rounded-md mb-4">
        <p className="text-[#D4D4D4] mb-2">
          Hello! I'm Rumen, a versatile Solutions Developer with a passion for crafting 
          elegant, efficient, and innovative solutions to complex problems.
        </p>
        <p className="text-[#D4D4D4]">
          This portfolio project is heavily inspired by the tools that I use daily is designed to give you a glimpse into my skills, experience, and projects. 
          Feel free to explore the different sections using the command palette should you want to 
          reach me follow the prompts below.
        </p>
      </div>
      <h2 className="text-[#4EC9B0] text-2xl font-semibold mb-2">Quick Overview</h2>
      <ul className="list-none pl-0">
        <li className="flex items-center mb-2">
          <span className="text-[#DCDCAA] mr-2">🚀</span>
          <span className="text-[#D4D4D4]">Solutions Developer specializing in versatile problem-solving</span>
        </li>
        <li className="flex items-center mb-2">
          <span className="text-[#DCDCAA] mr-2">💻</span>
          <span className="text-[#D4D4D4]">Proficient in frontend, backend, and automation</span>
        </li>
        <li className="flex items-center mb-2">
          <span className="text-[#DCDCAA] mr-2">🐍</span>
          <span className="text-[#D4D4D4]">Experienced in Python for various applications</span>
        </li>
        <li className="flex items-center mb-2">
          <span className="text-[#DCDCAA] mr-2">📱</span>
          <span className="text-[#D4D4D4]">Expanding into mobile development with Swift for iOS</span>
        </li>
        <li className="flex items-center mb-2">
          <span className="text-[#DCDCAA] mr-2">🔧</span>
          <span className="text-[#D4D4D4]">Adaptable skillset that grows with each new challenge</span>
        </li>
      </ul>
    </div>
  )
}

