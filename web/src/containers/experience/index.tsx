import React from 'react'
import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'

import ExperienceCard from '@/components/ExperienceCard'
import { loadExperience } from '@/state/actions/experience'
import { RootState } from '@/state/store'


type Props = {}

export default function Experience({ }: Props) {

    const dispatch = useDispatch();
    const experienceData = useSelector((state: RootState) => state.experience);

    React.useEffect(() => {
        dispatch(loadExperience());
    }, [dispatch])

    // Convert the object into an array of key-value pairs
    const experiencesArray = Object.entries(experienceData);

    // Use reduce to transform the array into the desired format
    const experiences = experiencesArray.reduce((acc: any[], [id, experience]: [string, any]) => {
        // Assuming each value is an object representing an experience
        // Modify the keys as per your actual data structure
        const { title, company, description, startDate, endDate } = experience;
        acc.push({
            id,
            title,
            company,
            description,
            startDate,
            endDate
        });
        return acc;
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative text-lft md:text-left md:flex-row max-w-full px-10 
            justify-evenly mx-auto items-center h-screen'>
            <h3
                className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experince</h3>

            <div key="experienceCard" className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
                {experiences?.map((experience: any) => (
                    <ExperienceCard
                        key={experience?.id}
                        title={experience?.title}
                        company={experience?.company}
                        description={experience?.description}
                        startDate={experience?.startDate}
                        endDate={experience?.endDate}
                    />
                ))}

            </div>



        </motion.div>
    )
}