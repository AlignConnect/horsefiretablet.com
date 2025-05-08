import dynamic from 'next/dynamic';
import React from 'react'
const Inquiry = dynamic(() => import('./Inquiry'));


const Section2 = () => {
    return (
        <section className=''>

            <div className='bg-[url(/main/hfuri_images/back1.webp)] px-2'>

                <div className='flex justify-center items-center'>

                    <div className='inline-flex bg-white px-5 my-4 py-2 border border-double rounded-xl border-black'>

                        <div className=''>
                            <img src="/main/hfuri_images/pe.webp" alt="sdsd" loading='lazy' className='w-[40px]' />
                        </div>

                        <div className=''>
                            <h1 className='text-xl font-bold pt-4 text-red-600'>लिंग बृद्धि</h1>
                        </div>

                    </div>

                </div>


                <div>
                    <div className='flex items-center gap-2 w-[300px] mx-auto my-2'>
                        <div>
                            <img src="/main/hfuri_images/l1.webp" alt="dsfdsf" loading='lazy' className='w-[80px]' />
                        </div>
                        <div className='pt-3 text-xl font-bold'>
                            1 सप्ताह = <span className='text-red-700'>+2 सेंटी मीटर</span>
                        </div>
                    </div>


                    <div className='flex items-center gap-2 w-[300px] mx-auto my-2'>
                        <div>
                            <img src="/main/hfuri_images/l2.webp" alt="dsfdsf" loading='lazy' className='w-[80px]' />
                        </div>
                        <div className='pt-3 text-xl font-bold'>
                            2 सप्ताह = <span className='text-red-700'>+3.5 सेंटी मीटर</span>
                        </div>
                    </div>


                    <div className='flex items-center gap-2 w-[300px] mx-auto my-2'>
                        <div>
                            <img src="/main/hfuri_images/l3.webp" alt="dsfdsf" loading='lazy' className='w-[80px]' />
                        </div>
                        <div className='pt-3 text-xl font-bold'>
                            1 महीना =<span className='text-red-700'>+6 सेंटी मीटर</span>
                        </div>
                    </div>

                </div>

                <p className='px-2 text-[14px] md:text-lg italic text-red-700 text-center'>नोट: पुरुष स्वास्थ्य के आधार पर परिणाम भिन्न-भिन्न यानि कम या ज्यादा हो सकता है।</p>



            </div>


            <div className='bg-white py-3 text-center w-full'>


                <div className='py-3'>
                    <Inquiry />
                </div>

                <h2 className='inline-flex pt-4 px-2 text-center font-bold text-3xl  border-2 border-amber-950 border-dashed'>लिंग और शक्तिवर्धक यौगिक</h2>


                <div className='p-3 md:p-4'>

                    <div className='flex items-center justify-center gap-4 py-4'>
                        <div className='min-w-[40%] md:min-w-[20%]'>
                            <img src="/main/hfuri_images/a3.webp" alt="dfdf" loading='lazy' />
                        </div>

                        <div className='text-start'>
                            <h2 className='text-3xl font-bold text-start'>अश्वगंधा</h2>
                            <p className='text-start text-lg'>
                                टेस्टोस्टेरोन और नाइट्रिक ऑक्साइड का निर्माण कर लिंग साइज़ व मजबूती बढ़ाता है।
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-4 py-4'>
                        <div className='min-w-[40%] md:min-w-[20%]'>
                            <img src="/main/hfuri_images/a1.webp" alt="dfdf" loading='lazy' />
                        </div>

                        <div className='text-start'>
                            <h2 className='text-3xl font-bold text-start'>शिलाजीत</h2>
                            <p className='text-start text-lg'>
                                लिंग की नसे फैलाता है नर्वोस प्रकोष्ठ और तंग चमड़ी खोलकर साइज बढ़ाता है।
                            </p>
                        </div>
                    </div>






                    <div className='flex items-center justify-center gap-4 py-4'>
                        <div className='min-w-[40%] md:min-w-[20%]'>
                            <img src="/main/hfuri_images/a4.webp" alt="dfdf" loading='lazy' />
                        </div>

                        <div className='text-start'>
                            <h2 className='text-3xl font-bold text-start'>सफ़ेद मूसली</h2>
                            <p className='text-start text-lg'>
                                यह बेहतरीन टेस्टोस्टेरोन बूस्टर है, लिंग को उत्तेजित कर देर तक खड़ा रखता है।
                            </p>
                        </div>
                    </div>






                    <div className='flex items-center justify-center gap-4 py-4'>
                        <div className='min-w-[40%] md:min-w-[20%]'>
                            <img src="/main/hfuri_images/a5.webp" alt="dfdf" loading='lazy' />
                        </div>

                        <div className='text-start'>
                            <h2 className='text-3xl font-bold text-start'>केसर</h2>
                            <p className='text-start text-lg'>
                                ताकत, स्टैमिना और सेक्स अवधि बढ़ाता है जिससे पुरुष घंटो सेक्स प्रदर्शन करता है।
                            </p>
                        </div>
                    </div>




                    <div className='flex items-center justify-center gap-4 py-4'>
                        <div className='min-w-[40%] md:min-w-[20%]'>
                            <img src="/main/hfuri_images/a2.webp" alt="dfdf" loading='lazy' />
                        </div>

                        <div className='text-start'>
                            <h2 className='text-3xl font-bold text-start'>गोखरू</h2>
                            <p className='text-start text-lg'>
                                जोशीला और ऊर्जावान बनाता है तथा लिंग को मोटा, लम्बा और सख्त बनाता है।
                            </p>
                        </div>
                    </div>



                </div>



                <div className='py-3 w-full overflow-hidden'>
                    <h2 className='text-xl font-bold tatva relative z-10 inline'>(ये मुख्य तत्व है इसमें 17 उत्कृष्ट जड़ीबूटियों और </h2> <br />
                    <h2 className='text-xl font-bold text-start tatva relative z-10 inline'>भस्मों का श्रेष्ठ संयोजन किया गया है )</h2>
                </div>


                <div className='pt-3'>
                    <Inquiry />
                </div>

                <hr />

                <div className='pt-4 px-4'>
                    <img src="/main/hfuri_images/meoffer.webp" alt="dsfdf" loading='lazy' />
                </div>

                <div className='bg-[#fff9d2]'>

                    <div className='grid grid-cols-4 items-center py-3'>

                        <div className='col-span-2'>
                            <img src="/main/hfuri_images/b1.webp" alt="sdf" loading='lazy' className='w-[70px] mx-auto py-2' />
                            <p className='font-bold'>10 दिनों की मनी बैक गारंटी</p>
                        </div>


                        <div className='col-span-2'>
                            <img src="/main/hfuri_images/b2.webp" alt="sdf" loading='lazy' className='w-[70px] mx-auto py-3' />
                            <p className='font-bold'>COD - डिलीवरी पर भुगतान</p>
                        </div>




                        <div className='col-span-2'>
                            <img src="/main/hfuri_images/b3.webp" alt="sdf" loading='lazy' className='w-[70px] mx-auto py-2' />
                            <p className='font-bold'>प्रीपेड आर्डर पर 10% अतिरिक्त बचत</p>
                        </div>




                        <div className='col-span-2'>
                            <img src="/main/hfuri_images/b4.webp" alt="sdf" loading='lazy' className='w-[70px] mx-auto py-5' />
                            <p className='font-bold'>Flipkart,  Amazon पर उपलब्ध</p>
                        </div>


                    </div>


                </div>


            </div>


        </section>)
}

export default Section2