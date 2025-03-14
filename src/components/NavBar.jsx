import Link from "next/link";

export default function NavBar() {
    return (
        <div className="navbar bg-base-300 shadow-sm">
            <div className="w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href="/" className="btn btn-ghost">Home</Link></li>
                            <li><Link href="/about" className="btn btn-ghost">About</Link></li>
                            <li><Link href="/doctor" className="btn btn-ghost">All Doctor</Link></li>
                            <li><Link href="/contact" className="btn btn-ghost">Contact Us</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">MediSphere</a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href="/" className="btn btn-ghost">Home</Link></li>
                            <li><Link href="/about" className="btn btn-ghost">About</Link></li>
                            <li><Link href="/doctor" className="btn btn-ghost">All Doctor</Link></li>
                            <li><Link href="/contact-us" className="btn btn-ghost">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        {/* <a className="btn">Login</a> */}
                        <button className="btn">
                            <Link href="/auth/signin">Login</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
