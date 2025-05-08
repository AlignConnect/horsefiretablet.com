import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const Header = () => {
    return (

        <div className={noto.className}>

            <div className='flex justify-between items-center text-white px-4'>

                <div className='text-xl sm:text-3xl'>
                    <GiHamburgerMenu />
                </div>

                <div className='text-center font-bold text-[11px] sm:text-xl text-[#fcbd00] py-4'>
                    EXCLUSIVE OFFER AVAILABLE
                </div>

                <div className='text-xl sm:text-3xl'>

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0435fb23-33a1-4838-cb26-417ececd9500/public" alt="ad" loading='lazy' className='w-[30px]' />
                    {/* <IoMdSettings /> */}

                </div>

            </div>

            <div className='relative w-[95%] mx-auto rounded-lg my-5 z-10'>
                <div className='font-bold sm:text-3xl bg-white z-20 px-5 rounded-full text-center pt-2 absolute transform -translate-x-1/2 -translate-y-1/2 top-0 left-1/2'>
                    नक्कालों से सावधान !
                </div>

                <div className='p-2 text-[12px] sm:text-lg bg-[#d13131] text-white pt-7 relative z-10'>
                    <p>Horse Fire Tablet की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से AR Ayurveda ब्रांड देखकर ही प्रोडक्ट खरीदें !</p>
                </div>
            </div>

        </div>

    )
}

export default Header
