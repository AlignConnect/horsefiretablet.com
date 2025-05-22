import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const IMcompo = () => {

    const ima = [

        {
            i: "/main/hfopt_images/9.png",
            m: "लम्बा-मोटा, फौलादी लिंग"
        },

        {
            i: "/main/hfopt_images/10.png",
            m: "+1 घण्टे की सेक्स अवधि "
        },
        {
            i: "/main/hfopt_images/11.png",
            m: "मजबूत स्टैमिना और एनर्जी "
        },
        {
            i: "/main/hfopt_images/12.png",
            m: "पार्टनर को ऑर्गेज़्म देने में सक्षम"
        },

    ]


    return (
        <section className={noto.className}>


            <div className="grid grid-cols-4 text-center">
                {

                    ima.map((e, key) => {
                        return <div className="col-span-2" key={key}>
                            <div>
                                <img src={e.i} alt="asdasd" loading="lazy" className="p-1 m-2 mx-auto rounded-md w-[90%] sm:w-[70%]" />
                            </div>
                            <p className="text-red-600 font-bold w-[80%] mx-auto text-xl">{e.m}</p>
                        </div>
                    })

                }
            </div>


            <div className="grid grid-cols-4 items-center p-2 md:relative -left-10">

                <div className="col-span-4 md:col-span-2">
                    <img src="/main/hfopt_images/13.webp" alt="ads" loading="lazy" className="md:w-[80%] md:ms-auto w-full md:p-1" />
                </div>

                <div className="bg-[#e7e5e6] p-2 col-span-4 md:col-span-2 md:text-[1.25rem] rounded-br-[35px] indent-10  shadow-md shadow-black">
                    क्या आप भी उन पुरुषों में से है जिन्ही इच्छा एक रोमांचक सेक्स करना है पर सेक्स के शुरुआत में ही झड़ जाते है और कुछ ही सेकेंडो में लिंग ढीला पड़ जाता है? ये एक बेहद शर्मिंदगी का पल होता है जिसमें आप अपनी पार्टनर को सेक्स का मजा नहीं दे पाते और उसकी नजरों में गिर जाते है। ऐसे में महिला को यौन सुख का अनुभव नहीं मिल पाता, मिलता है तो बस दुःख ! क्योकि चरित्र पर ऊँगली उठने की डर से अधिकतम ग्रामीण इलाको की औरते मौन रहती है। ऐसे में पुरुष को चाहिए की वे अपने पार्टनर की खुशियाँ पर भी ध्यान दें!
                </div>

            </div>






            <div className="grid grid-cols-4 items-center p-2">


                <div className="bg-[url(/main/hfopt_images/36.png)] bg-cover rounded-tl-[60px] text-white col-span-4 md:col-span-2 md:text-[18px] indent-10 pt-7 pb-3 px-2 shadow-md shadow-black">
                    आज कल अखबारों में आये दिन पति को धोखा देकर दूसरे पुरुषों के साथ संबंध की खबरे आती है। इसका मुख्य वजह है- जिस महिला को अपने पति से भरपूर यौन संतुष्टि नहीं मिलती वो सेक्स का बेहतर मजा लेने के लिए दूसरे मर्द तलाशती है जो उसे संतुष्ट करे।
                </div>

                <div className="col-span-4 md:col-span-2">
                    <img src="/main/hfopt_images/37.png" alt="ads" loading="lazy" className="md:w-[100%] md:ms-auto" />
                </div>


            </div>



            <div className="px-2">

                <div>
                    <img src="/main/hfopt_images/15.webp" alt="asdasd" loading="lazy" className="w-[70%] md:w-[17rem] mx-auto" />
                </div>

                <p className="py-3 font-semibold">
                    यौन समस्या एक सामान्य पर वैवाहिक जीवन या लव रिलेशन के लिए बहुत ही गंभीर मुद्दा है। जिन जोड़ो का सेक्स लम्बा नहीं चलता वीर्य विस्फोट जल्दी हो जाता और लिंग शिथिल पड़ जाता है उनके रिलेशन में रोमांस कम हो जाता है और तनाव बढ़ने लगता है। अंततः आप दोनों के बीच करण जौहर की फिल्मो की तरह तीसरे कैरेक्टर की इंट्री हो जाती है।
                </p>

            </div>





        </section>
    )
}

export default IMcompo