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


const Third = () => {
    return (
        <section className={noto.className}>



            <div className='w-[95%] md:w-[70%] mx-auto py-4 relative'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/49085a7c-899e-4182-c4ad-af6551cdd900/public" alt="ad" loading='lazy' />
                <div className='absolute text-white font-bold bottom-8 md:bottom-10 left-10 md:left-[50px] text-3xl text-center w-[70%] '>
                    हॉर्सफायर टेबलेट खाने वाले पुरुष
                </div>
            </div>


            <div className='text-center'>

                <div className='grid grid-cols-2 items-center w-[90%] mx-auto gap-3'>
                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ec92ea33-e51b-4309-65ee-005e8ad6f100/public" alt="adsdas" loading='lazy' />
                    </div>
                    <div>
                        <p className='text-2xl md:text-4xl font-bold text-[#013862]'>ज्यादा लम्बा सेक्स </p>
                    </div>
                </div>


                <div className='grid grid-cols-2 items-center w-[90%] mx-auto gap-3'>

                    <div>
                        <p className='text-2xl md:text-4xl font-bold text-[#013862]'>बड़ा फौलादी लिंग  </p>
                    </div>

                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2ec0cfbd-6c10-40e5-9c58-b21365b5db00/public" alt="adsdas" loading='lazy' />
                    </div>

                </div>


                <div className='grid grid-cols-2 items-center w-[90%] mx-auto gap-3'>
                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f14cb82d-8469-40c4-5882-f40991f4fb00/public" alt="adsdas" loading='lazy' />
                    </div>
                    <div>
                        <p className='text-2xl md:text-4xl font-bold text-[#013862]'>चट्टान सी सख्ती  </p>
                    </div>
                </div>


                <div className='grid grid-cols-2 items-center w-[90%] mx-auto gap-3'>

                    <div>
                        <p className='text-2xl md:text-4xl font-bold text-[#013862]'>अद्भुत एनर्जी और पावर </p>
                    </div>


                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8577e4b8-3a36-4eca-d834-47b64d665a00/public" alt="adsdas" loading='lazy' />
                    </div>

                </div>

            </div>



        </section>)
}

export default Third