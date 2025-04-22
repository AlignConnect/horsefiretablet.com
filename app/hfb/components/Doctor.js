import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
function Doctor() {
    return (
        <div className={`${noto.className} w-full max-w-2xl mx-auto`}>
            <div className="bg-[url('/main/hfb_images/doctor_background.webp')] bg-cover py-3">
                <div className=''>
                    <div className='bg-[#dbb508] md:w-1/2 w-3/4 mx-auto text-center font-extrabold text-3xl md:text-4xl pt-3 rounded-lg'>
                        डॉक्टर द्वारा प्रस्तावित
                    </div>

                    <img
                        className='mx-auto py-3 rounded-[50%] w-30 min-h-[200px]'
                        src={"/main/hfb_images/doctor_image.webp"}
                        alt='doctor_image'
                        loading="lazy"
                    />

                    <div className='text-center'>
                        <div className="inline-block text-white text-2xl text-center mx-auto">
                            Dr. Abhinav Pandey&nbsp;
                        </div>

                        <img
                            className='py-1 inline-block'
                            src={"/main/hfb_images/verify.svg"}
                            alt='verify'
                            loading="lazy"
                            width={20}
                            height={20}
                        />
                    </div>

                    <div className='flex justify-center items-center gap-2 py-2'>
                        <div className='border-r-[1px] px-2 text-center'>
                            <div className="text-white text-md md:text-xl font-semibold">
                                17 Yrs
                            </div>
                            <div className="text-white text-sm md:text-md">Experience</div>
                        </div>
                        <div className="text-white text-md md:text-xl font-semibold">
                            MBBS
                        </div>
                    </div>

                    <div className="text-center text-xl md:text-2xl text-white "> General Physician, Sexologist</div>

                    <div className=' text-[1.1rem] md:text-[1.4rem] text-justify px-2 py-4 text-white'>
                        Horse fire tablet एक प्रीमियम क्वालिटी प्रोडक्ट है जो स्टैमिना, सेक्स टाइमिंग और लिंग का तनाव करने में मदद करता है। इसके इस्तेमाल से शीघ्रपतन, इरेक्टाइल डिस्फक्शन या फिर चाहे किसी भी प्रकार की गुप्त बीमारी हो आसानी से मिट जाती है। इसमें मिश्रित प्रत्येक तत्व सेक्स कमजोरी में असरदार और भरोसेमंद है। इसे खाने से टेस्टोस्टेरोन लेवल बढ़ता है शरीर में ऊर्जा की वृद्धि होती है, बेजान पड़ी लिंग की नसों में ब्लड सर्क्युलेशन बढ़ता है जिससे नसों में जान आने लगती है और ढीले लिंग से राहत मिलती है तथा सेक्स टाइम में सुधार होता है। मैं उन पुरुषों को Horse fire tablet खाने की सलाह देता हूँ जो डॉक्टर कंसल्टेशन से घबराते या शर्माते है। इसकी मदद से आप घर बैठे अपनी समस्या जड़ से मिटा सकते है।
                    </div>
                </div>
            </div>


            <div className="bg-[#FF9914] border-dashed border-2 border-black">
                <img
                    className='py-2 w-72 md:w-96 mx-auto min-h-[300px]'
                    src={"/main/hfb_images/hft_sevan_vidhi.webp"}
                    alt='hft_sevan_vidhi'
                    loading="lazy"
                />

                <div className='px-1'>
                    <div className='text-5xl py-2 font-extrabold text-black text-center'>
                        सेवन विधि-
                    </div>
                    <div className='text-[1.2rem] md:text-[1.5rem] text-justify px-2 '>
                        <span className="font-extrabold">HORSE FIRE TABLETS</span> का सेवन बहुत ही आसान है। बेहतर सेक्स टाइमिंग, रॉक हार्ड इरेक्शन और शारीरिक शक्ति के लिए 1 टेबलेट सुबह-शाम 1 गिलास गुनगुने दूध या पानी के साथ लें ! बेहतर परिणाम के लिए दूध के साथ इस्तेमाल का सुझाव दिया गया है।
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctor;