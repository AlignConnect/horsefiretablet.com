import { Noto_Serif_Devanagari, Poppins } from 'next/font/google';
import React from 'react'

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const Fourth = () => {
    return (
        <section className={noto.className}>

            <div className='w-[90%] mx-auto py-5 bg-[#025da3] rounded-xl my-5'>

                <div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f88bd664-c087-4e17-4725-9eced0d96e00/public" alt="asd" loading='lazy' className='w-[60%] mx-auto' />
                </div>

                <h1 className='text-center text-2xl my-5 font-bold text-white'>डॉक्टर्स द्वारा प्रस्तावित</h1>


                <div className='w-[95%] pt-2 px-2 pb-0 text-white font-semibold border border-dashed mx-auto text-lg'>

                    <span className='text-[#fff500]'>Horsefire Tablet </span>
                    एक क्रन्तिकारी प्रभाव के साथ उपलब्ध है जिसका काम है
                    <span className='text-[#fff500]'> पुरुष कमजोरी </span>
                    को भगाना ! इसे भारत के
                    <span className='text-[#fff500]'> मशहूर सेक्सोलॉजिस्ट </span>
                    द्वारा सुझाया गया है, निचे वीडियो देखें !!!

                </div>
            </div>

            <div className='text-center'>
                <div className='border-2 border-dashed border-[#035da3] pt-2 px-8 pb-2 inline-block'>
                    <div className='inline-block border-2 border-[#035da3] text-[#035da3] pt-3 px-8 font-bold pb-0 border-dashed text-2xl'>
                        लिंग बृद्धि ग्राफ
                    </div>
                </div>
            </div>

            <div className='mt-3'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7de1dd1c-f378-4e57-599d-21ace0c38500/public" alt="sdfdsf" loading='lazy' />
            </div>

            <div className='bg-black text-white pt-5 px-3 text-lg'>

                <p>
                    * Horsefire Tablet प्रथम दिन से ही समस्या रिकवरी पर काम करता है। यह लिंग के
                    <span className='text-[#fff600]'> कॉर्पस केवरोसोम </span>
                    में
                    <span className='text-[#fff600]'> रक्त प्रवाह बढ़ाता है </span>
                    और कोशिकाओं का निर्माण करता है जिससे लिंग के नसों का फैलना, साइज का बढ़ना सुनिश्चित होता है।
                </p>


                <div className='w-[90%] mx-auto py-3'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a2b10ac4-2f9e-4d37-10e0-83216c016c00/public" alt="sdsd" loading='lazy' />
                </div>

                <p>
                    अगर कोई भी
                    <span className='text-[#fff600]'> पुरुष जल्दी डिस्चार्ज</span>
                    हो जाता है, लिंग में दम नहीं है तो उसे बिना हिचक के
                    <span className='text-[#fff600]'>  Horse Fire Tablet</span>
                    अवश्य आजमाना चाहिए !

                </p>



            </div>

            <div className='w-full'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1488433a-d97f-4d0b-65b6-2430bd405300/public" alt="asdds" loading='lazy' />
            </div>


        </section>
    )
}

export default Fourth