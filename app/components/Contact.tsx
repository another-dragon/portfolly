import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
      <form className="max-w-md mx-auto space-y-4">
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea placeholder="Your Message" required />
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </section>
  )
}

