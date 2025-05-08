import React from 'react'
import { Noto_Serif_Devanagari } from "next/font/google";
import dynamic from 'next/dynamic';

const Order = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'));

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Sec1 = () => {
    return (
        <section className={noto.className}>
            <div className='w-full'>


                <div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ec133c1b-bce8-4fa2-d5b4-6a9bf9bf5400/public" alt="dsfdfs" loading='lazy' className='w-full' />
                </div>

                <div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8a5b97ca-f3f1-47e3-7e58-7b0b44819400/public" alt="dsfdfs" loading='lazy' className='w-[95%] sm:w-[60%] mx-auto relative -top-20' />
                </div>

                <h4 className='text-md italic text-white relative -top-12 px-3 text-center'>Horse Fire Tablet is Highly effective for sexual problems hence, it is the <span className='text-[#f2ce00]'>best-selling product in india</span></h4>

                <div className='relative -top-7'>
                    <Order />
                </div>
                <div className='bg-white font-bold text-center text-3xl sm:text-4xl pt-3'>

                    क्या आपको ये सब चाहिए?

                </div>


                <div className='px-3 grid grid-cols-1 sm:grid-cols-2 gap-6 py-5'>

                    <div>
                        <div className=''>
                            <img src="/main/hfck_images/03.webp" alt="dsfdfs" loading='lazy' className='w-full' />
                        </div>
                    </div>

                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ac5c3059-7cff-43cf-8c39-08a9641e2800/public" alt="dsfdfs" loading='lazy' className='w-full' />
                    </div>

                    <div>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/57862730-99be-4427-3e6b-1ce868696a00/public" alt="dsfdfs" loading='lazy' className='w-full' />
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6c82bc69-6f77-4da8-bc72-b75ec928a400/public" alt="dsfdfs" loading='lazy' className='w-full' />
                        </div>
                    </div>



                </div>


                <p className='text-white px-3 text-lg'>
                    अगर आप शीघ्रपतन, ढीले व कमजोर लिंग या लो स्टैमिना से परेशान है और इससे हमेशा के लिए छुटकारा चाहते है तो चिंता ना करें। अश्वगंधा, शिलाजीत, गोखुरा और सफ़ेद मूसली जैसी <span className='text-[#f9d100]'>17 सिद्ध जड़ीबूटियों</span> और भस्मों से बना आयुर्वेदिक <span className='text-[#f9d100]'>HORSE FIRE TABLET</span> आज ही आर्डर करें और बढ़ाएं अपनी मर्दानगी का स्तर !
                </p>


                <div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ef0f259e-9952-49ed-286f-b026b1175e00/public" alt="asd" loading='lazy' className='w-[50%] mx-auto my-5' />
                </div>

                <div className='bg-white w-[95%] mx-auto my-3 pt-2 px-2 rounded-2xl text-center text-lg'>
                    <span className='font-bold'> HORSE FIRE TABLET</span> भारत का सर्वाधिक बिकने वाला सेक्सवर्धक उत्पाद है
                </div>

                <div className='bg-white w-[95%] mx-auto my-3 pt-2 px-2 rounded-2xl text-center text-lg'>
                    <span className='font-bold'> HORSE FIRE TABLET</span> के लाखों संतुष्ट ग्राहक है जिसमे लगातार बृद्धि हो रही है
                </div>

                <div className='bg-white w-[95%] mx-auto my-3 pt-2 px-2 rounded-2xl text-center text-lg'>
                    इसे खासकर भारतीय पुरुषों के बॉडी स्ट्रक्चर के हिसाब से तैयार किया जाता है।
                </div>


            </div>
        </section>
    )
}

export default Sec1
