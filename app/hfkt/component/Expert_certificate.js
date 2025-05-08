function Expert_certificate() {
    return (
        <div>
            <div className="w-full bg-[url('/main/hfkt_images/tablet_back.jpg')] bg-cover" >
                <div className='w-full max-w-6xl mx-auto py-3 px-2'>
                    <div className='fontPoppins text-center text-4xl md:text-7xl font-semibold md:my-4'>
                        <span className='bg-[#a32d16] text-white px-2'>HORSE</span> FIRE
                    </div>
                    <div className='fontPoppins font-semibold text-md md:text-2xl text-center py-2 tracking-widest'>
                        TABLET
                    </div>
                    <img
                        className='md:w-[70%] w-full min-h-[280px] h-[100%] mx-auto'
                        src={"/main/hfkt_images/nothing_product.webp"}
                        alt='nothing_product'
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="w-full max-w-6xl mx-auto">
                <div className="fontPoppins text-[#a32d16] text-2xl md:text-4xl text-center font-extrabold py-3 md:py-5">
                    हॉर्स फायर की उपलब्धियाँ
                </div>
                <p className='fontNoto text-[1.1rem] md:text-[1.4rem] text-justify px-1'>
                    Horse Fire Tablet भारत की सबसे असरदार और लोकप्रिय यौनशक्तिवर्धक औषधि है। यह विगत वर्षों से भारत में शक्तिवर्धक और लिंगवर्धक श्रेणी में प्रथम स्थान पर काबिज है। सरकार द्वारा हाल ही में आयोजित 8th नेशनल हेल्थ अवार्ड शो में "Sexual Wellness" की श्रेणी में हॉर्स फायर टेबलेट प्रथम स्थान पर रहा। इसके खोजकर्ता (एक्सपर्ट्स) को अवार्ड द्वारा सम्मानित किया गया, साथ ही Horse Fire Tablet आयुष मंत्रालय से प्रमाणित है। यह सभी प्रकार के गुप्त समस्या में असरदार है।
                </p>

                <div className="border-2 border-black p-2 min-h-[200px] min-w-[360px]">
                    <img
                        className='w-[90%] h-[100%] mx-auto '
                        src={"/main/hfkt_images/expert_aword.jpg"}
                        alt='expert_aword'
                        loading="lazy"
                    />

                    <p className="fontPoppins font-semibold text-center text-sm md:text-xl py-1">( एक्सपर्ट टीम अवार्ड और प्रमाण पत्र स्वीकारते हुए )</p>
                </div>

                <img
                    className='w-[90%]  sm:w-[50%] h-[100%] mx-auto mt-5 sm:my-5 '
                    src={"/main/hfkt_images/flipimg.webp"}
                    alt='expert_aword'
                    loading="lazy"
                />

                <p className='fontNoto text-[1.1rem] md:text-[1.4rem] text-justify px-1 py-3'>
                    "Horse Fire के प्रत्येक टेबलेट में आयुर्वेद की 17 सबसे उपयोगी यौनवर्धक जड़ीबूटियां उचित कॉम्बिनेशन में समाहित है। यह हर तरह के पुरुष गुप्त रोग को जड़ से मिटाने के लिए विश्वप्रसिद्ध है।"
                </p>
            </div>
        </div>
    )
}

export default Expert_certificate;