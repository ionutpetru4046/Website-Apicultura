import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "Apicultură Naturală",
  description: "Miere naturală 100% direct de la apicultor",
  metadataBase: new URL("https://apicultura-ta.ro"),
  openGraph: {
    title: "Apicultură Naturală",
    description: "Produse apicole naturale, sănătoase și pure",
    url: "https://apicultura-ta.ro",
    siteName: "Apicultura Naturala",
    images: [
      {
        url: "/images/littlebee.png",
        width: 1200,
        height: 630,
        alt: "Logo Apicultura Naturala",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apicultură Naturală",
    description: "Miere, propolis și lăptișor de matcă direct de la apicultor",
    images: ["/images/littlebee.png"],
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
