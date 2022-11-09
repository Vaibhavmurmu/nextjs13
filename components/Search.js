import Link from 'next/link'

export default function Search() {
    return (
        <div className="mt-6">
            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search" />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            </button>
        </div>
    )
}