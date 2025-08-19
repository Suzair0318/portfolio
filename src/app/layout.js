import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Suzair Khan - Backend/Full Stack Developer",
  description: "Backend and Full Stack Developer with experience in IoT solutions, MERN stack, and cloud technologies. Specialized in scalable applications and modern web development.",
  keywords: "Backend Developer, Full Stack Developer, IoT, MERN Stack, Node.js, React, MongoDB, Cloud Developer",
  author: "Suzair Khan",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
