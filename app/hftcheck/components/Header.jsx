import { Noto_Serif_Devanagari } from 'next/font/google';
import React from 'react'


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Header = () => {
    return (
        <section className={noto.className}>

            {/* <div className='pt-8 relative w-full'>

                <div className='absolute tranform translate-x-[-50%] translate-y-[-50%] left-[50%] mx-auto '>
                    <h3 className='bg-white pt-2 px-4 font-bold rounded-xl text-center text-lg md:text-xl'>नक्कलों से सावधान!</h3>
                </div>

                <div className='bg-[#d13131] text-white font-bold px-5 pt-8 text-lg text-center'>
                    <span className='text-[#ffdc01]'> Horse Fire Tablet </span> की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से <span className='text-[#ffdc01]'>AR Ayurveda</span> ब्रांड देखकर ही प्रोडक्ट खरीदें !
                </div>
            </div> */}

            <div className="flex flex-col items-center pt-4 w-full overflow-hidden">

                <div className={`w-full  text-[6.5vw] font-extrabold sm:text-[2vw] text-red-600 leading-none text-center sm:mt-3 pe-5`}>
                    नक्कालों से सावधान!
                </div>
                <marquee className="-mx-[15%] text-white"><span className="text-yellow-300">Horsefire Tablet</span> की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से <span className="text-yellow-300">AR Ayurveda</span> ब्रांड देखकर ही प्रोडक्ट खरीदें !</marquee>
            </div>


            <div className='bg-[#130e08]'>
                <div className=' relative py-5 px-3'>


                    <div className='w-full z-10'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ba78de88-845b-4485-66a7-f31937073000/public" alt="asd" loading='lazy' className='w-[80%]' />
                    </div>

                    <div className='w-[25%] md:w-[50%] md:my-5 text-center md:flex md:flex-col md:items-center min-h-[250px] md:justify-evenly'>

                        <div className='my-5 md:my-3'>
                            <div>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/417bb8da-a1c1-4ae9-5b3f-f4c2625b8000/public" alt="asd" loading='lazy' className='mx-auto w-[60px]' />
                            </div>
                            <p className='text-white py-2'>Boost up Timing</p>
                        </div>
                        <div className='my-5'>
                            <div>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7209af68-2978-4230-c6ae-e868b458a200/public" alt="asd" loading='lazy' className='mx-auto w-[60px]' />
                            </div>
                            <p className='text-white py-2'>
                                Increase Size
                            </p>
                        </div>

                    </div>

                    <div className='absolute top-10 md:top-20 right-0 z-20'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/80936c6d-51f6-4ca8-98fe-122552d6ba00/public" alt="asd" loading='lazy' className='w-[75%] md:w-[80%]  ms-auto md:pe-10' />
                    </div>




                </div>

                <div className='z-30 relative' >

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4b9939ad-1443-4e97-73e8-a9c7a1725900/public" alt="asd" loading='lazy' />

                </div>

            </div>
        </section>
    )
}

export default Header