import dynamic from 'next/dynamic';
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
const OrderBtn = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'));


const reason_to_trust = () => {


    const why_trust = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center justify-start  gap-3 sm:py-4 py-2 ' key={key}>
                <div className="">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ee0a72d6-ad10-487b-8e53-c638a82df500/public" className=" w-6" alt="icons" />
                </div>
                <div className='uppercase text-black fontNoto font-extrabold sm:text-[1.5vw] text-xl text-left'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>
            </div >
        })
    }


    return (
        <section>

            <div className="reason_bg">

                <div className="w-full sm:max-w-[70%] mx-auto">

                    <div className="">

                        <div className="grid sm:grid-cols-2 items-center justify-center">


                            <div className="px-2">

                                <div className="">
                                    <div className="fontBebas uppercase sm:text-[4vw] text-[3rem] font-extrabold sm:text-left text-center pt-2">
                                        Reason <span className='text-[#e83a53]'> To Trust</span>
                                    </div>


                                    <div className='flex items-center gap-3 fontPoppins  sm:text-[1.2vw] text-[1.1rem] mb-2 sm:mb-8'>
                                        <FaLongArrowAltRight size={30} />
                                        <div className="">
                                            we provide best experiance to our customer's
                                        </div>
                                    </div>

                                </div>


                                <div className="">
                                    {
                                        why_trust([
                                            {
                                                title: "100% मनी बैक गारंटी "
                                            },
                                            {
                                                title: "97.6% सफलता दर"
                                            },
                                            {
                                                title: "COD पेमेंट उपलब्ध "
                                            },
                                            {
                                                title: "Flipkart, Amazon पर लिस्टेड"
                                            },
                                        ])
                                    }

                                </div>


                            </div>

                            <div className="pt-5">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/377da595-c7b4-4641-ecb2-a41b05948f00/public" alt="" className='w-full mx-auto' />
                            </div>
                        </div>

                    </div>



                </div>

            </div>


            <div className="lakh_bg">

                <div className="w-full sm:max-w-[60%] mx-auto px-2">
                    <p className='sm:text-[1.6vw] text-[1.2rem] text-justify sm:text-center fontNoto text-white sm:py-9 py-6 leading-tight'>
                        यकीन माने एक्सपर्ट्स दावा करते है की अगर आप बिस्तर में अपनी पार्टनर को खुश करने में असफल है तो आपके महंगे गिफ्ट भी उसे खुश नहीं रख सकते।  महिलाओ का दूसरे पुरुष की तरफ आकर्षण भी अपने पार्टनर के कमजोर प्रदर्शन की वजह से होता है। इसलिए Horse Fire Tablet के इस्तेमाल से औजार को मजबूत बनाये, अवधि बढ़ाएं और धुआंधार प्रदर्शन से बिस्तर में परचम लहरायें।
                    </p>
                </div>

                <div className="w-full sm:max-w-[80%] mx-auto pb-5 px-2">
                    <div className="fontBebas font-extrabold sm:text-[7vw] text-[2.5rem] text-center text-[#ea3953] uppercase  leading-none ">
                        <div className="">
                            20 Lakhs+ satisfied customers and counting
                        </div>
                    </div>
                    <div className="fontBebas font-extrabold sm:text-[7vw] text-[2.5rem] text-center text-white uppercase  leading-none py-3">
                        <div className="">
                            Get an extra 10% Discount on online payment
                        </div>
                    </div>

                    <OrderBtn />

                </div>

            </div>

        </section>
    )
}

export default reason_to_trust