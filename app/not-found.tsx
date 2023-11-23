import SvgPath5 from '@/components/SvgPath/SvgPath5'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <div className='absolute top-[100px] right-0'>
                <SvgPath5 />
            </div>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}