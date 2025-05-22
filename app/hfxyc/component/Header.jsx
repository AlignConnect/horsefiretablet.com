import React from 'react'
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Header = () => {

    return (

        <section className={noto.className}>
            <section className='text-center'>

                <div className=' bg-black py-1'>
                    <div className=' text-white relative bg-black pt-3 px-3 font-semibold border border-dashed block md:flex itams-center justify-center gap-2 z-10'>
                        <h1 className='text-2xl '>जाने सेक्स टाइमिंग और </h1>
                        <h1 className='text-2xl'><span className='text-[#fde300] '> लिंग साइज</span>  बढ़ाने की</h1>
                    </div>
                    <div className='w-full -mt-10'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/37c85d5a-3d16-4adb-b08e-8735b63f9800/public" alt="asd" loading='eager' className='w-full' decoding='async' />
                    </div>
                </div>

            </section>
        </section>



    )
}

export default Header;