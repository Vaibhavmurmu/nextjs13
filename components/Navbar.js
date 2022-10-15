import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <main className="flex w-full flex-1 flex-col items-center justify-centre px-20 text-center">
            <div className="flex h-20 w-full items-center justify-center">
                <text className="text-1xl font-normal text-black mt-1 w-60 h-6">
                    <p className="text-1xl font-normal">Welcome to RunAsh &rarr;</p>
                </text>
            </div>
        <div className="flex flex-row items-center">
        <div className="flex flex-row items-centre">
            <image
            src="/"
            alt=""
            className="w-10 h-10 mr-2 cursor-pointer"
            />
            <h1 className="text-2xl font-b">RunAsh</h1>
        </div>
        <div className="flex flex-row item-centre space-x-4">
            <ul className="flex flex-row item-centre">
                <li className="mr-10">
                    <Link href="/live">
                        <a className="text-lg font-n px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Live</a>
                    </Link>
                </li>
                <li className="mr-10">
                    <Link href="/sell">
                        <a className="text-lg font-n px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Sell</a>
                    </Link>
                </li>
                <li className="mr-10">
                    <Link href="/buy">
                        <a className="text-lg font-n px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 ">Buy</a>
                    </Link>
                </li>
                <li className="mr-10">
                    <Link href="/watch">
                        <a className="text-lg font-n px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Watch</a>
                    </Link>
                </li>
                <li className="mr-10">
                    <Link href="/schedule">
                        <a className="text-lg font-n px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Schedule </a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="flex flex-row items-right">
            <ul className="flex flex-row items-right">
            <li className="mr-10">
                <Link href="/support">
                <a className="text-lg font-n px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Support</a>
                </Link>
            </li>
            <li className="mr-10">
                <Link href="/login">
                <a className="text-lg font-n px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Login</a>
                </Link>
            </li>
            <li className="mr-10">
                <Link href="/signup">
                <a className="text-lg font-n px-3 py-2"><button className="bg-orange-600 text-white hover:text-white font-n py-1 px-4 rounded mt-0">Sign Up</button></a>
                </Link>
            </li>
            </ul>
        </div>
        </div>
        </main>
    );
    }
