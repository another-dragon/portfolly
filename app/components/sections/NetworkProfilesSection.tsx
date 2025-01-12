import React, { useState } from "react";
import { Github, Linkedin, Twitter, Globe, Mail } from "lucide-react";

interface Profile {
  host: string;
  hostname: string;
  user: string;
  url: string;
  icon: React.ElementType;
  description: string;
}

export default function NetworkProfilesSection() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  const profiles: Profile[] = [
    {
      host: "github",
      hostname: "github.com",
      user: "another-dragon",
      url: "https://github.com/another-dragon",
      icon: Github,
      description: "Open source contributions and personal projects",
    },
    {
      host: "linkedin",
      hostname: "linkedin.com",
      user: "rumen4draganovs",
      url: "https://linkedin.com/in/rumen-draganov-ad-solutions",
      icon: Linkedin,
      description: "Professional network and career updates",
    },
    {
      host: "x",
      hostname: "x.com",
      user: "rumen4draganovs",
      url: "https://x.com/rumen4draganovs",
      icon: Twitter,
      description: "Tech insights and community engagement",
    },
    {
      host: "email",
      hostname: "anotherdragon.com",
      user: "rumen@anotherdragon",
      url: "mailto:rumen@anotherdragon.com",
      icon: Mail,
      description: "Direct communication channel",
    },
  ];

  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-[#F92672]">Network Profiles</h1>
      <pre className="bg-[#3E3D32] p-4 rounded text-[#F8F8F2]">
        {`# SSH Config - Social Networks
# Last updated: ${new Date().toISOString()}
# This is a special configuration file that contains all my professional profiles.
# Feel free to connect with me on any of these platforms!

`}
        {profiles.map((profile) => (
          <div
            key={profile.host}
            className={`mb-4 ${
              selectedProfile === profile.host
                ? "bg-[#49483E] -mx-4 px-4 py-2"
                : ""
            }`}
            onMouseEnter={() => setSelectedProfile(profile.host)}
            onMouseLeave={() => setSelectedProfile(null)}
          >
            {`Host ${profile.host}
    HostName ${profile.hostname}
    User ${profile.user}
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_${profile.host}
`}
            {selectedProfile === profile.host && (
              <div className="flex items-center mt-2 text-sm">
                <profile.icon className="mr-2 h-4 w-4" />
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#66D9EF] hover:text-[#FD971F] no-underline"
                >
                  {profile.url}
                </a>
                <span className="text-[#75715E] ml-2">
                  // {profile.description}
                </span>
              </div>
            )}
          </div>
        ))}
      </pre>
      <div className="mt-4 text-[#75715E]">
        <p>
          # To connect, simply click on any profile above or use SSH-style
          commands:
          <br />
          # ssh github # connects to GitHub profile
          <br /># ssh linkedin # connects to LinkedIn profile
        </p>
      </div>
    </div>
  );
}
