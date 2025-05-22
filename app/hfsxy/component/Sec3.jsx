import { Noto_Serif_Devanagari } from 'next/font/google';
import React from 'react'

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const Sec3 = () => {

    return (



        <section className={noto.className}>

            <div>
                <div className='w-[90%] mx-auto bg-[#a2a2a2] p-2 my-3 border border-white rounded-full flex items-center'>
                    <div>
                        <img src="/main/hfsxy_images/chk.webp" alt="dsfdsf" loading='lazy' width={40} />
                    </div>
                    <div>
                        <h5 className='pt-4 font-bold text-lg'>100% मनी बैक गारंटी </h5>
                    </div>
                </div>

                <div className='w-[90%] mx-auto bg-[#a2a2a2] p-2 my-3 border border-white rounded-full flex items-center'>
                    <div>
                        <img src="/main/hfsxy_images/chk.webp" alt="dsfdsf" loading='lazy' width={40} />
                    </div>
                    <div>
                        <h5 className='pt-4 font-bold text-lg'>India's No.1 यौनवर्धक उत्पाद
                        </h5>
                    </div>
                </div>

                <div className='w-[90%] mx-auto bg-[#a2a2a2] p-2 my-3 border border-white rounded-full flex items-center'>
                    <div>
                        <img src="/main/hfsxy_images/chk.webp" alt="dsfdsf" loading='lazy' width={40} />
                    </div>
                    <div>
                        <h5 className='pt-4 font-bold text-lg'>COD पेमेंट सुविधा उपलब्ध </h5>
                    </div>
                </div>

                <div className='w-[90%] mx-auto bg-[#a2a2a2] p-2 my-3 border border-white rounded-full flex items-center'>
                    <div>
                        <img src="/main/hfsxy_images/chk.webp" alt="dsfdsf" loading='lazy' width={40} />
                    </div>
                    <div>
                        <h5 className='pt-4 font-bold text-lg'>Flipkart, Amazon पर लिस्टेड </h5>
                    </div>
                </div>




            </div>



            <div>
                <h1 className='font-bold text-white text-center text-2xl py-3'>Horse Fire <span className='text-[#f0d418]'>पर ग्राहकों की प्रतिक्रिया </span></h1>

                <p className='text-[#2ad9a2] text-lg px-2'>
                    सर्वश्रेष्ठ यौनवर्धक Horse Fire Tablet ने ऑनलाइन मार्केट में धूम मचा दिया है। कमजोर पुरुष इसके इसके इस्तेमाल से असली मर्दानगी का अनुभव कर रहे है, ग्राहकों की प्रतिक्रिया आप खुद देख सकते है
                </p>

            </div>


            <div className='bg-[#f0d418] pt-3 pb-1 mt-5 font-bold text-center w-[90%] mx-auto rounded-md'>
                <h1 className='text-xl'>Customer's review video</h1>
            </div>

            <div className='w-full'>
                <img src="/main/hfsxy_images/po.webp" alt="sdf" loading='lazy' className='w-[80%] mx-auto my-5' />
            </div>

            


        </section>


    )
}

export default Sec3