import React from 'react';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';

import ExperienceCard from '@/components/ExperienceCard';
import { loadExperience } from '@/state/actions/experience';
import { RootState } from '@/state/store';

export default function Experience() {
    const dispatch = useDispatch();
    const experienceData = useSelector((state: RootState) => state.experience);

    React.useEffect(() => {
        dispatch(loadExperience());
    }, [dispatch]);

    // Convert object to array for mapping
    const experiencesArray = Object.entries(experienceData);
    const experiences = experiencesArray.map(([id, experience]: [string, any]) => ({
        id,
        title: experience.title,
        company: experience.company,
        description: experience.description,
        startDate: experience.startDate,
        endDate: experience.endDate
    }));

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative min-h-screen text-center sm:text-left 
            max-w-7xl px-4 sm:px-10 justify-evenly mx-auto items-center'>

            {/* Title */}
            <h3 className='absolute top-20 uppercase tracking-[10px] sm:tracking-[20px] 
                text-gray-500 text-lg sm:text-2xl'>
                Experience
            </h3>

            {/* Experience Cards Container */}
            <div className="w-full flex space-x-5 overflow-x-auto p-6 sm:p-10 
                snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200">
                {experiences.map((experience) => (
                    <ExperienceCard
                        key={experience.id}
                        id={experience.id}
                        title={experience.title}
                        company={experience.company}
                        description={experience.description}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                    />
                ))}
            </div>
        </motion.div>
    );
}
