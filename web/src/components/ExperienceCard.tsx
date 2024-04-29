import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from "framer-motion"

import l3HarrisLogo from "@/assets/companyLogo/l3HarrisLogo.jpg"
import navSeaLogo from "@/assets/companyLogo/navseaLogo.jpg"
import noaaCrestLogo from "@/assets/companyLogo/noaaCrestLogo.png"
import { tools } from '@/assets/ExperienceCard/imageSources'

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

    const companyLogo: { [key: string]: StaticImageData } = {
        "Software Engineer-L3Harris": l3HarrisLogo,
        "Software Engineer Intern-Naval Undersea Warfare Center Keyport Division": navSeaLogo,
        "NOAA Undergraduate Scholar-NOAA-CREST": noaaCrestLogo
    }

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
                <Image
                    className="relative rounded-full h-32 w-32 xl:h-[200px] xl:w-[200px] 
                    mx-auto object-cover"
                    src={companyLogo[formedKey]}
                    alt='experience-card'
                    width={200}
                    height={200}
                />

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
                            height={300} />
                    )
                    }
                </div>
                <p className="uppercase py-5 text-gray-300">{startDate} - {endDate}</p>
                <ul className="list-disc space-y-4 ml-5 text-lg h-36 overflow-y-scroll">
                    {description?.map((items: string, index: number) =>
                        <li key={index}>{items}</li>
                    )}
                </ul>
            </div>
        </article>
    )
}