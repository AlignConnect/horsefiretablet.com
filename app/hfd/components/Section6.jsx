import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const Section6 = () => {

    return (
        <div className={`${noto.className} w-full`}>
            <div
                style={{
                    backgroundImage: `url(/main/hfv_images/section7.jpg)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-7xl  mx-auto py-6 md:py-12 px-2 md:px-0">
                    <h1 className="md:text-5xl  text-2xl font-extrabold text-red-800 italic text-center pt-6 md:pt-0 !leading-normal">"हॉर्सफायर के इस्तेमाल से उन पुरुषों में शामिल हो जाये जो बेहतर सेक्स लाइफ जीते है और अपनी महिला पार्टनर को संतुष्ट रखते है"</h1>

                    <div className="grid grid-cols-12 mx-0 mt-6 md:mt-12">
                        <div className="col-span-12 md:col-span-6 px-4 md:px-12">
                            <img src="/main/hfv_images/product4.webp" alt="pic" className="md:w-10/12 w-full min-h-[300px] max-h-[550px]" loading="lazy" />
                        </div>
                        <div className="col-span-12 md:col-span-6 mt-6 md:mt-0">
                            <img src="/main/hfv_images/sec7_dhamaka.png" alt="pic" className="w-full min-h-[300px] max-h-[400px]" loading="lazy" />

                            <h1 className="leading-normal md:text-[2rem] text-[#0f224d] text-justify font-bold text-2xl mt-6">जी हाँ, Summer "धमाका" Sale में ऑनलाइन पेमेंट पर प्रतिदिन 100 भाग्यशाली ग्राहकों को मिल रहा है हॉर्सफायर का पैक बिल्कुल फ्री! मौका हाथ से ना जाने दे फ्री  में हॉर्सफायर मंगाए। अगर आप भाग्यशाली हुए तो आपका भी पूरा पैसा आपके अकाउंट में ट्रांसफर कर दिया जायेगा !</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Section6;