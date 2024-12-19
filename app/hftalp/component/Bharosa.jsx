import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const FormdataEvent = dynamic(() => import('./Formdata'), {
    loading: () => <p>Load</p>
})

const FlipAmazon = dynamic(() => import('@/app/commonUse/AmaFlipDialog/FlipAmazon'), {
    loading: () => <p>Load</p>
})

const Bharosa = () => {
    return (
        <section className={noto.className}>
            <section className="bg-[url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6d93cb36-37aa-4e9a-8350-ea3501d2b100/public')]">

                <div className="w-full md:w-[50%] mx-auto flex flex-col md:flex-row items-end py-5">

                    <div className="w-[45%] mx-auto md:mx-0">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ae190326-ab20-44ab-d761-a3c6860adc00/public" alt="asdasd" loading="lazy" className="w-[250px] min-h-[350px] mx-auto" />
                    </div>

                    <div className="w-full md:w-[55%] text-start px-2">

                        <h1 className="bg-[#dd2e2b] text-white text-4xl md:text-6xl text-center md:text-start font-bold px-4 pt-6 pb-2 my-5">भरोसे की वजह</h1>

                        <div className="bg-[#daba3f] my-3">
                            <ul className="text-xl md:text-3xl p-5 font-semibold">
                                <li className="py-2 flex items-center gap-5"> <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/75730c5a-e9e4-462f-0a55-c2994eebaa00/public" loading="lazy" width={50} className="w-[30px] h-[25px] md:w-[50px]" /> <span className="pt-4"> Amazon तथा Flipkart जैसी विश्वसनीय प्लेटफार्म पर उपलब्ध      </span></li>
                                <li className="py-2 flex items-center gap-5"> <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/75730c5a-e9e4-462f-0a55-c2994eebaa00/public" loading="lazy" width={50} className="w-[30px] h-[25px] md:w-[50px]" /> <span className="pt-4"> T&C के साथ 10 दिनों की मनी बैक गारंटी सुविधा उपलब्ध</span> </li>
                                <li className="py-2 flex items-center gap-5"> <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/75730c5a-e9e4-462f-0a55-c2994eebaa00/public" loading="lazy" width={50} className="w-[30px] h-[25px] md:w-[50px]" /> <span className="pt-4"> 1 कॉल में प्रोडक्ट बुकिंग, फ़ास्ट डिलीवरी व COD उपलब्ध    </span> </li>
                                <li className="py-2 flex items-center gap-5"> <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/75730c5a-e9e4-462f-0a55-c2994eebaa00/public" loading="lazy" width={50} className="w-[30px] h-[25px] md:w-[50px]" /> <span className="pt-4"> ऑफिसियल वेबसाइट के साथ भारत का श्रेष्ठ यौन वर्धक विक्रेता  </span>  </li>
                            </ul>
                        </div>

                    </div>

                </div>

            </section>

            <FlipAmazon />

            <section className="bg-[url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/47775776-3a1b-4341-0356-484b1f39de00/public')] bg-no-repeat bg-center bg-cover w-full">
                <section className="w-full md:w-[70%] mx-auto">

                    <div className="text-center md:py-[30px]">
                        <h1 className="text-5xl font-bold py-5 text-[#f3c82c]">बेहतर सेक्स लाइफ के लिए बस ये करें</h1>

                        <p className="text-2xl md:text-3xl text-white w-full px-2 text-start md:w-[75%] mx-auto md:leading-[45px]">
                            पहला कदम बढाए और निचे दिया फॉर्म भरें !! सेक्सुअल हेल्थ एक्सपर्ट आपको कॉल कर समस्या जानेंगे और कस्टमाइज्ड दवा बनाएंगे। कस्टमाइज्ड पैक के उपयोग से लाखों पुरुष को वो सेक्स पावर मिला है जो वो चाहते थे। बस एक बार खाकर देखें हमारा गारंटी है की आपकी पार्टनर आपके फौलादी लिंग और जोरदार सेक्स टाइमिंग की दीवानी बन जाएगी !!
                        </p>

                        <div className="w-full py-5">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2d44fd54-8a5e-41f4-0143-5016e9cb3d00/public" alt="fdsfsdf" loading="lazy" className="mx-auto min-h-[250px]" />
                        </div>

                        <h1 className="text-2xl md:text-5xl text-[#51a2e2] mx-auto my-5 font-semibold">समय व्यर्थ न करें ! जोरदार सेक्स लाइफ <br /> की तरफ आज ही पहला कदम बढ़ाएं</h1>

                    </div>

                </section>

                <section>


                    <FormdataEvent />

                </section>


            </section>

        </section>
    )
}

export default Bharosa