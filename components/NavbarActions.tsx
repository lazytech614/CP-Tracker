"use client"

import React from 'react'

// import LogoutButton from './LogoutButton'
import { signOut, useSession } from 'next-auth/react'
import { ModeToggle } from './ModeToggle'
import Image from 'next/image'
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
        {session && (
          <Image
            src={`${session.user?.image!}`}
            alt={session.user.name as string}
            width={40}
            height={40}
            className='rounded-full'
          />
        )}
    </div>
  )
}

export default NavbarActions