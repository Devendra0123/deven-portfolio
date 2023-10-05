
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

export const RichTextCoomponent = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className='relative w-full h-96 mx-auto'>
                    <Image
                        className='object-contain'
                        src={urlForImage(value).url()}
                        alt="Blog post image"
                        fill
                    />
                </div>
            );
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className=' flex flex-col gap-[10px] ml-10 py-5 list-disc space-y-5'>
                {children}
            </ul>
        ),
        number: ({ children }: any) => (
            <ul className=' flex flex-col gap-[10px] my-[10px] list-decimal'>
                {children}
            </ul>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className='text-5xl font-bold'>{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className='text-4xl font-bold'>{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className='text-3xl font-bold'>{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className='text-2xl font-bold'>{children}</h4>
        ),
        normal: ({ children }: any) => (
            <p className=''>{children}</p>
        ),

        blockquote: ({ children }: any) => (
            <blockquote className='border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5 '>
                {children}
            </blockquote>
        ),
    },
    marks: {
        highlight: ({ children }: any) => {
            return (
                <p className='inline bg-yellow-500 p-[5px] font-bold font-poppins'>
                    {children}
                </p>
            )
        },
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/")
                ? "noreferrer noopener"
                : undefined;

            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className='underline decoration-[#F7AB0A] hover:decoration-black '
                >
                    {children}
                </Link>
            )
        },
        code: ({ children }: any) => {
            return (
                <div className='w-full overflow-x-scroll p-[20px] bg-slate-800 text-white text-lg rounded-xl font-poppins'>
                    {children}
                </div>
            )
        }
    }
}