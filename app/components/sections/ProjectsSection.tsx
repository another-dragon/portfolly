import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      name: "Pizza Delivery App",
      description:
        "A full-featured online store built with Next.js and Stripe integration.",
      technologies: ["Next.js", "React", "Stripe", "MongoDB"],
      link: "https://romanopizzaandpasta.com",
    },
  ];

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-[#F92672]">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-[#A6E22E]">{project.name}</h2>
          <p className="text-[#F8F8F2]">{project.description}</p>
          <p className="text-[#F8F8F2]">
            <strong className="text-[#66D9EF]">Technologies:</strong>{" "}
            {project.technologies.join(", ")}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#66D9EF] hover:text-[#FD971F]"
          >
            Visit it Online
          </a>
        </div>
      ))}
    </div>
  );
}
