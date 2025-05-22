import dynamic from 'next/dynamic';
import { Khand, Noto_Serif_Devanagari } from 'next/font/google'

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const khand = Khand({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700',]
});

const Sevan_vidhi_steps = (arr) => {
    return arr?.map((e, key) => {
        return <div key={key}>
            <div className="px-2 ">
                <img className='md:w-24 w-20 mx-auto' src={e.step_image} alt='sevan_vishi_steps_image' loading='lazy' />
                <div className="text-md md:text-xl font-semibold text-white text-center py-3">
                    {e.step_text}
                </div>
            </div>
        </div>
    }
    )
};

const tablet_benefits = (arr) => {
    return arr?.map((e, key) => {
        return <div key={key}>
            <div className=''>
                <img className='mx-auto w-96' src={e.benefit_image} alt='benefits_image' loading='lazy' />
            </div>
            <div className="text-md md:text-xl text-center py-2 font-semibold text-black">
                {e.benefit_title}
            </div>
        </div>
    }
    )
};


function Sevan_kare() {
    return (<div className={noto.className}>
        <div className="bg-black">
            <div className="w-full max-w-5xl mx-auto ">
                <div className={`${khand.className} text-[#fffa00] font-extrabold text-center text-4xl md:text-6xl py-5`}>
                    ऐसे करें सेवन-
                </div>

                <div className="grid md:grid-cols-4 grid-cols-2 items-center gap-4 py-5">
                    {
                        Sevan_vidhi_steps([
                            {
                                step_image: "/main/hfu_images/milk.png",
                                step_text: "सुबह-शाम 1 टेबलेट 1 गिलास गुनगुने दूध के साथ।"
                            },
                            {
                                step_image: "/main/hfu_images/watch.png",
                                step_text: "असर दिखने पर चाहे तो 24 घंटे में 1 गोली खाएं।"
                            },
                            {
                                step_image: "/main/hfu_images/calender.png",
                                step_text: "कम से कम 3 महीने का कोर्स तो अवश्य पूरा करें।"
                            },
                            {
                                step_image: "/main/hfu_images/expert.png",
                                step_text: "या फिर बेहतर सलाह के लिए उनके एक्सपर्ट से संपर्क करें !"
                            }
                        ])
                    }
                </div>
            </div>
        </div>
        <div className='bg-gray-100'>
            <div className='w-full max-w-5xl mx-auto py-5'>
                <div className='grid md:grid-cols-2 items-center'>
                    <div className='order-2 md:order-none'>
                        <div className={`${khand.className} bg-[#ac1618] text-white font-extrabold text-center text-5xl md:text-6xl pt-1`}
                            style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}>
                            HORSE FIRE
                        </div>
                        <div className='text-black font-extrabold text-center text-2xl md:text-4xl pt-3'>से होने वाले लाभ</div>
                    </div>

                    <div className='mx-auto'>
                        <img className='w-2/3 mx-auto' src={"/main/hfu_images/horsefire.webp"}
                            alt='horsefire' loading='lazy' />
                    </div>
                </div>

                <div className="grid grid-cols-2 items-center gap-2 py-3">
                    {
                        tablet_benefits([
                            {
                                benefit_image: "/main/hfu_images/Group8.jpg",
                                benefit_title: "15 दिनों के अंदर सेक्स अवधि में 10x वृद्धि"
                            },
                            {
                                benefit_image: "/main/hfu_images/Group9.jpg",
                                benefit_title: "लिंग के लम्बाई और मोटाई में वृद्धि"
                            },
                            {
                                benefit_image: "/main/hfu_images/Group10.jpg",
                                benefit_title: "जोश, शक्ति और स्टैमिना मे अद्भुत वृद्धि"
                            },
                            {
                                benefit_image: "/main/hfu_images/Group11.jpg",
                                benefit_title: "कामेच्छा में वृद्धि, अन्य गुप्त रोग जड़ से हल"
                            }
                        ])
                    }
                </div>


            </div>
            <FlipAmazon />
        </div>
    </div >
    )
}

export default Sevan_kare;