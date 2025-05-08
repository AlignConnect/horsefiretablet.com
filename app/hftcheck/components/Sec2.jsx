import dynamic from 'next/dynamic';
import { Noto_Serif_Devanagari } from 'next/font/google';
import React from 'react'

const OrderNow = dynamic(() => import('./OrderNow'));

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


const YoutubeFrame = dynamic(() => import('@/app/commonUse/Youtubefile/YoutubeFrame'))

const Sec2 = () => {
    return (

        <section className={noto.className}>

            <div>
                <OrderNow />
            </div>

            <div className='grid grid-cols-9 gap-3 my-5 px-3'>





                <div className='col-span-3 md:col-span-3 text-center text-white'>

                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9076e78b-7319-4273-8863-b6ccbcd57600/public" alt="asd" loading='lazy' className='mx-auto w-[110px]' />
                    </div>

                    <div>
                        <p> <span className='text-[#25e201]'>10 लाख +</span> संतुष्ट ग्राहक </p>
                    </div>

                </div>

                <div className='col-span-3 md:col-span-3 text-center text-white'>
                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/84e069fe-56da-4a00-5d9a-eba0aa0baa00/public" alt="asd" loading='lazy' className='mx-auto w-[110px]' />
                    </div>



                    <div>
                        <p>  <span className='text-[#25e201]'>10 DAYS </span> मनी बैक गारंटी</p>
                    </div>

                </div>

                {/* <div className='col-span-4 md:col-span-3 text-center text-white'>
                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d30febd0-f992-4666-f266-a3641402b100/public" alt="asd" loading='lazy' className='mx-auto' />
                    </div>



                    <div>
                        <p> <span className='text-[#25e201]'> कैश ऑन डिलीवरी </span> सुविधा</p>
                    </div>


                </div> */}

                <div className='col-span-3 md:col-span-3 text-center text-white'>
                    <div className=''>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b1768a9a-3ac2-4d0b-3b93-d56e8b76ab00/public" alt="asd" loading='lazy' className='mx-auto w-[110px]' />
                    </div>



                    <div>
                        <p>  <span className='text-[#25e201]'>100% </span> प्रामाणिक प्रोडक्ट</p>
                    </div>


                </div>

            </div>



            <div className='grid grid-cols-12 items-center bg-[#f9f5f2] pt-8 pb-5 relative overflow-hidden'>

                <div className='col-span-5  w-full'>

                    <div className='absolute md:relative bottom-0 -left-6'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f6d0f379-64ea-466f-4526-fdcd17af8300/public" alt="asdfad" loading='lazy' className='ms-auto w-[210px] ' />

                    </div>
                </div>

                <div className='col-span-7'>

                    <div className='bg-[#db2d2e] text-white pt-3 pb-1 rounded-tl-md rounded-br-md my-1 px-3 inline-block font-black text-2xl'>

                        <div className='flex'>

                            <div>HORSE FIRE&nbsp;</div>
                            <div className='hidden md:block'>Tablet क्यों?</div>

                        </div>

                    </div>

                    <p className='text-xl block md:hidden'>
                        Tablet क्यों?
                    </p>



                    <p>
                        महिला को संतुष्ट करने के लिए लम्बा मोटा लिंग और एक राउंड में कम से कम 45 मिनट की सेक्स टाइम होनी चाहिए। क्योंकि महिला योनि के आंतरिक हिस्से में मौजूद G-SPOT पर सुडौल लिंग के लम्बे समय तक के घर्षण से ही महिलाओं को ऑर्गेज़्म सुख मिलता है।
                    </p>

                </div>


            </div>




            <div className='text-white text-center'>

                <div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c2db5b3c-10f4-4588-706b-d3a53ae02800/public" alt="asd" loading='lazy' className='w-[80%] mx-auto py-8' />
                </div>


                <div className='grid grid-cols-2 '>

                    <div className='py-4'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8fdee43f-7385-4973-6cab-6fa7fdf19300/public" alt="asd" className='w-[80px] mx-auto' />
                        </div>

                        <div>
                            <p className='font-bold'>
                                100% मनी बैक गारंटी
                            </p>
                        </div>
                    </div>

                    <div className='py-4'>


                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f4492f3b-4219-4f4a-00cb-3cdfa765f300/public" alt="asd" className='w-[80px] mx-auto' />
                        </div>


                        <div>
                            <p className='font-bold'>
                                COD पेमेंट सुविधा उपलब्ध
                            </p>
                        </div>

                    </div>




                    <div className='py-4'>

                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9e521e19-6834-4876-af06-627d520d6400/public" alt="asd" className='w-[80px] mx-auto' />
                        </div>

                        <div>
                            <p className='font-bold'>
                                India's No.1 शक्तिवर्धक उत्पाद
                            </p>
                        </div>

                    </div>




                    <div className='py-4'>


                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5e7423a7-185a-4f16-f602-d84441b63300/public" alt="asd" className='w-[80px] mx-auto' />
                        </div>

                        <div>
                            <p className='font-bold'>
                                Flipkart, Amazon पर लिस्टेड
                            </p>
                        </div>

                    </div>





                </div>

                <div>
                    <OrderNow />
                </div>

            </div>


            <div className='w-full'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b8c6f5ea-ebf4-4735-b4f4-51f8b6e5c600/public" alt="asd" loading='lazy' className='w-full' />
            </div>

            <p className='text-white px-2 text-lg my-3'>
                <span className='text-[#dcbf03]'> गंभीर और पुरानी यौन समस्या को जड़ से मिटाने के लिए पुरुष की उम्र, हाइट और वजन का आंकलन करके</span>  Horse Fire Tablet    <span className='text-[#dcbf03]'> कस्टमाइज्ड भी तैयार किया जाता है जिससे यह समस्या पर सटीक असर करता है।</span>
            </p>


            <div className='px-2'>
                <YoutubeFrame vid='rGb12zd1RZA?si=dr96ydQm1_IBxIUL' />
            </div>



        </section>

    )
}

export default Sec2