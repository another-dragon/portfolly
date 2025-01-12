import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>My Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            [Write a brief paragraph about your professional journey, key
            skills, and what drives you.]
          </p>
          <h3 className="text-xl font-semibold mb-2">Key Skills:</h3>
          <ul className="list-disc list-inside">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            <li>Skill 4</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
