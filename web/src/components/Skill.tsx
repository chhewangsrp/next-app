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
        <div className="group relative flex cursor-pointer items-center justify-center">
            <motion.div
                initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative flex items-center justify-center"
            >
                {toolImageSource?.map((src, index) => (
                    <Image
                        key={index}
                        className="rounded-full border border-gray-500 object-contain 
                        w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 
                        filter group-hover:grayscale transition duration-300 ease-in-out"
                        alt={name}
                        src={src}
                        width={128}  // Adjusted to match w-32 (Tailwind)
                        height={128} // Adjusted to match h-32
                    />
                ))}
            </motion.div>

            {/* Hover Overlay */}
            <div
                className="absolute opacity-0 group-hover:opacity-90 
                transition duration-300 ease-in-out bg-white 
                flex flex-col items-center justify-center text-center 
                w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 
                rounded-full z-10"
            >
                <p className="text-lg font-bold text-black">{name}</p>
                <p className="text-2xl font-bold text-black">{skillLevel}%</p>
            </div>
        </div>
    )
}
