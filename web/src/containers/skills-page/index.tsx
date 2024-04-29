import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from "framer-motion"


import { RootState } from '@/state/store'
import { loadSkills } from '@/state/actions/skills'
import Skill from '@/components/Skill'

type Props = {}

export default function Skills({ }: Props) {
    const dispatch = useDispatch();
    const skillsData = useSelector((state: RootState) => state.skills);

    React.useEffect(() => {
        dispatch(loadSkills())
    }, [])

    const skillsArray = Object.entries(skillsData);

    const skills = skillsArray.reduce((acc: any[], [id, skill]: [string, any]) => {
        const { name, description, skillLevel } = skill;
        acc.push({ name, description, skillLevel });
        return acc;
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center 
        md:text-left md:flex-row max-w-7xl px-10 
        justify-evenly mx-auto items-center'>
            <h3
                className='absolute top-24 uppercase tracking-[20px]
                 text-gray-500 text-2xl'>
                Skills
            </h3>
            <h3
                className='top-36 absolute uppercase tracking-[3px]
             text-gray-500 text-sm'>
                Hover over a skill for current proficiency
            </h3>
            <div className='grid grid-cols-4 gap-5'>
                {skills.map((skill: any, index: number) =>
                    <div key={index}>
                        <Skill
                            id={skill.id}
                            name={skill.name}
                            description={skill.description}
                            skillLevel={skill.skillLevel}
                            directionLeft={index % 2 === 0}
                        />
                    </div>
                )}

            </div>

        </motion.div>
    )
}