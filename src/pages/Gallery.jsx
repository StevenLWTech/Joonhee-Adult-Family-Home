import React from 'react'

function Gallery() {
    return (
        <section className='section-landing'>
            <div className='flex justify-center p-12'>
                <div className='wrapper max-w-7xl '>
                    <section className='about pt-16'>
                        <div className='text-6xl pb-4'>About our Joonhee home</div>
                        <div className='text-2xl pb-16'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, numquam consequuntur. Perspiciatis obcaecati unde quod reiciendis temporibus eius. Dolorum, vel atque eius expedita doloremque exercitationem ut ullam ea! Laudantium, illo!</div>
                    </section>
                    <section className='features'>
                        <div className='text-6xl pb-4'>Home Features</div>
                        <div className="flex w-full items-center dark:bg-gray-900 py-12 px-6 flex justify-center items-center ">

                            <div className='flex'>

                                <div className="max-w-xs h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                                    <div>
                                        <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">Location</h4>
                                        <p className="text-gray-800 dark:text-gray-100 text-sm">Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum, sensu iudicari, sed ut alterum.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between text-gray-800">
                                            {/* <p className="text-sm dark:text-gray-100">March 28, 2020</p> */}
                                            {/* <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                                </svg>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-xs h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                                    <div>
                                        <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">Security</h4>
                                        <p className="text-gray-800 dark:text-gray-100 text-sm">Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum, sensu iudicari, sed ut alterum.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between text-gray-800">
                                            {/* <p className="text-sm dark:text-gray-100">March 28, 2020</p> */}
                                            {/* <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                                </svg>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-xs h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                                    <div>
                                        <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">Home Cooked Meals</h4>
                                        <p className="text-gray-800 dark:text-gray-100 text-sm">Probabo, inquit, sic agam, ut labore et voluptatem sequi nesciunt, neque porro quisquam est, quid malum, sensu iudicari, sed ut alterum.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between text-gray-800">
                                            {/* <p className="text-sm dark:text-gray-100">March 28, 2020</p> */}
                                            {/* <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                                </svg>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='gallery pb-16'>
                        <div className='text-6xl pb-4'>Image Gallery</div>
                        <div class="container  mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">

                            <div class=" ">
                                <img
                                    src="https://germaniaconstruction.com/wp-content/uploads/2022/11/park-city-custom-home-builder-great-room.jpg"
                                    alt="home 3"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div class=" ">
                                <img
                                    src="https://germaniaconstruction.com/wp-content/uploads/2022/11/park-city-custom-home-builder-great-room.jpg"
                                    alt="home 3"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div class=" ">
                                <img
                                    src="https://germaniaconstruction.com/wp-content/uploads/2022/11/park-city-custom-home-builder-great-room.jpg"
                                    alt="home 3"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div class=" ">
                                <img
                                    src="https://germaniaconstruction.com/wp-content/uploads/2022/11/park-city-custom-home-builder-great-room.jpg"
                                    alt="home 3"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div class=" ">
                                <img
                                    src="https://germaniaconstruction.com/wp-content/uploads/2022/11/park-city-custom-home-builder-great-room.jpg"
                                    alt="home 3"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div class=" ">
                                <img
                                    src="https://germaniaconstruction.com/wp-content/uploads/2022/11/park-city-custom-home-builder-great-room.jpg"
                                    alt="home 3"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Gallery