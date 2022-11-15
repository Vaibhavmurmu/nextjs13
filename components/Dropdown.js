import Link from 'next/link'
import { Menu } from '@headlessui/react'

export default function Dropdown() {
    return (
        <div className="flex flax-row">
      <Menu>
        <Menu.Button>More</Menu.Button>
        <Menu.Items>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500 mt-1'}`}
                href="/account-settings"
              >
                Account settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active && 'bg-blue-500 mt-1'}`}
                href="/account-settings"
              >
                Documentation
              </a>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <span className="opacity-75 mt-1">Invite(coming soon!)</span>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
    )
  }
  
