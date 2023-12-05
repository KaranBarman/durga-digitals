import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Durga Digitals",
  description:
    "Unlock the full potential of your brand in the digital realm with Durga Digitals. Based in the heart of Jaipur, we are your dedicated partners in crafting exceptional online experiences through our comprehensive suite of services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-1 flex-grow">{children}</div>
        </main>
      </body>
    </html>
  );
}
