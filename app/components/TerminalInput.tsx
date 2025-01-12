"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send } from "lucide-react";
import { submitContactForm } from "../actions/submitContactForm";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  antiBot: string;
  hiddenField: string;
}

interface HistoryEntry {
  timestamp: string;
  command: string;
  output?: string;
  isTemplate?: boolean;
  isError?: boolean;
}

const messageTemplates = [
  "I'd like to discuss a potential project opportunity",
  "I'm interested in your consulting services",
  "I'd love to connect and learn more about your work",
  "I have a technical question about your projects",
];

export default function TerminalInput() {
  const [step, setStep] = useState(0);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [showTemplates, setShowTemplates] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    antiBot: "",
    hiddenField: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mathProblem, setMathProblem] = useState<{
    num1: number;
    num2: number;
  } | null>(null);
  const hiddenFieldRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  let isCommandPaletteOpen = false;

  useEffect(() => {
    setHistory([
      {
        timestamp: getTimestamp(),
        command: "Welcome to the contact form. Please follow the prompts.",
      },
    ]);
    setMathProblem({
      num1: Math.floor(Math.random() * 10),
      num2: Math.floor(Math.random() * 10),
    });
  }, []);

  const prompts = [
    "Enter your first name:",
    "Enter your last name:",
    "Enter your email:",
    "Enter your message (or click 📝 for templates):",
    "Human verification: What is " +
      (mathProblem ? `${mathProblem.num1} + ${mathProblem.num2}` : "0 + 0") +
      "?",
  ];

  const getTimestamp = () => "~ (0.0500s)";

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentInput.trim()) {
      e.preventDefault();
      const timestamp = getTimestamp();
      const newEntry: HistoryEntry = {
        timestamp,
        command: `${prompts[step]} ${currentInput}`,
      };
      setHistory([...history, newEntry]);

      // Update form data
      const updatedFormData = { ...formData };
      switch (step) {
        case 0:
          updatedFormData.firstName = currentInput;
          break;
        case 1:
          updatedFormData.lastName = currentInput;
          break;
        case 2:
          updatedFormData.email = currentInput;
          break;
        case 3:
          updatedFormData.message = currentInput;
          break;
        case 4:
          updatedFormData.antiBot = currentInput;
          break;
      }
      setFormData(updatedFormData);

      if (step === 4) {
        const expectedAnswer = mathProblem!.num1 + mathProblem!.num2;
        if (Number(currentInput) !== expectedAnswer) {
          const resultEntry: HistoryEntry = {
            timestamp: getTimestamp(),
            command: "Incorrect answer. Please try again.",
            isError: true,
          };
          setHistory((prev) => [...prev, resultEntry]);
          setCurrentInput("");
          return;
        }

        // Submit form
        const result = await submitContactForm({
          ...updatedFormData,
          antiBot: "verified",
          hiddenField: hiddenFieldRef.current?.value || "",
        });
        const resultEntry: HistoryEntry = {
          timestamp: getTimestamp(),
          command: result.message,
          isError: !result.success,
        };
        setHistory((prev) => [...prev, resultEntry]);
        if (result.success) {
          setIsSubmitted(true);
        }
      } else {
        if (step === 3) {
          setMathProblem({
            num1: Math.floor(Math.random() * 10),
            num2: Math.floor(Math.random() * 10),
          });
        }
        setStep(step + 1);
      }

      setCurrentInput("");
      setShowTemplates(false);
    }
  };

  const handleTemplateClick = (template: string) => {
    const timestamp = getTimestamp();
    const newEntry: HistoryEntry = {
      timestamp,
      command: `${prompts[step]} ${template}`,
      isTemplate: true,
    };
    setHistory([...history, newEntry]);
    setFormData((prev) => ({ ...prev, message: template }));
    setStep(step + 1);
    setCurrentInput("");
    setShowTemplates(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "c") {
        e.preventDefault();
        setStep(0);
        setIsSubmitted(false);
        setHistory([
          {
            timestamp: getTimestamp(),
            command: "Welcome to the contact form. Please follow the prompts.",
          },
        ]);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          antiBot: "",
          hiddenField: "",
        });
        setMathProblem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="border-t border-[#2D2D2D] bg-[#1C1C1C]">
      <div className="overflow-y-auto p-4 transition-all duration-200">
        {history.map((entry, index) => (
          <div key={index} className="font-mono mb-2">
            <div className="text-[#666666]">{entry.timestamp}</div>
            <div
              className={`${entry.isTemplate ? "text-[#98C379]" : entry.isError ? "text-[#FF5555]" : "text-[#D4D4D4]"}`}
            >
              {entry.command}
            </div>
            {entry.output && (
              <div className="text-[#FF5555]">{entry.output}</div>
            )}
          </div>
        ))}
      </div>
      {isSubmitted ? (
        <div className="p-4 font-mono">
          <p className="text-[#98C379] mb-2">
            Thank you! Your message has been submitted.
          </p>
          <p className="text-[#666666]">
            Press <span className="text-[#D4D4D4]">^C</span> to exit and start a
            new submission.
          </p>
        </div>
      ) : (
        <div className="border-t border-[#2D2D2D]">
          {showTemplates && step === 3 && (
            <div className="p-4 border-b border-[#2D2D2D] bg-[#252526]">
              <div className="text-[#666666] text-sm mb-2">
                Message Templates:
              </div>
              <div className="space-y-2">
                {messageTemplates.map((template, index) => (
                  <button
                    key={index}
                    onClick={() => handleTemplateClick(template)}
                    className="block w-full text-left px-3 py-2 rounded text-[#D4D4D4] hover:bg-[#2D2D2D] transition-colors"
                  >
                    {template}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="p-4 font-mono flex items-center">
            <span className="text-[#98C379] mr-2">➜</span>
            <span className="text-[#666666] mr-2">~/contact</span>
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-[#D4D4D4]"
              placeholder={
                typeof prompts[step] === "function"
                  ? prompts[step]()
                  : prompts[step]
              }
              ref={inputRef}
              onFocus={() => {
                // Disable number navigation when input is focused
                window.removeEventListener("keydown", handleKeyDown);
              }}
              onBlur={() => {
                // Re-enable number navigation when input loses focus
                if (!isCommandPaletteOpen) {
                  window.addEventListener("keydown", handleKeyDown);
                }
              }}
            />
            {step === 3 && (
              <button
                onClick={() => setShowTemplates(!showTemplates)}
                className="ml-2 p-1.5 rounded hover:bg-[#2D2D2D] text-[#666666] hover:text-[#D4D4D4] transition-colors"
                title="Show message templates"
              >
                <MessageSquare size={16} />
              </button>
            )}
            {currentInput && (
              <button
                onClick={() =>
                  handleKeyDown({ key: "Enter" } as React.KeyboardEvent)
                }
                className="ml-2 p-1.5 rounded hover:bg-[#2D2D2D] text-[#666666] hover:text-[#D4D4D4] transition-colors"
                title="Send"
              >
                <Send size={16} />
              </button>
            )}
          </div>
        </div>
      )}
      <input
        type="text"
        ref={hiddenFieldRef}
        name="hiddenField"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
