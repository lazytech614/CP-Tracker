"use client"

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { MenuIcon } from 'lucide-react'

import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent 
} from './ui/dropdown-menu'

const MainNav = () => {
  const pathname = usePathname()

  const { data: session, status } = useSession()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
      isProtected: false
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
      isProtected: false
    },
    {
      href: "/leaderboard",
      label: "Leaderboard",
      active: pathname === "/leaderboard",
      isProtected: false
    },
    {
      href: "/contests",
      label: "Contests",
      active: pathname === "/contests",
      isProtected: false
    }
  ]

  return (
    <nav className='flex justify-end flex-1 pr-2 md:block lg:pr-0'>
      <div className={cn("hidden md:flex items-center space-x-4")}>
        {routes.map((route) => {
          if (route.isProtected && status === "unauthenticated") return null
          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                route.active ? "text-black dark:text-white" : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          )
        })}
      </div>
      <div className='md:hidden'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuIcon className='w-4 sm:w-6 h-4 sm:h-6' />
          </DropdownMenuTrigger>
          <DropdownMenuContent className='flex flex-col gap-y-2 p-4'>
            {routes.map(route => (
              <Link 
                key={route.href}
                href={route.href}
                className={cn("capitalize text-sm font-medium transition-colors hover:text-primary", route.active ? "text-black dark:text-white" : "text-muted-foreground")}
                >
                  {route.label}
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default MainNav