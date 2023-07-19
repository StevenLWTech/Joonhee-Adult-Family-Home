import React from 'react'

const LandingInfo = () => {
    return (
        <div className=''>
            {/* <div className='flex flex-row justify-center h-[75vh] bg-[#FAF7F1]'> */}

            <div className='flex flex-row lg:flex-row xl:flex-row md:flex-col sm:flex-col justify-center lg:h-[calc(100vh_-_180px)]  bg-[#FFFFFF] text-black'>
                <div className='lg:w-5/12 xl:w-5/12 flex pr-18 md:w-full sm:w-full'>
                    <div className='w-5/5'>
                        <img
                            src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1529471066"
                            alt="home 2"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    {/* <div className='w-2/5 absolute fixed bottom-0 left-0'>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Kp9uaQckIjP79tyTvf_M6i9Yq4qYdLKzuQ&usqp=CAU"
                            alt="home 2"
                            className="h-full w-full object-cover"
                        />
                    </div> */}
                </div>
                <div className='flex flex-col md:w-full sm:w-full justify-center lg:w-7/12 xl:w-7/12 text-left py-14 px-24 '>
                    <div className='text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pl-4 pb-2'>
                        ---- Why 'Joonhee</div>
                    <div className='text-4xl sm:text-3xl md:text-6xl lg:text-4xl xl:text-6xl pb-6 leading-tight'>
                        Enjoy the comforts of home and round-the-clock care for your loved one.</div>
                    {/* <div className='text-6xl pb-6 leading-tight' >All the comforts of home with all the care your loved one needs 24/7</div> */}
                    <div className='text-lg pb-20'>
                        Unlike scheduled care in institutions, Joonhee offers 24/7/365 personalized care, enhancing safety, quality, and your life.</div>
                    {/* <div className='text-lg pb-20'>Unlike institutions where personal care is “scheduled,” Joonhee provides care whenever needed, 24/7/365. Our model greatly improves safety, the quality of care, and your life.</div> */}
                    <div className='flex flex-row text-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                        <a href='/about' className='pl-4 text-xl hover:underline'>About Us</a>
                    </div>
                </div>
            </div>
            <div className='flex flex-row lg:flex-row xl:flex-row md:flex-col sm:flex-col lg:h-[85vh] bg-green-50'>
                <div className='flex flex-col md:w-full sm:w-full justify-center lg:w-7/12 xl:w-7/12 text-left py-14 pl-36 sm:px-16 md:px-24 pr-28 '>
                    <div className='pl-4 pb-2 text-xl '>---- Kirkland 'Joonhee</div>
                    <div className='text-4xl sm:text-3xl md:text-6xl lg:text-4xl xl:text-6xl pb-6 leading-tight'>
                        Competent, caring, and well-trained staff.</div>
                    {/* <div className='text-lg pb-20'>Our caregivers are Certified Nursing Assistants (CNA) or Home Care Aides (HCA). In addition to being certified with First Aid, CPR, Mental Health and Dementia Specialty training, and more, they receive extensive training upon hiring to ensure above-average competence and skills in caring for seniors with a wide range of health challenges including dementia, strokes, diabetes, incontinence, and much more.</div> */}
                    <div className='text-lg pb-20'>Our caregivers are certified as CNAs or HCAs, equipped with extensive training in First Aid, CPR, Mental Health, Dementia Specialty, and more. They possess above-average competence and skills to provide exceptional care for seniors facing diverse health challenges like dementia, strokes, diabetes, incontinence, and more.</div>
                    <div className='flex flex-row text-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                        <a href='/about' className='pl-4 text-xl hover:underline'>Home & Services</a>

                    </div>
                </div>
                <div className='w-5/12 flex pl-18 md:w-full sm:w-full lg:order-last sm:order-first md:order-first'>
                    <img
                        src="https://ohanahaleseniorliving.com/wp-content/uploads/2022/10/Ohana-Hale_IMG_0748.jpeg"
                        alt="home 2"
                        className="h-full w-full object-cover"
                    />
                </div>

            </div>
            {/* <div className='h-[70vh]'>
                <img
                    src="https://ohanahaleseniorliving.com/wp-content/uploads/2022/10/Google-Map-Ohana-Hale-Bellevue-2048x1152.png"
                    alt="home 2"
                    className="h-full w-full object-cover"
                />

            </div> */}

        </div>
    )
}

export default LandingInfo