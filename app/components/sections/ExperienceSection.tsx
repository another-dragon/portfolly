import React from "react";

export default function ExperienceSection() {
  return (
    <div className="prose prose-invert max-w-[1400px]">
      <h1 className="text-[#F92672]">Professional Experience</h1>
      <pre className="bg-[#3E3D32] p-4 rounded text-[#F8F8F2] min-w-fit">
        {`
const experience = [
  {
    company: "CNI Locates LTD",
    position: "Dev Ops Lead",
    period: "2024 - Present",
    responsibilities: [
      "Lead development of company's flagship web application",
      "Assist in continuous integration and deployment processes",
      "Implement new features and optimize application performance",
      "Improve all aspects of the tech stack for scalability and security"
    ]
  },
  {
    company: "Web2Three",
    position: "Co-Founder, Lead Developer",
    period: "2023 - Present",
    responsibilities: [
      "Architect and deliver enterprise-grade web applications and internal business solutions",
      "Spearhead end-to-end development of scalable web platforms and custom business tools",
      "Drive technical strategy and implementation for client-specific software solutions",
      "Optimize business processes through custom-built internal web applications",
      "Lead client consultations to translate business requirements into technical specifications",
      "Implement robust web solutions with focus on scalability and maintainability"
    ]
  },
  {
    company: "AZ Smart Services",
    position: "Founder, Lead Integrator",
    period: "2024 - Present",
    responsibilities: [
      "Design and implement comprehensive smart home integration solutions",
      "Provide expert lighting design, integration, and programming services",
      "Deploy and maintain network infrastructure for residential and commercial clients",
      "Lead all aspects of business operations while delivering hands-on technical services",
      "Develop and maintain client relationships across residential and organizational sectors",
    ],
  },
  {
    company: "IDS Audio & Video Inc.",
    position: "Project Manager, Lead Integrator",
    period: "2015 - 2023",
    responsibilities: [
      "Progressed from Low Voltage Electrician to Lead Integrator, mastering multiple technical domains",
      "Established and led company's security and surveillance installation division",
      "Pioneered company's smart home automation services, specializing in comprehensive system integration",
      "Spearheaded partnership with Savant Systems, achieving PNW Ambassador status through technical excellence",
      "Designed and implemented custom lighting integration solutions for high-end residential projects",
      "Managed complex automation projects from initial consultation through final commissioning",
      "Led technical training and knowledge transfer for integration teams"
    ]
  }
];

console.log(experience);
        `}
      </pre>
    </div>
  );
}
