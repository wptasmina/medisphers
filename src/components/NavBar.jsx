"use client";

import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { toast } from "react-toastify";
// import { useState } from 'react';
import { AlignJustify, X } from "lucide-react";

export default function NavBar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast.success("Successfully logged out!", { position: "top-right" });
    router.push("/signin");
  };

  // Navbar mobile togglemenu 
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Dark Mode Implementation
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-base-300 backdrop-blur dark:bg-gray-900/70 shadow-md z-50 border-b">
      <div className="w-11/12 mx-auto py-3 flex justify-between items-center relative">
      
        {/* Mobile Toggle Button */}
        <div className="md:hidden z-40">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="h-4 w-4 text-black dark:text-white" />
            ) : (
              <AlignJustify className="h-6 w-6 text-black dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden z-40 flex flex-col absolute bg-white w-[100%] dark:bg-gray-800 shadow-2xl
          px-6 py-8 mt-68 space-y-3 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/doctors" onClick={() => setIsOpen(false)}>All Doctors</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}

        {/* Logo */}
        <Link href="/">
          <img src="/Medisheper-logo.png" alt="Logo" className="w-28 h-12 p-1 object-cover" />
        </Link>

        {/*Dactop Navigation Links */}
        <div className="hidden md:flex space-x-6 justify-center items-center ">
          <Link href="/" className="text-gray-800 font-semibold dark:text-white hover:text-[#022dbb]">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 font-semibold dark:text-white hover:text-[#022dbb]">
            About
          </Link>
          <Link href="/doctors" className="text-gray-800 font-semibold dark:text-white hover:text-[#022dbb]">
            All Doctors
          </Link>
          <Link href="/contact" className="text-gray-800 font-semibold dark:text-white hover:text-[#022dbb]">
            Contact Us
          </Link>
        </div>

        {/* Dark Mode Toggle & Auth Buttons */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-blue-50 dark:bg-blue-50 hover:bg-blue-100 dark:hover:bg-blue-100"
          >
            {isDarkMode ? <CiLight className="text-xl text-[#02228a]" /> : <MdDarkMode className="text-xl text-gray-900 dark:text-white" />}
          </button>

          {/* Authentication */}
          {user?.email ? (
            <Button onClick={handleLogout} className="bg-[#022dbb] text-white px-4 py-2 rounded-md cursor-pointer">
              Sign out
            </Button>
          ) : (
            <Link href="/signin">
              <Button className="bg-[#022dbb] hover:text-gray-200 dark:hover:text-[#022dbb] duration-300 dark:duration-500 dark:hover:bg-blue-50 text-white px-4 py-2 rounded-md cursor-pointer">Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
