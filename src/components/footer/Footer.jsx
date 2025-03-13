
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#010104] text-gray-300 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-100">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                News
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Products</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-100">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Kids
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Accessories
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-100">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-100">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 flex justify-end">
          <Link href="/" className="flex items-start space-x-2" prefetch={false}>      
            <span className="text-lg font-semibold">Medispheres Inc</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

