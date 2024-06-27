import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const manrope = Manrope({ subsets: ["latin"], weight: ['400', '500', '700']});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <main className=" ">
        <Header/>
        {children}
        <Footer/>
        </main>
       
        </body>
    </html>
  );
}
