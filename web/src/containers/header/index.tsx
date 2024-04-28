import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

type props = {}


export default function Header({ }: props) {
    return (
        <header className='sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 
        xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'>
                <SocialIcon url="https://www.linkedin.com/in/chhewang-sherpa-932027b3/" />
                <SocialIcon url="https://www.github.com/chhewangsrp" />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center cursor-pointer'>
                <SocialIcon className="cursor-pointer" network='email' />
                <p className='uppercase hidden md:inline-flex'>Get In Touch</p>
            </motion.div>
        </header>
    )
}
