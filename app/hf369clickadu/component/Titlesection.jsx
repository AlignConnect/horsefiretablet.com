import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const Titlesection = () => {

    //  "/main/hf369a_images"

    return (
        <section className={noto.className}>
            <div className='relative bg-[url("/main/hf369a_images/brush.png")] h-28 bg-no-repeat min-w-[320px] bg-center my-3'>

                <div className='w-[320px] mx-auto transform translate-y-7 flex items-center gap-2 my-3'>
                    <div>
                        <img src="/main/hf369a_images/finger.png" loading='lazy' className='min-w-[40px]' />
                    </div>

                    <div className='text-white font-bold text-center text-xl'>अपने खुशहाल जीवन के लिए सिर्फ 5 मिनट निकालें !</div>

                    <div>
                        <img src="/main/hf369a_images/finger.png" loading='lazy' className='min-w-[40px]' />
                    </div>
                </div>

            </div>

            <div className="text-black px-3 text-lg">

                <p>
                    सेक्स समस्या मिटाने के लिए कोई शीलाजीत, कोई अश्वगंधा तो कोई गोक्षुरा खाने की सलाह देता है। अवश्य ही यह समस्त विश्व में सर्वश्रेष्ठ कामोत्तेजक और प्राकृतिक यौन वर्धक के रूप में प्रशिद्ध है। हम इस बात से कत्तई इंकार नहीं कर सकते ही इनके सेवन से यौन समस्या में लाभ नहीं मिलेगा परन्तु जरा सोचिये इन जड़ीबूटियों के साथ आयुर्वेद की कुछ अन्य प्रमुख टेस्टोस्टेरोन बूस्टर और कामोत्तेजक बूटियों का मिश्रण हो जाये तो एक यौन रोगी को कितना लाभ मिलेगा।
                </p>

                <p>
                    "अगर एक जड़ीबूटी से लाभ मिल सकता है तो संयोजित फॉर्मूले के इस्तेमाल से लाभ कितना बढ़ सकता है, आपकी उम्मीद से भी ज्यादा !"
                </p>

            </div>



        </section>
    )
}

export default Titlesection