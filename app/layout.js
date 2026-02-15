import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prashant Kaushik | Portfolio",
  description: "Personal portfolio of Prashant Kaushik - Event Host, Tech Enthusiast, and Volunteer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* We can import Navbar here, or use a separate Client Layout wrapper. 
            For simplicity in App Router, we can put Navbar here if it doesn't use hooks that conflict with server components.
            Since Navbar is "use client", it's fine to import it into a Server Component (RootLayout). 
        */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
