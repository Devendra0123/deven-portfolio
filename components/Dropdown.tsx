"use client"
import { TechnologyProps, TutorialTopicProps } from '@/types'
import React from 'react'

interface Props {
    data: TutorialTopicProps[] | TechnologyProps[],
    dropdowStyle?: string,
    handleDropdownItemClick: any
}
const Dropdown = ({ data, dropdowStyle,handleDropdownItemClick }: Props) => {
    return (
        <div className=''>
            <ul className={`${dropdowStyle} flex flex-col gap-[10px]`}>
                {data.length > 0 && data.map((item, index) => (
                    <li onClick={()=> handleDropdownItemClick(item)} key={index} className='cursor-pointer hover:bg-slate-800 hover:text-white p-[5px]'>
                        <p>{item.name}</p>
                        <div className='w-full h-[1px] bg-slate-800 ' />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown