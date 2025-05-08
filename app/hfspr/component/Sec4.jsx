import React from 'react'
import { Consumption } from './Helper'
import { Noto_Serif_Devanagari } from 'next/font/google';
import { PiPhoneCallFill } from "react-icons/pi";


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Sec4 = () => {
    return (
        <div className={noto.className}>


            <div className='bg-[#eaeaea] text-center py-8'>

                <h1 className='text-3xl font-bold'>Right Way of <span className='text-[#ff0000]'>Consumption</span></h1>


                <div className='grid grid-cols-1 sm:grid-cols-3 text-center sm:w-[59rem] mx-auto'>

                    <div>
                        {Consumption("https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/44fc277e-733e-402c-f62e-ae4d74d55100/public", "सुबह और रात्रि भोजन के बाद एक टेबलेट दूध/पानी के साथ", 1)}
                    </div>


                    <div>
                        {Consumption("https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/adc3a6f3-fcc3-48c8-dc18-a3bdb4fd6d00/public", "बेहतर परिणाम के लिए 1 गिलास गुनगुने दूध के साथ लें", 2)}
                    </div>


                    <div>
                        {Consumption("https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fd815566-0525-4da8-51e0-eb8baddf4600/public", "एक महीने के अंदर सेक्स प्रदर्शन में सुधार अनुभव करें", 3)}
                    </div>

                </div>


            </div>



            <div className='bg-[#d79b2b] rounded-md'>
                <div className='grid grid-cols-6 items-center  sm:w-[60%] mx-auto py-5 gap-5 px-3'>


                    <div className='col-span-6 sm:col-span-2 flex items-center gap-5 py-2 sm:py-10'>

                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4366f101-04a6-4a72-3a72-6a63bf76dd00/public" alt="dssd" loading='lazy' />
                        </div>



                        <div>
                            <h1 className='text-lg sm:text-xl font-semibold'>Free Shipping & Return</h1>

                            <p className='text-sm'>Free shipping across india with discreet packaging.
                            </p>
                        </div>


                    </div>



                    <div className='col-span-6 sm:col-span-2 flex items-center gap-5 py-2'>

                        <div>
                            {/* <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3877e9bd-0027-4ff4-0b3e-e51406188d00/public" alt="dssd" loading='lazy' /> */}

                            <PiPhoneCallFill size={"4.1rem"} className='border rounded-full p-4 border-black' />

                        </div>


                        <div>

                            <h1 className='text-xl font-semibold'>Call Support </h1>

                            <p className='text-sm'>

                                Call support for better customer convenience

                            </p>

                        </div>


                    </div>




                    <div className='col-span-6 sm:col-span-2 flex items-center gap-5 py-2'>

                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/171ac4ab-a253-4eb9-f4d0-3a601a330e00/public" alt="dssd" loading='lazy' />
                        </div>



                        <div>

                            <h1 className='text-xl font-semibold'>100% Secure Payments</h1>

                            <p className='text-sm'>Your transactions are protected with advanced encryption.
                            </p>

                        </div>


                    </div>


                </div>

            </div>




        </div>
    )
}

export default Sec4
