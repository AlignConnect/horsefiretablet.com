import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function StrongPenis() {


    const Women_need = (arr) => {
        return arr?.map((e, key) => {
            return <div className='bg-[#b54b31] py-1' key={key}>
                {key + 1}.&nbsp;
                {e.title}
            </div >
        })
    }

    return (
        <div className={`${noto.className} w-full max-w-2xl mx-auto`}>
            <div className=" font-extrabold text-center py-3 text-xl md:text-3xl italic">
                &ldquo;<span className="text-[#b54b31]">मजबूत लिंग, लम्बी सेक्स टाइमिंग</span> मर्दानगी की पहचान है और सेक्स कमजोरी शर्मिंदगी की वजह&rdquo;
            </div>

            <img
                className='w-full min-h-[230px]'
                src={"/main/hfb_images/couple.webp"}
                alt='couple'
                loading="lazy"
            />

            <p className=' text-[1.1rem] md:text-[1.4rem] text-justify px-1 py-2'>
                ज्यादातर महिलाएं अपने पुरुष पार्टनर के सेक्स प्रदर्शन से संतुष्ट नहीं होती क्योंकि उनकी लिंग में दम नहीं होता या उनकी सेक्स टाइमिंग कम होती है फिर भी रिश्ते के लिए खुश रहने का नाटक करती है। वही कुछ महिलाये वास्तविक सेक्स संतुष्टि के लिए अपने पार्टनर को धोखा देकर दूसरे पुरुष के साथ सम्बन्ध बना लेती है। ऐसे में प्रत्येक पुरुष को चाहिए की वो बेड पर अपना दमखम दिखाएँ जिससे उनकी महिला पार्टनर संतुष्ट रहे और रिश्ते में प्यार बना रहे।
            </p>

            <div className='bg-[#b54b31] text-center py-2'>

                <div className='py-4'>
                    <div className=' md:w-96 w-80 pt-3 font-semibold mx-auto text-2xl md:text-4xl text-white  border-solid border-2 border-white-600 rounded-md'>
                        ज्यादात्तर महिलाये चाहती है
                    </div>
                </div>
                <div className="text-xl md:text-2xl text-white ">
                    {
                        Women_need([
                            {
                                title: "लम्बा मोटा सुडौल लिंग"
                            },
                            {
                                title: "नॉनस्टॉप सेक्स प्रदर्शन"
                            },
                            {
                                title: "दमदार, ऊर्जावान पुरुष"
                            },
                            {
                                title: "पुरुष जो उन्हें संतुष्टि दे"
                            }
                        ])
                    }
                </div>
            </div>


            <div className="bg-[#e5e5e3]">
                <img
                    className='w-80 mx-auto py-3 min-h-[280px]'
                    src={"/main/hfb_images/product3.webp"}
                    alt='hf_product'
                    loading="lazy"

                />

                <div className="text-center font-extrabold text-3xl md:text-4xl">
                    &ldquo;HORSE FIRE <br /><span className="text-red-700">TABLETS</span>
                </div>

                <p className=" text-[#026a01] font-extrabold text-[1.1rem] md:text-[1.4rem] text-center px-1 py-3">बनाये आपको इस काबिल ताकि आप कर सके नॉनस्टॉप धुआंधार सेक्स और निकाल सके महिला पार्टनर की चीख</p>
            </div>

            <p className=' text-[1.1rem] md:text-[1.4rem] text-justify px-1 py-2'>
                <span className="text-[#b54b31] font-semibold">Horse Fire Tablet</span> एक प्रीमियम क्वालिटी प्रोडक्ट है जो स्टैमिना, सेक्स टाइमिंग और लिंग का तनाव करने में मदद करता है। इसके इस्तेमाल से शीघ्रपतन, इरेक्टाइल डिस्फक्शन या फिर चाहे किसी भी प्रकार की गुप्त बीमारी हो आसानी से मिट जाती है। इसमें मिश्रित प्रत्येक तत्व सेक्स कमजोरी में असरदार और भरोसेमंद है।
            </p>

            <p className=' text-[1.1rem] md:text-[1.4rem] text-justify px-1 py-2'>
                इसे खाने से टेस्टोस्टेरोन लेवल बढ़ता है शरीर में ऊर्जा की वृद्धि होती है, बेजान पड़ी लिंग की नसों में ब्लड सर्क्युलेशन बढ़ता है जिससे नसों में जान आने लगती है और ढीले लिंग से राहत मिलती है तथा सेक्स टाइम में सुधार होता है। मैं उन पुरुषों को <span className="text-[#b54b31] font-semibold ">Horse Fire Tablet</span> खाने की सलाह देता हूँ जो डॉक्टर कंसल्टेशन से घबराते या शर्माते है। इसकी मदद से आप घर बैठे अपनी समस्या जड़ से मिटा सकते है।
            </p>


            <img
                className='w-full md:w-1/2 mx-auto py-3'
                src={"/main/hfb_images/couple_hft.webp"}
                alt='couple_hft'
                loading="lazy"
            />
        </div>
    )
}

export default StrongPenis;