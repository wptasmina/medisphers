import Link from "next/link";

export default function NavBar() {
    return (
        <div className="navbar bg-base-300/90 shadow-sm sticky top-0 z-50 backdrop:blur-lg">
            <div className="w-11/12 mx-auto ">
                <div className="navbar-start p-0 h-8">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="mr-2 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href="/" className="btn btn-ghost">Home</Link></li>
                            <li><Link href="/about" className="btn btn-ghost">About</Link></li>
                            <li><Link href="/doctors" className="btn btn-ghost">All Doctor</Link></li>
                            <li><Link href="/contact" className="btn btn-ghost">Contact Us</Link></li>
                        </ul>
                    </div>
                    <Link href="/">
                        <img src="/Medisheper-logo.png" alt="Logo" className=" w-32 h-12 object-cover p-1 md:p-0" />
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href="/" className="hover:text-[#022dbb] font-medium text-lg focus:text-[#022dbb]">Home</Link></li>
                            <li><Link href="/about" className="hover:text-[#022dbb] font-medium text-lg focus:text-[#022dbb]">About</Link></li>
                            <li><Link href="/doctor" className="hover:text-[#022dbb] font-medium text-lg focus:text-[#022dbb]">All Doctor</Link></li>
                            <li><Link href="/contact" className="hover:text-[#022dbb] font-medium text-lg focus:text-[#022dbb]">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <button className="px-4 py-2 font-medium text-lg bg-[#022dbb] text-white rounded-md">
                            <Link href="/auth/signin">Login</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
