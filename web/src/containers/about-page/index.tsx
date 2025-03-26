import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { motion } from "framer-motion";
import myImage from "@/assets/myImage/my_pic.jpg";
import { loadAbout } from '@/state/actions/about';
import { RootState } from '@/state/store';

export default function About() {
    const dispatch = useDispatch();
    const aboutData = useSelector((state: RootState) => state.about);

    React.useEffect(() => {
        dispatch(loadAbout());
    }, [dispatch]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative min-h-screen text-center 
                md:text-left md:flex-row max-w-7xl px-5 sm:px-10 
                justify-evenly mx-auto items-center overflow-hidden'
        >
            {/* Heading */}
            <h3 className='absolute top-16 sm:top-24 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-lg sm:text-2xl'>
                About
            </h3>

            {/* Image Section */}
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex justify-center w-full"
            >
                <Image
                    className='mb-10 md:mb-0 flex-shrink-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-full 
                        object-cover md:rounded-lg'
                    alt="My image"
                    src={myImage}
                    height={600}
                    width={600}
                    priority
                />
            </motion.div>

            {/* Text Content */}
            <div className='space-y-6 px-5 sm:px-10 max-w-md mx-auto text-sm sm:text-base'>
                <h4 className='text-2xl sm:text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#7AB8AA]/50'>little</span> background
                </h4>
                <p>{aboutData?.bio}</p>
            </div>
        </motion.div>
    );
}
