export default function Contact() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-[#F92672]">Contact Me</h1>
      <pre className="bg-[#3E3D32] p-4 rounded text-[#F8F8F2]">
        {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact [Your Name]</title>
</head>
<body>
    <h1>Get in Touch</h1>
    <ul>
        <li>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/yourusername">linkedin.com/in/yourusername</a></li>
        <li>GitHub: <a href="https://github.com/yourusername">github.com/yourusername</a></li>
        <li>Twitter: <a href="https://twitter.com/yourusername">@yourusername</a></li>
    </ul>
    <p>I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
</body>
</html>`}
      </pre>
    </div>
  )
}

