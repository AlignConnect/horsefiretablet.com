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


const Header = () => {
    return (

        <div className={poppin.className}>

            <section className='bg-[url("https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0671afb2-877b-4a22-90d7-12a2d51b8500/public")] text-center py-4'>
                <div className='text-5xl font-bold text-white'>
                    HORSE FIRE
                </div>

                <div className='text-4xl font-[500] tracking-[4px] text-[#fff008]'>
                    TABLET
                </div>
            </section>

            <div className="pt-3 pb-1 text-center bg-black text-white text-2xl">
                <h1 className={noto.className}>बदले आपके सेक्स का अंदाज</h1>
            </div>

        </div>

    )
}

export default Header