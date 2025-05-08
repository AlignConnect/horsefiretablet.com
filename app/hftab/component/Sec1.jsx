import React from 'react'
import { motion, LazyMotion } from 'framer-motion'

import { Noto_Serif_Devanagari } from "next/font/google";
import dynamic from 'next/dynamic';

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const OrderBtn = dynamic(() => import('./Ordernow'));

const Sec1 = () => {
    return (

        <motion.section
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}

            className='bg-black'>
            <section className={`${noto.className} w-full md:w-[900px] mx-auto`}>

                <div className='bg-black text-white'>

                    <motion.p

                        className='text-lg md:text-xl py-5 px-2'
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}

                        transition={{ duration: 0.5 }}
                    >
                        पति के कमजोर लिंग और शीघ्रपतन की वजह से पहली सुहागरात निराशा भरी थी, लेकिन मिला ऐसा फार्मूला जिसने उनके लिंग को फौलाद बना दिया, अब तो हर रात लगती है सुहागरात !
                    </motion.p>

                    <OrderBtn />

                    <motion.img
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}

                        transition={{ duration: 0.5 }}
                        src="/main/hftab_images/cou.jpg" alt="dsfdsf" loading='lazy' className='w-[95%] mx-auto rounded-lg' />


                    <motion.p

                        className='text-lg md:text-2xl text-center py-5 text-[#00d9fd] font-bold'

                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1, x: "0%" }}
                        viewport={{ once: true }}

                        transition={{ duration: 0.5 }}
                    >
                        "हर लड़की में सेक्सुअल डिजायर है पर सभी बोल नहीं पाती और अंदर ही अंदर तड़पती रहती है, उनकी यौन संतुष्टि का ख्याल रखना पुरुष का कर्तव्य है !!"
                    </motion.p>


                </div>


            </section>
        </motion.section>

    )
}

export default Sec1