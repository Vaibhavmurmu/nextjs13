import Link from 'next/link'
import { Menu } from '@headlessui/react'

export default function Dropdown() {
    return (
        <div className="top-8 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-centre rounded-md bg-white bg-opacity-20 px-2 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">More</Menu.Button>
        <Menu.Items>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500 mt-1 flex flex-col'}`}
                href="/account-settings"
              >
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500 mt-1 flex flex-col'}`}
                href="/account-settings"
              >
                On site schedule
              </a>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <span className="opacity-75 mt-1 flex flex-col">Schedule</span>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
    )
  }
  
