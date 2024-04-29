
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Image from 'next/image';
import { motion } from "framer-motion";
import myImage from "@/assets/myImage/my_pic.jpg";
import { loadAbout } from '@/state/actions/about';


type Props = {}

// Get about from backend

export default function About({ }: Props) {
    const dispatch = useDispatch();
    const aboutData = useSelector((state: RootState) => state.about);


    React.useEffect(() => {
        dispatch(loadAbout());
    }, []);


    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center 
        md:text-left md:flex-row max-w-7xl px-10 
        justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.div
                initial={{ x: -200, opacity: 0, }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1.0, x: 0 }}
                viewport={{ once: true }}
            >
                <Image
                    className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full 
                    object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
                    alt="My image"
                    src={myImage}
                    height="900"
                    width="900"
                />
            </motion.div>
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#7AB8AA]/50'>little</span> background</h4>
                <p className="text-base">{aboutData?.bio}</p>
            </div>
        </motion.div >
    )
}