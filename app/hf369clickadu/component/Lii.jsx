import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Lii = () => {

    const A = [

        { img: "/main/hf369a_images/f1.png", co: "मजबूत लिंग" },
        { img: "/main/hf369a_images/f2.png", co: "लम्बी अवधि" },
        { img: "/main/hf369a_images/f3.png", co: "ज्यादा ऑर्गेज़्म" }

    ]

    return (

        <section className={noto.className}>
          



            <section className="bg-[url('/main/hf369a_images/mobile3.webp')] flex items-center p-3">
                    {
                        A.map((e, key) => {
                            return <div key={key} className="grow text-center py-3">
                                <div className="">
                                    <img src={e.img} alt={e.img} className="w-[80px] mx-auto" />
                                </div>
                                <p className="font-bold pt-4 text-lg">{e.co}</p>
                            </div>
                        })
                    }
                </section>

            <section className="min-h-[320px] md:min-h-[250px]">

                <div className='relative bg-[url("/main/hf369a_images/brush.png")] h-28 bg-no-repeat min-w-[320px] bg-center my-3'>

                    <div className='relative w-[320px] mx-auto transform translate-y-7 flex items-center gap-2 my-3 min-h-[70px]'>
                        <div className='text-white font-bold text-center text-2xl px-5 absolute'>"हॉर्सफायर का अटूट वादा, फायदा हमेशा ज्यादा"</div>
                    </div>

                    <p className="text-black pt-9 px-2 text-lg">
                        Horse Fire Tablet भारत का श्रेष्ठ सेक्सुअल वेलनेस प्रोडक्ट है। भारतीय पुरुष इसके इस्तेमाल से लिंग आकार, सेक्स स्टैमिना और सेक्स अवधि बढ़ाकर यौन अनुभव बेहतर बना रहे है। Horse Fire Tablet कस्टमर सटिस्फैक्शन पर कार्य करता है। इसके निर्माण पश्चात तमाम लैब रीसर्च इसे सिद्ध करते है और पुरुष इसके लाभ से संतुष्ट होते है।
                    </p>

                </div>

            </section>

            <div className="w-full">
                <img src="/main/hf369a_images/fullimg.webp" alt="noddf" className="w-full" />
            </div>

        </section>

    )
}

export default Lii