import React from 'react'
import { Anton, Noto_Serif_Devanagari, Poppins } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const anton = Anton({

    subsets: ['latin'],
    display: "swap",
    weight: ['400']


})


const Header = () => {
    return (

        <section className={noto.className}>


            <div className='relative'>

                <div className='absolute text-white transform w-full translate-x-[-50%] left-[50%] text-center'>

                    <h1 className={`${poppin.className} text-[#f9b103] font-bold text-xl md:text-2xl pt-3 `}>TOP BRAND IN MEN WELLNESS</h1>

                    <h1 className={`${anton.className} text-4xl sm:text-6xl sm:py-3`} > <span className={`text-[#ff0000]`}>HORSE FIRE</span> TABLET</h1>

                    <p className='py-2 md:py-5 sm:text-2xl'>
                        बड़े लिंग- ज्यादा सेक्स टाइमिंग से हर बार धुआंधार सेक्स करे और उन्हें अच्छा अनुभव कराएं !
                    </p>
                </div>

                <img src="/main/hfsxy_images/first.webp" alt="asd" loading='eager' decoding="async" className='w-full' />
            </div>


            <div className={` bg-white text-center font-bold text-xl py-4`}>
                <p>308 people bought through call</p>
                <p>611 people submitted the form</p>
            </div>




        </section>)
}

export default Header