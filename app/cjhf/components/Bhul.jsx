import dynamic from "next/dynamic"

const Inquiry = dynamic(() => import('./Inquiry'), {
    loading: () => <p>loading</p>
})

function Bhul() {
    return (
        <div>
            <div className="text-black text-justify fontNoto text-[1.2rem] md:text-xl py-6 px-2">
                आप सोचिये जहां औसतन महिलाओं को ऑर्गज़्म पाने में 23 से 27 मिनट का समय लगता है वही औसत पुरुष पार्टनर 5 से 7 मिनट सेक्स कर पाते है। परन्तु जिन्हे शीघ्रपतन या इरेक्शन की समस्या है वो 2 मिनट या शुरूआती कुछ झटको में डिस्चार्ज हो जाते है। इतना ही नहीं सेक्सुअली मरीज पुरुष को दूसरे या तीसरे राउंड सेक्स के लिए ना ही लिंग में कड़कपन मिलता है और न ही शरीर में स्टैमिना होती है। ऐसे पुरुष चाहकर भी अपनी महिला पार्टनर को सेक्स में संतुष्ट नहीं रख पाते है और यही खेल ख़राब हो जाता है।
            </div>

            <hr />

            <div className="py-5 md:py-8">
                <div className="fontNoto text-3xl md:text-5xl font-extrabold px-2">
                    <span className="">&#x201C;</span>भूल कर भी ये गलती न करे
                </div>

                <div className="text-black text-justify fontNoto text-[1.2rem] md:text-xl py-6 px-2">
                    बिना डॉक्टर को अपना वर्तमान स्वास्थ्य की जानकारी दिए केमिकल वाली गोलियां कभी न खाएं। ये कोई स्थाई समाधान नहीं है ये केमिकल वाली नीली गोलियां कुछ देर के लिए लिंग में इरेक्शन बना देती है पर उसके साथ ही हार्ट स्ट्रोक, अटैक, किडनी डैमेज, माइग्रेन, नर्व डैमेज जैसी गंभीर दुष्प्रभाव का खतरा बढ़ा देती है।
                </div>

                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-6">
                        <img
                            className='w-1/2 mx-auto '
                            src="/main/cjhf_images/pill.webp"
                            alt='pill'
                        />
                    </div>
                    <div className="col-span-6">
                        <img
                            className='w-1/2 mx-auto'
                            src="/main/cjhf_images/textpill.webp"
                            alt='textpill'
                        />
                    </div>
                </div>




            </div>

            <div>
                <Inquiry />
            </div>

            <hr />


            <div className="py-5 md:py-8">


                <div className="fontNoto text-3xl md:text-5xl font-extrabold px-2">
                    <span className="">&#x201C;</span>सबसे सुरक्षित समाधान
                </div>


                <div className="text-black text-justify fontNoto text-[1.2rem] md:text-xl py-6 px-2">
                    पुरुष सेक्स समस्या का सबसे असरदार और सुरक्षित समाधान आयुर्वेद में वर्णित है। प्राकृतिक जड़ीबूटियां इस समस्या को जड़ से मिटा सकती है। आयुर्वेद में अश्वगंधा, शिलाजीत, केसर, विदारी, गोखुरा, और सफ़ेद मूसली जैसी कामोत्तेजक व लिंगवर्धक जड़ीबूटियां और दिव्य भस्मों का वर्णन किया गया है जो गंभीर से गंभीर यौन कमजोरी को जड़ से मिटाने में उपयोगी है।
                </div>

                <div className="text-black text-justify fontNoto text-[1.2rem] md:text-xl py-2 px-2">
                    आज के आधुनिक युग में केमिकल के नए नए रिसर्च हो रहे है वही सिर्फ भारत ही नहीं दुनियाभर के पुरुष यौन शक्ति बढ़ाने के लिए आयुर्वेद की तरफ रुख अपना रहे है। इन जड़ीबूटियों को अमेरिका तथा अफ्रीकन देशों में अन्य नामों से जाना जाता है परन्तु वे भी दमदार सेक्स क्षमता के लिए इनका नियमित सेवन करते है। कई बड़े पोर्न स्टार्स बयान दे चुके है कि पोर्न मूवी बनाने के लिए लम्बा और कड़क लिंग, लम्बी सेक्स अवधि और ज्यादा स्टैमिना चाहिए होती है जिसके लिए हम नेचुरल जड़ीबूटियों का सेवन करते है।
                </div>


            </div>


            <hr />

            <Inquiry />

            <div className="py-5 md:py-8">

                <div className="fontNoto text-3xl md:text-5xl font-extrabold px-2">
                    <span className="">&#x201C;</span>इसे आजमाएं समस्या जड़ से मिटायें!
                </div>

                <img
                    className='w-full mx-auto py-3 px-2'
                    src="/main/cjhf_images/hearbs.webp"
                    alt='hearbs'
                />

                <div className="bg-[#e9e9e9] py-2 text-center md:w-1/2 fontPoppins text-md font-semibold my-3">
                    ABOVE MENTIONED HEARBS ARE SCIENTIFICALLY PROVEN
                </div>

                <div className="text-black text-justify fontNoto text-[1.2rem] md:text-xl py-4 px-2">
                    <span className="text-[#3f9e7e]">अश्वगंधा, शिलाजीत, केसर, विदारी, गोखुरा, और सफ़ेद मूसली </span>जैसी 17 जड़ीबूटियों के साथ अभ्रक और भस्मों के मिश्रण से बनाया गया हॉर्सफायर टेबलेट भारत का सर्वश्रेष्ठ लिंगवर्धक व शक्तिवर्धक उत्पाद है। इसके इस्तेमाल से आज तक लाखों पुरुष मनचाहा परिणाम पा चुके है। <span className="text-[#3f9e7e]">दमदार स्टैमिना, फौलादी लिंग और लम्बी सेक्स अवधि</span> के साथ अपनी महिला को चरमसुख देने के काबिल बन सेक्स लाइफ का असली मजा ले रहे है।
                </div>

                <div className="border-2 border-gray rounded-xl mx-1 my-2">
                    <img
                        className='mx-auto md:w-1/2 w-full py-4 px-2 '
                        src="/main/cjhf_images/product.webp"
                        alt='product'
                    />
                </div>

                <div className="text-black text-justify fontNoto text-[1.2rem] md:text-xl py-5 px-2">
                    <span className="text-[#3f9e7e]">हॉर्सफायर टेबलेट"</span> आज के यौन मरीजों के लिए संजीवनी फार्मूला बनकर उभरा है जो उनके मूर्छित सेक्स लाइफ को नया जीवन देने का काम करता है। यह लिंग के नर्वस प्रकोष्ठों को रक्त से भरता है जिससे वह पहले के मुकाबले ज्यादा फैलने लगते है। इससे लिंग की लम्बाई, मोटाई और कड़कपन में तेजी से साफ बृद्धि देखने को मिलती है। शीघ्रपतन से पीड़ित पुरुषों मे इसके इस्तेमाल के बाद 15 दिनों में अपने सेक्स अवधि में अद्भुत बृद्धि देखने को मिलती है जिससे उनका आत्मविश्वास बढ़ता है और दिमाग चिंतामुक्त हो जाता है। शरीर में जोश, ऊर्जा और स्टैमिना की लहर दौड़ती है जो सेक्स प्रदर्शन को बेहतर से बेहतरीन बनाती है।
                </div>

            </div>

        </div>
    )
}

export default Bhul