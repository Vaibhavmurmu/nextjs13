import Link from "next/link"
import Image from "next/image"

export default function Scroll() {
    return (
        <div className="">
        <div className="flex snap-x scroll-pl-6">
          <div className="scroll-ml-6 snap-start mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white">
           <img src="vercel.svg" width=""  height="" />
        </div>
       <div className="scroll-ml-6 snap-start mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white">
          <img src="vercel.svg" />
       </div>
       <div className="scroll-ml-6 snap-start mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white">
        <img src="vercel.svg" />
       </div>
       <div className="scroll-ml-6 snap-start mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white">
         <img src="vercel.svg" />
       </div>
       <div className="scroll-ml-6 snap-start mt-6 w-96 rounded-xl border p-6 text-left focus:text-black shadow-lg shadow-white">
         <img src="vercel.svg" />
       </div>
    </div>
    </div>

    )
}