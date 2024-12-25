import dynamic from 'next/dynamic'
import React from 'react'
import { TiArrowRightThick } from 'react-icons/ti'

const FlipAmazon = dynamic(() => import('./FlipAmazon'));

const Section2 = () => {
    return (
        <div>


            <div className='fontNoto sm:w-[75%] mx-auto'>
                <div className='text-2xl sm:text-5xl  mx-auto font-bold   py-5 sm:py-10 leading-tight text-center'>
                    <p className='inline sm:block'>अब आपके मन में सवाल आ रहा होगा की आखिर उनके बड़े लिंग </p>
                    <p className='inline sm:block'> और ज्यादा सेक्स पॉवर के पीछे कौन सी जड़ीबूटियां है।</p>
                </div>

                <h1 className='text-lg sm:text-2xl sm:w-[80%] mx-auto text-justify sm:text-center px-2'>Withania Somnifera, Asphaltum, Chlorophytum Borivilianum, Crocus sativus, Tribulus Terrestris ये कुछ खास अफ्रीकन हर्ब्स है जिन्हे भारत में अश्वगंधा, शिलाजीत, सफ़ेद मूसली, केसर, गोक्षुरा के नाम से जाना जाता है। फर्क बस इतना है की वहा के लोग इन हर्ब्स के फायदे को जानते है पर भारतीय पुरुष इतने पावरफुल जड़ीबूटियों के फायदे से अनजान है। </h1>




                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-16 my-5 sm:my-24 px-4'>

                    <div className='flex items-center gap-4'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/53459e1e-8bb4-45e8-57b5-6005113bc600/public" alt="sdsd" loading='lazy' className='min-w-[80px] min-h-[80px] sm:min-w-[120px] sm:min-h-[120px] rounded-full' />
                        </div>

                        <div>
                            <h1 className='text-2xl sm:text-4xl font-bold'>अश्वगंधा</h1>
                            <p className='text-[17px] sm:text-[19px] font-[500]'>
                                कई शोधों से प्रमाणित हुआ है की अश्वगंधा के इस्तेमाल से टेस्टोस्टेरोन और सेक्स स्टैमिना में जोरदार वृद्धि होती है।
                            </p>

                        </div>
                    </div>






                    <div className='flex items-center gap-4'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/655e2b51-bdb5-4d17-8883-b9e284613000/public" alt="sdsd" loading='lazy' className='min-w-[80px] min-h-[80px] sm:min-w-[120px] sm:min-h-[120px] rounded-full' />
                        </div>

                        <div>
                            <h1 className='text-2xl sm:text-4xl font-bold'>शिलाजीत</h1>
                            <p className='text-[17px] sm:text-[19px] font-[500]'>
                                शिलाजीत कहे या नेचुरल वियाग्रा, यह पुरुषों में जोश, उत्तेजना, स्टैमिना और सेक्स टाइमिंग बढ़ाने में मदद करता है।
                            </p>

                        </div>
                    </div>






                    <div className='flex items-center gap-4'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4493267f-8502-483a-7216-50a2f6179500/public" alt="sdsd" loading='lazy' className='min-w-[80px] min-h-[80px] sm:min-w-[120px] sm:min-h-[120px] rounded-full' />
                        </div>

                        <div>
                            <h1 className='text-2xl sm:text-4xl font-bold'>सफेद मूसली</h1>
                            <p className='text-[17px] sm:text-[19px] font-[500]'>
                                सफ़ेद मूसली बेहतरीन टेस्टोस्टेरोन बूस्टर है। इसके इस्तेमाल से इरेक्शन और स्टैमिना में आसानी से बृद्धि होती है।
                            </p>

                        </div>
                    </div>





                    <div className='flex items-center gap-4'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/56d8d4cf-fb0c-47d2-ee04-bb9aae126100/public" alt="sdsd" loading='lazy' className='min-w-[80px] min-h-[80px] sm:min-w-[120px] sm:min-h-[120px] rounded-full' />
                        </div>

                        <div>
                            <h1 className='text-2xl sm:text-4xl font-bold'>गोक्षुरा</h1>
                            <p className='text-[17px] sm:text-[19px] font-[500]'>
                                यह मूल अफ्रीकन हर्ब लिंग की नसों और मसल्स को रिलैक्स करके लिंग आकर और इरेक्शन बढ़ाने में अत्यंत फायदेमंद है
                            </p>

                        </div>
                    </div>





                    <div className='hidden sm:flex items-center gap-4'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/47d17563-1fa0-44b2-1b4b-5b610037f800/public" alt="sdsd" loading='lazy' className='min-w-[80px] min-h-[80px] sm:min-w-[120px] sm:min-h-[120px] rounded-full' />
                        </div>

                        <div>
                            <h1 className='text-2xl sm:text-4xl font-bold'>केसर</h1>
                            <p className='text-[17px] sm:text-[19px] font-[500]'>
                                यह श्रेष्ठ कामोत्तेजक और बलवर्धक सिद्ध हर्ब है। यह जोश, स्टैमिना बनाये रखने और सेक्स में लम्बा टिकाने में मददगार है।
                            </p>

                        </div>
                    </div>




                    <div className='hidden sm:flex items-center gap-4'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6b549606-0140-4d61-568d-72b5afc06300/public" alt="sdsd" loading='lazy' className='min-w-[80px] min-h-[80px] sm:min-w-[120px] sm:min-h-[120px] rounded-full' />
                        </div>

                        <div>
                            <h1 className='text-2xl sm:text-4xl font-bold'>शतावरी</h1>
                            <p className='text-[17px] sm:text-[19px] font-[500]'>
                                शतावरी से कामेच्छा में वृद्धि होती है और सेक्स ड्राइव में सुधार होता है। यह पुरुषों में जोश और सेक्स पॉवर बढाने की प्रभावी हर्बल औषधि है।
                            </p>

                        </div>
                    </div>

                </div>




                <div className='mt-10'>
                    <h1 className='text-2xl sm:text-3xl sm:leading-10 fontNoto text-center font-bold'>17 शक्तिशाली जड़ीबूटियों और भस्मों से बना Horse Fire Tablet भारत का सबसे ज्यादा बिकने वाला सेक्सवर्धक है। यह नैचुरल तरीके से खोई हुई मर्दाना शक्ति को रिस्टोर करने का काम करता है।</h1>
                </div>


                <FlipAmazon />

            </div>




            <div className='bg-black'>
                <div className='w-[100%] mx-auto'>



                    <div className='grid grid-cols-2 items-center py-5'>


                        <div className='block sm:hidden col-span-2'>
                            <h1 className='text-[#fff116] text-2xl sm:text-5xl py-5 text-center sm:text-start fontPoppins'>EXCELLENCE OF HORSE FIRE</h1>

                            <h1 className='text-5xl sm:text-8xl text-white fontAnton text-center sm:text-start mb-5'>KEY BENEFITS  OF <br /> HORSE FIRE TABLET</h1>

                        </div>


                        <div className='rounded-xl overflow-hidden col-span-2 sm:col-span-1 px-2'>
                            <div>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c7031922-9431-478e-2fb0-ad59a00f0900/public" alt="sdsd" loading='lazy' className='w-full' />
                            </div>

                            <div className='bg-[#fff116] flex items-center px-2 justify-center gap-5'>
                                <p className='font-bold text-[15px] sm:text-xl py-5'>WE HAVE SOLUTION FOR YOUR PROBLEMS</p>
                                <a className='rounded-full bg-black py-2 px- 5 block text-center sm:px-10 min-w-[100px] text-xl sm:text-2xl text-white fontAnton' href='#buynow'>BUY NOW</a>
                            </div>
                        </div>


                        <div className='sm:w-[80%] px-2 mx-auto fontNoto text-white text-2xl sm:text-4xl col-span-2 sm:col-span-1'>

                            <div className='text-start'>

                                <div className='hidden sm:block'>
                                    <h1 className='text-[#fff116] text-5xl py-5 fontPoppins'>EXCELLENCE OF HORSE FIRE</h1>

                                    <h1 className='text-8xl text-white fontAnton'>KEY BENEFITS  OF <br /> HORSE FIRE TABLET</h1>

                                </div>


                                <div className='mt-9 sm:mt-16 mb-5 flex gap-4 items-center '>
                                    <div>
                                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7c3a1988-2303-478f-c2fe-d664b2617900/public" alt="sdsd" loading='lazy' className='w-[80px]' />
                                    </div>
                                    <div className='pt-4'>लम्बी सेक्स अवधि जोरदार प्रदर्शन</div>
                                </div>

                                <div className='my-5 flex gap-4 items-center'>
                                    <div>
                                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/dd6c6b73-03f3-4b01-63bf-959bb186a400/public" alt="sdsd" loading='lazy' className='w-[80px]' />
                                    </div>
                                    <div className='pt-4'>लिंग कमजोरी मिटाए/आकार सुधारे</div>
                                </div>

                                <div className='my-5 flex gap-4 items-center'>
                                    <div>

                                        <div>
                                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e577fe49-4300-4fe9-b3ef-1d4cda7aeb00/public" alt="sdsd" loading='lazy' className='w-[80px]' />
                                        </div>

                                    </div>
                                    <div className='pt-4'>डिस्चार्ज पश्चात तुरंत कड़कपन पाएं</div>
                                </div>

                                <div className='my-5 flex gap-4 items-center'>
                                    <div>
                                        <div>
                                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6260b1e0-f00b-4f73-6250-b5e471177400/public" alt="sdsd" loading='lazy' className='w-[80px]' />
                                        </div>
                                    </div>
                                    <div className='pt-4'>जोश, स्टैमिना और एनर्जी लेवल बढाए</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
