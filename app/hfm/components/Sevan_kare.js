import React from 'react'

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
                    <div className="text-xl fontNoto md:text-2xl font-semibold text-black">
                        {e.step_text}
                    </div>
                </div>
            </div>
        }
        )
    };

    return (
        <div>
            <div className="fontArya text-center text-4xl md:text-5xl font-extrabold pt-7">
                विशेष <span className="text-red-600">सुविधा</span>
            </div>
            <p className='text-black text-justify fontNoto text-[1.2rem] md:text-xl px-2 py-3'>
              कंपनी पुरुष स्वास्थ्य को प्राथमिकता देती है। समस्या जड़ से मिटाने के लिए एक्सपर्ट्स रोगी से जानकारी लेते है और उनके उम्र, लम्बाई और वजन का आंकलन कर के स्पेशल दवा तैयार करते है जो 100% गारन्टी के साथ असर करता है।
            </p>
            <div className="fontArya text-center text-4xl md:text-5xl font-extrabold pt-7">
                ऐसे करें <span className="text-red-600">सेवन</span>
            </div>

            <div className="grid md:grid-cols-2 items-center gap-4 my-3 py-3 text-justify px-2">
                {
                    Sevan_vidhi_steps([
                        {
                            step_image: "/main/hfm_images/milk.png",
                            step_text: "सुबह-शाम 1 टेबलेट 1 गिलास गुनगुने दूध के साथ।"
                        },
                        {
                            step_image: "/main/hfm_images/watch.png",
                            step_text: "असर दिखने पर चाहे तो 24 घंटे में 1 गोली खाएं।"
                        },
                        {
                            step_image: "/main/hfm_images/calender.png",
                            step_text: "कम से कम 3 महीने का कोर्स तो अवश्य पूरा करें।"
                        },
                        {
                            step_image: "/main/hfm_images/expert.png",
                            step_text: "या फिर बेहतर सलाह के लिए एक्सपर्ट से संपर्क करें !"
                        }
                    ])
                }
            </div>

        </div>
    )
}

export default Sevan_kare