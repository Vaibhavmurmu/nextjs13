import Link from "next/link";


export default function Navbar() {
    return (
        <main className="flex w-full flex-1 flex-col items-center justify-centre px-20 text-center">
            <div className="flex h-20 w-full items-center justify-center border-b">
                <text className="text-1xl font-normal text-black mt-1 w-60 h-6">
                    <p className="text-1xl font-normal">Welcome to RunAsh &rarr;</p>
                </text>
            </div>
        <div className="flex flex-row items-center justify-between w-full px-6 py-4 border-b border-collapse scroll-sticky border-hidden overflow-x-hidden">
        <div className="flex flex-row items-center">
            <img
            src="/"
            alt=""
            className="w-10 h-10 mr-2 cursor-pointer"
            />
            <h1 className="text-2xl font-n">RunAsh</h1>
        </div>
        <div className="flex flex-row item-centre">
            <ul className="flex flex-row item-centre">
                <li className="mr-10">
                    <Link href="/live">
                        <a className="text-lg font-n">Live</a>
                    </Link>
                </li>
                <li className="mr-10">
                    <Link href="/sell">
                        <a className="text-lg font-n">Sell</a>
                    </Link>
                </li>
                <li className="mr-10">
                    <Link href="/buy">
                        <a className="text-lg font-n">Buy</a>
                    </Link>
                </li>
                <li className="mr-10">
                    <Link href="/watch">
                        <a className="text-lg font-n">Watch</a>
                    </Link>
                </li>
                <li className="mr-10">
                    <Link href="/schedule">
                        <a className="text-lg font-n">Schedule </a>
                    </Link>
                </li>
                <li className="mr-10">
                    <Link href="/influencer">
                        <a className="text-lg font-n">Influencer</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="flex flex-row items-right">
            <ul className="flex flex-row items-right">
            <li className="mr-10">
                <Link href="/support">
                <a className="text-lg font-n">Support</a>
                </Link>
            </li>
            <li className="mr-10">
                <Link href="/login">
                <a className="text-lg font-n">Login</a>
                </Link>
            </li>
            <li className="mr-10">
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