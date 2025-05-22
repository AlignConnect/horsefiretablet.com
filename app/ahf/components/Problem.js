import React from 'react'
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function Problem() {
    return (<section className={noto.className}>
        <div className="bg-[url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e63d1dc6-6c05-4be1-e7ac-8dbac01f7b00/public')] bg-cover min-h-[400px]" >
            <div className='w-full max-w-7xl mx-auto '>
                <div className='grid md:grid-cols-12 gap-2 py-5 items-center'>
                    <div className='col-span-6 order-2 md:order-none min-h-[70px]'>
                        <img
                            className='md:w-96 w-64 min-h-[70px]'
                            src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a8280662-2c6c-4a87-3af7-9b699e7bdf00/public"}
                            loading='lazy'

                            alt='problem_img'
                        />
                    </div>
                    <div className='col-span-6'>
                        <div className=' font-extrabold text-4xl md:text-5xl px-2 py-2'>ये है समस्या</div>
                        <div className=" text-[1.2rem] md:text-2xl px-2 py-1">
                            अमेरिकी यौन स्वास्थ्य एसोसिएशन के रिपोर्ट के अनुसार 83% भारतीय महिलाये अपने पुरुष पार्टनर के छोटे लिंग, शीघ्रपतन और कमजोर सेक्स स्टैमिना से निराश है। सर्वे में शामिल महिलाओं से बताया की उनके पार्टनर ऑर्गेज़्म तक साथ नहीं दे पाते है। भारतीय महिलाएं शर्मवश ये शिकायत भी नहीं कर पाती कि सेक्स में उनकी इच्छा पूरी नहीं हो रही। वही कई मॉडर्न सोच वाली लड़कियां सेक्स में अपनी संतुष्टि की बात पुरुषों के सामने रख देती है तो उनकी मर्दानगी को ठेस पहुँचती है और बात-विवाद तक बढ़ जाती है। ऐसे पुरुष समझ नहीं पाते की क्या करें इसका समाधान कैसे करें??
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Problem