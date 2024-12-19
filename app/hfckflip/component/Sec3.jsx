import React from 'react'
import { Noto_Serif_Devanagari } from "next/font/google";
import { FaLocationArrow } from "react-icons/fa6";
import dynamic from 'next/dynamic';

const Order = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'));

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const sec3 = () => {
    return (
        <div className={noto.className}>

            <div className='bg-[#01418b] text-white text-lg  px-3'>

                <div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/42aa7add-b746-40be-9814-b2fead7e7c00/public" alt="asd" loading='lazy' className='sm:w-[60%] mx-auto pt-5' />
                </div>


                <p className='my-5'>
                    एक स्त्री के लिए शारीरिक सुख एक महत्वपूर्ण हिस्सा होता है, और जब वह सुख न मिले तो स्त्री का मन असंतुष्ट रहता है, जैसा मेरे कमजोर पति के वजह से मेरे साथ हुआ धीरे-धीरे हमारे बीच की दूरी बढ़ने लगी। जब मैं डॉक्टर के पास गई, तो उन्होंने बताया कि मेरे पति के लिंग की नसें कमजोर हो गई हैं और काम के प्रेशर की वजह से उनकी काम इच्छा खत्म हो चुकी है।
                </p>


                <p>
                    मेरी उम्र अभी बस 28 साल थी, जहाँ मेरा शरीर सेक्स की मांग कर रहा था। दूसरी तरफ, मेरे पति थे, जो कमजोर पड़ गए थे। यह मेरे लिए जीते जी मरने जैसा था। मेरे पति मुझे शारीरिक सुख नहीं दे सकते थे, लेकिन वह अच्छे इंसान हैं, और मैं उनसे प्रेम करती हूं, वह भी मुझसे। पर मेरी जिंदगी एक तरह से धीरे धीरे बर्बाद हो रही थी। मैं Horse Fire Tablet को धन्यवाद दूंगी जिसने उनकी कमजोर नसों को फिर से मजबूत बना दिया और वो सब कुछ करने के काबिल हो गए जो मैं चाहती थी।
                </p>


                <div className='flex items-center my-5 gap-3 pb-5'>
                    <div>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/047beca2-523a-4dd5-af7a-e43b0ba48f00/public" alt="sdd" loading='lazy' />
                    </div>

                    <p className='text-[#fede00] font-bold'>Reena Das (Customer)</p>
                </div>


            </div>


            <div>
                <Order />
            </div>


            <div className='bg-black text-white text-lg px-3'>

                <p className='my-5'>
                    सवाल ये है की अगर पुरुष अपनी महिला पार्टनर को संतुष्ट नहीं कर पा रहा तो वे क्या करेंगी? आज के आधुनिक समय में यही अधिकतम एक्स्ट्रा मैरिटल अफेयर की वजह है ! इसलिए पुरुषों की ये जिम्मेदारी बनती है की वो अपनी पार्टनर को सेक्स में भरपूर संतुष्टि दें।
                </p>

                <p>
                    अपनी पार्टनर को सेक्स में संतुष्टि देने और सेक्सुअल लाइफ में रोमांच भरने के लिए आज ही Horse Fire Tablet को अपने लाइफ का हिस्सा बनाये !
                </p>

                <h3 className='text-[#fec100] font-bold text-2xl text-center my-5'>Right Way of  Consumption</h3>

                <div className='flex items-baseline text-xl py-2' >

                    <FaLocationArrow className='me-2 rotate-[40deg]' />

                    सुबह और रात्रि भोजन के बाद एक टेबलेट दूध/पानी के साथ

                </div>


                <div className='flex items-baseline text-xl py-2'>

                    <FaLocationArrow className='me-2 rotate-[40deg]' />


                    बेहतर परिणाम के लिए 1 गिलास दूध के साथ लें
                </div>


                <div className='flex items-baseline text-xl py-2'>

                    <FaLocationArrow className='me-2 rotate-[40deg]' />


                    एक महीने के अंदर सेक्स प्रदर्शन में सुधार अनुभव करें

                </div>



            </div>


            <div className='flex items-center sm:w-[500px] bg-white rounded-tl-2xl rounded-br-2xl py-4 mx-auto'>
                <div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fb7965f8-770e-4d1c-f0f2-ec189b4a8b00/public" alt="sdf" loading='lazy' className='w-[100%]' />
                </div>

                <div className='text-2xl font-bold text-red-700'>
                    "लें सेक्स पावर का सुपर डोज, करें नॉनस्टॉप प्रदर्शन हर रोज"
                </div>

            </div>



        </div>
    )
}

export default sec3
