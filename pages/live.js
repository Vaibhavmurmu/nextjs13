import Link from 'next/link'
import Scroll from '../components/Scroll'
import Dropdown from '../components/Dropdown'
import Menu from '../components/Menu'
import Switch from '../components/Switch'




export default function Live() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <Scroll />
            </div>

            <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <Dropdown />
            </div>

            <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
            <Menu />
            </div>

            <div className="mt-16 ">
            <Switch />
            </div>

            <div className="">
            
            </div>
        </div>

        )
    }
