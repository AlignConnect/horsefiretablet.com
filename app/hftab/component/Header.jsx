import React from 'react'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google';


const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Header = () => {
    return (

        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}

            className={`bg-[#d5134b]   ${noto.className}`}>

            <motion.div
                className='w-full md:w-[900px] mx-auto'
            >

                <div className={`px-2 flex justify-between items-center pt-3 ${poppin.className}`}>

                    <motion.h1
                        initial={{ x: "-1000%" }}
                        animate={{ x: "0%" }}
                        className='flex text-xl md:text-4xl font-semibold md:font-bold '
                    >
                        <p className='text-[#00fff6]'>Secret</p>
                        <p className='text-[#bcedfe]'>Health</p>
                        <p className='text-[#00fff6]'>Story</p>
                    </motion.h1>

                    <motion.button
                        initial={{ x: "1000%" }}
                        animate={{ x: "0%" }}
                        className='text-white border text-[11px] sm:text-[14px] tracking-[2px] font-[300] border-[#00fff6] px-3 py-2 rounded-sm' onClick={() => window.location.href = "#form"}
                    >
                        APPOINTMENT
                    </motion.button>

                </div>

                <div className='grid grid-cols-9 mt-[20px] md:mt-[40px] gap-2 px-3 items-end md:items-center'>

                    <div className='col-span-5 md:mt-[70px]'>

                        <motion.h1

                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}

                            transition={{ duration: 0.5 }}

                            className='text-white font-semibold text-[23px] md:text-4xl  md:leading-[50px]'>
                            कमजोर पति और मेरी अनियंत्रित वासना की दास्तान, जाने कैसे मिला यौनसुख !
                        </motion.h1>

                        <div className='text-end'>

                            <motion.p

                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}

                                transition={{ delay: "0.2" }}
                                className=' text-end inline-flex justify-end  font-bold pt-2 my-2 px-7 pb-1 bg-white text-black  rounded-[30px]'
                            >
                                Age : 31
                            </motion.p>
                        </div>



                    </div>
                    <div className='col-span-4'>
                        <motion.img
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}

                            transition={{ duration: "0.5" }}
                            src="/main/hftab_images/topgirl.webp" alt="dsfdsf" loading='lazy' className='w-full md:w-[80%] mx-auto' />

                    </div>

                </div>
            </motion.div>


        </motion.section>)
}

export default Header