import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const FlipAmazon = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'), {
    loading: () => <p>loader</p>
})

const Paraimage = () => {
    return (
        <section className={`${noto.className} w-full bg-[#0d0d0d]`}>
            <div className="w-full md:w-[70rem] mx-auto py-6">
                <p className="px-3 text-white text-xl">
                    शीघ्रपतन, छोटे और ढीले लिंग वाले पुरुष उस तरह का सेक्स नहीं कर पाते है जैसा एक लड़की अपने बॉयफ्रेंड या पति से उम्मीद है। एक सर्वे के अनुसार ज्यादातर के उत्तेजित होने से पहले उनके पुरुष पार्टनर डिस्चार्ज हो जाते है। यानि की महिला पार्टनर को "गरम करके ठंडा ही छोड़ देते है" ये हर दूसरे भारतीय पुरुष की समस्या है। जबकि हर महिला एक गबरु मर्द ढूंढती है।
                </p>
                <FlipAmazon />

                <div className="w-[95%] md:w-[80%] my-[30px] mx-auto p-[10px] md:p-[40px] my-[40px] border grid grid-cols-2 items-center">
                    <div className="col-span-2 md:col-span-1">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/af817ca8-61bb-42a2-3d97-d41616954100/public" alt="asdasd" loading="lazy" className="min-h-[400px]" />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <p className="text-2xl md:text-4xl font-bold text-white py-3 leading-[30px] md:leading-[60px]">
                            "महिलाएं ऐसे पुरुष को पसंद करती है जिनका <span className="text-yellow-600">लिंग फौलादी</span> और सेक्स टाइमिंग उनको संतुष्ट करने योग्य हो!
                        </p>
                    </div>
                </div>


                <section className="grid grid-cols-2 items-center">

                    <div className="font-semibold w-full md:w-[70%] ms-auto text-4xl col-span-2 md:col-span-1 px-3">

                        <p className="text-yellow-500 leading-[50px] md:pb-5">अब मोटे और फौलादी लिंग के साथ देर तक सेक्स</p>
                        <p className="text-white leading-[50px]">एकदम आसान है, बस इसे आजमाए और कमाल देखें!</p>


                        <div className="my-[40px] text-center">
                            <a href="#form" className="bg-[#ff0000] text-white pt-4 pb-2 px-[50px] text-xl rounded-full">

                                ORDER NOW

                            </a>
                        </div>

                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2522bc33-6e67-4d8e-036c-7ef1a2726e00/public" alt="ddf" loading="lazy" className="w-[70%] min-h-[300px] md:w-[60%] mx-auto" />
                    </div>

                </section>



            </div>
        </section>
    )
}

export default Paraimage;