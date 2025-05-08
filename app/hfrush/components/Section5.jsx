import dynamic from 'next/dynamic';

const FormRedirect = dynamic(() => import('./FormRedirect'), {
    loading: () => <p>load</p>
});

const Section5 = () => {

    return (
        <div className='w-full '>
            <div className="text-3xl lg:text-4xl xl:text-6xl mt-3 sm:mt-7 font-bold text-center">डॉक्टर द्वारा प्रस्तावित </div>
            <div className="bg-gray-200 py-5 px-3">
                <div className="max-w-6xl mx-auto ">
                    <div className="flex gap-2 sm:gap-5 items-center justify-center">
                        <img src="/main/hfrush_images/21.png" alt="pic" className="w-2/5 sm:w-[13rem]" width='100%' height='100%' loading="lazy" />
                        <div className="">
                            <p className="text-2xl sm:text-5xl  font-bold text-red-700">Dr. B.D Verma</p>
                            <div className="fontPoppins text-[1rem] sm:text-2xl ">

                                <p className="">21 years of experience</p>
                                <p className="">MD - Alternate Medicine, BAMS</p>
                                <p className="">Ayurveda, Sexologist</p>
                            </div>
                        </div>
                    </div>

                    <p className="mt-5 text-justify"><span className="text-red-600 font-bold ">Horsefire Tablet</span> एक बेहतरीन किस्म की दवा है जो सेक्स पावर बूस्ट करने में मदद करती है। इसके इस्तेमाल से शीघ्रपतन, इरेक्टाइल डिस्फक्शन जिसे आम भाषा में ढीले लिंग की समस्या कहते है या फिर चाहे किसी भी प्रकार की गुप्त बीमारी हो आसानी से मिट जाती है। इसमें मिश्रित प्रत्येक तत्व सेक्स कमजोरी में असरदार और भरोसेमंद है। इसे खाने से टेस्टोस्टेरोन लेवल बढ़ता है शरीर में ऊर्जा की वृद्धि होती है, बेजान पड़ी लिंग की नसों में जान आने लगती है और ढीले लिंग से राहत मिलती है तथा सेक्स टाइम में सुधार होता है। मैं उन पुरुषों को <span className="text-red-600 font-bold">Horsefire Tablet</span> खाने की सलाह देता हूँ जो डॉक्टर कंसल्टेशन से घबराते या शर्माते है।</p>
                </div>
                <FormRedirect/>
            </div>
        </div>
    )
}
export default Section5