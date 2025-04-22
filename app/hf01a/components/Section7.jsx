import dynamic from "next/dynamic";
import Image from "next/image"

const Section7 = () => {

    return (
        <div className="w-full ">
            <div className="relative text-white bg-zinc-800">

                <div className="max-w-6xl px-3 mx-auto  relative z-10 py-5 sm:py-10 space-y-5 sm:space-y-10">
                    <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d8ddc373-6c32-4e5d-d8b4-d3af0ddfd600/public' alt="pic" className="sm:w-4/6 " width='100%' height='100%' loading="lazy" />

                    <p className="text-3xl sm:text-4xl">Summer "धमाका" Sale</p>

                    <div className="space-y-0 sm:space-y-10">
                        <div className="grid grid-cols-2 sm:grid-cols-1">
                            <p className="text-[3.5vw] sm:text-3xl">जी हाँ, Summer "धमाका" Sale में ऑनलाइन पेमेंट पर प्रतिदिन 100 भाग्यशाली ग्राहकों को मिल रहा है हॉर्सफायर का पैक बिल्कुल फ्री! मौका हाथ से ना जाने दे फ्री  में हॉर्सफायर मंगाए। अगर आप भाग्यशाली हुए तो आपका भी पूरा पैसा आपके अकाउंट में ट्रांसफर कर दिया जायेगा !</p>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fb7611af-0d98-4e1a-49dc-ee17db9ccd00/public" alt="pic" width='100%' height='100%' loading="lazy" className="block sm:hidden" />
                        </div>
                        <p className="text-center border-red-700 border-2 fontPoppins py-4 sm:py-8 text-[0.85rem] sm:text-xl">नोट- अन्य ग्राहकों के लिए 50% का बम्पर डिस्काउंट और ऑनलाइन पेमेंट पर 10% अतिरिक्त बचत उपलब्ध है।</p>
                    </div>
                </div>
                <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/816423b0-ce2c-40e6-36f7-4aeed6547600/public' loading="lazy" className="hidden sm:block" fill />
            </div>
            <div className="w-full bg-zinc-700 px-3 py-5 sm:py-10 ">
                <div className="max-w-6xl mx-auto  grid grid-cols-12 bg-white rounded-3xl items-center h-full ">
                    <img className="col-span-12 sm:col-span-3 rounded-t-3xl sm:rounded-l-3xl h-full" src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/00d90fa0-4ac5-405b-8c8f-41779e4b5700/public" width='100%' height='100%' loading="lazy" />
                    <div className="col-span-12 sm:col-span-6 text-xl px-5 mt-5 sm:mt-2">
                        लाखों पुरुष हॉर्सफायर के इस्तेमाल से लिंग बृद्धि और मनचाही सेक्स अवधि पाकर लाइफ को मजेदार बना चुके है ! आप किस इंतजार में है एक्सपर्ट्स से संपर्क करें अपनी समस्या बताएं और प्रोडक्ट आर्डर कर अपनी कमजोरी से छुटकारा पाएं।
                    </div>
                   
                </div>
            </div>

        </div>
    )
}
export default Section7