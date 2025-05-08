import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Section2 = () => {
    return (
        <section className={`${noto.className}`}>
            <div className="w-full bg-[url('/main/hflip_images/thirdbackweb.jpg')] bg-cover pt-5 md:pt-10">
                <div className="max-w-6xl mx-auto px-3 ">
                    <div className="grid md:grid-cols-3 gap-0 md:gap-10 items-center">
                        <div className=" md:col-span-2">
                            <h5 className="font-bold text-xl md:text-2xl lg:text-3xl italic">"अब बात आती है कि आखिर पश्चिमी या कैरेबियन पुरुषों में ये शक्ति कैसे आती है की वो अपने महिला पार्टनर को जोरदार सेक्स से हर बार चरमसुख तक पहुँचाते है।"</h5>

                            <p className="text-[1.1rem] md:text-[1.1rem] lg:text-2xl mt-3 text-justify">हमारी टीम पश्चिमी और अफ्रीकन देशों के बड़े-बड़े मेडिसिन रिसर्चर और हेल्थ एक्सपर्ट से संपर्क किये। इस शोध में पता चला की इन देशों के पुरुषों का प्रकृति से बहुत लगाव है और ये प्राकृतिक जड़ीबूटियों से प्रभावित है। प्रत्येक पुरुष नियमित तौर पर शिलाजीत, अश्वगंधा, सफ़ेद मूसली, आदि उत्तेजक और यौनवर्धक जड़ीबूटियों का मिश्रण इस्तेमाल करते है जिन्हे वहाँ अन्य नामो से जाना जाता है।</p>
                            <p className="text-[1.1rem] md:text-[1.1rem] lg:text-2xl mt-3 text-justify mb-5">वहां के पुरुष सेक्स लाइफ को जीना जानते है, औरते बिस्तर में अपना हक़ मांगती है और पुरुष को देना पड़ता है। वे ऐसे पुरुषो को पसंद नहीं करती जो सेक्स से उन्हें संतुष्ट न कर पाएं। यही वजह है की उन देशों में पुरुष नियमित तौर पर प्राकृतिक जड़ीबूटियों का इस्तेमाल कर अपनी जोश, जवानी, स्टैमिना और सेक्स इच्छा बुढ़ापे तक बनाये रखते है।</p>
                        </div>
                        <div className="">
                            <img src='/main/hflip_images/cup1.png' alt='bg1' className="w-full" loading='lazy' decoding="async"
                                loader={<p>wait</p>} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section2;