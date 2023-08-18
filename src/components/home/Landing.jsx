import React from 'react';
import Carousel from '../ui/ImageCarousel';
import { IconButton } from "@material-tailwind/react";

export default function Landing() {
    return (
        <section className="flex flex-col xl:flex-row justify-center items-center h-[calc(100vh_-_76px)] md:h-[calc(100vh_-_76px)] xl:h-[calc(100vh_-_94px)] bg-green-50 pt-12 md:pt-12 xl:pt-24 px-4 xl:px-24 ">
            <div className="content-wrapper">
                <div className="content-img xl:w-1/2 xl:px-4 xl:px-24">
                    <Carousel />
                </div>

                <div className="md:flex justify-center w-full xl:w-1/2 px-4">
                    <div className="content-text">
                        <div className='md:text-center text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pb-2'>
                            JOONHEE SENIOR LIVING OF KIRKLAND</div>
                        <div className='md:text-center text-4xl sm:text-3xl md:text-6xl lg:text-4xl xl:text-6xl pb-6 leading-tight'>
                            Welcome Home to Your ʻJoonhee!</div>

                        <div className="md:text-center text-xl xl:text-3xl pb-4">Experience 24/7 competent care in our lovely adult family home, tailored to your safety and personal needs.</div>
                        <div className="flex flex-row justify-center items-center sm:justify-start md:justify-center text-lg xl:text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                            <div className="pl-2 hover:text-black hover:underline"><a href="/">Contact Us</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
