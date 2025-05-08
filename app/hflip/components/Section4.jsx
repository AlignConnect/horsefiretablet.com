import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Section4 = () => {
    return (
        <section className={`${noto.className} w-full`}>
            <div className={`relative`}>
                <div className="relative z-[10]  text-center  text-white py-5 md:py-10 ">
                    <div className="max-w-6xl mx-auto px-3 ">

                        <div className="grid md:grid-cols-2">
                            <div className="relative mt-[20%] md:mt-[15%] order-2 md:order-1 min-h-[360px] md:min-h-[500px] min-w-[300px] md:max-w-[350px] mx-auto">
                                <img
                                    src={"/main/hflip_images/proback.png"}
                                    loading='lazy'
                                    decoding="async"
                                    className='absolute transform -translate-x-1/2 -translate-y-[60%] md:-translate-y-2/3 top-1/4 left-1/2 w-full'
                                />
                                <img
                                    src={"/main/hflip_images/hftpro.png"}
                                    loading='lazy'
                                    decoding="async"
                                    className='mx-auto relative z-10 mb-5 md:mb-0 w-full'
                                />
                            </div>
                            <div className="order-1 md:order-2 mb-5">
                                <h1 className={`bg-white px-3 pt-4 pb-1 font-black mb-8 md:mb-10 text-2xl md:text-3xl text-[#9e0000]`}>हॉर्सफायर- प्रकृति का अद्भुत तोहफा</h1>

                                <p className="text-[1.1rem] md:text-[1.1rem] lg:text-2xl mt-3 text-justify">आयुर्वेद की 17 सबसे महान कामोत्तेजक जड़ीबूटियों का रिसर्च किया कि कौन सी बूटी कितनी मात्रा में रखने में सेक्स टाइमिंग, लिंग की मजबूती और यौन इच्छा में वृद्धि होगी। इसके उपरांत शानदार मिश्रण से तैयार किया गया "हॉर्सफायर टेबलेट" जो भारत का सर्वश्रेष्ठ लिंग वर्धक और शक्ति वर्धक उत्पाद है। </p>
                                <p className="text-[1.1rem] md:text-[1.1rem] lg:text-2xl mt-3 text-justify">हॉर्सफायर एक पूर्ण आयुर्वेदिक उत्पाद है। यह टेबलेट खाने के पश्चात शरीर के अंग अंग में जोश की लहर उठती है। लिंग के ब्लड वेसल्स सही तरीके से पंप होते है। शरीर में स्टैमिना और एनर्जी लेवल तेजी से बढ़ने लगते है। लिंग का उभार विकसित होता है नसों का जथ्था ज्यादा फूलता है, मजबूत होता है जिससे लिंग के लम्बाई मोटाई और कड़कपन में तेजी से वृद्धि होने लगती है। </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='absolute w-full h-full top-0 left-0'>
                    <img
                        src={"/main/hflip_images/prakruti.jpg"}
                        alt='pic'
                        className='h-full w-full'
                        loading='lazy'
                        decoding="async"
                    />
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-3 pt-5 text-center md:py-10">

                <img
                    src={"/main/hflip_images/dhamaka_offer.png"}
                    loading='lazy'
                    decoding="async"
                    className='mx-auto foo animate-foo w-3/4 md:w-1/3'
                />

                <h4 className="text-xl md:text-3xl font-semibold my-5 md:my-10">जी हाँ, Summer "धमाका" Sale में ऑनलाइन पेमेंट पर प्रतिदिन 100 भाग्यशाली ग्राहकों को मिल रहा है हॉर्सफायर का पैक बिल्कुल फ्री! मौका हाथ से ना जाने दे, फ्री में हॉर्सफायर मंगाए। अगर आप भाग्यशाली हुए तो आपका भी पूरा पैसा आपके अकाउंट में ट्रांसफर कर दिया जायेगा!</h4>

                <a href="#form" className="text-[1rem] md:text-2xl font-bold px-0 md:px-10 text-blue-600">(नोट- अन्य ग्राहकों के लिए 50% का बम्पर डिस्काउंट और ऑनलाइन पेमेंट पर 10% अतिरिक्त बचत उपलब्ध है।)</a>
            </div>
        </section>
    )
}
export default Section4;