import { Noto_Serif_Devanagari } from 'next/font/google';
import Link from 'next/link';
import React from 'react'
const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Sec2 = () => {
    return (
        <div className={noto.className}>

            <div className='grid grid-cols-1 sm:grid-cols-2 sm:w-[70%] mx-auto items-center sm:pt-20'>

                <div className='text-center sm:text-start order-2 sm:order-1'>

                    <h1 className='uppercase text-xl text-[#ff0000] font-bold py-5 sm:py-8'>what does horsefire do ?</h1>

                    <h3 className='text-2xl sm:text-5xl  font-black leading-tight'>Discover the  Benefits of Premium Herbs</h3>

                    <p className='text-xl my-5 text-justify px-3'>
                        17 शक्तिशाली जड़ीबूटियों और भस्मों से बना Horse Fire Tablet भारत का सबसे ज्यादा बिकने वाला सेक्सवर्धक उत्पाद है। यह बिल्कुल सुरक्षित और नैचुरल तरीके से खोई हुई मर्दाना शक्ति को रिस्टोर करता है और सेक्स प्रदर्शन सुधारता है।
                    </p>


                    <div className='bg-yellow-400 sm:bg-white'>

                        <div className='py-10 bloc sm:hidden'>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b0df959b-041b-44b9-7ca4-19670f51bc00/public" alt="asd" loading='lazy' className='w-[70%] mx-auto' />
                        </div>


                        <ul className='w-[80%] sm:w-full mx-auto text-start text-xl font-semibold'>
                            <li><span className="checkmark">&#10004;</span>  लम्बी सेक्स अवधि जोरदार प्रदर्शन</li>
                            <li><span className="checkmark">&#10004;</span>    लिंग की लम्बाई और सख्ती में वृद्धि </li>
                            <li><span className="checkmark">&#10004;</span>  बार बार सेक्स करने की उत्तेजना </li>
                            <li><span className="checkmark">&#10004;</span> दमदार स्टैमिना और भरपूर शक्ति  </li>
                        </ul>

                        <div className='py-8'>

                            <a href='#form' className='bg-[#d42426] text-white pt-3 sm:pt-5 pb-1 sm:pb-3 px-20 text-2xl rounded-full my-5'>Shop Now</a>


                        </div>


                    </div>


                </div>

                <div className='order-1 sm:order-2'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c000902c-526f-435b-9c09-a306a34e4200/public" alt="asd" loading='lazy' className='w-full' />
                </div>



            </div>




            <p className='text-xl px-4 sm:text-2xl sm:w-[70%] mx-auto py-5 sm:py-10 text-start sm:text-center leading-tight sm:font-black'>यह आधुनिक आयुर्वेद का अविष्कार है लिंग की नसों में रक्त का बहाव बढ़ाकर सख्त और मजबूत बनाता है। वीर्य स्खलन पर कण्ट्रोल बढ़ाता है और सेक्स प्रदर्शन में जोरदार बृद्धि करता है। यह ISO, GMP और AYUSH सर्टिफाइड प्रोडक्ट है और सेवन के लिए पूर्णतः सुरक्षित है।</p>



        </div>
    )
}

export default Sec2
