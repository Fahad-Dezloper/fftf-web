import { NotchNav } from '@/components/ui/notch-nav'
import Image from 'next/image'
import Link from 'next/link'
import react from 'react'

export default function TopBar() {
    const navItems = [
        {
            label: 'Home',
            value: '/'
        },
        {
            label: 'About',
            value: '/about'
        },
        {
            label: 'Contact',
            value: '/contact'
        },
        {
            label: 'Blog',
            value: '/blog'
        },
    ]

    const items = [
      { value: "home", label: "Home" },
      { value: "projects", label: "Projects" },
      { value: "library", label: "Library" },
      { value: "settings", label: "Settings" },
    ]


  return (
    <div className="w-full h-full flex items-center justify-between">
      <div>
        <Image src="/Logo/Logo.svg" alt="Logo" width={100} height={100} className='w-36 h-36' />
       </div>

       <div className='flex gap-8 font-medium text-xl'>
        {/* {navItems.map((item) => (
            <Link key={item.href} href={item.href} className='hover:text-primary transition-all duration-300'>
                {item.label}
            </Link>
        ))} */}
        <NotchNav items={navItems} defaultValue="Home" ariaLabel="Site" />
      </div>

      <div>
        <Image src="/Logo/Saag.png" alt="Logo" width={100} height={100} className='w-28 h-28' />
       </div>
    </div>
  )
}