import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rithik B | Data Science & AI",
  description:
    "Portfolio of Rithik B — Data Science postgraduate focused on machine learning, deep learning, and intelligent AI systems.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Rithik B | Data Science & AI",
    description: "Building practical AI, machine learning, and data-driven systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
