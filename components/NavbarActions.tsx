"use client"

import React from 'react'

import LogoutButton from './LogoutButton'
import { useSession } from 'next-auth/react'
import { ModeToggle } from './ModeToggle'

const NavbarActions = () => {
  const { data: session } = useSession();

  return (
    <div className='ml-auto flex items-center gap-x-4'>
        <ModeToggle />
        {session ? <LogoutButton /> : null}
    </div>
  )
}

export default NavbarActions