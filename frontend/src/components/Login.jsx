import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'

const Login = () => {
    const nav = useNavigate()
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    console.log(data)

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = data;

        axios
            .post("https://login-username.herokuapp.com/api/login", { username, password })
            .then((res) =>
                localStorage.setItem(
                    "token",
                    JSON.stringify(res.data.accessToken),
                    nav("/")
                )
            )
            .catch((error) => console.log(error));
    };
    return (
        <>
            <Navbar />
            <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                <div class="max-w-lg mx-auto">
                    <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">Login</h1>

                    {/* <p class="max-w-md mx-auto mt-4 text-center text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat
                        mollitia?
                    </p> */}

                    <form action="" class="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4" onSubmit={handleSubmit}>
                        <p class="text-lg font-medium text-center">Sign in to your account</p>

                        <div>
                            <label for="username" class="text-sm font-medium">Username</label>

                            <div class="relative mt-1">
                                <input
                                    type="username"
                                    required
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
                                    type="password"
                                    required
                                    id="password"
                                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Enter password"
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                />


                            </div>
                        </div>

                        <button type="submit" class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg">
                            Sign in
                        </button>
                        <p class="text-sm text-center text-gray-500">
                            No account?
                            <span class="underline cursor-pointer" onClick={() => { nav("/register") }}>Sign up</span>
                        </p>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Login