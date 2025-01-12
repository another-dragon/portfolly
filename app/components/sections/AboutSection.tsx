import React from 'react';

export default function AboutSection() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-[#F92672]">About Me</h1>
      <pre className="bg-[#3E3D32] p-4 rounded text-[#F8F8F2]">
        {JSON.stringify({
          name: "Rumen Draganov",
          title: "Solutions Developer",
          location: "Phoenix, Arizona",
          skills: [
            "Python", "JavaScript", "TypeScript", "React", "Next.js",
            "Docker", "HTML", "CSS", "Tailwind CSS", "Node.js"
          ],
          education: {
            degree: "High School Diploma",
            school: "Georgi Rakovski High School",
            location: "Sofia, Bulgaria",
            year: 2009
          },
          interests: [
            "Development", "UI/UX Design", "Open Source",
            "Artificial Intelligence", "RC Things [Drones, Trucks]"
          ]
        }, null, 2)}
      </pre>
    </div>
  );
}

