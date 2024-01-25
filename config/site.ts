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

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Next.js',
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
  navMenu: [
    {
      title: 'Products',
      children: [
        {
          lable: 'Compliance platform',
          icon: typeof PanelsLeftBottom,
          href: '/products/compliance-platform',
          description: 'Manage your compliance needs seamlessly',
        },
        {
          lable: 'Analytics',
          icon: typeof TrendingUp,
          href: '/products/analytics',
          description: 'Peak key insights',
        },
        {
          lable: 'Storage',
          icon: typeof Database,
          href: '/products/storage',
          description: 'Fast storage for your data',
        },
      ],
    },
    {
      title: 'Solutions',
      children: [
        {
          lable: 'Enterprise',
          href: '/solutions/enterprise',
          icon: typeof Building,
          description: 'The complete platform for scale',
        },
      ],
    },
    {
      title: 'Resources',
      children: [
        {
          lable: 'integrations',
          icon: typeof Blocks,
          href: '/resources/integrations',
          description: 'Extend and automate workflow',
        },
        {
          lable: 'Resource center',
          icon: typeof Box,
          href: '/resources/resource-center',
          description: 'Discover the best practices',
        },
        {
          lable: 'Guides',
          icon: typeof BookOpen,
          href: '/resources/guides',
          description: 'Find help quickly',
        },
        {
          lable: 'Blog',
          icon: typeof Pen,
          href: '/resources/blog',
          description: 'The latest from Appclick',
        },
        {
          lable: 'Customers',
          icon: typeof UsersRound,
          href: '/resources/customers',
          description: 'The teams we empower',
        },
      ],
    },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
}
