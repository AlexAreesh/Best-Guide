import React from 'react'

function page() {
  return (
    <section className='w-full flex-center flex-col font-bold mt-24'>
      <h1 className='text-center text-6xl'>
        Contact Us
        <br />
        <span className='text-center text-6xl text-sky-500 font-bold'>
          For More Details
        </span>
      </h1>
      <p className='text-center mt-12 text-lg'>
        Unlock endless possibilities with Gen AI, where creativity meets technology.
      </p>

      <div className='mt-16 w-full max-w-4xl mx-auto'>
        <h2 className='text-3xl font-semibold text-center'>We'd Love to Hear From You!</h2>
        <p className='text-center mt-4 text-lg'>
          Have questions or want to learn more about our services? Get in touch with us below.
        </p>
        
        <form className='mt-8 space-y-6'>
          <div className='flex flex-col'>
            <label className='text-xl font-semibold' htmlFor='name'>
              Full Name
            </label>
            <input
              id='name'
              type='text'
              placeholder='Your Full Name'
              className='mt-2 p-3 border-2 border-gray-300 rounded-lg'
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-xl font-semibold' htmlFor='email'>
              Email Address
            </label>
            <input
              id='email'
              type='email'
              placeholder='Your Email Address'
              className='mt-2 p-3 border-2 border-gray-300 rounded-lg'
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-xl font-semibold' htmlFor='message'>
              Your Message
            </label>
            <textarea
              id='message'
              rows={5}
              placeholder='Tell us more about your inquiry'
              className='mt-2 p-3 border-2 border-gray-300 rounded-lg'
            />
          </div>

          <div className='flex justify-center mt-6'>
            <button
              type='submit'
              className='bg-sky-500 text-white py-3 px-6 rounded-lg hover:bg-sky-600 transition-all'
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className='mt-16 text-center'>
        <h3 className='text-2xl font-semibold'>Follow Us</h3>
        <p className='mt-4 text-lg'>
          Stay connected and follow us on social media for updates and news.
        </p>
        <div className='flex justify-center mt-6 space-x-8'>
          <a href='#' className='text-sky-500 hover:text-sky-600'>
            Facebook
          </a>
          <a href='#' className='text-sky-500 hover:text-sky-600'>
            Twitter
          </a>
          <a href='#' className='text-sky-500 hover:text-sky-600'>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default page
