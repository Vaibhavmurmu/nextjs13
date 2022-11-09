import Link from 'next/link'

export default function Button() {
    return (
        <div className="flex gap-4 flex-cols-2 mt-10 max-w-2xl flex-wrap items-center justify-around">
        <button className="bg-black text-white hover:text-orange-600 hover:bg-white hover:border-orange-600 font-medium py-4 px-14 rounded-lg mt-10 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
          <Link href="/register">
            <a>Go live stream</a>
         </Link>
        </button>
        <button className="bg-black text-white hover:bg-white hover:text-orange-600 hover:border-orange-600 font-medium py-4 px-14 rounded-lg mt-10 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
          <Link href="/register">
            <a>Watched live</a>
          </Link>
        </button>
        </div>     
    )
}