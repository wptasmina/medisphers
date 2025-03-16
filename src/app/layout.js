import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MediSpheres",
  description: "Hospital Management System (HMS) is a comprehensive, user-friendly solution designed to streamline healthcare operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar></NavBar>
        <main className="mx-2">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
