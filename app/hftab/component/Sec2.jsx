import { Noto_Serif_Devanagari } from 'next/font/google';
import { motion, LazyMotion } from 'framer-motion'

import React from 'react'
import dynamic from 'next/dynamic';
const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const OrderBtn = dynamic(() => import('./Ordernow'));


const Sec2 = () => {
    return (
        <div className='bg-white text-lg p-3 rounded-md'>
            <section className={`${noto.className} w-full md:w-[900px] mx-auto`}>

                <motion.p

                    initial={{ opacity: 0, scale: 0.1, transition: "1.2s" }}
                    whileInView={{ opacity: 1, scale: 1, transition: "1.2s" }}
                    viewport={{ once: true }}

                    transition={{ duration: 0.5 }}
                    className='text-lg md:text-xl'
                >
                    मेरा नाम स्नेहा और उम्र 31 साल है। दोस्तों शादी से पहले मैंने कई बार एडल्ट वीडियो देखी थी जिसमे उनके बड़े लिंग और देर तक अलग-अलग पोजीशन में जोरदार झटके देखकर सोचती थी कि शादी के बाद मुझे भी ऐसा ही मजा मिलेगा, पर मेरे पति फिसड्डी निकले ! उनके 4 इंच के छोटे से लिंग और 1 मिनट से भी कम सेक्स की वजह से सुहागरात पर मेरे अरमान धरे के धरे रह गए।
                </motion.p>

                <OrderBtn />

                <motion.p
                    className='text-lg md:text-xl my-2 indent-7'
                    initial={{ opacity: 0, scale: 0.1, transition: "1.2s" }}
                    whileInView={{ opacity: 1, scale: 1, transition: "1.2s" }}
                    viewport={{ once: true }}

                    transition={{ duration: 0.5 }}

                >
                    शुरुआत में मैंने कोई रियेक्ट नहीं किया पर लगभग 2-3 सप्ताह तक हर बार ऐसा ही हुआ। वो हर बार कुछ शॉट्स लगाकर डिस्चार्ज हो जाते थे और लिंग दूसरे राउंड के लिए खड़ा ही नहीं होता था और मैं अधूरी रह जाती थी फिर मुझे उनपर चिढ़ होने लगी। दरअसल, मैं  बायोलॉजी की स्टूडेंट हूँ तो मुझे पता है की एक स्वस्थ पुरुष कम से कम 7 से 13 मिनट लगातार सेक्स करता है। इतना ही नहीं एक महिला को ओर्गेस्म के लिए कम से कम 23 से 27 मिनट सेक्स चाहिए जो आजकल के 80 से 83 प्रतिशत पुरुष करने में नाकाम है। पर मेरे पति तो अत्यंत कमजोर थे उनसे क्या ही उम्मीद करती।
                </motion.p>

                <motion.h1
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true }}

                    className='text-[23px] md:text-4xl py-3 md:py-5 font-bold'
                >
                    बहुत कुछ आजमाये पर नहीं हुआ सुधार !
                </motion.h1>


                <motion.p
                    initial={{ opacity: 0, scale: 0.1, transition: "1.2s" }}
                    whileInView={{ opacity: 1, scale: 1, transition: "1.2s" }}
                    viewport={{ once: true }}

                    className='text-lg md:text-xl'
                >
                    अपनी कमजोरी और मुझे यौन सुख न दे पाने की वजह से वो दुखी रहने लगे थे। चूँकि उनका मेरे प्रति प्यार बहुत ज्यादा था इसलिए उनका दुःख देख मैं भी दुखी हो जाती थी। पर मुझे ऐसे ही असंतोष भरा जीवन नहीं बिताना था। मुझे कोई भी ऐसा समाधान चाहिए था जिससे उनके लिंग साइज और सेक्स अवधि में बृद्धि हो जाए।

                </motion.p>

                <div className='grid grid-cols-5 md:grid-cols-4 items-center w-[85%] mx-auto'>

                    <div className='col-span-3 md:col-span-2'>

                        <motion.img

                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1, transition: "5s" }}
                            viewport={{ once: true }}

                            src='/main/hftab_images/ling.webp' className='w-full' />

                    </div>


                    <div className='col-span-2 text-center font-bold text-2xl md:text-5xl md:leading-[50px]'>

                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1, transition: "3s" }}
                            viewport={{ once: true }}

                        >
                            ढीला और <br /> छोटा लिंग
                        </motion.div>

                    </div>





                </div>


                <motion.p
                    initial={{ opacity: 0, scale: 0, transition: "1.2s" }}
                    whileInView={{ opacity: 1, scale: 1, transition: "1.2s" }}
                    viewport={{ once: true }}

                    className='my-5 text-lg md:text-xl'
                >

                    हमने बहुत बहुत कुछ ट्राई किया! डॉक्टर से कंसल्ट किये, घरेलु नुस्खे आजमाए, कई बेहूदा क्वालिटी की अन्य दवाइयों पर पैसे बर्बाद किये पर समस्या में जरा सा भी सुधार नहीं हुआ। हर बार सिर्फ और सिर्फ निराशा ही हाथ लगी।

                </motion.p>

                <OrderBtn />

            </section>
        </div>
    )
}

export default Sec2