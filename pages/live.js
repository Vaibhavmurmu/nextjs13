import Link from 'next/link'


export default function Live() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <input type="datetime-local" className="rounded text-pink-500" />
             <input type="text" className="rounded text-pink-500" />
             <input type="date" className="rounded text-pink-500" />
            </div>
        </div>

        )
    }
