import Link from "next/link";


export default function Navbar() {
    return (
        <main className="flex w-full flex-1 flex-col items-center justify-centre px-20 text-center">
        <div className="flex flex-row items-center justify-between w-full px-6 py-4">
        <div className="flex flex-row items-center">
            <img
            src="/"
            alt="logo"
            className="w-10 h-10 mr-2 cursor-pointer"
            />
            <h1 className="text-2xl font-n">RunAsh</h1>
            </div>
        <div className="flex flex-row item-centre">
            <ul className="flex flex-row item-centre">
                <li className="mr-4">
                    <Link href="/live">
                        <a className="text-lg font-n">Live</a>
                    </Link>
                </li>
                <li className="mr-5">
                    <Link href="/sell">
                        <a className="text-lg font-n">Sell</a>
                    </Link>
                </li>
                <li className="mr-5">
                    <Link href="/buy">
                        <a className="text-lg font-n">Buy</a>
                    </Link>
                </li>
                <li className="mr-5">
                    <Link href="/watch">
                        <a className="text-lg font-n">Watch</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="flex flex-row items-center">
            <ul className="flex flex-row items-right">
            <li className="mr-4">
                <Link href="/support">
                <a className="text-lg font-n">Support</a>
                </Link>
            </li>
            <li className="mr-4">
                <Link href="/login">
                <a className="text-lg font-n">Login</a>
                </Link>
            </li>
            <li className="mr-4">
                <Link href="/signup">
                <a className="text-lg font-n">Sign Up</a>
                </Link>
            </li>
            </ul>
        </div>
        </div>
        </main>
    );
    }