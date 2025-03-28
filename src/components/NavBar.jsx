"use client";

import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import { toast, ToastContainer } from "react-toastify";


export default function NavBar() {
  const { user, logout } = useAuth();
  // console.log(user?.name);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast.success("Successfully logged out!", { position: "top-right" });

    router.push("/signin");
  };

  // Dark and Light mode implementation (GLOBAL)
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
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
  <div>
  <ToastContainer />
    <div className="navbar bg-base-300/90 shadow-sm dark:bg-base-600/90 sticky dark:text-[#022dbb] top-0 z-50 backdrop:blur-lg">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div className="navbar-start p-0 h-8">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-600 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  href="/"
                  className="hover:text-[#022dbb] font-medium text-lg focus:text-[#022dbb]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#022dbb] font-medium text-lg focus:text-[#022dbb]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="hover:text-[#022dbb] font-medium text-lg focus:text-[#022dbb]"
                >
                  All Doctor
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#022dbb] font-medium text-lg focus:text-[#022dbb]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/">
            <img
              src="/Medisheper-logo.png"
              alt="Logo"
              className=" w-32 h-12 object-cover p-1 md:p-0"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="/"
                className="hover:text-[#022dbb] font-medium text-lg focus:text-[#022dbb]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#022dbb] font-medium text-lg focus:text-[#022dbb]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/doctors"
                className="hover:text-[#022dbb] font-medium text-lg focus:text-[#022dbb]"
              >
                All Doctor
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#022dbb] font-medium text-lg focus:text-[#022dbb]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <div className="border border-blue-100 rounded-full p-1 bg-blue-50  hover:bg-gray-200">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <div className="text-2xl">
                {isDarkMode ? <CiLight /> : <MdDarkMode />}
              </div>
            </label>
          </div>
          <div>
            {user && user?.email ? (
              <Button
                onClick={handleLogout}
                className="px-4 py-2 font-medium text-lg bg-[#022dbb] text-white rounded-md"
              >
                Sign out
              </Button>
            ) : (
              <Button className="px-4 py-2 font-medium md:text-lg text-sm bg-[#022dbb] text-white rounded-md">
                <Link href="/signin">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
