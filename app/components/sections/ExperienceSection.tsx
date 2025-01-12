import React from 'react';

export default function ExperienceSection() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-[#F92672]">Professional Experience</h1>
      <pre className="bg-[#3E3D32] p-4 rounded text-[#F8F8F2]">
        {`const experience = [
  {
    company: "Tech Innovators Inc.",
    position: "Senior Frontend Developer",
    period: "2021 - Present",
    responsibilities: [
      "Lead development of company's flagship web application",
      "Mentor junior developers and conduct code reviews",
      "Implement new features and optimize application performance",
      "Collaborate with design and backend teams for seamless integration"
    ]
  },
  {
    company: "Digital Solutions LLC",
    position: "Frontend Developer",
    period: "2018 - 2021",
    responsibilities: [
      "Developed responsive web applications using React and Next.js",
      "Worked on improving website accessibility and SEO",
      "Integrated third-party APIs and services",
      "Participated in agile development processes"
    ]
  },
  {
    company: "StartUp Ventures",
    position: "Junior Web Developer",
    period: "2016 - 2018",
    responsibilities: [
      "Assisted in building and maintaining company websites",
      "Created interactive UI components using JavaScript and jQuery",
      "Collaborated with the marketing team to implement landing pages",
      "Gained experience in version control and deployment processes"
    ]
  }
];

console.log(experience);`}
      </pre>
    </div>
  )
}

