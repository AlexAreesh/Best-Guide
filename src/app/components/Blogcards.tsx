import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from './Footer'

function Blogcards() {
  return (
    <>
      <section className='text-blue bg-cover opacity-90 bg-blur-sm'>
        <div className=''>
          <h1 className='text-6xl font-bold text-sky-800 text-center flex items-center justify-center mb-20 pt-28'>Find the Best places to EAT</h1>
          <h1 className='text-3xl font-bold text-slate-700 text-center flex items-center justify-center mb-36'>From high-end restaurants to the dhaba on a road, Discover everything!</h1>
        </div>
        <div className='flex flex-col justify-center items-center space-y-4 text-white lg:grid grid-cols-3 lg:justify-items-center'>

          <div className='bg-slate-600 h-128 w-80 rounded-lg p-5 hover:border'>
            <Image src={"/images/img12.jpg"}
              height={300}
              width={300}
              alt={"img"} />
            {/* <h1 className='text-2xl font-bold ml-5'>Title:</h1> */}
            <p className='pl-6'>Best Street Food Stalls You'll Find in Karachi famous as family restaurants</p>
            {/* <h1 className='text-2xl font-bold ml-5'>Description:</h1>
            <p className='pl-6'>Discover the must-visit street food vendors serving up local favorites.</p> */}
            <Link href={"./blogs/blog1"}>
              <button className='black_btn p-2 rounded-lg ml-[85px] mt-5 hover:px-4 transition-all hover:text-cardpurple'>Read More</button>
            </Link>
          </div>
          <div className='bg-slate-600 h-128 w-80 rounded-lg p-5 hover:border'>
            <Image src={"/images/img45.jpeg"}
              height={300}
              width={300}
              alt={"img"} />
            {/* <h1 className='text-2xl font-bold ml-5'>Title:</h1> */}
            <p className='pl-6'>Family-Run Restaurants Offering Authentic Local Flavors</p>
            {/* <h1 className='text-2xl font-bold ml-5'>Description:</h1>
            <p className='pl-6'>Experience the heartwarming stories and dishes </p> */}
            <Link href={"./blogs/blog2"}>
              <button className='black_btn p-2 rounded-lg ml-[92px] mt-5 hover:px-4 transition-all hover:text-cardpurple'>Read More</button>
            </Link>
          </div>
          <div className='bg-slate-600 h-128 w-80 rounded-lg p-5 hover:border'>
            <Image src={"/images/mix.jpg"}
              height={300}
              width={300}
              alt={"img"} />
            {/* <h1 className='text-2xl font-bold ml-5'>Title:</h1> */}
            <p className='pl-6'>Vegan Delights: The Best Plant-Based Eateries</p>
            {/* <h1 className='text-2xl font-bold ml-5'>Description:</h1>
            <p className='pl-6'>Explore delicious vegan options that cater to all food lovers.</p> */}
            <Link href={"./blogs/blog3"}>
              <button className='black_btn p-2 rounded-lg ml-[92px] mt-5 hover:px-4 transition-all hover:text-cardpurple'>Read More</button>
            </Link>
          </div>
          <div className='bg-slate-600 h-128 w-80 rounded-lg p-5 hover:border'>
            <Image src={"/images/144.jpg"}
              height={300}
              width={300}
              alt={"img"} />
            <h1 className='text-2xl font-bold ml-5'>Title:</h1>
            <p className='pl-6'>Hidden Coffee Shops with the Best Brews in Karachi</p>
            {/* <h1 className='text-2xl font-bold ml-5'>Description:</h1>
            <p className='pl-6'>Find your next favorite spot for a cozy cup of coffee.</p> */}
            <Link href={"./blogs/blog4"}>
              <button className='black_btn p-2 rounded-lg ml-[92px] mt-5 hover:px-4 transition-all hover:text-cardpurple'>Read More</button>
            </Link>
          </div>
          <div className='bg-slate-600 h-128 w-80 rounded-lg p-5 hover:border'>
            <Image src={"/images/vg.jpeg"}
              height={300}
              width={300}
              alt={"img"} />
            {/* <h1 className='text-2xl font-bold ml-5'>Title:</h1> */}
            <p className='pl-6'>Top 5 Desserts shop You Must Try for the best experiences</p>
            {/* <h1 className='text-2xl font-bold ml-5'>Description:</h1>
            <p className='pl-6'>Indulge your sweet tooth with the city’s best dessert spots.</p> */}
            <Link href={"./blogs/blog5"}>
              <button className='black_btn p-2 rounded-lg ml-[92px] mt-5 hover:px-4 transition-all hover:text-cardpurple'>Read More</button>
            </Link>
          </div>
          <div className='bg-slate-600 h-128 w-80 rounded-lg p-5 hover:border'>
            <Image src={"/images/av.jpg"}
              height={300}
              width={300}
              alt={"img"} />
            {/* <h1 className='text-2xl font-bold ml-5'>Title:</h1> */}
            <p className='pl-6'>International Cuisine: Best Spots for a Global Dining Experience</p>
            {/* <h1 className='text-2xl font-bold ml-5'>Description:</h1>
            <p className='pl-6'>Explore authentic international flavors right in your city.</p> */}
            <Link href={"./blogs/blog6"}>
              <button className='black_btn p-2 rounded-lg ml-[92px] mt-5 hover:px-4 transition-all hover:text-cardpurple'>Read More</button>
            </Link>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Blogcards
