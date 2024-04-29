import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function Skills({ }: Props) {
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
                 text-gray-500 text-2xl'>Skills</h3>


        </motion.div>
    )
}