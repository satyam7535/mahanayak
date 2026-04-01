import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahanayak — AI Environmental Event Management",
  description:
    "Revolutionary environmental event management platform powered by agentic AI. Plan, execute, and measure the impact of tree plantation drives, beach cleanups, and more.",
  keywords: [
    "environmental events",
    "AI event management",
    "tree plantation",
    "beach cleanup",
    "volunteer management",
    "sustainability",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
