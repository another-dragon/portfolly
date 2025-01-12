import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Rumen - Another Dragon",
  description: "Solutions Developer Portfolio",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        className={`${jetBrainsMono.className} dark`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
