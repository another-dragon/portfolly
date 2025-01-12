'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useMemo } from 'react'

export default function Experience() {
  const experiences = useMemo(() => [
    {
      title: "Senior Developer",
      company: "Tech Corp",
      period: "2020 - Present",
      description: "Led development of key projects and mentored junior developers."
    },
    {
      title: "Web Developer",
      company: "Digital Agency",
      period: "2017 - 2020",
      description: "Developed responsive websites and web applications for various clients."
    },
    // Add more experiences as needed
  ], [])

  return (
    <section id="experience" className="py-20 px-4 md:px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">My Experience</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title} at {exp.company}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

