import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-12 md:h-24 flex items-center justify-between px-4 lg:px-20 xl:px-40 text-red-500 uppercase'>
      <Link href="/" className='font-bold text-lg'>MASSIMO</Link>
      <p>&copy;  All rights reserved</p>
    </footer>
  )
}

export default Footer
