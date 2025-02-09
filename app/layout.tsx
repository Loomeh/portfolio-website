import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "title", // Update with your actual title
  description: "Your personal portfolio website", // Update with your description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-white max-w-7xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}