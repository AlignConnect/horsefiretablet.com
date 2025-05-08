import dynamic from 'next/dynamic';
import { Poppins } from 'next/font/google';
import React from 'react'

const Inquiry = dynamic(() => import('./Inquiry'));


const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Section1 = () => {
    return (
        <section className='py-1'>

            <div className='bg-white pt-5 px-2'>

                <h1 className='w-[90%] mx-auto p-2 pt-4 text-center font-bold text-2xl border border-black'>आखिर पुरुष क्यों होते है <span className='text-red-600'> शर्मिंदा !</span></h1>

                <p className='py-2 text-lg font-semibold'>

                    एक महिला को चरमोत्कर्ष तक पहुंचने के लिए  <span className='text-red-600'> पुरुष से ज्यादा</span>  वक्त लगता है। परन्तु ज्यादातर महिलाये मानती हैं की  <span className='text-red-600'> फौलादी लिंग </span> से मिलने वाले जोरदार झटको से उन्हें चरमोत्कर्ष जल्दी मिल जाता है। चूँकि सेक्स में संतुष्टि मिलना दोनों के लिए जरुरी होता है पर सच तो ये है की यौन कमजोरी से झूझ रहे पुरुष इसके काबिल ही नहीं होते! सिर्फ अपना वीर्य डिस्चार्ज होने के बाद करवट बदल कर सो जाते है।
                </p>

                <div>
                    <img src="/main/hfuri_images/sle.webp" alt="dsf" loading='lazy' className='w-full' />
                </div>

                <div className='pt-2'>
                    <Inquiry />
                </div>

                <p className='pb-2 text-lg font-semibold'>
                    एक ताजा सर्वे के अनुसार हर महिला अपने वैवाहिक जीवन में   <span className='text-red-600'>  50% से भी</span>  कम बार क्लाइमेक्स तक पहुंचती हैं। वह रोज रात को अधूरी सो जाती है जिसका कारण सिर्फ और सिर्फ पुरुष यौन कमजोरी है। यह महिला स्वास्थ्य के लिए अच्छी बात नहीं है। इस वजह से उनके हॉर्मोन्स असंतुलित होने लगते है, कार्टिसोल लेवल बढ़ने लगता है और ज्यादात्तर महिलाएं चिड़चिड़ी स्वभाव की हो जाती है।
                </p>

            </div>


            <div className='bg-black text-center text-white text-3xl p-2 pt-5 font-bold'>
                <span className='text-red-600'> हॉर्सफायर</span> बदलेगा हालात !
            </div>

            <div>
                <img src="/main/hfuri_images/aag.webp" alt="dsf" loading='lazy' className='w-full' />
            </div>

            <div className='w-[90%] my-2 mx-auto bg-black border border-white border-dashed text-white text-lg pb-1 px-2 pt-3 font-semibold'>
                पुरे भारत वर्ष में अपने असरदार गुणों की बदौलत <span className='text-red-600'>"हॉर्सफायर टेबलेट"</span>  लिंग उत्थान वर्ग में प्रथम स्थान पर काबिज है। यह कमजोर से कमजोर पुरुष को शक्तिमान बनाने और <span className='text-red-600'>  लिंग आकार</span> में अद्भुत बृद्धि के लिए प्रशिद्ध है। हॉर्सफायर ने एक यौनवर्धक क्रांति ला दिया है। इसके परिणाम और लोकप्रियता से बाजार में इसकी मांग काफी बढ़ गयी है।
            </div>

        </section>)
}

export default Section1