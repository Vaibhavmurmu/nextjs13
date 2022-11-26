import Link from 'next/link'
import Image from 'next/image'
import { PlayIcon, FilmIcon, VideoCameraIcon, PlayPauseIcon,Squares2X2Icon,RadioIcon,DocumentTextIcon,ChatBubbleLeftEllipsisIcon } from '@heroicons/react/20/solid'

export default function Dashboard() {
    return (
        <div className="mt-1 min-h-screen grid grid-cols-3 border-r border-inherit flex-cols-3 divide w-64 divide-inherit h-96 items-center justify-center py-20">
            <ul className='mt-2  h-full w-64 py-16 px-12 text-left'>
                <li className=' flex flex-1 gap-4 mt-2 py-2 text-b'>
                <Squares2X2Icon className=" h-6 w-6  border rounded-md bg-gray-100" />
                <Link href="/" >
                    <a>Dashboard</a>
                    </Link>
                </li>
                <li className=' flex flex-1 gap-3 mt-2 py-2 text-b'>
                <DocumentTextIcon className=" h-6 w-6 border rounded-md bg-gray-100" />
                <Link href="/">
                    <a>Overview</a>
                </Link>
                </li>
                <li className='flex flex-1 gap-3 mt-2 py-2 text-b'>
                <FilmIcon className=" h-6 w-6 border rounded-md bg-gray-100" /> 
                <Link href="/">
                 <a>Channel</a>
                 </Link>
                </li>
                <li className=' flex flex-1 gap-3 mt-2 py-2 text-b'>
                <PlayIcon className='h-6 w-6 border rounded-md bg-gray-100'  />
                <Link href="/">
                    <a>Go Live</a>
                    </Link>
                </li>
                <li className=' flex flex-1 gap-3 mt-2 py-2 text-b'>
                 <VideoCameraIcon className='h-6 w-6 border rounded-md bg-gray-100' />
                 <Link href="/">
                    <a>Live Stream</a>
                    </Link>
                </li>
                <li className=' flex flex-1 gap-3 mt-2 py-2 text-b'>
                <ChatBubbleLeftEllipsisIcon className='h-6 w-6 border rounded-md bg-gray-100' />
                <Link href="/">
                    <a>Stream Chat</a>
                    </Link>
                </li>
                <li className='flex flex-1 gap-3 mt-2 py-2 text-b'>
                <PlayPauseIcon className='h-6 w-6 border rounded-md bg-gray-100' />
                <Link href="/">
                    <a>Room</a>
                    </Link>
                </li>
            </ul>
        </div>
        )
    }
