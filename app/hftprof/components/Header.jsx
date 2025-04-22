import dynamic from 'next/dynamic';
import React from 'react'
import { BiSolidOffer } from 'react-icons/bi'
const OrderBtn = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'));

const Header = () => {


    const why_recommendation = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex  items-center sm:justify-center gap-3 py-2 ' key={key}>
                <div className="">
                    <img src={e.icon} className=" w-full" alt="icons" />
                </div>
                <div className='uppercase text-white fontJosefin font-semibold sm:text-[1.2vw] texl-xl text-left'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>
            </div >
        })
    }



    return (
        <section>

            <div className="">

                <div className='text-md bg-yellow-500 fontPoppins py-1 font-semibold text-center'>

                    <div className="flex items-center justify-center">
                        <BiSolidOffer size={20} />

                        <div className="">
                            EXCLUSIVE OFFER AVAILABLE
                        </div>
                    </div>


                </div>

            </div>



            <div className="head_bg">

                {/* Desk  */}
                <div className="max-w-[80%] mx-auto sm:block hidden ">

                    <div className="grid sm:grid-cols-2 items-center justify-center gap-6 pt-16 pb-5">

                        <div className='fontNoto'>


                            <div className=" text-[#0ad180] font-extrabold text-[3.2vw] leading-tight">
                                पुरुष स्वास्थ्य के लिए आयुर्वेद की सबसे बड़ी खोज!
                            </div>

                            <p className='text-[1.3vw] text-white py-3'>
                                अगर आपकी पार्टनर को लगता है की आप बेड पर नाकाम है तो "हॉर्सफायर टेबलेट" की मदद से कुछ ही दिनों में सेक्स पावर बढाए और उसे वास्तविक यौन संतुष्टि का एहसास कराएं।
                            </p>

                            <div className="fontBebas font-extrabold text-[5.7vw] text-center sm:text-left text-[#eb3a54] uppercase  leading-none py-2 ">
                                <div className="">
                                    horse fire <span className="text-white">tablet</span>
                                </div>
                            </div>

                            <div className='fontMaamli italic text-[#0ad180] sm:text-[3.3vw] '>Premium <span className='text-white'>Product</span></div>

                            <div className='fontPoppins uppercase text-[#eb3a54] sm:text-[1.4vw] font-semibold'>
                                Super power pack to make you a <br /><span className='text-white'>"star performer"</span>
                            </div>


                        </div>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/037f7ab6-36bd-4e2d-22d2-524beb5d3b00/public" alt="" className='w-full' />
                        </div>
                    </div>

                    <div className="">

                    </div>

                </div>

                {/* mobile size */}
                <div className="w-full sm:hidden block">

                    <div className="pt-5 head_bg">

                        <div className='fontNoto'>

                            <div className="text-center">
                                <div className="fontBebas font-extrabold text-[3.6rem] text-center sm:text-left text-[#eb3a54] uppercase  leading-none py-2 ">
                                    <div className="">
                                        horse fire <span className="text-white">tablet</span>
                                    </div>
                                </div>

                                <div className='fontMaamli italic text-[#0ad180] text-[2rem] '>Premium <span className='text-white'>Product</span></div>

                                <div className='fontPoppins uppercase text-[#eb3a54] text-[1.2rem] font-semibold px-2'>
                                    Super power pack to make you a <br /><span className='text-white'>"star performer"</span>
                                </div>
                            </div>

                            <div className='text-center'>

                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/037f7ab6-36bd-4e2d-22d2-524beb5d3b00/public" alt="" className='w-full pt-7' />

                                <div className=" text-[#0ad180] font-extrabold text-[1.9rem] leading-tight px-2 pt-4">
                                    पुरुष स्वास्थ्य के लिए आयुर्वेद की सबसे बड़ी खोज!
                                </div>
                                <p className='text-xl text-white py-3 px-2 font-semibold'>
                                    अगर आपकी पार्टनर को लगता है की आप बेड पर नाकाम है तो "हॉर्सफायर टेबलेट" की मदद से कुछ ही दिनों में सेक्स पावर बढाए और उसे वास्तविक यौन संतुष्टि का एहसास कराएं।
                                </p>

                            </div>


                        </div>

                    </div>

                </div>

                <OrderBtn />



                <div className="w-full sm:max-w-[85%] mx-auto ">
                    <div className="grid sm:grid-cols-3 justify-center items-center bg-[#1a8559] sm:py-5 py-2 rounded-lg my-4 mx-2">
                        {
                            why_recommendation([
                                {
                                    icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/19244ddc-a345-4ff8-2f9a-005ec0259200/public",
                                    title: "clinically<br/> approved"
                                },

                                {
                                    icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4ee5ee83-b5c0-48aa-5d32-47cb7aa4ab00/public",
                                    title: "Doctor<br/> recommended"
                                },
                                {
                                    icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1a1f55b2-35f8-49af-4750-6809cd689200/public",
                                    title: "100% natural<br/> product"
                                },

                            ])
                        }
                    </div>

                </div>


                <div className="w-full sm:max-w-[60%] mx-auto px-2">
                    <p className='sm:text-[1.6vw] text-[1.2rem] text-center  fontNoto text-white sm:py-9 py-4 leading-tight'>
                        हॉर्सफायर टेबलेट" आयुर्वेदिक जड़ीबूटियों का सर्वश्रेष्ठ मिश्रण है। इसमें अश्वगंधा, शिलाजीत, सफ़ेद मूसली, गोक्षुरा जैसी 17 कामोत्तेजक और यौनवर्धक जड़ीबूटियां और भस्म शामिल है। ये वैज्ञानिक रूप से सिद्ध और लैब रिसर्च में सफल साबित हुआ है।
                    </p>
                </div>

                <div className="w-full sm:max-w-[80%] mx-auto pb-5 px-2">
                    <div className="fontBebas font-extrabold sm:text-[6vw] text-[3.2rem] text-center text-red-600 uppercase  leading-none ">
                        <div className="">
                            india's top-selling product in sexual <span className='text-white'>category from the last 5 years</span>
                        </div>
                    </div>

                    <div className='pt-3'>
                        <OrderBtn />
                    </div>

                </div>

            </div>



            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/80b093de-8dd6-42f1-f129-7463e8305900/public" alt="" className='w-full sm:block hidden' />
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8f99ea97-eaec-4767-ed8d-ac2564c89700/public" alt="" className='w-full sm:hidden block' />



        </section>
    )
}

export default Header