import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Signup = () => {
    return (
        <div className='w-full flex flex-col items-center mt-[40px]'>
            <div className='text-center flex flex-col gap-[13px]'>
                <h1 className='text-3xl font-bold'>
                    Create Deven Account
                </h1>
                <p>We do not share your information to any third party.</p>
            </div>

            <div style={{
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
            }} className='mt-[20px] bg-dark1 w-full md:w-[500px] flex flex-col items-center gap-[20px] p-[20px] rounded-lg shadow-lg shadow-yellow1 text-center '>
                <div className='w-[80%] flex flex-col gap-[20px] text-white'>
                    <p className=' font-bold tracking-wider'>Signup with email</p>
                    <form className='flex flex-col gap-[20px]'>
                        <input type="email" placeholder='Enter your email id' className='outline-none border border-slate-500 rounded-[4px] p-[7px] ' />
                        <button className='bg-primaryBlue text-white px-[20px] py-[10px] rounded-[4px]'>
                            Signup
                        </button>
                    </form>
                </div>

                <p className='text-white font-bold text-xl'>
                    OR
                </p>

                <div className='w-[80%] flex flex-col gap-[20px]'>
                    <div className='flex items-center gap-[10px] bg-white p-[10px] rounded-[4px]'>
                        <FcGoogle />
                        <p>Continue with google</p>
                    </div>

                    <div className='flex items-center gap-[10px] bg-white p-[10px] rounded-[4px]'>
                        <BsGithub />
                        <p>Continue with github</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup