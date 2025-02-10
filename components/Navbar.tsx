import React from 'react'
import Link from 'next/link'

import Container from '@/components/ui/container'
import MainNav from '@/components/MainNav'
import NavbarActions from '@/components/NavbarActions'

const Navbar = () => {
  return (
    <header className='border-b'>
      <Container>
        <div className='h-16 flex items-center px-4 sm:px-6 lg:px-8'>
          <Link href={'/'} className='font-bold text-3xl'>CP Tracker</Link>
          {/* <MainNav /> */}
          <NavbarActions />
        </div>
      </Container>
    </header>
  )
}

export default Navbar