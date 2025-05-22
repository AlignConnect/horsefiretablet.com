import React from 'react'
import { Accordian, OurPromises } from '../utils/Hfq'


//

import { motion } from "framer-motion"
import YoutubeFrame from '@/app/commonUse/Youtubefile/YoutubeFrame'


const Section2 = () => {
    return (
        <div className='poppinsFont text-center'>


            {/* // you tube video */}



            <motion.h1
                className='text-3xl font-semibold'
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}

            >
                See Expert's Opinions
            </motion.h1>



            <div className='grid sm:grid-cols-2 justify-center items-center gap-5 py-5'>


                <div className='w-[340px] sm:w-auto'>
                    <YoutubeFrame vid={"lRwX-1q_R5Q?si=vgC4pWlkswOeg7WQ"} />
                </div>

                <div className='w-[340px] sm:w-auto'>
                    <YoutubeFrame vid={"h-3HVSbQAGA?si=L3rsgv_AO5pYQRLm"} />
                </div>




            </div>









            <motion.h1
                className='text-3xl font-semibold'
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}

            >
                AR Ayurveda Promises
            </motion.h1>

            <motion.p
                className='text-center text-[16px] py-3 text-gray-700'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}

            >The promises that we'll never break</motion.p>


            <div className='flex flex-wrap items-center gap-3 justify-center sm:gap-5'>

                {
                    OurPromises([

                        {
                            img: "https://arayurveda.shop/cdn/shop/files/1.png?v=1717742122&width=165",
                            title: "Free & Fast Shipping"
                        },
                        {
                            img: "https://arayurveda.shop/cdn/shop/files/3.png?v=1717742122&width=165",
                            title: "Free & Easy Returns"
                        },
                        {
                            img: "https://arayurveda.shop/cdn/shop/files/4.png?v=1717742123&width=165",
                            title: "100% Secured Payments"
                        },
                        {
                            img: "https://arayurveda.shop/cdn/shop/files/5.png?v=1717742122&width=165",
                            title: "Expert Help & Support"
                        },
                    ])
                }
            </div>





            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}


                className='text-3xl sm:text-3xl font-semibold pt-10'>FREQUENTLY ASKED QUESTIONS</motion.p>

            <motion.p className='text-center text-[15px] py-3 text-gray-700'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Find answers to your questions in our FAQ section </motion.p>

            <div className='gap-5 px-2'>


                {
                    Accordian([

                        {
                            que: "How many Tablets are in Horse Fire single pack?",
                            ans: "Horse Fire is a pack of 60 Tablets for 30 days course."
                        },

                        {
                            que: "How to use Horse Fire Tablets?",
                            ans: "Take it twice a day with lukewarm milk or water after meal. Our experts recommend taking it with milk for better results."
                        },

                        {
                            que: "Are there any side effects of Horse Fire Tablets?",
                            ans: "A R Ayurveda Horse Fire Tablets is not known to have any side effects when used in the recommended dosage because it is made by pure natural herbs."
                        },

                        {
                            que: "Is Horse Fire Tablet is helpful for eliminating poor stamina, weakness, or lack of desire?",
                            ans: "Yes, Horse Fire tablets contains proven and trustworthy Ayurvedic herbs that help improve strength, stamina, timing and overall performance. We suggest If you have any long term problem, please consult with doctors before using any medicine."
                        },

                        {
                            que: "Is Horse Fire Tablet safe for men with diabetes, heart problems, or high blood pressure?",
                            ans: "Many medicines increase your blood pressure, so a person suffering from these problems needs to seek medical advice first and assessment and personalized dosage."
                        },

                        {
                            que: "Will it increase sperm count and testosterone?",
                            ans: "Yes, Horse Fire Tablets Contains 15+ Premium herbs like Ashwagandha, Shilajit, Gokhura, Shwet musali, Kesar that proven to increase sperm counts and testosterone level in men."
                        },


                        {
                            que: "Can I take this with my other medicines?",
                            ans: "Yes, You just need to maintain gap of 45 minutes to 1hour between Horse Fire Tablet and other medicines."
                        },


                        {
                            que: "Can I take this after consuming alcohol?",
                            ans: "For Better and most sustainable results, it is recommended to avoid drinking alcohol during Horse Fire tablet's course."
                        },


                        {
                            que: "When can I see the results?",
                            ans: "It depends on many factors like current health status, medical history, and mainly your diet & lifestyle. You can notice the result within 2 to 3 weeks to use. For best results, we recommend taking it for at least three months."
                        },

                        {
                            que: "Is Horse Fire Tablet safe to use for the long term?",
                            ans: "Yes, Horse Fire Tablet is a blend of natural ingredients and is safe for long-term use in the recommended dosages."
                        },

                        {
                            que: "Is there any age limit for Horse Fire Tablet?",
                            ans: "Horse Fire Tablet is an ayurvedic sex medicine that is considered safe for adults. But you can consult your doctor to make sure that are you eligible to take this product."
                        },

                        {
                            que: "What is in Horse Fire tablet that makes it different from other sexual products?",
                            ans: "Horse Fire Tablet is a pure Ayurvedic medicine that is prepared with well-researched & proven Premium herbs. Its regular use works as a revitalizer and rejuvenates your body. You just need to use its recommended dosage, and you can perform better in bed."
                        },

                    ])
                }



            </div>




        </div>
    )
}

export default Section2




