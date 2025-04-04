import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#eeeefc] dark:bg-gray-900 text-gray-500 py-10">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 text-left">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <img
              src="/Medisheper-logo.png"
              alt="Medishepere Logo"
              className="md:w-40 w-32 mx-auto md:mx-0 mb-4"
            />
            <p className="text-xs sm:text-sm">
              Medishepere – Your trusted hospital management system for seamlesshealthcare.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold text-gray-400 mb-3">Quick Links</h2>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/" className="hover:text-blue-600 font-medium">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-600 font-medium">About Us</Link></li>
              <li><Link href="/doctors" className="hover:text-blue-600 font-medium">Services</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 font-medium duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-bold text-gray-400 mb-3">Resources</h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li><a href="#" className="hover:text-blue-600 duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600 duration-300">Community</a></li>
              <li><a href="#" className="hover:text-blue-600 duration-300">Support</a></li>
              <li><a href="#" className="hover:text-blue-600 duration-300">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="min-w-68 md:min-w-0 font-medium">
            <h2 className="text-lg font-bold text-gray-400 mb-3">Contact Us</h2>
            <p className="text-xs sm:text-sm inline-flex gap-1 items-center"><MapPin className="text-[#022dbb] dark:text-gray-400 text-sm" /> 123, Medishepere Street, Dhaka, Bangladesh</p>
            <p className="text-xs sm:text-sm inline-flex gap-1 items-center"><Phone className="text-[#022dbb] dark:text-gray-400 text-sm" /> +880 1234 567 890</p>
            <p className="text-xs sm:text-sm inline-flex gap-1 items-center"><Mail className="text-[#022dbb] dark:text-gray-400 text-sm" /> support@medishepere.com</p>
            <div className="flex justify-start mt-4 space-x-4">
              <Link href="https://www.facebook.com" className="text-[#022dbb] dark:text-gray-400 text-2xl">
                <Facebook />
              </Link>
              <Link href="https://x.com/login?" className="text-[#022dbb] dark:text-gray-400 text-2xl">
                <Twitter />
              </Link>
              <Link href="https://www.linkedin.com" className="text-[#022dbb] dark:text-gray-400 text-2xl">
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4">
          <div className="text-center border-t border-gray-300 dark:border-gray-700  mt-8 pt-4 text-xs sm:text-sm">
            <p>© {new Date().getFullYear()} Medishepere. All Rights Reserved.</p>
          </div>

          <div className="text-center">
            <ul className="text-xs sm:text-sm flex justify-center md:gap-4 gap-2">
              <li>
                <Link href="#" className="text-[#022dbb] dark:text-gray-400">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="text-[#022dbb] dark:text-gray-400 border-l-2 md:pl-4 pl-2 border-[#022dbb]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[#022dbb] dark:text-gray-400 border-l-2 md:pl-4 pl-2 border-[#022dbb]">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
