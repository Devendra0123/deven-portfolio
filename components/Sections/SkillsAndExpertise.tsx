import { skillsData } from '@/data/skillsData'
import Image from 'next/image'
import React from 'react'

const SkillsAndExpertise = () => {
    return (
        <div className='w-full'>
            <h1 className='text-4xl font-bold'><span className='underline underline-offset-8 decoration-yellow1'>Skills & Exper</span>tise.</h1>

            <div className='mt-[30px] w-full flex justify-center items-center gap-[30px] flex-wrap'>
                {
                    skillsData.map((item, index) => (
                        <div key={index} className='w-[200px] h-[250px] rounded-[4px] shadow-lg shadow-yellow1/75 bg-smoke flex flex-col items-center justify-center'>
                            <Image src={item.image} alt="logo" width={100} height={70} className='object-contain' />
                            <p>
                                {item.name}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SkillsAndExpertise