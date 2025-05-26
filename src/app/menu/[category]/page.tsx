import React from 'react'
import { pizzas } from '@/data'
import Link from 'next/link'
import Image from 'next/image'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap gap-3'>
      {pizzas.map((item) => (
        <Link
          key={item.id}
          href={`/product/${item.id}`}
          className='w-full sm:w-[47%] lg:w-[32%] h-[50vh] bg-white rounded-md shadow-md border-r-2 border-b-2 border-red-500 p-3 flex flex-col justify-between group even:bg-fuchsia-50'
        >
          {item.img && (
            <div className='relative w-full h-90 mb-2'>
              <Image src={item.img} alt={item.title} fill className='object-contain' />
            </div>
          )}
          <div>
            <div className='flex items-center justify-between mb-2'>
              <h1 className='text-xl font-bold'>{item.title}</h1>
              <h2 className='text-base font-bold text-red-500 group-hover:hidden'>${item.price}</h2>
              <button className='hidden group-hover:block uppercase bg-red-500 text-white text-sm px-2 py-1 rounded-md'>
                Add to Cart
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage
