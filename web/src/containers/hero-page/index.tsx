import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cursor, Typewriter } from 'react-simple-typewriter';

import myImage from "@/assets/myImage/my-image.jpg";
import BackgroundCircles from '@/components/BackgroundCircles';
import { RootState } from '@/state/store';
import { loadAbout } from "@/state/actions/about";

export default function Hero() {
    const dispatch = useDispatch();
    const aboutData = useSelector((state: RootState) => state.about);
    const [typing, setTyping] = React.useState(false);

    React.useEffect(() => {
        dispatch(loadAbout());
    }, [dispatch]);

    React.useEffect(() => {
        if (aboutData?.describeMe) {
            const timeout = setTimeout(() => setTyping(true), 2000);
            return () => clearTimeout(timeout);
        }
    }, [aboutData]);

    const words = aboutData?.describeMe || [];

    return (
        <div className='min-h-screen flex flex-col space-y-6 items-center justify-center 
            text-center overflow-hidden px-4 sm:px-10'>

            <BackgroundCircles />

            {/* Profile Image */}
            <Image
                className="relative rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover mx-auto"
                alt="My image"
                src={myImage}
                height={128}
                width={128}
                priority
            />

            <div className='z-20'>
                <h2 className='text-xs sm:text-sm uppercase text-gray-500 pb-2 tracking-[10px] sm:tracking-[15px]'>
                    Software Engineer
                </h2>

                {/* Typing Animation */}
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-semibold px-6 sm:px-10'>
                    {typing && (
                        <Typewriter
                            words={words}
                            loop={false}
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    )}
                    <Cursor cursorColor='#F7ABBA' />
                </h1>

                {/* Navigation Buttons */}
                <div className='pt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4'>
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
    );
}
