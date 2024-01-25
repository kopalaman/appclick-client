'use client'

import { NavMenuItem } from '@/types/nav'

import { Logo } from './logo'
import { NavigationMenuDropdown } from './nav-dropdown'

interface NavMenuItemProps {
  items?: NavMenuItem[]
}

export default function NavMenu({ items }: NavMenuItemProps) {
  return (
    <div className="flex items-center gap-4 md:gap-8">
      <Logo />
      <div className="hidden shrink-0 items-center lg:flex">
        <NavigationMenuDropdown />
      </div>
    </div>
  )
}
