import React from "react";

export default function FutureGoalsSection() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-[#F92672]">Future Goals</h1>
      <p className="text-[#F8F8F2]">
        As a developer, I'm always looking to expand my skills and take on new
        challenges. Here are some of my key goals for the near future:
      </p>

      <h2 className="text-[#A6E22E]">Master Swift and iOS Development</h2>
      <pre className="bg-[#3E3D32] p-4 rounded text-[#F8F8F2]">
        {`import SwiftUI

struct GoalView: View {
    let goal: String
    let deadline: String
    
    var body: some View {
        VStack(alignment: .leading) {
            Text(goal)
                .font(.headline)
                .foregroundColor(.green)
            Text("Deadline: \\(deadline)")
                .font(.subheadline)
                .foregroundColor(.gray)
        }
        .padding()
        .background(Color.black)
        .cornerRadius(10)
    }
}

struct ContentView: View {
    var body: some View {
        List {
            GoalView(goal: "Complete iOS Development Bootcamp", deadline: "Q2 2025")
            GoalView(goal: "Develop and Launch First iOS App", deadline: "Q3 2025")
            GoalView(goal: "Contribute to Open Source Swift Project", deadline: "Q4 2025")
        }
    }
}
`}
      </pre>

      <p className="text-[#F8F8F2]">
        My plan for mastering Swift and iOS development in 2025:
      </p>
      <ul className="text-[#F8F8F2]">
        <li>Complete a comprehensive iOS development course</li>
        <li>Build a portfolio of iOS applications</li>
        <li>Contribute to open-source Swift projects</li>
        <li>Attend iOS developer meetups and conferences</li>
        <li>Achieve Apple Developer certification</li>
      </ul>

      <h2 className="text-[#A6E22E]">Other Professional Goals</h2>
      <ul className="text-[#F8F8F2]">
        <li>Deepen expertise in React and Next.js</li>
        <li>Explore machine learning and AI integration in web applications</li>
        <li>Improve skills in DevOps and CI/CD practices</li>
        <li>Mentor junior developers and contribute to the tech community</li>
      </ul>

      <h2 className="text-[#A6E22E]">Personal Goals</h2>
      <ul className="text-[#F8F8F2]">
        <li>Maintain a healthy work-life balance</li>
        <li>Contribute to tech education initiatives in my community</li>
        <li>Improve public speaking and presentation skills</li>
        <li>Learn a new human language alongside programming languages</li>
      </ul>
    </div>
  );
}
