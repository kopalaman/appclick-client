import Link from 'next/link'

import { Icons } from '@/components/icons'

export const Logo = () => {
  return (
    <div>
      <Link href={'/'}>
        <span className="font-bold inline-block text-xl">Appclick web</span>
      </Link>
    </div>
  )
}
