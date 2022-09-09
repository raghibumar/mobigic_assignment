import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <div class="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
                <a class="block p-6 bg-white sm:p-8 rounded-xl" href="">
                    <div class="mt-16 sm:pr-8">
                        <h5 class="text-xl font-bold text-gray-900 text-center">Welcome to Homepage</h5>

                        
                    </div>
                </a>
            </div>
        </>
    )
}

export default Home