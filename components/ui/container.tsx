import React from 'react'

interface ContainerProps {
    children: React.ReactNode
}

const Container:React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='mx-auto max-w-8xl'>
        {children}
    </div>
  )
}

export default Container