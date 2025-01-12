import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of project 1.",
      link: "#"
    },
    {
      title: "Project 2",
      description: "A brief description of project 2.",
      link: "#"
    },
    // Add more projects as needed
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{project.description}</p>
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

