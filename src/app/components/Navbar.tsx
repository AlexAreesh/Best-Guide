import Link from 'next/link'

function Navbar() {
  return (
    <section>
   
        <nav className='text-black bg-cover opacity-90 bg-blur-sm  justify-center items-center pt-5  text-center lg:flex md:flex md:justify-between  pb-4 '>
          <Link href={'/'}>
            <div className="logo  font-bold text-2xl tracking-in-expand mt-1 pb-3 md:p-0 md:ml-24">BestGuide
            </div>
          </Link>
           
                <ul className='flex  items-center justify-center content-center md:mr-24 '>
                    <Link href="/">
                    <li className=' pr-10 text-focus-in '>Home</li>
                    </Link>
                    <Link href="/about">
                    <li className=' pr-10 text-focus-in '>About</li>
                    </Link>
                    <Link href="/blogs">
                    <li className=' pr-10  text-focus-in '>Blogs</li>
                    </Link>
                    <Link href="/contact" >
                    <li className='pr-10  text-focus-in '>Contact Us</li>
                    </Link>
                </ul>
 

        </nav>
    </section>
  )
}

export default Navbar