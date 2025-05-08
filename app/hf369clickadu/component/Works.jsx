import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Works = () => {
    return (
        <section className={noto.className}>

            <div className='bg-[url("/main/hf369a_images/mobile3.webp")]'>

                <h1 className="font-semibold text-2xl text-center py-5">How it Works ?</h1>

                <ul className="px-2 text-lg w-[95%] ms-auto list-disc" >
                    <li>प्रत्येक टेबलेट शरीर में टेस्टोस्टेरोन हॉर्मोन और नाइट्रिक ऑक्साइड का उत्पादन करता है जिससे रक्त वाहिकाएं चौड़ी होती है।</li>
                    <li>लिंग की तंग चमड़ी खुलती है और नसों में रक्त का तेजी से बहाव होता है, फलस्वरूप लिंग के कड़कपन में सुधार होता है।</li>
                    <li>इस्तेमाल के पहले दिन से इसके घटक समस्या की रिकवरी करने लगते है, और शरीर को कमजोरी मुक्त कर देते है।</li>
                    <li>जोश, उत्साह, एनर्जी, स्टैमिना बढ़ाने का कार्य करता है पुरुष बिना थके लम्बा सेक्स प्रदर्शन करने में सक्षम बनता है।</li>
                </ul>

                <div className="w-[70%] mx-auto py-4">
                    <img src="/main/hf369a_images/larged.webp" alt="sdfsdf" className="w-full" loading="lazy" />
                </div>

            </div>


            <section className="min-h-[320px] md:min-h-[250px]">

                <div className='relative bg-[url("/main/hf369a_images/brush.png")] h-28 bg-no-repeat min-w-[320px] bg-center my-3'>

                    <div className='relative w-[320px] mx-auto transform translate-y-7 flex items-center gap-2 my-3 min-h-[70px]'>
                        <div className='text-white font-bold text-center text-2xl px-5 absolute'>भारतीय पुरुष Horse Fire क्यों चुनते है </div>
                    </div>

                    <p className="text-black pt-9 px-2 text-lg">
                        सबसे ज्यादा ध्यान देने वाली बात ये है कि कोई भी दवा प्रत्येक व्यक्ति की बॉडी पर अलग- अलग तरीके से रियेक्ट करता है। इसलिए जरुरी नहीं की किसी एक दवा से प्रत्येक पुरुष को लाभ मिले इसलिए हमारे एक्सपर्ट्स प्रत्येक पुरुष के बॉडी, हाइट, उम्र तथा वर्तमान स्वास्थ्य का आंकलन कर उनके लिए स्पेशल पैक तैयार करते है।
                    </p>

                </div>

            </section>

            <section className="flex items-center bg-[url('/main/hf369a_images/bg4large.webp')] bg-cover bg-center bg-no-repeat">

                <div className="ps-4 text-lg md:text-3xl w-2/3">

                    यही वजह है की पुरुष को 100% लाभ मिलता है शीघ्रपतन की समस्या मिटती है, लिंग साइज बढ़ता है, यौन प्रदर्शन में सुधार होता है और Horse fire के लाभ का प्रचार होता है और पुरुष Horse Fire पर भरोसा कर इसे चुनते है और लाभान्वित होते है।
                </div>

                <div className="w-1/3 relative bottom-[-4px]">
                    <img src="/main/hf369a_images/m2large.webp" alt="rtetet" className="w-full" />
                </div>

            </section>



        </section>
    )
}

export default Works