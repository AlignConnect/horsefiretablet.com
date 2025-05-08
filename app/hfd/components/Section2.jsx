import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const Section2 = () => {

    const listproductBene11 = [
        { title: 'लम्बा, मोटा फौलादी लिंग ', image: '/main/hfv_images/sec3_gif1.webp' },
        { title: '45 मिनट से ज़्यादा सेक्स अवधि', image: '/main/hfv_images/sec3_gif3.webp' },
        { title: 'जोरदार इरेक्शन जो घंटो बना रहे', image: '/main/hfv_images/sec3_gif2.webp' },
        { title: 'जोश, उत्तेजना और इच्छा में वृद्धि', image: '/main/hfv_images/sec3_gif4-min.gif' },
    ]

    return (

        <div className={`${noto.className} w-full`}>
            <div
                style={{
                    backgroundImage: `url(/main/hfv_images/section3.jpg)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: 'center'
                }}

            >
                <div className="max-w-7xl mx-auto px-2 md:pt-10">
                    <div className="">
                        <div className="">
                            <div className="w-[100%] relative min-h-[200px]">
                                <img src="/main/hfv_images/sec2_shape.webp" alt="pic" className="w-full min-h-[200px] hidden md:block" loading="lazy" />
                                <img src="/main/hfv_images/sec2_shape_mob.webp" alt="pic" className="w-full min-h-[200px] block md:hidden" loading="lazy" />

                                <p className="transform absolute translate-x-[-50%] translate-y-[-50%] left-[46%] w-[80%] top-[56%] md:top-[47%] md:w-[72%] text-[0.95rem] text-center font-extrabold md:text-3xl  font-sumana">यह रोज-रोज का अधूरापन आपके रिश्ते में तनाव और कड़वाहट का विष घोल सकता है। अगर आप अपने लव लाइफ या मैरिटल लाइफ में महिला पार्टनर से लॉयलिटी चाहते है तो सबसे पहले उनकी खुशियों का ध्यान रखना जरुरी है।</p>
                            </div>
                            <div className="max-w-4xl mx-auto">
                                <h1 className="md:text-6xl my-6 md:my-12 text-4xl font-extrabold text-black text-center fontShadow" >क्या आप ये चाहते है?</h1>
                                <div className="grid grid-cols-2 gap-4">
                                    {listproductBene11.map((e, key) => {
                                        return <div className="w-full text-center whyIntersted my-1" key={key}>
                                            <img src={e.image} alt="pic" className="md:w-[15rem] mx-auto md:h-[15rem] w-[10rem] h-[10rem] rounded-full" loading="lazy" />
                                            <h1 className="text-black text-xl md:text-3xl mt-4 font-bold" >{e.title}</h1>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 mt-[10%] gap-0 md:gap-4">
                            <div className="min-h-[450px]">
                                <img src="/main/hfv_images/sec3_model.png" alt="pic" className="w-full min-h-[450px]" loading="lazy" />
                            </div>
                            <div className="flex md:flex-col flex-col-reverse">
                                <div className="">
                                    <h1 className="md:text-4xl text-2xl text-[#0f224d] font-extrabold mb-2 lh-sm ">अगर आपको ये सब चाहिए तो आजमाए "Horse Fire Tablet" और अपने सेक्स प्रदर्शन में पाए अद्भुत वृद्धि। </h1>
                                    <h1 className="font-bold md:text-3xl mb-4 text-xl font-sumana manageLineheight text-justify">
                                        हॉर्सफायर टेबलेट" सेक्स अवधि, लिंग की लम्बाई-मोटाई और सख्ती बढ़ाने के साथ जोश और सेक्स इच्छा को उच्चतम स्तर पर पंहुचा कर महिला पार्टनर को चरमसुख से भेंट कराने की सबसे बेहतरीन फार्मूला है। आयुर्वेदिक इतिहास की 17 सबसे असरदार और विश्वसनीय जड़ीबूटियों से बना यह प्रोडक्ट पुरुष यौन समस्या को जड़ से उखाड़ फेंकने में सक्षम है।
                                    </h1>
                                </div>

                                <div className="mb-7 md:my-8 mt-0 text-center">
                                    <div className="  inline-block md:text-start pop_imagehfv" >
                                        <a className="bg-[#213361] text-xl  font-bold fontPoppins py-3 md:py-5 px-7 md:px-11 w-full rounded-full hover:bg-[#1e2f5a] shadow-lg shadow-[#213361]/50 transition-colors text-white" href='#form'>
                                            INQUIRY NOW
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div
                style={{
                    backgroundImage: `url(/main/hfv_images/section4.jpg)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-7xl mx-auto px-2 md:pt-10">
                    <h1 className="md:text-5xl  text-2xl font-extrabold text-[#0f224d] text-center pt-6 md:pt-0  font-sumana ">* हॉर्स फायर टीम अवार्ड और प्रमाण पत्र स्वीकारते हुए</h1>
                    <div className="w-full py-6 md:py-12 min-h-[200px] md:min-h-[400px]">
                        <img src="/main/hfv_images/sec4_awards.webp" alt="pic" className="w-full min-h-[200px] md:min-h-[400px]" loading="lazy" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Section2;