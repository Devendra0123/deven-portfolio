import { TutorialTopicProps } from '@/types'
import React from 'react'
import Link from "next/link"

interface Props {
    tutorialTopic : TutorialTopicProps[]
}
const TutoralTopics = ({tutorialTopic}: Props) => {
  return (
    <div>
        {tutorialTopic?.length > 0 && (
          <ul className="flex flex-col gap-[10px]">
            {tutorialTopic.map((topic, index) => (
              <li key={index} className={` text-[16px] ${index % 2 === 0 ? "bg-slate-300" : "bg-white"} p-[10px] shadow rounded-[4px]`}>
                <Link href={`/tutorials-and-guide/${topic.slug.current}`}>
                  {topic.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
    </div>
  )
}

export default TutoralTopics