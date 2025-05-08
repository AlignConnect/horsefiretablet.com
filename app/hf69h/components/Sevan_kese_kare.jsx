import React from 'react'

function Sevan_kese_kare() {


    const aese_kare_sevan = (arr) => {
        return arr?.map((e, key) => {
            return <div className='my-2 flex gap-1 ' key={key}>
                <span className="">{key + 1}.</span>
                {e.title}
            </div >
        })
    }

    return (
        <div className="bg-[#efefef]">
            <div className=' w-full max-w-6xl mx-auto'>

                <div className=' py-7'>
                    <div className="fontNoto text-3xl md:text-5xl text-center font-extrabold px-2  text-black md:!leading-normal">
                        <span className="text-[#d51515]">बेहतर लाभ </span>के लिए ऐसे करें सेवन
                    </div>
                    <div className="text-black text-justify fontNoto text-[1.2rem] md:text-xl py-2 px-2">
                        इसका इस्तेमाल बहुत ही सरल है। इसे सुबह और रात के भोजन पश्चात 1 टेबलेट 1 गिलास गुनगुने पानी/दूध के साथ लेना है। रिसर्च में पाया गया की इसकी प्रभावशीलता दूध के सेवन के साथ बढ़ रही है इसलिए बेहतर परिणाम के लिए हम दूध के साथ सेवन करनी की सलाह देते है।
                    </div>



                    <div className="max-w-5xl mx-auto py-5 md:py-10 border-dashed border-2 border-gray-300 bg-white rounded-lg">

                        <div className="grid md:grid-cols-2 items-center gap-5">

                            <div className="grid grid-cols-3 md:grid-cols-1 order-1 md:order-2 items-center w-3/4 sm:w-full mx-auto ">
                                <img src="/main/hf69h_images/product4.webp" alt="pic" className="w-[85%] md:w-[40%] col-span-2 mx-auto" loading="lazy" />
                                <div className="grid grid-cols-1 gap-2 md:hidden">
                                    <img src="/main/hf69h_images/Group2.png" alt="pic" className="w-full" loading="lazy" />
                                    <img src="/main/hf69h_images/Group3.png" alt="pic" className="w-full" loading="lazy" />
                                    <img src="/main/hf69h_images/Group1.png" alt="pic" className="w-full" loading="lazy" />

                                </div>
                            </div>
                            <div className="order-2 md:order-2">

                                <div className="">
                                    <div className="fontNoto text-[1.1rem] md:text-2xl my-3 px-2 font-semibold text-justify">
                                        {
                                            aese_kare_sevan([
                                                {
                                                    title: "सुबह-शाम 1 टेबलेट 1 गिलास गुनगुने दूध के साथ।"
                                                },
                                                {
                                                    title: "असर दिखने पर चाहे तो 24 घंटे में 1 गोली खाएं।"
                                                },
                                                {
                                                    title: "कम से कम 3 महीने का कोर्स तो अवश्य पूरा करें।"
                                                },
                                                {
                                                    title: "या फिर बेहतर सलाह के लिए एक्सपर्ट से संपर्क करें!"
                                                }
                                            ])
                                        }
                                    </div>
                                </div>

                                <div className="md:grid grid-cols-4 gap-2 mt-5 hidden">
                                    <img src="/main/hf69h_images/Group2.png" alt="pic" className="w-full" loading="lazy" />
                                    <img src="/main/hf69h_images/Group3.png" alt="pic" className="w-full" loading="lazy" />
                                    <img src="/main/hf69h_images/Group1.png" alt="pic" className="w-full" loading="lazy" />

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Sevan_kese_kare