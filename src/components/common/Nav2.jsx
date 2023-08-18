import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'HOME', href: '/', current: true },
    { name: 'ABOUT US', href: '/about', current: false },
    { name: 'Joonhee', href: '/', current: false },
    { name: 'OUR AFH', href: '/', current: false },
    { name: 'FAQS', href: '/', current: false },
]
const menu_navigation = [
    { name: 'HOME', href: '/', current: true },
    { name: 'ABOUT US', href: '/about', current: false },
    { name: 'OUR AFH', href: '/', current: false },
    { name: 'FAQS', href: '/', current: false },
    { name: 'CONTACT', href: '/contact', current: false },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <>
                    <div className="mx-auto">
                        <div className="relative flex h-20 md:h-32 lg:h-40 items-center justify-center border-b-8 border-[#6FB551]">
                            <div className='flex justify-center items-center space-x-4 border-r-2 border-[#6FB551] w-2/12 hidden lg:flex'>
                                {/* <div className='flex justify-center items-center space-x-4 border-r border-white w-2/12 '> */}
                                {/*Instagram*/}
                                <a href="https://instagram.com" className='hover:text-green-400 pr-4'>
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
                                <a href="https://www.facebook.com/" className='hover:text-green-400 pr-4'>
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
                                <a href="https://twitter.com/home" className='hover:text-green-400'>
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
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center w-8/12">

                                <div className="hidden md:ml-6 md:block">
                                    <div className="flex flex-row justify-center items-center space-x-4 text-xl">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? ' text-black text-xl'
                                                        : ' space-x-16'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name === 'Joonhee' ? (
                                                    <span>
                                                        <div className='text-3xl'>Joonhee</div>
                                                        <div className='text-sm'>SENIOR LIVING</div>
                                                    </span>
                                                ) : (
                                                    <span className='hover:text-green-400 lg:px-4 xl:px-8'>{item.name}</span>
                                                )}
                                            </a>
                                        ))}
                                    </div>

                                </div>
                            </div>
                            <a href="/contact" className='flex justify-center items-center w-2/12 h-full bg-[#3B9592] text-xl text-white hover:text-[#303D46] hover:bg hidden lg:flex'>
                                Contact
                            </a>
                            <div className='md:hidden sm:flex sm:flex-col pr-8 py-4'>
                                <a href='/'><div className='text-2xl'>'Joonhee</div> <div className='text-base'>SENIOR LIVING</div></a>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className=" lg:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {menu_navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-green-200 text-black text-xl' : 'text-[#303D46] hover:bg-green-50 hover:text-black',
                                        'block rounded-md px-3 py-2 text-xl font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}
