import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./styles/globals.css";
import Footer from "@/components/app-reusables/Footer";


const font = Space_Grotesk({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Honey Bunny Bun",
  description: "Easy way to link up with your favourite models",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
      <Footer />
    </html>
  );
}
