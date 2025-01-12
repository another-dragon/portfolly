import React from "react";

export default function HomeSection() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-[#569CD6] text-3xl font-bold mb-4">
        Welcome to R-A-D
      </h1>
      <div className="bg-[#252526] p-4 rounded-md mb-4">
        <p className="text-[#D4D4D4] mb-2">
          Hi there! I’m Rumen, a Solutions Developer who loves creating
          beautiful, effective, and creative solutions to tricky problems.
        </p>
        <p className="text-[#D4D4D4]">
          This project is all about showing you what I can do with the tools I
          use every day. It’s a peek into my skills, experience, and some of my
          favorite projects. Feel free to check out the different sections by
          using the command palette. If you have any questions, just follow the
          prompts below!
        </p>
      </div>
      <h2 className="text-[#4EC9B0] text-2xl font-semibold mb-2">
        Quick Overview
      </h2>
      <ul className="list-none pl-0">
        <li className="flex items-center mb-2">
          <span className="text-[#DCDCAA] mr-2">🚀</span>
          <span className="text-[#D4D4D4]">
            Developer specializing in versatile problem-solving
          </span>
        </li>
        <li className="flex items-center mb-2">
          <span className="text-[#DCDCAA] mr-2">💻</span>
          <span className="text-[#D4D4D4]">
            Proficient in frontend, backend, and automation
          </span>
        </li>
        <li className="flex items-center mb-2">
          <span className="text-[#DCDCAA] mr-2">🐍</span>
          <span className="text-[#D4D4D4]">
            Experienced in Python for various applications
          </span>
        </li>
        <li className="flex items-center mb-2">
          <span className="text-[#DCDCAA] mr-2">📱</span>
          <span className="text-[#D4D4D4]">
            Expanding into mobile development with Swift for iOS
          </span>
        </li>
        <li className="flex items-center mb-2">
          <span className="text-[#DCDCAA] mr-2">🔧</span>
          <span className="text-[#D4D4D4]">
            Adaptable skillset that grows with each new challenge
          </span>
        </li>
      </ul>
    </div>
  );
}
