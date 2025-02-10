import React from 'react'
import Container from './ui/container'

const Footer = () => {
  return (
    <footer className='h-16 flex items-center px-4 sm:px-6 lg:px-8 border-t'>
      <Container>
        <p className='text-center text-sm leading-6 text-muted-foreground'>
          &copy; {new Date().getFullYear()} CP Tracker. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer