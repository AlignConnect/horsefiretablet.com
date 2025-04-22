import YoutubeFrame from '@/app/commonUse/Youtubefile/YoutubeFrame';
import { Noto_Serif_Devanagari } from 'next/font/google';
import React from 'react'
const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Sec3 = () => {
    return (
        <div className={noto.className}>



            <div className='bg-[#e93d30] text-center py-10'>

                <h1 className='font-bold text-white text-4xl'>Why trust us ?</h1>



                <div className='grid grid-cols-2 sm:grid-cols-4 text-white text-xl sm:w-[70%] px-2 mx-auto'>

                    <div>

                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7034b4fd-db41-4b41-e24b-bc7574a9b600/public" alt="ad" loading='lazy' className='py-5 mx-auto' />
                        </div>

                        <div>
                            <p>COD पेमेंट उपलब्ध</p>
                        </div>

                    </div>




                    <div>

                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d1825e72-0829-4966-82ac-d5996900ef00/public" alt="ad" loading='lazy' className='py-5 mx-auto' />
                        </div>

                        <div>
                            <p>20 लाख+संतुष्ट ग्राहक</p>
                        </div>

                    </div>




                    <div>

                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bde40523-5266-492c-9a45-3796a13f9e00/public" alt="ad" loading='lazy' className='py-5 mx-auto' />
                        </div>

                        <div>
                            <p>97.6% सफलता दर</p>
                        </div>

                    </div>



                    <div>

                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9d35327d-7320-43c3-a22b-30b4405bd700/public" alt="ad" loading='lazy' className='py-5 mx-auto' />
                        </div>

                        <div>
                            <p>Flipkart, Amazon पर लिस्टेड</p>
                        </div>

                    </div>

                </div>







            </div>



            {/* //--------------------------------------------------- */}



            <div className='relative border flex items-center min-h-[530px] sm:min-h-[650px]'>

                <div className='absolute w-full hidden sm:block'>

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/528ce048-6b65-40e1-f83b-9e9bfe01e300/public" alt="asd" loading='lazy' className='w-full' />

                </div>



                <div className='absolute w-full block sm:hidden'>

                    <img src=" https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3276a3fc-12e3-4bf2-a677-85283a309400/public" alt="asd" loading='lazy' className='w-full' />

                </div>

                <div className='sm:w-[50%] ms-auto absolute sm:relative top-0 px-5 z-10'>


                    <h2 className='text-white text-3xl sm:text-6xl leading-tight font-semibold py-5 sm:leading-tight'>
                        अब न ही पार्टनर निराश होंगी और न ही आप,<span className='text-[#e0ce00]'> Horse Fire Tablet</span> से हर रात बनाएं सुहागरात और <span className='text-[#e0ce00]'>पार्टनर को दें भरपूर जिस्मानी सुख !!</span>

                    </h2>


                </div>


            </div>



            <h1 className='text-center text-2xl sm:text-3xl pt-10 pb-5 font-bold'>Recommended <span className='text-red-600'>by Doctor</span></h1>

            <div className='sm:w-[600px] mx-auto mb-8 px-2'>
                <YoutubeFrame vid={"h-3HVSbQAGA?si=7IlhKeAH8vOY-mvC"} />
            </div>

        </div>
    )
}

export default Sec3
