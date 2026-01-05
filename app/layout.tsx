import "./globals.css";

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
    <html lang="ro">
      <body className="bg-[#FFFDF8] text-[#2B2B2B]">
        {children}
      </body>
    </html>
  );
}
