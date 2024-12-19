import dynamic from "next/dynamic"
import Image from "next/image"


const Inquiry = dynamic(() => import('./Inquiry'), {
    loading: () => <p>loading</p>
})

function Header() {
    return (
        <section className="">

            <div className="w-full max-w-6xl mx-auto">
                <div className="text-black fontPoppins text-xl md:text-2xl py-3 font-semibold text-center md:text-left">
                    BETTER SEXUAL HEALTH
                </div>


            </div>

            <div className="relative">
                <div className="w-full max-w-6xl mx-auto relative z-10 ">

                    <div className="text-white fontPoppins text-xl py-5 text-left">
                        *Problems and conditions
                    </div>
                    <div className="bg-[#f3f3f3] md:px-4 rounded-t-3xl mx-1">
                        <div className="fontPoppins text-black md:py-7 py-5 px-2">
                            Home &gt; Sexual health
                        </div>

                        <div className="grid grid-cols-12  px-2 md:py-5 md:gap-x-10">
                            <div className="col-span-12 md:col-span-8 fontNoto text-3xl md:text-5xl font-extrabold py-1 text-center md:text-left">
                                सेक्स कमजोरी है तो ये जान लीजिये वर्ना बाद में पछतायेंगे?
                            </div>
                            <div className="col-span-12 md:col-span-4 fontKalnia ">
                                <div className="bg-black flex items-center justify-around md:w-72 p-2 rounded-lg">
                                    <div className="">
                                        <img
                                            className='w-12 mx-auto'
                                            src="/main/cjhf_images/expert_icon.webp"
                                            alt='expert_icon'
                                        />
                                    </div>
                                    <div className="md:text-md text-white bg-black  text-center rounded-2xl font-semibold">
                                        <a href="#form"> Request for expert advice</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-black text-justify fontNoto text-[1.2rem] md:text-xl py-6 px-2 indent-8">
                            हाल ही में अमेरिकी यौन स्वास्थ्य एसोसिएशन द्वारा दुनियाभर में किये गए सर्वे का चौकाने वाला रिपोर्ट आया है। रिपोर्ट के अनुसार, दुनियाभर में पति पत्नी के बीच मनमुटाव, तनाव, झगड़े की 3 सबसे मुख्य वजहें मनचाही शॉपिंग, सुख सुविधाएँ की वस्तुए और सेक्स में महिलाओं की असंतुष्टि है।
                        </div>

                        <div className="flex items-center gap-1 border border-black md:w-1/2 rounded-lg py-2">
                            <div className="">
                                <img
                                    className='w-20'
                                    src="/main/cjhf_images/biomedicine.webp"
                                    alt='biomedicine'
                                />
                            </div>
                            <div className="">
                                <div className="font-semibold fontKalnia text-md md:text-xl">
                                    American Sexual Health Association
                                </div>
                                <div className="fontPoppins text-sm md:text-md">
                                    Biomedicine & Pharmacotherapy
                                </div>
                            </div>
                        </div>

                        <div className="text-black text-justify fontNoto text-[1.2rem] md:text-xl py-6 px-2">
                            सर्वे में इन्होने प्रत्येक बड़े देशों के 1000 कपल्स को शामिल किया और और खुशहाल रिलेशनशिप के लिए जरुरी चीजों के बारे में पूछा गया। मेजोरिटी ऑफ़ कपल्स ने खासकर महिलाओं ने इन 3 चीजों को जरुरी बताया। वही भारतीय महिलाओं ने अपने पुरुष पार्टनर के छोटे लिंग, शीघ्रपतन और कमजोर सेक्स स्टैमिना पर निराशा जताया। यही वजह है की रिश्ते ख़राब हो जाते है, दूरिया बढ़ जाती है, बेवफाई होने लगती और पुरुष को पता भी नहीं चल पाता है।
                        </div>



                        <Inquiry />

                        <hr />


                        <div className="py-2 md:py-8">
                            <div className="fontNoto text-3xl md:text-5xl font-extrabold">
                                <span className="">&#x201C;</span>हॉर्मोन्स का फंडा!
                            </div>

                            <img
                                className='md:w-1/2 w-full mx-auto py-3'
                                src="/main/cjhf_images/hormones.webp"
                                alt='hormones'
                            />
                            <div className="text-black text-justify fontNoto text-[1.2rem] md:text-xl py-3 px-2">
                                इतना ही नहीं सैकड़ो सेक्सोलॉजिस्ट भी ये बताते है की सेक्स में महिला को ऑर्गेज़्म ना मिलने से उनके दिमाग में स्ट्रेस लेवल बढ़ता है। दरअसल, ऑर्गेज़्म के बाद एंडोर्फिन, डोपामाइन, ऑक्सीटोसिन, और सेरोटोनिन नामक हॉर्मोन रिलीज़ होते है जो ख़ुशी और प्यार का एहसास कराते है। इसके विपरीत चरमसुख न मिलने से कार्टिसोल नामक हॉर्मोन स्रावित होता है जो स्ट्रेस, तनाव और चिड़चिड़ापन का कारण बनता है।
                            </div>
                        </div>
                    </div>
                </div>
                <Image fill src="/main/cjhf_images/Head_Background.webp" alt='Head_Background' className="!h-72" />
            </div>


        </section>
    )
}

export default Header