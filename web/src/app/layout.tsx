import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "../components/ui/button"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your weekly Chopin list",
  description: "Create a new list for weekly Chopin by adding meals you want to make.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"dark"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={"flex flex-col bg-slate-800"}>
          <h1 className={"text-center"}>Chopin</h1>
          <nav className={"flex justify-evenly"}>
            <Button><Link href="/">Chopin List</Link></Button>
            <Button><Link href="/recipes">Recipes</Link></Button>
            <Button><Link href="/ingredients">Ingredients</Link></Button>
          </nav>
        </div>

        {children}
      </body>
    </html>
  );
}
