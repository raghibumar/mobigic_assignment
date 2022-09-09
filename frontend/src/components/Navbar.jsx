import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const nav = useNavigate()
    return (
        <>
            <header class="bg-dark dark:bg-gray-900 bg-zinc-900">
                <div class="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <div class="flex-1 md:flex md:items-center md:gap-12">
                            <span class="block text-teal-600 dark:text-teal-300" href="/">
                                <span class="sr-only">Home</span>

                            </span>
                        </div>

                        <div class="md:flex md:items-center md:gap-12">
                            <nav class="hidden md:block" aria-labelledby="header-navigation">
                                <h2 class="sr-only" id="header-navigation">Header navigation</h2>


                            </nav>

                            <div class="flex items-center gap-4">
                                <div class="sm:gap-4 sm:flex">
                                    <span
                                        class="px-5 py-2.5 text-sm font-medium text-white bg-teal-600 dark:hover:bg-teal-500 rounded-md shadow cursor-pointer"
                                        onClick={() => { nav("/login") }}
                                    >
                                        Login
                                    </span>

                                    <div class="hidden sm:flex">
                                        <span
                                            class="px-5 py-2.5 text-sm font-medium text-teal-600 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-white dark:hover:text-white/75 cursor-pointer"
                                            onClick={() => { nav("/register") }}
                                        >
                                            Register
                                        </span>
                                    </div>
                                </div>

                                <div class="block md:hidden">
                                    <button
                                        class="p-2 text-gray-600 bg-gray-100 rounded transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar