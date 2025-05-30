'use client'

import Link from 'next/link'
import Menu from './Menu'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
const user = true

  return (
    <div className="h-12 flex items-center justify-between px-4 border-b-2 border-b-red-500 text-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1 ">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="text-2xl font-bold flex-1 md:text-center">
        <Link href="/">Massimo</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
       <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className='md:absolute top-3 right-2  lg:static flex items-center gap-2 cursor-pointer bg-orange-300 text-orange-600 px-1 rounded-md'>
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>+1 234 456 789</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon/>
      </div>
    </div>
  )
}

export default Navbar
