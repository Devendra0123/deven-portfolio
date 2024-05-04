'use client'
import React, { useState, useEffect } from 'react'
import SkillCard from '../Card/SkillCard'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';

const ProfessionalExperience = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(null);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? 3 - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div id="highlights" style={{
            zIndex: 25
        }}>
            <SkillCard
                text="Professional Experience"
                icon="/code.png"
                titleStyle="font-bold text-[21px]"
                descriptionStyle=""
                visibility={true}
                description="with nearly 3 years of professional experience working as a React developer, I am sharing about my work in different company."
            />

            <div className="ml-[80px] overflow-hidden">
                <div className="mr-[20px] flex items-center justify-end gap-[20px]">
                    <div className='relative bg-yellow1 p-[10px] flex items-center rounded-l-[5px] rounded-t-[5px]'>
                        <div
                            onClick={prevSlide}
                            className="cursor-pointer w-[35px] h-[35px] font-bold rounded-full flex items-center justify-center "
                        >
                            <IoIosArrowBack />
                        </div>

                        <div
                            onClick={nextSlide}
                            className="cursor-pointer w-[35px] h-[35px] font-bold rounded-full flex items-center justify-center"
                        >
                            <IoIosArrowForward />
                        </div>

                        <div className='absolute left-[50%] transform translate-x-[50%] rotate-[12deg] w-[2px] h-full bg-black' />
                    </div>
                </div>

                <div
                    className="flex transition duration-700 linear"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {
                        Array(3).fill(null).map((_, index) => (
                            <div
                                key={index}
                                style={{
                                    background: "rgb(241,241,247)",
                                    background: "radial-gradient(circle, rgba(241,241,247,1) 0%, rgba(250,246,246,0.0046612394957983305) 35%, rgba(0,212,255,1) 100%)"
                                }}
                                className={`min-w-[100%] slide ${index === activeIndex ? "active" : ""} flex flex-col gap-[10px] rounded-[10px] border border-primaryBlue`}
                            >
                                <div className='w-full grid grid-cols-7'>
                                    <div className='col-span-2 flex flex-col items-center justify-center gap-[10px] p-[20px] border-r-2 border-yellow1'>
                                        <Image src="/medisewa-logo.jpg" alt='company logo' width={100} height={100} className='object-contain rounded-full' />
                                        <h2 className='font-extrabold text-lg'>
                                            Lorem Ipsum
                                        </h2>
                                    </div>

                                    <div className='col-span-5 py-[20px] pl-[10px] pr-[20px]'>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default ProfessionalExperience