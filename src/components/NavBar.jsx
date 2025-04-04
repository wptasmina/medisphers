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
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="w-11/12 mx-auto py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img src="/Medisheper-logo.png" alt="Logo" className="w-36 h-10 object-contain" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="text-gray-800 dark:text-white hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 dark:text-white hover:text-blue-600">
            About
          </Link>
          <Link href="/doctors" className="text-gray-800 dark:text-white hover:text-blue-600">
            All Doctors
          </Link>
          <Link href="/contact" className="text-gray-800 dark:text-white hover:text-blue-600">
            Contact Us
          </Link>
        </div>

        {/* Dark Mode Toggle & Auth Buttons */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {isDarkMode ? <CiLight className="text-xl text-yellow-500" /> : <MdDarkMode className="text-xl text-gray-900 dark:text-white" />}
          </button>

          {/* Authentication */}
          {user?.email ? (
            <Button onClick={handleLogout} className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Sign out
            </Button>
          ) : (
            <Link href="/signin">
              <Button className="bg-blue-600 text-white px-4 py-2 rounded-md">Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
