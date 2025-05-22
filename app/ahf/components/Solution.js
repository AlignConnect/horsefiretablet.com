import { Noto_Serif_Devanagari, Poppins } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function Solution() {
    return (
        <section>
            <div className={`${noto.className} bg-[#053C5E]`}>
                <div className='w-full max-w-7xl mx-auto '>
                    <div className='grid md:grid-cols-12 gap-2 py-5 items-center'>
                        <div className='col-span-6 md:text-end text-center'>
                            <div className=' font-extrabold text-4xl md:text-5xl px-2 py-2 text-white'>ये है समाधान</div>
                            <div className=" text-justify md:text-end text-[1.2rem] md:text-2xl px-2 py-1 text-white">
                                अब किसी भी पुरुष को सेक्स में बेइज्जती का घूंट नहीं पीना पड़ेगा। अब हर पुरुष महिला पार्टनर को 1 नहीं रात में 3 या 4 बार ऑर्गेज़्म तक पंहुचा सकता है। क्योंकि अब आयुर्वेदिक हॉर्सफायर टेबलेट से सभी पुरुषों की यौन कमजोरी जड़ से खत्म होने वाली है। अश्वगंधा, शिलाजीत, केसर, विदारी, गोखुरा, और सफ़ेद मूसली जैसी 17 जड़ीबूटियों के साथ अभ्रक और वंग जैसे कामोत्तेजक भस्मों से बना हॉर्सफायर टेबलेट" लाखों पुरुषों की यौन कमजोरी मिटाकर जीवन में दोबारा बहार ला दिया है।
                            </div>
                        </div>

                        <div className='col-span-6 '>
                            <img
                                className='w-full mx-auto'
                                src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6f2f89b3-7f8b-4fd7-3c9c-762a65ada500/public"}
                                loading="lazy"
                                alt='couple_with_product'
                            />
                        </div>
                    </div>
                </div>
            </div>



            <div className="bg-[url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fb06b8f2-928f-4c4b-098c-3c6898a8f800/public')] bg-cover" >
                <div className='w-full max-w-7xl mx-auto '>
                    <div className='grid md:grid-cols-12 gap-2 py-5 items-center'>
                        <div className='col-span-6 order-2 md:order-none'>
                            <img
                                className='w-96 mx-auto'
                                loading="lazy"
                                src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cc5c51af-614c-47db-37ee-74574dfad000/public"}
                                alt='product_couple'
                            />
                        </div>
                        <div className='col-span-6 '>
                            <div className=' font-extrabold text-3xl md:text-5xl px-2 py-2 '>भारत का <span className="text-4xl md:text-6xl text-[#bf190f]">No.1</span> सेक्सुअल प्रोडक्ट </div>
                            <div className=" text-[1.2rem] md:text-2xl px-2 py-1 ">
                                Horse Fire Tablet भारत की सबसे असरदार और लोकप्रिय यौनशक्तिवर्धक औषधि है। यह विगत वर्षों से भारत में शक्तिवर्धक और लिंगवर्धक श्रेणी में प्रथम स्थान पर काबिज है। सरकार द्वारा हाल ही में आयोजित 8th नेशनल हेल्थ अवार्ड शो में "Sexual Wellness" की श्रेणी में हॉर्स फायर टेबलेट प्रथम स्थान पर रहा। इसके खोजकर्ता (एक्सपर्ट्स) को अवार्ड द्वारा सम्मानित किया गया, साथ ही Horse Fire Tablet आयुष मंत्रालय से प्रमाणित है। यह सभी प्रकार के गुप्त समस्या में असरदार है।
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solution