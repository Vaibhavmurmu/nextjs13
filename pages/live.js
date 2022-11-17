import Link from 'next/link'


export default function Live() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <input type="text" className="rounded text-pink-500" />
            <input type="password" className="rounded text-pink-500" /
            <input type="email" className="rounded text-pink-500" />
            <input type="number" className="rounded text-pink-500" />
            <input type="url" className="rounded text-pink-500" />
             <input type="date" className="rounded text-pink-500" />
             <input type="datetime-local" class="rounded text-pink-500" />
             <input type="month="rounded text-pink-500" />
             <input type="week" className="rounded text-pink-500" />
             <input type="time" className="rounded text-pink-500" />
             <input type="search" className="rounded text-pink-500" />
             <input type="tel" className="rounded text-pink-500" />
             <input type="checkbox" className="rounded text-pink-500" />
             <input type="radio" className="rounded text-pink-500" />
             <input type="select" className="rounded text-pink-500" />
             <select  type="multiple" className="rounded text-pink-500" />
             <input type="textarea" className="rounded text-pink-500" />
            </div>
        </div>

        )
    }
