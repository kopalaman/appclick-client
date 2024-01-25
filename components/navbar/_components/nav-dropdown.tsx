'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Blocks,
  BookOpen,
  Box,
  Building,
  Database,
  PanelsLeftBottom,
  Pen,
  TrendingUp,
  UsersRound,
} from 'lucide-react'

import { NavMenuItem } from '@/types/nav'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const navMenu: NavMenuItem[] = [
  {
    title: 'Products',
    children: [
      {
        label: 'Compliance platform',
        icon: <PanelsLeftBottom />,
        href: '/products/compliance-platform',
        description: 'Manage your compliance needs seamlessly',
      },
      {
        label: 'Analytics',
        icon: <TrendingUp className="text-green-500" />,
        href: '/products/analytics',
        description: 'Peak key insights',
      },
      {
        label: 'Storage',
        icon: <Database className="text-yellow-500" />,
        href: '/products/storage',
        description: 'Fast storage for your data',
      },
    ],
  },
  {
    title: 'Solutions',
    children: [
      {
        label: 'Enterprise',
        href: '/solutions/enterprise',
        icon: <Building className="text-blue-500" />,
        description: 'The complete platform for scale',
      },
    ],
  },
  {
    title: 'Resources',
    children: [
      {
        label: 'integrations',
        icon: <Blocks className="text-red-500" />,
        href: '/resources/integrations',
        description: 'Extend and automate workflow',
      },
      {
        label: 'Resource center',
        icon: <Box className="text-blue-500" />,
        href: '/resources/resource-center',
        description: 'Discover the best practices',
      },
      {
        label: 'Guides',
        icon: <BookOpen className="text-orange-500" />,
        href: '/resources/guides',
        description: 'Find help quickly',
      },
      {
        label: 'Blog',
        icon: <Pen className="text-pink-500" />,
        href: '/resources/blog',
        description: 'The latest from Appclick',
      },
      {
        label: 'Customers',
        icon: <UsersRound className="text-cyan-500" />,
        href: '/resources/customers',
        description: 'The teams we empower',
      },
    ],
  },
]

interface NavigationMenuDropdownProps {
  items?: NavMenuItem[]
}

export function NavigationMenuDropdown() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navMenu.map((menu) => (
          <NavigationMenuItem key={menu.title}>
            <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {menu.children?.map((item) => (
                  <ListItem
                    key={item.label}
                    href={item.href}
                    icon={item.icon}
                    title={item.label}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        {/* Other menu items like Documentation etc. */}
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    icon?: React.ReactNode
    title: string
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            {props.icon && (
              <span className="inline-block mr-2 text-muted-foreground">
                {props.icon}
              </span>
            )}
            <div className="flex flex-col space-y-2 items-start">
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
