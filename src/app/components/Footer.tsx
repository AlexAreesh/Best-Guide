import React from 'react';
import HoverCardDemo from "./HoverCardDemo";

function Footer() {
    return (
        <footer className=" py-12">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className='text-4xl font-bold mb-6'>Footer</h1>
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <div className="lg:mr-8 mb-6 lg:mb-0">
                        <p className='text-lg text-black'>
                            Hey there! This is a simple footer for this blog website demo featuring a tech stack of Next.js, Tailwind CSS, and TypeScript.
                        </p>
                        <p className='font-bold text-black mt-4'>
                            Try hovering on the contact button!
                        </p>
                    </div>
                    <div className="lg:mr-8 mb-6 lg:mb-0">
                        <ul className='text-black space-y-2'>
                            {/* <li>
                                <a href="/mastering-cloud-computing" className='hover:underline'>Mastering Cloud Computing</a>
                            </li> */}
                            <li>
                                <a href="/hidden-coffee-shops" className='hover:underline'>Hidden Coffee Shops with Best Brews</a>
                            </li>
                            {/* <li>
                                <a href="/building-chatbots" className='hover:underline'>Building Chatbots with AI</a>
                            </li> */}
                            <li>
                                <a href="/top-desserts-you-must-try" className='hover:underline'>Top 5 Desserts You Must Try</a>
                            </li>
                            <li>
                                <a href="/international-cuisines" className='hover:underline'>International Cuisines: Best Spots for a Global Dining Experience</a>
                            </li>
                            {/* <li>
                                <a href="/tailwind-css" className='hover:underline'>Tailwind CSS for Modern Web Design</a>
                            </li> */}
                        </ul>
                    </div>
                        <HoverCardDemo />
                  
                </div>
            </div>
        </footer>
    );
}

export default Footer;
