import React from 'react';
import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

export default function Footer() {

    return (
        // <div className='h-[calc(100vh_-_30vh)] lg:h-auto xl:h-auto'>
        <div className='bg-orange-50 lg:h-[calc(100vh_-_30vh)] xl:h-[calc(100vh_-_30vh)] '>
            <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row h-8/12 '>
                <div className='w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3'>
                    <img
                        src="https://media.angi.com/s3fs-public/brown-front-door.jpg?impolicy=leadImage"
                        alt="home 2"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className='flex flex-col justify-center w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3 bg-[#FFFFF] text-[#485C69] text-left px-6 pr-12 md:pr-8 my-4'>
                    <div className='text-2x1 sm:text-xl md:text-2xl lg:text-xl xl:text-2xl py-4'>--- Contact Us</div>
                    <div className='text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-6xl pb-6 md:pb-2 text-black'>Schedule a Tour Today</div>
                    <div className='text-2xl sm:text-xl md:text-1xl lg:text-xl xl:text-2xl pb-6'>
                        Experience our unparalleled service, for once you visit us, no other will compare.</div>
                    <div className='flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row text-md pb-4'>
                        <a href='/' className='px-4 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl hover:text-black hover:underline flex flex-row'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                            <p className='text-2xl sm:text-xl md:text-1xl lg:text-xl xl:text-2xl pl-4 pb-6'>Get in Touch</p></a>
                        <a href='/' className='pl-4 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl hover:text-black hover:underline flex flex-row'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                            <p className='text-2xl sm:text-xl md:text-1xl lg:text-xl xl:text-2xl pl-4'>Faqs</p></a>
                    </div>
                </div>
                <div className='w-full sm:w-full md:w-full lg:w-1/3 xl:w-1/3'>
                    <img
                        src="https://p1.pxfuel.com/preview/1009/99/830/portrait-lady-glasses-woman-face.jpg"
                        alt="home 2"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
            <div className='flex flex-col justify-center h-5/12 bg-black text-white py-4 pt-8'>
                <div className='pb-6'>
                    <div>
                        <div className='flex flex-col'>
                            <p href="/" className='text-3xl md:text-2xl lg:text-3xl xl:text-4xl'>
                                <a href="/">Joonhee</a></p>
                            <p href="/" className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                                <a href="/">SENIOR LIVING</a></p>
                        </div>
                    </div>
                </div>
                <div className="footer-nav flex flex-col text-center sm:text-left md:flex-row lg:flex-row xl:flex-row justify-center sm:py-4 md:py-4">
                    <a href='/' className='pr-12 pb-1 hover:text-green-400 '>HOME
                    </a>
                    <a href='/about' className='pr-12 pb-1 hover:text-green-400' >ABOUT US
                    </a>
                    <a href='/' className='pr-12 pb-1 hover:text-green-400' >OUR AFH
                    </a>
                    <a href='/' className='pr-12 pb-1 hover:text-green-400' >FAQS
                    </a>
                    <a href='/' className='hover:text-green-400'>CONTACT
                    </a>
                </div>

                <div className='social-media flex xl:flex-row justify-center py-6  md:py-4'>
                    {/* <div className='flex justify-center items-center space-x-4 border-r border-white w-2/12 '> */}
                    {/*Instagram*/}
                    <a href='/' className='pr-4 xl:pr-8 hover:text-green-400'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                    {/*Facebook*/}
                    <a href='/' className='pr-4 xl:pr-8 hover:text-green-400'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </a>
                    {/*Twitter*/}
                    <a href='/' className='hover:text-green-400'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className='h-1/12 border-t border-white py-8 bg-black text-white sm:pb-8 md:pb-8'>
                <div className="">
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal md:mb-0"
                    >
                        &copy; {currentYear} Joonhee Senior Living of <span className="break-kirkland">Kirkland, Washington.</span>
                    </Typography>
                </div>
            </div>

        </div>

    )
}
