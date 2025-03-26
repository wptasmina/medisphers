import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer/Footer";
import { AuthProvider } from "@/context/authContext";


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
    <html lang="en" className="dark:bg-gray-950 bg-white text-black dark:text-white">
      <body
        className={`dark:bg-gray-950 bg-white min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
      
        <NavBar></NavBar>
        <main className="mx-2">
          {children}
        </main>
       <Footer/>
       
       </AuthProvider>
      </body>
    </html>
  );
}
