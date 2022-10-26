import Link from "next/link"
import Image from "next/image"
import React { useState } from "react"
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
    const [nav, setNav] = useState(false)
    
    cost handleNav = () =>
       setNav(!nav)
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
            <ul className="flex hidden flex-row item-center">
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
            <ul className="flex hidden flex-row items-right">
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
        <div onClick= {handleNav}>
          {!nav ? <XMarkIcon size={20}/> : <Bars2Icon size={20} className="h-6 w-6 text-black"/>}
          
        </div>
        <div className="fixed left-0 top-0 w-[60] h-full border-r border-r-gray-900 bg-gray-500">
            <h1 className=" w-full text-3xl font-b text-black m-4">RunAsh</h1>
         <ul className="pt-24 uppercase p-4">
           <li className="p-4 border-b border-gray-600">Dashboard</li>
           <li className="p-4 border-b border-gray-600">Account</li>
         </ul>
        </div>
        </div>
        </div>
        </main>
    );
    }
