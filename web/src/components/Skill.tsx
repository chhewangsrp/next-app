import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

import { skillTools } from '@/assets/skill/SkillsImageSource'

type Props = {
    id: number,
    name: string,
    description: string,
    skillLevel: number,
    directionLeft: boolean
}

export default function Skill({
    id,
    name,
    skillLevel,
    directionLeft
}: Props) {

    const toolImageSource = skillTools[name];


    return (
        <div className="group relative flex cursor-pointer">
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}

            >
                {toolImageSource?.map((src, index) =>
                    <Image
                        key={index}
                        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 
                xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
                        alt='skill'
                        src={src}
                        width={200}
                        height={200}
                    />
                )}

            </motion.div>
            <div
                className='absolute opacity-0 group-hover:opacity-80 
            transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 
            md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
                <div
                    className='flex items-center justify-center h-full'>
                    <p
                        className='text-3xl font-bold text-black opacity-100'>
                        {skillLevel}%
                    </p>
                </div>
            </div>
        </div>
    )
}