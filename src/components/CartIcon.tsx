import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <div >
      <Link href="/cart" className='display flex items-center gap-3'>
      <div className='relative w-8 h-8 md:w-5 md:h-5'>
        <Image src="/cart.png" alt="" fill={true}/>
        </div>
        <span>Cart (3)</span>
        </Link>
    </div>
  )
}

export default CartIcon
