import Link from "next/link"
import { Bars2Icon, XMarkIcon} from '@heroicons/react/24/solid'

export default function Navbar() {
    return (
        <main className="flex w-full flex-1 flex-col items-center justify-center px-21 text-center sm:w-full">
        <div className=" mt-6 max-w-10xl flex-wrap items-center justify-around sm:w-full fixed flex-row bg-natural-50 backdrop-blur-sm shadow-sm opecity-25 blur-none h-8 px-20 py-16 hidden md:flex sm:w-full ">
        <div className="flex flex-row items-left">
            <h1 className="text-3xl font- p-4 mr-0">RunAsh</h1>
        </div> 
        <div className="flex flex-row item-center">
            <ul className="flex flex-row item-center">
                <li className="p-4 mr-1">
                    <Link href="/live">
                        <a className="text-lg font-n px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 hover:text-black">Live</a>
                    </Link>
                </li>
                <li className=" p-4 mr-1">
                    <Link href="/sell">
                        <a className="text-lg font-n px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 hover:text-black">Sell</a>
                    </Link>
                </li>
                <li className="p-4 mr-1">
                    <Link href="/buy">
                        <a className="text-lg font-n px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 hover:text-black">Buy</a>
                    </Link>
                </li>
                <li className="p-4 mr-1">
                    <Link href="/watch">
                        <a className="text-lg font-n px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 hover:text-black">Watch</a>
                    </Link>
                </li>
                <li className="p-4 mr-1">
                    <Link href="/sechedul">
                        <a className="text-lg font-n px-3 py-2 text-slate-600 rounded-lg hover:bg-slate-100 hover:text-black">Schedule</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="flex flex-row items-center">
            <ul className="flex  flex-row items-center">
            <li className="p-4 mr-1">
                <Link href="/login">
                <a className="text-lg font-n px-3 py-2"><button className="bg-white text-slate-600 hover:bg-white border rounded-lg hover:border-black font-n py-1 px-3 mt-0">Login</button></a>
                </Link>
            </li>
            <li className="p-4 mr-1">
                <Link href="/js-form">
                <a className="text-lg font-n px-3 py-2"><button className="bg-orange-600 text-white hover:text-orange-600 hover:bg-white hover:border-orange-600 font-n py-1 px-3  border rounded-lg mt-0">Sign Up</button></a>
                </Link>
            </li>
            </ul>
        </div>
        </div>
    </main>
  );
}

