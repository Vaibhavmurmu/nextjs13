import Link from 'next/link'
import { Menu } from '@headlessui/react'

export default function Dropdown() {
    return (
        <div className="top-8 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-centre rounded-md bg-white bg-opacity-20 px-2 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">More</Menu.Button>
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
         <div className="px-1 py-1"> 
        <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500 text-white text-gray-900  group flex w-full item-centre rounded-md px-2 py-2 text-sm mt-1 flex flex-col'}`}
                href="/account-settings"
              >
                Account 
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500 mt-1 flex flex-col'}`}
                href="/account-settings"
              >
                Schedule
              </a>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <span className="opacity-75 mt-1 flex flex-col">Watch</span>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
    )
  }
  
