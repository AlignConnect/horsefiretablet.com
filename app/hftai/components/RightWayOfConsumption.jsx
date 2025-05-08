import dynamic from 'next/dynamic';
import React from 'react'


const OrderNow = dynamic(() => import('./OrderNow'));

const RightWayOfConsumption = () => {
    return (
        <section>

            <div className="bg_rwc">
                <div className="w-full sm:max-w-7xl mx-auto sm:py-7 py-3 ">

                    <div className="text-[7vw] sm:text-[2.2vw] fontAnton font-extrabold text-center py-3">RIGHT WAY OF CONSUMPTION</div>


                    <div className="grid sm:grid-cols-2 items-center gap-4 mx-3 py-3">

                        <div className="">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/98d36d24-520a-4f59-1dfe-1b3d5853d500/public" alt="" className='sm:w-2/3 mx-auto' />
                        </div>


                        <div className="flex">
                            <div className="relative flex flex-col items-center fontPoppins">

                                <div className="absolute h-full w-1 bg-red-500 top-0 left-1/2 transform -translate-x-1/2"></div>


                                <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full mb-8">
                                    1
                                </div>

                                <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full mb-8">
                                    2
                                </div>

                                <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full">
                                    3
                                </div>
                            </div>
                            <div className="md:space-y-7" >
                                <p className="sm:text-[1.3vw] text-xl">
                                    सुबह-शाम भोजन के बाद एक टेबलेट दूध/पानी के साथ
                                </p>
                                <p className="sm:text-[1.3vw] text-xl">
                                    बेहतर परिणाम के लिए 1 गिलास दूध के साथ लें
                                </p>
                                <p className="sm:text-[1.3vw] text-xl">
                                    एक महीने के अंदर सेक्स प्रदर्शन में सुधार अनुभव करें
                                </p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

            <div className="bg_doc_ai">
                <div className="w-full sm:max-w-5xl mx-auto sm:py-16 py-10">


                    <div className="relative w-full mt-5">
                        <p className="absolute  sm:top-28 font-semibold -top-8 left-0 right-0 sm:w-1/2 w-[70%]  text-black text-[1rem] sm:text-xl"> {/* Position the p tag relative to the image */}
                            "देरी किस बात की जल्द से जल्द आजमाए, कमजोर लिंग को बनाये अफ्रीकन जैसा पावरफुल और सेक्स में एक अलग चरमानंद अनुभव करें आज ही आर्डर करें!"
                        </p>
                        <img
                            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3a41ac8a-5446-4c8a-41e5-d4961d295d00/public"
                            alt="Image"
                            className="w-full"
                        />
                        <div className="leading-normal absolute sm:bottom-0 -bottom-7 left-0 transform -translate-y-1/2 p-5 w-full text-left fontNoto sm:text-[2.6vw] text-[5.5vw]">
                            <div className="font-extrabold text-white">
                                दिल की सुने,
                            </div>
                            <div className="text-white">
                                सर्वश्रेष्ठ सेक्सवर्धक चुने !!
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <OrderNow />



        </section >
    )
}

export default RightWayOfConsumption