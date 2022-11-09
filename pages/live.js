import Link from 'next/link'
import Scroll from '../components/Scroll'



export default function Live() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <h1 className="text-6xl font-n">
                Creat your live stream
            </h1>
            <Scroll />
        </div>
        )
    }
