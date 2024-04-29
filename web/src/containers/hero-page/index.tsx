import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import myImage from "@/assets/myImage/my-image.jpg";
import BackgroundCircles from '@/components/BackgroundCircles'
import { RootState } from '@/state/store';
import { loadAbout } from "@/state/actions/about";

type Props = {}

export default function Hero({ }: Props) {
    const dispatch = useDispatch();
    const aboutData = useSelector((state: RootState) => state.about);

    React.useEffect(() => {
        dispatch(loadAbout());
    }, [dispatch]);

    const [text, count] = useTypewriter({
        words: aboutData?.describeMe,
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center 
        text-center overflow-hidden'>
            <BackgroundCircles />
            <Image className="relative rounded-full h-32 w-32 mx-auto object-cover"
                alt="My image"
                src={myImage}
                height="100"
                width="100"
                priority={true}
                onError={() => { }}
            />
            <div className='z-20'>
                <h2 className='text-sm uppsercase text-gray-500 pb-2 
                tracking-[15px]'>
                    Software Engineer
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>

                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7ABBA' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#contact">
                        <button className='heroButton'>Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}