"use client";

import { type Section } from "./MainLayout";
import dynamic from "next/dynamic";

const HomeSection = dynamic(() => import("./sections/HomeSection"), {
  ssr: false,
});
const AboutSection = dynamic(() => import("./sections/AboutSection"), {
  ssr: false,
});
const ExperienceSection = dynamic(
  () => import("./sections/ExperienceSection"),
  { ssr: false },
);
const ProjectsSection = dynamic(() => import("./sections/ProjectsSection"), {
  ssr: false,
});
const PythonSkillsSection = dynamic(
  () => import("./sections/PythonSkillsSection"),
  { ssr: false },
);
const FutureGoalsSection = dynamic(
  () => import("./sections/FutureGoalsSection"),
  { ssr: false },
);
const NetworkProfilesSection = dynamic(
  () => import("./sections/NetworkProfilesSection"),
  { ssr: false },
);

interface MainContentProps {
  activeSection: Section;
}

export default function MainContent({ activeSection }: MainContentProps) {
  return (
    <div className="flex-1 overflow-auto bg-[#1C1C1C] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none">
          {activeSection === "home" && <HomeSection />}
          {activeSection === "about" && <AboutSection />}
          {activeSection === "experience" && <ExperienceSection />}
          {activeSection === "projects" && <ProjectsSection />}
          {activeSection === "python" && <PythonSkillsSection />}
          {activeSection === "goals" && <FutureGoalsSection />}
          {activeSection === "profiles" && <NetworkProfilesSection />}
        </div>
      </div>
    </div>
  );
}
