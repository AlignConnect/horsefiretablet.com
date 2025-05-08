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

const FirstProduct = () => {
    return (

        <section className={noto.className}>

            <div className={'bg-[url("https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fda43507-dcef-4c1e-4b74-b8ba52d1db00/public")] bg-cover py-4 min-h-[550px] md:min-h-[650px] flex flex-col justify-between'}>

                <p className={`${poppin.className} font-bold text-center w-[90%] text-black italic mx-auto bg-white text-dark py-2 px-3`}>
                    Give Ultimate Pleasure with Rock Hard Penis
                </p>

                <div className='text-center mx-auto w-[90%]'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/739bb28e-cd3b-4398-9680-1b6d63384400/public" alt="dsfdsf" loading='eager' fetchPriority='high' />
                </div>

            </div>


        </section>

    )
}

export default FirstProduct