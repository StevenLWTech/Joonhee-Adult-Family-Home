import React from 'react';

function About() {
    const people = [
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }, {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        // More people...
    ]
    return (
        <section className=''>
            <div className="flex flex-col justify-center items-center h-[calc(100vh_-_94px)] bg-green-50 px-12 pb-48">
                {/* <div className='w-8/12'> */}
                <div className='w-[1280px]'>
                    <div className="text-2xl pb-6">LUXURY ADULT FAMILY HOME CARE IN KIRKLAND, WA</div>
                    <div className="text-6xl pb-12">ALOHA AND WELCOME!</div>
                    <div className="text-4xl">
                        Joonhee Senior Care provides a thoughtfully designed living environment for seniors, offering superior personal care, companionship, recreational activities, and a health maintenance program, ultimately enhancing their quality of life.                </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className=' p-8 w-[1280px] bg-blue-100 my-16 border-4 border-green-900'>
                    <div className='text-6xl py-6 pb-8'>About Joonhee Senior Living of Kirkland</div>
                    <div className='text-4xl pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolores vero atque velit in ab exercitationem sit excepturi non, eveniet nam impedit optio eum reprehenderit, placeat expedita obcaecati. Quidem.</div>
                    <div className='text-4xl pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolores vero atque velit in ab exercitationem sit excepturi non, eveniet nam impedit optio eum reprehenderit, placeat expedita obcaecati. Quidem.</div>
                    <div className='text-4xl pb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae, ut voluptatem illum nisi autem quibusdam? Voluptatem autem sint doloribus, veritatis dolore quaerat exercitationem repudiandae quisquam asperiores nemo esse facilis? Perferendis culpa modi suscipit facilis dolorum porro officia accusamus laborum!</div>
                </div>
            </div>
            <div className='bg-green-50'>
                <div className='flex flex-row justify-center px-24 pt-12 '>
                    <div className='flex flex-col justify-center w-9/12 text-left -mr-20 z-10'>
                        <div className='bg-green-100 text-black px-12 py-8'>
                            <div className='text-2xl py-2 pb'>Joonhee</div>
                            <div className='text-6xl py-2 pb'>The Joonhee Experience</div>
                            <div className='text-2xl py-2 pb'>When a resident joins our home, they become a part of our family. We strive to cherish each person as if they were part of our own family. To us, family means being loving, caring, and putting the needs of others first.</div>
                        </div>
                    </div>
                    <div className='w-5/12'>
                        <img
                            src="https://www.bizneworleans.com/content/uploads/2020/09/AD_SeniorSolutions.jpg"
                            alt="home 2"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
                <div className='flex flex-row justify-center px-24 pt-12'>
                    <div className='w-5/12'>
                        <img
                            src="https://sunriseservicesinc.com/wp-content/uploads/2021/04/Community-Living-vs.-Assisted-Living-vs.-Nursing-Home_Which-Option-is-Right-for-My-Loved-One.jpeg"
                            alt="home 2"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className='flex flex-col justify-center w-9/12 text-left pl-12 -ml-20 z-10'>
                        <div className='bg-green-100 bg-blue-100 px-12 py-8'>
                            <div className='text-2xl py-2 pb'>Joonhee</div>
                            <div className='text-6xl py-2 pb'>The Joonhee Experience</div>
                            <div className='text-2xl py-2 pb'>When a resident joins our home, they become a part of our family. We strive to cherish each person as if they were part of our own family. To us, family means being loving, caring, and putting the needs of others first.</div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-center px-24 pt-12'>
                    <div className='flex flex-col justify-center w-9/12 text-left -mr-20 z-10'>
                        <div className='bg-green-100 bg-blue-100 text-black px-12 py-8'>
                            <div className='text-2xl py-2 pb'>Joonhee</div>
                            <div className='text-6xl py-2 pb'>The Joonhee Experience</div>
                            <div className='text-2xl py-2 pb'>When a resident joins our home, they become a part of our family. We strive to cherish each person as if they were part of our own family. To us, family means being loving, caring, and putting the needs of others first.</div>
                        </div>
                    </div>
                    <div className='w-5/12'>
                        <img
                            src="https://www.bizneworleans.com/content/uploads/2020/09/AD_SeniorSolutions.jpg"
                            alt="home 2"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
                <div className='flex flex-row justify-center px-24 py-12 pb-48'>
                    <div className='w-5/12'>
                        <img
                            src="https://sunriseservicesinc.com/wp-content/uploads/2021/04/Community-Living-vs.-Assisted-Living-vs.-Nursing-Home_Which-Option-is-Right-for-My-Loved-One.jpeg"
                            alt="home 2"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className='flex flex-col justify-center w-9/12 text-left pl-12 -ml-20 z-10'>
                        <div className='bg-green-100 bg-blue-100 px-12 py-8'>
                            <div className='text-2xl py-2 pb'>Joonhee</div>
                            <div className='text-6xl py-2 pb'>The Joonhee Experience</div>
                            <div className='text-2xl py-2 pb'>When a resident joins our home, they become a part of our family. We strive to cherish each person as if they were part of our own family. To us, family means being loving, caring, and putting the needs of others first.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the Jonnhee Team</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                            suspendisse.
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-32 w-32 rounded-full" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
