// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { AuthProvider } from "@/context/authContext";
// import { ToastContainer } from "react-toastify";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "MediSpheres",
//   description: "Hospital Management System (HMS) is a comprehensive, user-friendly solution designed to streamline healthcare operations.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" data-them="light" className="dark:bg-gray-950 bg-white text-black dark:text-white">
//       <body
//         className={`dark:bg-gray-950 bg-white min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <AuthProvider>
//         <main>
//           {children}
//         </main>
//        <ToastContainer />
//        </AuthProvider>
//       </body>
//     </html>
//   );
// }

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/authContext";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/components/shared/theme-provider";


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
  description:
    "Hospital Management System (HMS) is a comprehensive, user-friendly solution designed to streamline healthcare operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`dark:bg-gray-950 bg-white min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <main>{children}</main>
            <ToastContainer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
