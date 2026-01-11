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
  metadataBase: new URL("https://apicultura-ta.ro"),
  title: {
    default: "Apicultură Naturală",
    template: "%s | Apicultură Naturală",
  },
  description:
    "Produse apicole 100% naturale, recoltate cu grijă direct de la apicultor.",
  openGraph: {
    title: "Apicultură Naturală",
    description:
      "Miere, propolis și lăptișor de matcă direct de la apicultor, 100% natural.",
    url: "https://apicultura-ta.ro",
    siteName: "Apicultură Naturală",
    images: [
      {
        url: "/images/stupina1.jpg",
        width: 1200,
        height: 630,
        alt: "Miere naturală direct de la apicultor",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apicultură Naturală",
    description:
      "Produse apicole 100% naturale: miere, propolis, lăptișor de matcă.",
    images: ["/images/stupina1.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#FFFDF8] text-[#2B2B2B] font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
