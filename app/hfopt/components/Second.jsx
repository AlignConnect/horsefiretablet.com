import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const Second = () => {
    return (
        <section className={noto.className}>

            <h1 className="bg-[url(/main/hfopt_images/35.png)] text-white text-center text-2xl pt-5 pb-1 font-bold "  style={{ textShadow: "2px 4px black" }}>
                "पार्टनर की नजर में जोकर नहीं हीरो बने"
            </h1>


            <div className="grid grid-cols-7 items-center gap-3">
                <div className="col-span-4 md:col-span-2">
                    <img src="/main/hfopt_images/17.webp" alt="sdf" loading="lazy" className="py-2" />
                </div>
                <div className="text-2xl font-bold col-span-3 md:col-span-5">
                    <span className="text-[#ac2319]">आंकड़ों </span>
                    के अनुसार हर 3 में से   <span className="text-[#ac2319]"> 2 पुरुष </span>जल्दी   <span className="text-[#ac2319]"> झड़ </span> जाते है और   <span className="text-[#ac2319]"> सेक्स  </span>का असली   <span className="text-[#ac2319]">मजा  </span> नहीं ले पाते है।
                </div>
            </div>

            <div>
                <img src="/main/hfopt_images/38.png" alt="asdasd" loading="lazy" className="w-[90%] mx-auto" />
            </div>


            <p className="border p-2 m-2 border-gray-500 rounded-md text-lg shadow-xl">
                अधिकतर पुरुष मार्केट में हर मेडिकल पर उपलब्ध नीली गोली का इस्तेमाल करते है जो स्वास्थ्य के लिए अत्यंत नुकसानदायक होता है। हार्ट ब्लॉकेज खोलने की यह दवाई जिसके साइड इफ़ेक्ट से लिंग में तनाव मिलता है और समस्या पर कोई असर नहीं पड़ता है। इसके ज्यादा इस्तेमाल से लिंग में तेज दर्द, सूजन के साथ-साथ लिवर, किडनी, व हार्ट संबंधित समस्याएं उत्पन्न होती है। कभी-कभी लिंग में ब्लड सर्कुलशन इतना ज्यादा हो जाता है जिससे नस डैमेज हो सकती है और आप सदा के लिए यौन क्रिया से दूर हो सकते है।
            </p>


            <section className='bg-[url(/main/hfopt_images/35.png)]'>
                <h1 className='text-center md:w-[70%] mx-auto text-white text-2xl md:text-3xl pt-3 font-bold' style={{ textShadow: "2px 4px black" }}>
                    सेक्स का भरपूर मजा लेने का <span className=""> <br /> #1आयुर्वेदिक फार्मूला</span>
                </h1>
            </section>


            <div className="grid grid-cols-12 items-center py-3 px-2  border  w-[98%] mx-auto my-4 rounded-md" style={{ boxShadow: "0 0 3px 1px black" }}>

                <div className="col-span-4">
                    <img src="/main/hfopt_images/39.png" alt="asd" loading="lazy" className="w-full md:w-[9rem] mx-auto py-4 px-2" />
                </div>


                <div className="col-span-8 pt-2 text-[15px] md:text-lg font-semibold">
                    आयुर्वेद में एक से बढ़कर एक जड़ीबूटियों का जिक्र किया गया है जिसके इस्तेमाल से आप धुआँधार सेक्स कर अपनी पार्टनर को संतुष्टि दे सकते है। इन पावरफुल जड़ीबूटियों में <span className="text-[#a7120b]">अश्वगंधा, शिलाजीत, अकरकरा, केसर, सफ़ेद मूसली, शतावरी, अभ्रक भस्म, वंग भस्म,</span> और <span className="text-[#a7120b]">गोक्षुरा</span> का नाम शीर्ष पर आता है। इनके उचित संयोजन से बना है <span className="text-[#a7120b]">"Horse Fire Tablet"</span> जो शुद्ध आयुर्वेदिक और बेहद असरदार फार्मूला है।
                </div>


            </div>

            <div className="bg-[url(/main/hfopt_images/16.webp)] text-white p-2 text-lg">

                <p>
                    आज मार्केट में कई तरह के प्रोडक्ट उपलब्ध हैं लेकिन प्रयोगशालाओं में किए गए शोधों और मेडिकल प्रैक्टिस की आधार पर इनमें से सबसे असरदार नुस्खा है <span className="text-[#00fad2] font-bold">Horse Fire Tablet</span>. इसकी क्लीनिकल रिसर्च पर 3 साल से भी ज़्यादा समय लगाया गया हैं। <span className="text-[#00fad2] font-bold">Horse Fire Tablet</span> ने सभी आवश्यक सुरक्षा और कार्यक्षमता प्रमाणपत्र हासिल कर लिए हैं। यह भारत सरकार आयुष मंत्रालय (स्वास्थ्य विभाग) द्वारा प्रमाणित उत्पाद है।
                </p>

            </div>


            <div className="w-full p-3">
                <img src="/main/hfopt_images/40.png" alt="asd" loading="lazy" className="w-[90%] mx-auto" />
            </div>


            <div className="bg-[#e5e5e5] pt-3 pb-1 font-bold text-2xl text-center w-[95%] mx-auto">
                आज ही ऑर्डर करे
            </div>

            




        </section>)
}

export default Second