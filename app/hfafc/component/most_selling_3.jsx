import dynamic from 'next/dynamic'
import React from 'react'


const Form = dynamic(()=> import("@/app/hfafc/component/Formx"))

const most_selling_3 = () => {
    return (
        <div className='w-[100%] mx-auto'>


            <div className='grid grid-cols-2 items-center w-[70%] mx-auto'>

                <div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fb5619c6-5b79-4a34-1275-0b7083221200/public" alt="asd" className='w-[80%] mx-auto my-10' />
                </div>

                <div>

                    <h1 className='font-bold text-4xl fontPoppins text-start my-5 text-[#dd534e]'>How to Place Order</h1>

                    <p className='text-2xl leading-relaxed fontNoto'>
                        नीचे दिया गया फॉर्म भरें! हमारे हेल्थकेयर एग्जीक्यूटिव आपको कॉल करके पूरी जानकारी देंगे। आप उनके ज़रिए भी अपना ऑर्डर दे सकते हैं। या फिर यहाँ से online order करें और 10% तक की बचत करें। इन सबके अलावा, Horse Fire tablet Flipkart और Amazon जैसे भरोसेमंद प्लैटफ़ॉर्म पर भी उपलब्ध है।
                    </p>

                    <div className='flex items-center gap-5 my-5'>
                        <div className='text-2xl font-semibold  my-5'>AVAILABEL ON</div>

                        <div>

                            <div className='border-black border rounded-xl px-5 pt-4 pb-2'>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1c63c95c-995f-4fab-643e-3554393c1200/public" alt="asd" />
                            </div>

                        </div>

                    </div>


                    <div>
                        <button className='bg-black text-white px-16 py-4 font-bold text-2xl my-5 rounded-lg'>ORDER NOW</button>
                    </div>

                </div>
            </div>





            <div className='bg-[#fff116]'>



                <div className='px-5 pt-9 pb-4 w-[70%] mx-auto'>

                    <div>
                        <h1 className='text-4xl font-bold fontPoppins  text-center'>RIGHT WAY OF <span className='text-[#db442e]'>CONSUMPTION</span></h1>
                    </div>



                    <div className='grid grid-cols-3 items-center fontNoto my-5'>


                        <div className='flex items-center gap-4'>
                            <div>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/919ff604-f7e9-43f0-6b3a-bec58b2ae800/public" alt="sdsd" loading='lazy' className='w-[120px]' />
                            </div>

                            <div>
                                <p className='text-2xl w-[75%]'>सुबह-शाम भोजन के बाद एक टेबलेट दूध/पानी के साथ </p>
                            </div>
                        </div>


                        <div className='flex items-center gap-4'>
                            <div>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d8727b7d-ffae-44aa-111d-1269e8e47100/public" alt="sdsd" loading='lazy' className='w-[120px]' />
                            </div>

                            <div>
                                <p className='text-2xl w-[75%]'>बेहतर परिणाम के लिए 1 गिलास दूध के साथ लें</p>
                            </div>
                        </div>


                        <div className='flex items-center gap-4'>
                            <div>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c6f36587-d0cc-4a54-da4c-c883dfac8200/public" alt="sdsd" loading='lazy' className='w-[120px]' />
                            </div>

                            <div>
                                <p className='text-2xl w-[75%]'>एक महीने के अंदर सेक्स प्रदर्शन में सुधार अनुभव करें </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className='p-5'>

                <div className=' bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/da61305c-577a-4252-927e-a9f489891700/public)] bg-cover'>

                    <div className='grid grid-cols-10 w-[80%] mx-auto items-center'>


                        <div className='col-span-10'>
                            <h1 className='text-3xl font-bold fontNoto text-center py-5 my-10 w-[75%] leading-relaxed mx-auto text-white'>देरी किस बात की जल्द से जल्द आजमाए, कमजोर लिंग को बनाये अफ्रीकन जैसा पावरफुल और सेक्स में एक अलग चरमानंद अनुभव करें आज ही आर्डर करें !
                            </h1>
                        </div>

                        <div className='col-span-3 '>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7061afc1-884d-4794-fbc9-93339169f100/public" alt="asd" loading='lazy' className='w-[70%] ms-auto' />
                        </div>


                        <div className='col-span-3'>
                            <h1 className='fontNoto text-5xl my-5 font-bold text-white leading-tight'>दिल की सुने, सर्वश्रेष्ठ <br /> सेक्सवर्धक चुने !</h1>

                            <h1 className='fontAnton'>
                                <div className='font-[400] text-8xl text-white'>LONGER</div>
                                <div className='font-[400] text-8xl text-[#fff116]' style={{textShadow:"0px 0px 4px yellow"}}>HARDER</div>
                                <div className='font-[400] text-8xl text-white' >STRONGER</div>
                                <div className='font-[400] text-8xl text-[#fff116]' style={{textShadow:"0px 0px 4px yellow"}}>ERECTION</div>
                            </h1>

                        </div>

                        <div className='col-span-3'>

                                <Form />


                        </div>
                    </div>





                </div>






            </div>





























        </div>
    )
}

export default most_selling_3
