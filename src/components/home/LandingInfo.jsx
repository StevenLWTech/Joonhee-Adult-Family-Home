import React from 'react';

// Reusable arrow icon
const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    </svg>
);

const LandingInfo = () => {
    return (
        <main>
            <section className='flex flex-col justify-center items-center bg-orange-50'>
                <article className='max-w-7xl flex flex-col xl:flex-row justify-center lg:h-[calc(100vh-_180px)] p-4'>
                    <div className='lg:w-6/12 flex justify-center items-center pr-18 h-full '>
                        {/* Image Section */}
                        <img
                            src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1529471066"
                            alt="home 2"
                            className="h-full xl:h-4/5 w-full xl:rounded-lg object-cover object-center"
                        />
                    </div>
                    <div className='lg:w-6/12 flex flex-col justify-center text-left py-8 xl:py-14 px-8 xl:px-24 '>
                        {/* Text Section */}
                        <h2 className='text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pl-4 mb-2'>Why 'Joonhee</h2>
                        <h3 className='text-4xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl pb-6 leading-tight'>Enjoy the comforts of home and round-the-clock care for your loved one.</h3>
                        <p className='text-lg pb-20'>Unlike scheduled care in institutions, Joonhee offers 24/7/365 personalized care, enhancing safety, quality, and your life.</p>
                        <div className='flex flex-row text-xl'>
                            <ArrowIcon />
                            <span className='flex cursor-not-allowed'>

                                <a href='/about ' className='pl-4 text-xl hover:underline pointer-events-none'>About Us</a>
                            </span>
                        </div>
                    </div>
                </article>
            </section>
            <section className=' flex flex-col justify-center items-center bg-green-50'>
                <article className='max-w-7xl p-4'>
                    <div className='flex flex-col lg:flex-row xl:flex-row md:flex-row sm:flex-col lg:h-[85vh] bg-green-50  '>
                        <div className=' lg:w-6/12 xl:w-6/12 flex pr-18 md:w-full sm:w-full lg:order-last sm:order-first md:order-first'>
                            {/* <div className="content-img m-4 xl:w-1/2 xl:px-4 xl:px-12"> */}
                            <div className='flex justify-center items-center'>
                                <img
                                    src="https://ohanahaleseniorliving.com/wp-content/uploads/2022/10/Ohana-Hale_IMG_0748.jpeg"
                                    alt="home 2"
                                    // className="h-full w-full object-cover sm:object-contain"
                                    className="h-full xl:h-4/5 w-full xl:rounded-lg object-cover object-center" />
                            </div>
                        </div>
                        <div className='xl:order-first  flex flex-col md:w-full sm:w-full justify-center lg:w-6/12 xl:w-6/12 text-left py-8 sm:py-16 xl:py-14 px-8 xl:px-24'>
                            <div className='pl-4 pb-2 text-xl '>---- Kirkland 'Joonhee</div>
                            <div className='text-4xl sm:text-3xl md:text-6xl lg:text-4xl xl:text-6xl pb-6 leading-tight'>
                                Competent, caring, and well-trained staff.</div>
                            {/* <div className='text-lg pb-20'>Our caregivers are Certified Nursing Assistants (CNA) or Home Care Aides (HCA). In addition to being certified with First Aid, CPR, Mental Health and Dementia Specialty training, and more, they receive extensive training upon hiring to ensure above-average competence and skills in caring for seniors with a wide range of health challenges including dementia, strokes, diabetes, incontinence, and much more.</div> */}
                            <div className='text-lg pb-20'>Our caregivers are certified as CNAs or HCAs, equipped with extensive training in First Aid, CPR, Mental Health, Dementia Specialty, and more. They possess above-average competence and skills to provide exceptional care for seniors facing diverse health challenges like dementia, strokes, diabetes, incontinence, and more.</div>
                            <div className='flex flex-row text-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                                <span className='cursor-not-allowed'>
                                    <a href='/about' className='pl-4 text-xl hover:underline pointer-events-none'>Home & Services</a>
                                </span>

                            </div>
                        </div>
                    </div>
                </article>
            </section>

        </main>
    )
}

export default LandingInfo