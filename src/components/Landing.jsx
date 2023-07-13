import React from 'react'
import Carousel from './ui/ImageCarousel';
export default function Landing() {
    <script
        type="text/javascript"
        src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js">
    </script>
    return (
        <section className="flex flex-row justify-center items-center  h-[calc(100vh_-_94px)] bg-green-50 ">
            <div className='xl:flex flex-column w-3/4 ' >
                <div className='flex justify-center justify-end w-1/2 px-24'>
                    <div className='text-left max-w-xlt bg-[#3B9592] text-white p-12'>
                        <div className='text-xl pb-6 '>JOONHEE SENIOR LIVING OF BELLEVUE</div>
                        <div className='text-5xl '>Welcome Home to </div>
                        <div className='text-5xl pb-8'>Your ʻJoonhee! </div>

                        <div className='text-2xl pb-4'>Receive safe, personalized, and competent round-the-clock care in our beautiful adult family home.</div>
                        <div className='flex flex-row text-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                            <div className='pl-4'>Contact Us</div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 bg-blue-50 border-2 border-gray-200'>
                    <Carousel>
                    </Carousel>
                </div>
            </div>
        </section>

    )
}
