import { TechnologyProps, TutorialTopicProps } from '@/types'
import React from 'react'

interface Props {
    data: TutorialTopicProps[] | TechnologyProps[],
    dropdowStyle?: string
}
const Dropdown = ({ data, dropdowStyle }: Props) => {
    return (
        <div className=''>
            <ul className={`${dropdowStyle} shadow-lg`}>
                {data.length > 0 && data.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown