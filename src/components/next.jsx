import React from 'react'

const next = () => {
    return (
        <div className=''>
            {/* <div className='flex flex-row justify-center h-[75vh] bg-[#FAF7F1]'> */}
            <div className='flex flex-row justify-center h-3/5 bg-[#FAF7F1]'>
                <div className='flex flex-col justify-center w-6/12 text-left py-14 ml-32 pl-8'>
                    <div className='pl-4 pb-2 text-xl'>---- Why 'Joonhee</div>
                    <div className='text-6xl pb-6 leading-tight' >All the comforts of home with all the care your loved one needs 24/7</div>
                    <div className='text-lg pb-20'>Unlike institutions where personal care is “scheduled,” Joonhee provides care whenever needed, 24/7/365. Our model greatly improves safety, the quality of care, and your life.</div>
                    <div className='flex flex-row text-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                        <div className='pl-4 text-xl'>About Us</div>
                    </div>
                </div>
                <div className='w-6/12 flex justify-end py-14 mr-32 ml-28 pr-8 relative'>
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
            </div>
            <div className='flex flex-row h-[75vh] bg-[#EEE7DA]'>
                <div className='w-5/12 bg-red-50'>
                    <img
                        src="https://ohanahaleseniorliving.com/wp-content/uploads/2022/10/Ohana-Hale_IMG_0748.jpeg"
                        alt="home 2"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className='flex flex-col justify-center w-7/12 text-left py-14 ml-32 pr-8'>
                    <div className='pl-4 pb-2 text-xl'>---- Kirkland 'Joonhee</div>
                    <div className='text-6xl pb-6 leading-tight' >Competent, caring, and well-trained staff.</div>
                    <div className='text-lg pb-20'>Our caregivers are Certified Nursing Assistants (CNA) or Home Care Aides (HCA). In addition to being certified with First Aid, CPR, Mental Health and Dementia Specialty training, and more, they receive extensive training upon hiring to ensure above-average competence and skills in caring for seniors with a wide range of health challenges including dementia, strokes, diabetes, incontinence, and much more.</div>
                    <div className='flex flex-row text-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                        <div className='pl-4 text-xl'>Home & Services</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default next