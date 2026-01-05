import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});


export const metadata = {
  title: "Apicultură Naturală",
  description: "Miere naturală direct de la apicultor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="bg-[#FFFDF8] text-[#2B2B2B] font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
