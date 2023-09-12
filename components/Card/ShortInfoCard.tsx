import Image from 'next/image'
import React from 'react'

interface Props{
    icon: any,
    text: string
}
const ShortInfoCard = ({icon, text}: Props) => {
  return (
    <div className='flex flex-col items-center gap-[10px]'>
        <Image src={icon} width={30} height={30} alt="icon" />
        <p className='font-medium'>
            {text}
        </p>
    </div>
  )
}

export default ShortInfoCard