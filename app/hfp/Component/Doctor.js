import { Noto_Serif_Devanagari } from 'next/font/google';
import React from 'react'

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const Doctor = () => {
    return (

        <section className={noto.className}>
            <div className='five-x px-2'>

                <h1 className='sexual' >सेक्सुअल एक्सपर्ट्स द्वारा प्रस्तावित</h1>

                <div className='grid grid-cols-12 items-center m-auto dr-oct'>
                    <div className='col-span-12 md:col-span-6 order-2 md:order-1'>
                        <h2 className='md:text-end text-center bx'>
                            मैं उन पुरुषों को Horse Fire Tablet खाने की सलाह देता हूँ जो शीघ्रपतन, लो लीबीदो, लिंग में ढीलेपन या छोटे-टेढ़े लिंग से परेशान है और डॉक्टर कंसल्टेशन से घबराते या शर्माते है। इसकी मदद से आप घर बैठे अपनी समस्या जड़ से मिटा सकते है। इसमें मिश्रित प्रत्येक तत्व सेक्स कमजोरी में असरदार और भरोसेमंद है। इसे खाने से टेस्टोस्टेरोन लेवल बढ़ता है शरीर में ऊर्जा की वृद्धि होती है, बेजान पड़ी लिंग की नसों में ब्लड सर्क्युलेशन बढ़ता है जिससे नसों में जान आने लगती है और ढीले लिंग से राहत मिलती है तथा सेक्स टाइम में सुधार होता है।
                        </h2>

                        {
                            <div className='hidden md:block'>
                                <h1 className='dr-abhinav'>Dr.Abhinav Panday</h1>
                                <div className='grid grid-cols-12 items-center w-[100%] md:w-[75%]' >

                                    <div className='col-span-12 md:col-span-6 text-3xl font-bold pt-2 text-dark border-r-2 border-black'>
                                        17 Years of Experience
                                    </div>

                                    <div className='col-span-12 md:col-span-6 text-center text-dark font-bold text-3xl'>
                                        <h1>M.B.B.S</h1>
                                    </div>
                                    <div className='col-span-12 text-2xl py-2 text-dark' style={{ fontFamily: "sans-serif" }}>
                                        General Physician,Sexologist
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    <div className='col-span-12 md:col-span-6 items-end order-1 md:order-2'>
                        <img src="/main/hfp_images/dr.png" alt="no" className='w-full' loading='lazy' />

                        {
                            <div className='block md:hidden'>
                                <h1 className='dr-abhinav'>Dr.Abhinav Panday</h1>
                                <div className='grid grid-cols-12 items-center w-[100%] md:w-[75%] text-xl font-bold'>

                                    <div className='col-span-12 md:col-span-6  pt-2 text-dark' >
                                        17 Years of Experience
                                    </div>

                                    <div className='col-span-12 md:col-span-6 text-center text-dark'>
                                        <h1 className='mt-2'>M.B.B.S</h1>
                                    </div>
                                    <div className='col-span-12 py-1' style={{ fontFamily: "sans-serif" }}>
                                        General Physician,Sexologist
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Doctor