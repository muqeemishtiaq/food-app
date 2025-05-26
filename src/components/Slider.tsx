'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    title: "Always fresh & always crispy & always hot",
    img: "/slide1.png"
  },
  {
    id: 2,
    title: "We deliver your order wherever you are in NY",
    img: "/slide2.png"
  },
  {
    id: 3,
    title: "The best pizza to share with your family",
    img: "/slide3.jpg"
  }
]

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSlideIndex(prev => (prev + 1) % data.length)
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [])

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
      <div className=' flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold md:p-10  lg:w-1/2'>
        <h1 className='text-5xl text-center uppercase p-4'>{data[slideIndex].title}</h1>
        <button className='bg-red-500 text-white py-4 px-8 md:text-6xl xl:text-7xl'>Order Now</button>
      </div>
      <div className='w-full h-1/2 relative lg:h-full lg:w-1/2'>
  <Image src={data[slideIndex].img} alt="Slide" fill className='object-cover' />
</div>
    </div>
  )
}

export default Slider
