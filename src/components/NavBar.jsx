"use client";

import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { toast } from "react-toastify";

export default function NavBar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast.success("Successfully logged out!", { position: "top-right" });
    router.push("/signin");
  };

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
    <div className="fixed top-0 left-0 w-full bg-base-300 backdrop-blur dark:bg-gray-900/70 shadow-md z-50 border-b">
      <div className="w-11/12 mx-auto py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img src="/Medisheper-logo.png" alt="Logo" className="w-28 h-12 p-1 object-cover" />
        </Link>

        {/* Navigation Links */}
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
          <Link href="/dashboard" className="text-gray-800 font-semibold rounded-full dark:px-4 py-1 dark:bg-gray-800 shadow-2xl dark:text-white hover:text-[#022dbb]">
          Dashboard
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
    </div>
  );
}
