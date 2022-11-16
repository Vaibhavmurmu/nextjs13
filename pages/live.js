import Link from 'next/link'
import Simpledropdown from '../components/Simpledropdown'

export default function Live() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <Simpledropdown />
            </div>
        </div>

        )
    }
