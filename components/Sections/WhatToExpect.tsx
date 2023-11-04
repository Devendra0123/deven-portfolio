import { expectationList } from '@/data/expectationList';
import React from 'react'
import { AiOutlineDotChart } from "react-icons/ai";
import { FaRegDotCircle } from "react-icons/fa";

const WhatToExpect = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold flex items-center gap-[10px]'>
                <AiOutlineDotChart className="text-4xl text-primaryBlue" />  What to <span className='text-4xl font-bold bg-primaryBlue p-[10px] skew-y-[-4deg]'>Expect from me?</span>
            </h1>

            <div className='flex flex-col gap-[20px] mt-[50px] pl-[50px]'>
                {
                    expectationList.map((item, index) => (
                        <div key={index} className='flex items-center gap-[10px]'>
                            <FaRegDotCircle className="text-yellow1 font-bold text-[19px]" />
                            <span className='text-xl font-medium'>{item.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WhatToExpect