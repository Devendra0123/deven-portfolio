"use client"
import { skillsData } from '@/data/skillsData';
import Image from 'next/image';
import React, { useState } from 'react';

const SkillCard = ({ name, image }: any) => {
    const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

    const [isCardHovered, setIsCardHovered] = useState(false)
    const handleMouseMove = (e: any) => {
        setIsCardHovered(true)
        const card = e.currentTarget;
        const mouseX = e.clientX - card.getBoundingClientRect().left;
        const mouseY = e.clientY - card.getBoundingClientRect().top;

        setGradientPosition({ x: mouseX, y: mouseY });
    };

    const handleMouseLeave = () => {
        setIsCardHovered(false)
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                background: isCardHovered ? `radial-gradient(at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(232, 166, 34, 0.5), transparent` : "",
                transition: 'background 0.2s',
            }}
            className='w-[200px] h-[250px] cursor-pointer hover:bg-[length:200px_250px] rounded-[4px] shadow-lg shadow-yellow1/75 bg-smoke flex flex-col items-center justify-center'
        >
            <Image src={image} alt='logo' width={100} height={70} className='object-contain' />
            <p>{name}</p>
        </div>
    );
};

const SkillsAndExpertise = () => {
    return (
        <div className='w-full'>
            <h1 className='text-4xl font-bold'>
                <span className='underline underline-offset-8 decoration-yellow1'>Skills & Exper</span>tise.
            </h1>

            <div className='mt-[30px] w-full flex justify-center items-center gap-[30px] flex-wrap'>
                {skillsData.map((item, index) => (
                    <SkillCard key={index} name={item.name} image={item.image} />
                ))}
            </div>
        </div>
    );
};

export default SkillsAndExpertise;
