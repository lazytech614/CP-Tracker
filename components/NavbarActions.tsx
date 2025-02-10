"use client"

import React from 'react'
import LogoutButton from './LogoutButton'
import { useSession } from 'next-auth/react'

const NavbarActions = () => {
  const { data: session } = useSession();

  return (
    <div className='ml-auto flex items-center gap-x-4'>
        {session ? <LogoutButton /> : null}
    </div>
  )
}

export default NavbarActions