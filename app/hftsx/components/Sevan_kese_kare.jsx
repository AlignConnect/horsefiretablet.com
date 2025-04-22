import { useGlobalContext } from '@/app/statemanage/context';
import React from 'react'

function Sevan_kese_kare() {

    const { hours, minutes, remainingSeconds } = useGlobalContext();

    return (
        <div className='w-full relative py-5 sm:py-10 text-xl sm:text-2xl '>
            <div className=' px-5 sm:px-12 text-justify sm:text-center !leading-snug pb-2'>

                <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/faaaa391-f47c-424f-525f-b3f4044df800/public' alt="pic" width='100%' height='100%' loading='lazy' />
                <p className="my-5 sm:my-7"><span className="text-red-600 font-bold ">Horse Fire Tablet </span> का सेवन बहुत ही आसान है। बेहतर सेक्स टाइमिंग, रॉक हार्ड इरेक्शन, जोश-स्टैमिना और शारीरिक शक्ति के लिए 1 टेबलेट सुबह-शाम 1 गिलास गुनगुने दूध या पानी के साथ लें ! बेहतर परिणाम के लिए दूध के साथ इस्तेमाल का सुझाव दिया गया है। </p>
                <div className="font-bold text-[1.4rem] sm:text-4xl text-center">
                    तो देर किस बात की यौन जीवन में खुशहाली की तरफ अपना पहला कदम बढ़ाएं, एक्सपर्ट से फ्री में सलाह पाए !
                </div>

            </div>

            <div className="bg-yellow-400 text-center pt-3 italic">
                <p className="font-semibold">ऑफर ख़त्म होने में शेष समय</p>
                <p className="font-black text-2xl sm:text-3xl">{hours+" : "+minutes+" : "+remainingSeconds}</p>
            </div>
        </div>
        //  <div className="text-center text-white font-bold ">
        //  <a href="#form" className="inline-block text-xl bg-gradient-to-t from-red-500 to-red-700 px-1 rounded-full py-3 pop_imagehfv">
        //      <span className=" bg-gradient-to-b from-red-500 to-red-700 px-5 rounded-full py-2">ORDER NOW</span>
        //  </a>
        // </div>
    )
}

export default Sevan_kese_kare