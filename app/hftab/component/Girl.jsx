import React from 'react'
import { motion, LazyMotion } from 'framer-motion'
import { Noto_Serif_Devanagari } from "next/font/google";
import dynamic from 'next/dynamic';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const YoutubeFrame = dynamic(() => import('@/app/commonUse/Youtubefile/YoutubeFrame'));

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const OrderBtn = dynamic(() => import('./Ordernow'));



const Girl = () => {
    return (
        <section className={noto.className}>

            <motion.section

                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}

                transition={{ duration: 0.5 }}
                className='bg-[#e4e4e4]'>

                <section className='w-full md:w-[900px] mx-auto'>

                    <motion.div
                        className='grid grid-cols-4 items-center'
                    >

                        <motion.div
                            className='col-span-4 md:col-span-2'
                            initial={{ opacity: 0, scale: 0, transition: "1.2s" }}
                            whileInView={{ opacity: 1, scale: 1, transition: "1.4s" }}
                            viewport={{ once: true }}

                            transition={{ duration: 0.9 }}

                        >

                            <motion.img
                                initial={{ opacity: 0, scale: 0, transition: "1.2s" }}
                                whileInView={{ opacity: 1, scale: 1, transition: "1.4s" }}
                                viewport={{ once: true }}

                                transition={{ duration: 0.9 }}
                                src="/main/hftab_images/girl.webp" loading='lazy' className='w-[50%] md:w-[70%] mx-auto' />

                        </motion.div>

                        <motion.div className='col-span-4 md:col-span-2 my-3'>

                            <motion.h1
                                initial={{ opacity: 0, x: "100%" }}
                                whileInView={{ opacity: 1, x: "0%" }}
                                viewport={{ once: true }}

                                className='text-center md:text-start text-4xl font-bold my-2'
                            >
                                जब मिला हॉर्सफायर,  </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, x: "-100%" }}
                                whileInView={{ opacity: 1, x: "0%" }}
                                viewport={{ once: true }}

                                className='text-4xl text-center md:text-start font-bold text-[#3f58c3] md:mb-7'

                            >रोमांचक हो गयी लाइफ </motion.h1>

                            <motion.p
                                className='text-lg md:text-xl px-2'
                                initial={{ opacity: 0, y: "100%", transition: '10s' }}
                                whileInView={{ opacity: 1, y: "0%", transition: '10s' }}
                                viewport={{ once: true }}

                                transition={{ duration: 1 }}

                            >
                                मैंने हार नहीं मानी और बेस्ट की तलाश जारी रखी और आखिर वो दिन आ ही गया ! जब पहली बार मुझे "हॉर्सफायर टेबलेट" के बारे में पता चला। मैं यूट्यूब पर दवा के बारे में पता कर रही थी तब मुझे हॉर्सफायर टेबलेट का वीडियो मिला जिसे यौन रोग विशेषज्ञ डॉक्टर्स द्वारा रेकमेंडेड किया जा रहा था। मैंने इसके बारे में पता किया। इसके रिव्यूज और एड में किये गए दावों को देखकर मैं संतुष्ट हो गयी और आर्डर कर दी।
                            </motion.p>

                        </motion.div>


                    </motion.div>

                </section>

            </motion.section>

            <Carousel showStatus={false} infiniteLoop={true} autoPlay
            //  showThumbs={false} 
             showArrows={false} >

                <div className='w-full md:w-[768px] mx-auto my-3'>
                    <YoutubeFrame vid="I7RqbSjlptY" />
                </div>


                <div className='w-full md:w-[768px] mx-auto my-3'>
                    <YoutubeFrame vid="rf51nF8mlb0" />
                </div>
            </Carousel>


            <section className='bg-[white]'>

                <section className='w-full md:w-[900px] mx-auto'>

                    <motion.h1
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y: "0%" }}
                        viewport={{ once: true }}

                        transition={{ duration: 1 }}

                        className='text-3xl md:text-4xl text-center font-bold py-[20px] md:py-[50px]'
                    >
                        हॉर्सफायर टेबलेट: भारत का No.1 सेक्सवर्धक
                    </motion.h1>

                    <section className='grid grid-cols-12 gap-4'>

                        <motion.div
                            className='col-span-6 md:col-span-3 shadow-sm shadow-black p-3 rounded-sm'
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}

                            transition={{ duration: 0.5 }}
                        >

                            <img src="/main/hftab_images/f2.png" alt="dfdsfdfs" loading='lazy' className='mx-auto w-[50px] py-2' />

                            <h1 className='text-[#49b2eb] font-bold text-xl'>+1-2 घंटे टाइमिंग </h1>
                            <p className='text-[#315e8d] text-lg'>
                                टाइमिंग के निम्नतम स्तर को उच्चतम स्तर पर ले जाये
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}

                            transition={{ duration: 0.5 }}
                            className='col-span-6 md:col-span-3 shadow-sm shadow-black p-3 rounded-sm'
                        >

                            <img src="/main/hftab_images/f4.png" alt="dfdsfdfs" loading='lazy' className='mx-auto w-[50px] py-2' />


                            <h1 className='text-[#49b2eb] font-bold text-xl'>लिंग साइज बढ़ाए</h1>
                            <p className='text-[#315e8d] text-lg'>
                                छोटे लिंग को 8-9 इंच लम्बा-मोटा और फौलादी बनाए
                            </p>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}

                            transition={{ duration: 0.5 }}
                            className='col-span-6 md:col-span-3 shadow-sm shadow-black p-3 rounded-sm'
                        >

                            <img src="/main/hftab_images/f1.png" alt="dfdsfdfs" loading='lazy' className='mx-auto w-[50px] py-2' />


                            <h1 className='text-[#49b2eb] font-bold text-xl'>लिंग को कड़क बनाये</h1>
                            <p className='text-[#315e8d] text-lg'>
                                स्खलन पश्चात ढीले लिंग को रॉड सा कड़क बनाए
                            </p>
                        </motion.div>



                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}

                            transition={{ duration: 0.5 }}
                            className='col-span-6 md:col-span-3 shadow-sm shadow-black p-3 rounded-sm'
                        >

                            <img src="/main/hftab_images/f3.png" alt="dfdsfdfs" loading='lazy' className='mx-auto w-[50px] py-2' />

                            <h1 className='text-[#49b2eb] font-bold text-xl'>एनर्जी, पावर बढ़ाए</h1>
                            <p className='text-[#315e8d] text-lg'>
                                कमजोरी मिटाये शरीर एक्टिव व जोशीला बनाए
                            </p>
                        </motion.div>
                    </section>
                </section>

                <div className='pt-2'>
                    <OrderBtn />
                </div>

                <motion.section
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}

                    transition={{ duration: 0.5 }}
                    className='bg-[#d5134b]'
                >


                    <motion.p
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='text-lg md:text-xl px-2 w-full mx-auto md:w-[900px] py-5 mt-2 text-white'
                    >

                        प्रोडक्ट 4 दिनों के अंदर पूरी सुरक्षित डिलीवर हो गयी। मैं सोच रही थी जैसा दुसरो को फायदा मिला है उससे थोड़ा कम फायदा भी मेरे पति को मिल जाए तो सेक्स में थोड़ा मजा बढ़ जाए। मैंने उनको इस्तेमाल के लिए दिया और परिणाम देखने के लिए बेचैन हो रही थी पर बेहतर अनुभव के लिए 1 सप्ताह का इंतजार करना था। आखिर वो दिन आ ही गया मेरे पति का लंड बिल्कुल बदल गया था साइज में थोड़ी बृद्धि पर सख्ती में भरपूर सुधार हुआ था। उनका लौड़ा भी मुझे पाने के लिए बेताब हुए जा रहा था जिसका उभार पैंट के ऊपर से ही साफ दिखाई दे रहा था।

                    </motion.p>


                </motion.section>


            </section>


        </section>)
}

export default Girl