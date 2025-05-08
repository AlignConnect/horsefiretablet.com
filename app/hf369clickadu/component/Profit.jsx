import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const A = [

    { img: "/main/hf369a_images/z1.png", co: "1 टेबलेट दिन में 2 बार" },
    { img: "/main/hf369a_images/z1.png", co: "1 टेबलेट दिन में 2 बार" },
    { img: "/main/hf369a_images/z2.png", co: "गुनगुने पानी/ दूध के साथ" },
    { img: "/main/hf369a_images/z2.png", co: "गुनगुने पानी/ दूध के साथ" },
    { img: "/main/hf369a_images/z3.png", co: "रात भर जोरदार सेक्स" }

]


const Profit = () => {
    return (

        <section className={noto.className}>
            <section className="bg-[url('/main/hf369a_images/bg5large.webp')] py-3">

                <p className="rounded-lg bg-red-800 w-3/4 mx-auto font-bold text-xl text-center pt-2 px-3 pb-1">बेहतर लाभ के लिए ऐसे करें सेवन </p>

                <p className="text-black text-lg p-3">
                    इसका इस्तेमाल बहुत ही सरल है। इसे सुबह और रात के भोजन पश्चात 1 टेबलेट 1 गिलास गुनगुने पानी/दूध के साथ लेना है। रिसर्च में पाया गया की इसकी प्रभावशीलता दूध के सेवन के साथ बढ़ रही है इसलिए बेहतर परिणाम के लिए हम दूध के साथ सेवन करनी की सलाह देते है।
                </p>

                <section className="bg-[url('/main/hf369a_images/mobile3.webp')] flex items-center p-3 gap-2">
                    {
                        A.map((e, key) => {
                            return <div key={key} className="grow text-center pt-3">

                                {

                                    key === 1 ? <div className="text-xl mt-[-40px] md:mt-[-30px]">+</div> :
                                        key === 3 ? <div className="text-xl mt-[-40px] md:mt-[-30px]">=</div> :
                                            <div>
                                                <div className="">
                                                    <img src={e.img} alt={e.img} className="w-[80px] mx-auto" />
                                                </div>
                                                <p className="font-bold pt-4 text-base">{e.co}</p>
                                            </div>


                                }


                            </div>
                        })
                    }
                </section>

                <section>
                    <ul className="text-black text-lg p-3 w-[90%] list-disc mx-auto" >
                        <li>सुबह-शाम 1 टेबलेट 1 गिलास गुनगुने दूध के साथ।</li>
                        <li>असर दिखने पर चाहे तो 24 घंटे में 1 गोली खाएं।</li>
                        <li>कम से कम 3 महीने का कोर्स तो अवश्य पूरा करें।</li>
                        <li>या फिर बेहतर सलाह के लिए एक्सपर्ट से संपर्क करें !</li>
                    </ul>
                </section>


            </section>
        </section >
    )
}

export default Profit