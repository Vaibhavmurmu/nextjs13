import Link from "next/link"
import Image from "next/image"
import { Bars2Icon, XMarkIcon} from '@heroicons/react/24/solid'

export default function Navbar() {
    return (
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
            <div className="flex h-24 w-full items-center justify-between mx-auto px-4">
                <text className="text-1xl font-normal text-black mt-1 w-60 h-6">
                    <p className="text-1xl font-normal">Welcome to RunAsh &rarr;</p>
                </text>
            </div>
        <div className="flex flex-row items-center justify-between w-full h-4 px-20 py-4">
        <div className="flex flex-row items-center">
            <h1 className="text-3xl font-b">RunAsh</h1>
        </div>
        <div className="flex flex-row item-center space-x-4">
            <ul className="flex flex-row item-center">
                <li className="p-4 mr-12">
                    <Link href="/live">
                        <a className="text-lg font-n px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Live</a>
                    </Link>
                </li>
                <li className=" p-4 mr-12">
                    <Link href="/sell">
                        <a className="text-lg font-n px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Sell</a>
                    </Link>
                </li>
                <li className="p-4 mr-12">
                    <Link href="/buy">
                        <a className="text-lg font-n px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 ">Buy</a>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="flex flex-row items-right">
            <ul className="flex  flex-row items-right">
            <li className="p-4 mr-12">
                <Link href="/watch">
                <a className="text-lg font-n px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Watch</a>
                </Link>
            </li>
            <li className="p-4 mr-12">
                <Link href="/login">
                <a className="text-lg font-n px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Login</a>
                </Link>
            </li>
            <li className="p-4 mr-12">
                <Link href="/js-form">
                <a className="text-lg font-n px-3 py-2"><button className="bg-orange-600 text-white hover:bg-white hover:text-black font-n py-1 px-3 rounded mt-0">Sign Up</button></a>
                </Link>
            </li>
            </ul>
          <Bars2Icon className="p-4 mr-12"/>
        </div>
        </div>
    </main>
  );
}

