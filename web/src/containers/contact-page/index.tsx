import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { motion } from "framer-motion"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'


type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
}

export default function Contact({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        // window.location.href = `mailto:chhewangsrp@gmail.com?subject=${formData.subject}&body=${formData.message}`;
    }


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
                Contact
            </h3>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    Contact me for further inquiry <span className='underline decoration-[#eff7a8]'>Let&apos;s Have A Chat</span>
                </h4>
                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#f6f7a8] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>1234567890</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#f6f7a8] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>myemail@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#f6f7a8] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>123 Developer Lane</p>
                    </div>

                    <form className="flex flex-col space-y-2 w-fit mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex space-x-2'>
                            <input
                                {...register('name')}
                                className='contactInput'
                                type="text"
                                placeholder="Name"
                            />
                            <input
                                {...register('email')}
                                className='contactInput'
                                type="email"
                                placeholder="Email"
                            />
                        </div>

                        <input
                            {...register('subject')}
                            className='contactInput'
                            type="text"
                            placeholder="Subject"
                        />
                        <textarea
                            {...register('message')}
                            className='contactInput'
                            placeholder='Message'
                        />
                        <button
                            type="submit"
                            className='bg-[#e2b41a] py-5 px-10 rounded-md text-black font-bold text-lg'>
                            Submit
                        </button>

                    </form>

                </div>


            </div>
        </motion.div>
    )
}