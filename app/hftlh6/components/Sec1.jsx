import dynamic from 'next/dynamic';
import React from 'react'
import { BiQuestionMark } from "react-icons/bi";
const OrderBtn = dynamic(() => import('./OrderBtn'), {
    loading: () => <p>loader</p>
  });

const Sec1 = () => {

    const list = [{
        title: 'छोटा लिंग और ढीलापन  की समस्या',
        image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cb5d5283-f053-438b-cf81-2e1eb87b9500/public'
    },
    {
        title: 'शीघ्रपतन, टाइमिंग की समस्या',
        image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/968242fe-21ee-402c-90ee-731e171ce400/public'
    },
    {
        title: 'जोश, स्टेमिना,और उर्जा की कमी',
        image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/12d6172b-3fed-40dc-bedc-911b68140000/public'
    },
    {
        title: 'लो लीबीडो, कामेच्छा की कमी',
        image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/71dd9dcf-04e0-454c-c2f3-9fd668aee800/public'
    },
    {
        title: 'या फिर अन्य धातु रोग की समस्या',
        image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2b87a744-56cf-4790-6636-5de90ea62000/public'
    },
    {
        title: 'सेक्स से पहले परफॉरमेंस प्रेशर',
        image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/54361f99-1bee-4747-b883-8cd8376d4f00/public'
    }
    ]

    return (
        <div className="">

            <div className='sm:w-[80%] mx-3 mb-5 sm:mx-auto px-3 rounded-2xl text-[#031316] bg-white font-black text-[6vw] sm:text-[2.5vw] leading-tight text-justify sm:text-start'>
                <div className="grid sm:grid-cols-12 items-center gap-1">
                    <div className="sm:col-span-11">
                        <p className="mt-4 mb-2 sm:mb-0">क्या आप भी उन पुरुषों में से है जो ये यौन समस्याए महसूस करते है सेक्स से बीवी या गर्लफ्रेंड को संतुष्टि नहीं दे पाते और सेक्स लाइफ में निराश है।<span className="sm:hidden text-[#7bdf03]">?</span></p>
                    </div>
                    <div className="col-span-1 text-[7.2vw] text-[#7bdf03] hidden sm:block ">
                        <BiQuestionMark />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto my-5 sm:my-10 xl:my-16 font-semibold px-3 sm:px-0">
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-10 xl:gap-20">
                    {list.map((e, key) => {
                        return <div className="" key={key}>
                            <p className="mb-3 hidden sm:block ">{e.title}</p>
                            <img src={e.image} alt="pic" height='100%' width='100%' loading='lazy' />
                            <p className="mt-3 sm:hidden ">{e.title}</p>
                        </div>
                    })}
                </div>
            </div>

            <OrderBtn/>

            <div className="max-w-6xl mx-auto  my-5 sm:my-10 xl:my-16 bg-yellow-400 text-black rounded-xl text-justify sm:text-left leading-tight sm:leading-relaxed">
                <div className="grid sm:grid-cols-2 items-center">
                <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a1af4777-7343-4cca-66e5-dfdcc20d4d00/public' alt="pic" height='100%' width='100%' loading='lazy' className='rounded-xl' />
                <p className="px-5 sm:px-10 xl:px-20 py-5  ">अगर इन समस्याओं से परेशान है तो समझिये आप बेड पर एक नाकाम पति/प्रेमी है। ऐसे में आप उसे सेक्स में संतुष्ट नहीं कर सकते। उनके दिल में आपके लिए प्यार कम जो सकता है और वो आपका ऑप्शन ढूंढ सकती है। जो आजकल रिलेशनशिप में होता भी है, बस बहाना कुछ और होता है। </p>
                </div>
            </div>
        </div>
    )
}

export default Sec1