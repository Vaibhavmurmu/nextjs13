import Link from "next/link";


export default function Navbar() {
    return (
        <div className="flex flex-row items-center justify-between w-full px-6 py-4">
        <div className="flex flex-row items-center">
            <img
            src="/logo.png"
            alt="logo"
            className="w-10 h-10 mr-2"
            />
            <h1 className="text-2xl font-bold">Live Retail</h1>
        </div>
        <div className="flex flex-row items-center">
            <ul className="flex flex-row items-center">
            <li className="mr-4">
                <Link href="/about">
                <a className="text-lg font-bold">About</a>
                </Link>
            </li>
            <li className="mr-4">
                <Link href="/login">
                <a className="text-lg font-bold">Login</a>
                </Link>
            </li>
            <li className="mr-4">
                <Link href="/register">
                <a className="text-lg font-bold">Register</a>
                </Link>
            </li>
            </ul>
        </div>
        </div>
    );
    }