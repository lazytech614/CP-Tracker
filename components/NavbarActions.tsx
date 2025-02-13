"use client"

import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'

const NavbarActions = () => {
  const { data: session } = useSession();

  return (
    <div className='ml-auto flex items-center gap-x-4'>
        <ModeToggle />
        {session ? 
          <Button 
            variant="outline" 
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Log out
          </Button> 
          : 
          null}
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            alt={session.user.name || "User"}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : null}
    </div>
  )
}

export default NavbarActions