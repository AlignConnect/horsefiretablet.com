import dynamic from 'next/dynamic';
import React from 'react'
const FlipAmazon = dynamic(() => import('./FlipAmazon'));

const Section3 = () => {
    return (
        <div className='sm:w-[70%] mx-auto'>

            <FlipAmazon />

            <div>
                <p className='fontNoto text-2xl sm:text-4xl my-3 sm:mb-14 font-bold leading-relaxed text-start sm:text-center pt-5 px-2'>
                    Horse Fire Tablet शोधित आयुर्वेदिक जड़ीबूटियों और भस्मो से बना हुआ प्राकृतिक और सेवन के लिए पूर्णतः सुरक्षित उत्पाद है! यह ISO, GMP और AYUSH सर्टिफाइड है।
                </p>


            </div>


            <div className='bg-[#fff116] rounded-xl pb-5 '>
                <div className='grid grid-cols-2 sm:grid-cols-4 items-center mx-auto text-center fontAnton text-xl'>

                    <div>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e86c4cc0-aaee-4f64-ce98-585e1b638900/public" alt="sdsds" loading='lazy' className='mx-auto py-5' />
                        </div>

                        <div>
                            <p>COD Payment <br /> Available</p>
                        </div>
                    </div>


                    <div>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f5e2a3ee-b82c-4cbc-8002-48a893beb900/public" alt="sdsds" loading='lazy' className='mx-auto py-5 max-w-[72px]' />
                        </div>

                        <div>
                            <p>Big Discount <br /> in Winter Season</p>
                        </div>
                    </div>


                    <div>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a8d431cd-ff62-4207-aaf0-264872dec300/public" alt="sdsds" loading='lazy' className='mx-auto py-5' />
                        </div>

                        <div>
                            <p>Save 10% Extra <br /> on Prepaid</p>
                        </div>
                    </div>



                    <div>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2e370a43-5ce9-4c01-fb39-37b01b6fe500/public" alt="sdsds" loading='lazy' className='mx-auto py-5' />
                        </div>

                        <div>
                            <p>First Choice of <br /> men in India</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Section3
