import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from "framer-motion"


import { tools, companyLogo } from '@/assets/ExperienceCard/imageSources'

type Props = {
    id: number;
    title: string;
    company: string;
    description: string[];
    startDate: string;
    endDate: string;
}

export default function ExperienceCard(
    {
        id,
        title,
        company,
        description,
        startDate,
        endDate,
    }: Props
) {
    const formedKey = `${title}-${company}`;

    // Get the image source based on the key from the mapping object
    const toolsImages = tools[formedKey];

    const companyLogoImages = companyLogo[formedKey];

    return (
        <article
            className='flex flex-col rounded-lg items-center 
        space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
        snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer traisition-opacity overflow-hidden'>
            <motion.div
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true
                }}
            >
                {companyLogoImages?.map((logo: StaticImageData, index: number) =>
                    <Image
                        key={index}
                        className="relative rounded-full h-32 w-32 xl:h-[200px] xl:w-[200px] 
                mx-auto object-cover"
                        src={logo}
                        alt='experience-card'
                        width={200}
                        height={200}
                        onError={() => { }}
                    />
                )}


            </motion.div>
            <div className='px-0 md:px-10 '>
                <h4 className='text-4xl font-light'>{title}</h4>
                <p className='font-bold text-2xl mt-1'>{company}</p>
                <div className="flex space-x-2 my-2">
                    {toolsImages?.map((src: string, index: number) =>
                        <Image
                            key={index}
                            className='h-10 w-10 rounded-full'
                            src={src}
                            alt='experience-card-logo'
                            width={300}
                            height={300}
                            onError={() => { }}
                        />
                    )
                    }
                </div>
                <p className="py-5 text-gray-300">{startDate} - {endDate ? endDate : "Present"}</p>
                <ul className="list-disc space-y-4 ml-5 text-lg h-36 overflow-y-scroll">
                    {description?.map((items: string, index: number) =>
                        <li key={index}>{items}</li>
                    )}
                </ul>
            </div>
        </article>
    )
}