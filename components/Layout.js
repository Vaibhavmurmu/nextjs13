import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <nav className="flex w-full justify-center bg-gray-800 text-white">
            <div className="flex flex-row justify-between w-full px-4 py-3">
            <div className="flex flex-row justify-between">
                <Link href="/">
                <a className="text-2xl font-bold">Live Retail Streaming</a>
                </Link>
            </div>
            <div className="flex flex-row justify-between">
                <Link href="/about">
                <a className="text-xl font-bold">About</a>
                </Link>
            </div>
            </div>
        </nav>
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            {children}
        </main>
        </div>
    );
    }