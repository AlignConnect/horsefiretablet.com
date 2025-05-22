
import Image from 'next/image'
import React from 'react'
import { Anton } from 'next/font/google'


import { Noto_Sans_Devanagari } from "next/font/google";
// import Order from '@/app/hfck/component/Order';
import Order from '@/app/hftnxtf/component/OrderNow';

const devanagariFont = Noto_Sans_Devanagari({
    subsets: ["devanagari", "latin"],
    toht: ["400", "700"],
    variable: "--font-devanagari",
});


const anton = Anton({
    subsets: ["latin"],
    weight: ["400"]
})

const Header = () => {



    return (
        <div className={devanagariFont.className}>

            <div className='w-full'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5ce3d168-6ff8-494e-4b36-7fbeb7931f00/public" alt="asdad" loading='lazy' className='w-full' />
            </div>



            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1d7b4881-7990-45ab-6880-e3423d82a700/public)] bg-cover bg-no-repeat pt-5'>


                <div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/637d8dd7-73b0-4454-cbcd-89bc1178fb00/public" alt="sdsdsd" loading='lazy' className='w-2/3 mx-auto py-5' />
                </div>




                <div className='flex items-center text-white w-[100%] sm:w-[85%] mx-auto py-4 px-1'>
                    <div className='w-[40%] sm:w-[40%] z-20'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4ec3ba13-9c9b-49cf-e54f-a57f425ff400/public" alt="asdasd" loading='lazy' className='w-[100%] shadow-2xl pt-1' />
                    </div>
                    <div className='text-2xl bg-white w-[60%] px-4 py-3 relative -left-2 z-10'>
                        <h1 className='text-[#ff0000] font-black text-xl sm:text-2xl'>शीघ्रपतन</h1>
                        <p className='text-[16px] text-black'>शुरू होते ही सब खत्म?</p>
                    </div>
                </div>




                <div className='flex items-center text-white w-[100%] sm:w-[85%] mx-auto py-4'>
                    <div className='w-[40%] sm:w-[40%] z-20'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/98311b55-ca88-4b8d-8222-bca5b9986300/public" alt="asdasd" loading='lazy' className='w-[100%] shadow-2xl' />
                    </div>
                    <div className='text-2xl bg-white w-[60%] px-4 py-3 relative -left-2 z-10'>
                        <h1 className='text-[#ff0000] font-black  text-xl sm:text-2xl '>लिंग में ढीलापन</h1>
                        <p className='text-[17px] text-black'>न खड़ा होता है, न टिकता है?</p>
                    </div>
                </div>


                <div className='flex items-center text-white  w-[100%] sm:w-[85%] mx-auto py-4 px-1'>
                    <div className='w-[45%] sm:w-[40%] z-20'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a2b3391d-1ad7-4749-cf39-d1bfc953dd00/public" alt="asdasd" loading='lazy' className='w-[100%] shadow-2xl ' />
                    </div>
                    <div className='text-2xl bg-white w-[60%] px-4 py-3 relative -left-2 z-10'>
                        <h1 className='text-[#ff0000] font-black  text-xl sm:text-2xl '>स्टैमिना की कमी</h1>
                        <p className='text-[16px] sm:text-lg text-black'>एक राउंड में ही थक जाते हैं?</p>
                    </div>
                </div>

                <div className='flex items-center text-white  w-[100%] sm:w-[85%] mx-auto py-4 px-1'>
                    <div className='w-[45%] sm:w-[40%] z-20'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/04614fee-708f-46b3-3749-37ed04692500/public" alt="asdasd" loading='lazy' className='w-[100%] shadow-2xl ' />
                    </div>
                    <div className='text-2xl bg-white w-[60%] px-4 py-1 relative -left-2 z-10'>
                        <h1 className='text-[#ff0000] font-black  text-xl sm:text-2xl'>कामेच्छा की कमी</h1>
                        <p className='text-[16px] text-black leading-normal'>मन तो करता है, लेकिन शरीर साथ नहीं देता?</p>
                    </div>
                </div>



                <div className='bg-gradient-to-t from-red-600 to-red-700 w-[90%] mx-auto p-3'>
                    <div className='border-dashed outline-2 text-white p-2 border text-lg'>
                        क्या बिस्तर पर आप कुछ ही मिनट में ढीले पड़ जाते हैं? क्या आपकी पार्टनर संतुष्ट नहीं हो पा रही? ये संकेत हैं सेक्स कमजोरी के, जो आज हर 3 में से 1 पुरुष झेल रहा है।
                    </div>

                </div>


                <div className='py-4'>
                    <Order />
                </div>


            </div>

        </div>
    )
}

export default Header
