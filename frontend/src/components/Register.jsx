import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'

const Register = () => {

    const [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    });
    // console.log(data);
    const nav = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, username, email, password } = data;

        axios
            .post("https://login-username.herokuapp.com/api/register", {
                name,
                username,
                email,
                password,
            })
            .then((res) => nav("/login"))
            .catch((error) => console.log(error));
    };


    return (
        <>
            <Navbar />
            <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                <div class="max-w-lg mx-auto">
                    <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">Register</h1>

                    {/* <p class="max-w-md mx-auto mt-4 text-center text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat
                        mollitia?
                    </p> */}

                    <form action="" class="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4" onSubmit={handleSubmit} >
                        <p class="text-lg font-medium text-center">Sign in to your account</p>

                        <div>
                            <label for="name" class="text-sm font-medium">Name</label>

                            <div class="relative mt-1">
                                <input
                                    required
                                    type="name"
                                    id="name"
                                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Enter name"
                                    onChange={(e) => setData({ ...data, name: e.target.value })}
                                />


                            </div>
                        </div>
                        <div>
                            <label for="email" class="text-sm font-medium">Email</label>

                            <div class="relative mt-1">
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Enter email"
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                />


                            </div>
                        </div>
                        <div>
                            <label for="username" class="text-sm font-medium">Username</label>

                            <div class="relative mt-1">
                                <input
                                    required
                                    type="username"
                                    id="username"
                                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Enter username"
                                    onChange={(e) => setData({ ...data, username: e.target.value })}
                                />


                            </div>
                        </div>

                        <div>
                            <label for="password" class="text-sm font-medium">Password</label>

                            <div class="relative mt-1">
                                <input
                                    required
                                    type="password"
                                    id="password"
                                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Enter password"
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                />


                            </div>
                        </div>

                        <button type="submit" class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg">
                            Sign up
                        </button>


                    </form>
                </div>
            </div>
        </>
    )
}

export default Register