import UploadTutorialForm from '@/components/Admin/UploadTutorialForm';
import { TechnologyProps, TutorialTopicProps } from '@/types';
import { sanityFetch } from '@/utils/sanity/client';

const UploadGuideOrTutorial = async() => {

    const techdata = await sanityFetch<TechnologyProps[]>({
      query: `*[_type == "technology"]`,
      tags: [],
    });

    const tutorialTopics = await sanityFetch<TutorialTopicProps[]>({
      query: `*[_type == "topic"]`,
      tags: [],
    });

  return (
    <div>
      <h1 className='w-full mt-[30px] text-center font-bold text-xl underline underline-offset-8 decoration-yellow1'>
        Upload Tutorial or Guide Post
      </h1>
      <div className='mt-[50px] w-[600px]'>
        <UploadTutorialForm technologies={techdata} topics={tutorialTopics} />
      </div>
    </div>
  )
}

export default UploadGuideOrTutorial