import { Poppins } from 'next/font/google';
import React from 'react';
const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700',]
});

const Section5 = () => {

    const listOfBenefit = [
        { title: 'लम्बा, मोटा फौलादी लिंग' },
        { title: '45 मिनट से ज़्यादा सेक्स अवधि' },
        { title: 'जोरदार इरेक्शन जो घंटो बना रहे' },
        { title: 'जोश, उत्तेजना और इच्छा में वृद्धि' },
    ]

    return (
        <div className='w-full px-3 pb-0 md:pb-10'>
            <h1 className={`bg-red-800 text-3xl py-3 md:py-5 text-center md:text-5xl text-white font-bold ${poppins.className}`}>हॉर्सफायर से पाएं</h1>

            <div className="max-w-4xl mx-auto py-5 md:py-10">
                <div className="grid md:grid-cols-3 gap-4 md:gap-10 items-center">
                    <div className="">
                        <video className='w-3/4 mx-auto md:w-full h-full border-[#f3f3f3] border-8 ' autoPlay muted loop>
                            <source src='/main/hflip_images/sexxx.mp4' type="video/mp4" className='h-full' />
                        </video>
                    </div>
                    <div className={`${poppins.className}  md:col-span-2 md:pe-3`}>
                        <ul className='ps-6 md:ps-10 !list-disc text-xl md:text-2xl'>
                            {listOfBenefit.map((e, key) => {
                                return <li className="border border-black my-5 rounded-full ps-5 pe-2 md:px-5 py-2 font-bold bg-[#f3f3f3]" key={key}>{e.title}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>


            <div className="max-w-5xl mx-auto ">
                <p className="text-[1.1rem] md:text-[1.1rem] lg:text-2xl mt-3 text-justify">अपनी असरदार लिंग व शक्तिवर्धक क्षमता की वजह से विगत कुछ वर्षों से हॉर्सफायर भारतीय पुरुषों की पहली पसंद बन चुका है। इसका ही परिणाम है की भारत में केमिकल युक्त उत्पादों की बिक्री में गिरावट देखने को मिल रही है। इस समय भारत के 10 में से 8 यौन मरीज "हॉर्सफायर टेबलेट" का इस्तेमाल कर रहे है। सेक्स टाइमिंग लिंग साइज बढ़ाकर सेक्सुअल लाइफ को मजेदार बना रहे है।</p>

                <p className="text-[1.2rem]  lg:text-2xl mt-3 text-justify italic font-bold">

                    <img src='/main/hflip_images/no1.png' alt='certi' width={60} height={60} className="float-start inline me-2" loading='lazy' loader={<p>wait</p>} />हॉर्स फायर टेबलेट विगत वर्षों से भारत में शक्तिवर्धक और लिंगवर्धक श्रेणी में प्रथम स्थान पर काबिज है। सरकार द्वारा हाल ही में आयोजित 8th नेशनल हेल्थ अवार्ड शो में "Sexual Wellness" की श्रेणी में हॉर्स फायर टेबलेट प्रथम स्थान पर रहा। इसके खोजकर्ता (एक्सपर्ट्स) को अवार्ड द्वारा सम्मानित किया गया, साथ ही Horse Fire आयुष मंत्रालय से प्रमाणित है।</p>
            </div>
        </div>
    )
}
export default Section5