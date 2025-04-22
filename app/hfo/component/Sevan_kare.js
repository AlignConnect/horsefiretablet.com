import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


function Sevan_kare() {

    const Sevan_vidhi_steps = (arr) => {
        return arr?.map((e, key) => {
            return <div className="" key={key}>
                <div className="flex items-center justify-center gap-2 ">
                    <img
                        className='md:w-24 w-20 min-h-16 max-h-24'
                        src={e.step_image}
                        alt='sevan_vishi_steps_image'
                        loading="lazy"
                    />
                    <div className="text-xl md:text-2xl font-semibold text-black">
                        {e.step_text}
                    </div>
                </div>
            </div>
        }
        )
    };

    const tablet_benefits = (arr) => {
        return arr?.map((e, key) => {
            return <div className="" key={key}>
                <div className="flex items-center gap-2 py-3">
                    <img
                        className='w-10 min-h-8 max-h-12'
                        src={e.benefit_image}
                        alt='benefits_image'
                        loading="lazy"
                    />

                    <div className="text-xl md:text-2xl font-semibold text-black">
                        {e.benefit_title}
                    </div>
                </div>
            </div>
        }
        )
    };

    return (
        <div className={noto.className}>
            <div className="w-full max-w-4xl mx-auto px-1 md:px-0 py-3">
                <div className="text-center text-4xl md:text-5xl font-extrabold py-4">
                    ऐसे करें <span className="text-red-800">सेवन-</span>
                </div>

                <div className="grid md:grid-cols-2 items-center gap-4 my-3">
                    {
                        Sevan_vidhi_steps([
                            {
                                step_image: "/main/hfo_images/milk.png",
                                step_text: "सुबह-शाम 1 टेबलेट 1 गिलास गुनगुने दूध के साथ।"
                            },
                            {
                                step_image: "/main/hfo_images/watch.png",
                                step_text: "असर दिखने पर चाहे तो 24 घंटे में 1 गोली खाएं।"
                            },
                            {
                                step_image: "/main/hfo_images/calender.png",
                                step_text: "कम से कम 3 महीने का कोर्स तो अवश्य पूरा करें।"
                            },
                            {
                                step_image: "/main/hfo_images/expert.png",
                                step_text: "या फिर बेहतर सलाह के लिए उनके एक्सपर्ट से संपर्क करें !"
                            }
                        ])
                    }
                </div>

                <div className="grid md:grid-cols-2 items-center gap-2 md:py-10">
                    <div className="hidden md:block">
                        <img
                            className='w-[400px] mx-auto min-h-60 max-h-[400px]'
                            // src="/main/hfo_images/hft_product.png"
                            src="/main/hfo_images/amaflip.webp"
                            alt='hft_product'
                            loading="lazy"
                        />
                    </div>

                    <div className="block md:hidden">
                        <img
                            className='w-80 mx-auto min-h-60 max-h-96'
                            src="/main/hfo_images/hft_product.webp"
                            alt='hft_product'
                            loading="lazy"
                        />
                    </div>

                    <div>
                        <div className="font-extrabold text-4xl md:text-5xl ">
                            <span className="text-red-700">Horse Fire</span> से होने वाले लाभ
                        </div>
                        <div>
                            {
                                tablet_benefits([
                                    {
                                        benefit_image: "/main/hfo_images/timing.png",
                                        benefit_title: "15 दिनों के अंदर सेक्स अवधि में 10x वृद्धि"
                                    },
                                    {
                                        benefit_image: "/main/hfo_images/growth.png",
                                        benefit_title: "लिंग के लम्बाई और मोटाई में वृद्धि"
                                    },
                                    {
                                        benefit_image: "/main/hfo_images/energy.png",
                                        benefit_title: "जोश, शक्ति और स्टैमिना मे अद्भुत वृद्धि"
                                    },
                                    {
                                        benefit_image: "/main/hfo_images/position.png",
                                        benefit_title: "कामेच्छा में वृद्धि, अन्य गुप्त रोग जड़ से हल"
                                    }
                                ])
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sevan_kare;