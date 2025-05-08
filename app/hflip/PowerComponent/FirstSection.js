import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const FirstSection = () => {
    return (
        <section className={`${noto.className} max-w-full  md:min-w-[360px]`}>

            <div className={`text-center text-white z-10 relative flex justify-center -mt-16 md:-mt-10 mb-5 md:mb-10`}>
                <a href="#form" className="text-decoration-none text-3xl md:text-5xl bg-black px-10 md:px-20 pt-4 pb-1 md:pt-6 md:pb-3 rounded-full outline-2 -outline-offset-8 font-bold outline-dashed outline-white">कड़वा सच!</a>
            </div>

            <div className="max-w-6xl mx-auto px-3 ">
                <h5 className="font-bold text-xl md:text-3xl italic">"हमारे देश लगभग 80-84% महिलाएं सेक्स के दौरान क्लाइमेक्स तक नहीं पहुंच पाती हैं। ऐसे में अपने साथी को खुश करने के लिए वे ऑर्गेज्म का दिखावा करने को मजबूर रहती हैं।"</h5>
                <p className="text-[1.1rem] md:text-2xl mt-3 text-justify">इस मामले को गम्भीरता से लेते हुए शोध किये गए। पता लगाने की प्रक्रिया तेज हुई की कैसे दूसरे देशों में महिलाएं सेक्स में पूरी तरह इन्वॉल्व होती है और 100 में से 93 से 97 बार ऑर्गेज्म तक पहुंच पाती है। कहने का मलतब है की विदेशों में भी कुछ महिलाये है जो सेक्स में ऑर्गेज़्म तक नहीं पहुंच पाती है। बहरहाल, उनकी तादाद काफी कम है। विदेशी असंतुष्ट महिलाओं का आंकड़ा मात्र 3 से 7 प्रतिशत ही है।</p>
            </div>

        </section>
    )
}

export default FirstSection;