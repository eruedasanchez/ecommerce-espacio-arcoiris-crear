import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const jost = Jost({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Inicio | Espacio Arcoiris Crear",
  description: "¡Animate a crear con nosotros!",
};

export default function RootLayout({ children, } : Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${jost.className}`}>
          <Header/>
          <main>{children}</main>
          <Footer/>
        </body>
    </html>
  );
}




