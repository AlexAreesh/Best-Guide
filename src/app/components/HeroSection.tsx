import React from 'react'
import Image from 'next/image'
function HeroSection() {
  return (
    <>
      
    <section className=' flex items-center  justify-center  h-screen pb-32  bg-cover  opacity-90 bg-blur-sm
    '>
        <div className='inline-block justify-center lefttext  bigtextanimation absolute xl:relative text-center sm:text-center content-center orange_gradient '>

        <h1 className='text-6xl font-outfit font-extrabold'>
            The BEST </h1> <br />
        <h1 className='text-6xl font-outfit font-extrabold'>
            GUIDE</h1> <br />
        <h1 className='text-4xl font-outfit font-extrabold'>
            For Places and Restaurants in Karachi</h1> 

            <h1 className='text-xl  font-serif pt-8 text-slate-600'>
            Discover Hidden Culinary Gems Near You!
            <br /> Here's the Best Guide for YOu!</h1>
        </div>
        <div className="xl:visible imageanimation invisible text-center">
            <Image src={'/images/img.gif'}
            height={500}
                alt='img'
                width={800} className='pl-36'/>
        </div>
    </section>
                </>
  )
}

export default HeroSection