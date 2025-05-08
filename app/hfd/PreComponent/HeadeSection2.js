import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const HeadeSection2 = () => {
    return (

        <div className={`${noto.className} transform md:translate-x-[-50%] md:translate-y-[-50%] md:left-1/2 md:top-[45%] md:absolute md:w-[85%] translate-x-[0%] translate-y-[0%] left-0 top-0 relative w-full mx-auto my-0 md:px-4  px-0 order-2 md:order-3`}>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center ">
                <div className={`bg-[#21cdc1] md:p-6 md:pt-12 p-2 pt-5`} >
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="min-h-[80px]">
                            <img src='/main/hfv_images/sec1_icon1.webp' alt="pic" className="w-10/12 md:w-full mx-auto" loading='lazy' />
                        </div>
                        <div className="w-[90%] md:w-fit">
                            <h1 className="md:text-4xl text-[1.7rem] text-white font-bold md:mb-2">इंडिया' #1 टाइमिंग बूस्टर</h1>
                            <h3 className="md:text-3xl text-[1.3rem] text-white">यह इंडिया का नंबर वन सेक्स टाइम बढ़ाने वाला प्रोडक्ट है</h3>
                        </div>
                    </div>
                </div>
                <div className={`bg-[#3851a3]  md:p-6 md:pt-12 p-2 pt-5`} >
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="min-h-[80px]">
                            <img src='/main/hfv_images/sec1_icon2.webp' alt="pic" className="w-10/12 md:w-full mx-auto" loading='lazy' />

                        </div>
                        <div className="w-[90%] md:w-fit">
                            <h1 className="md:text-4xl text-[1.7rem] text-white font-bold md:mb-2">प्रमाणित लिंग वर्धक</h1>
                            <h3 className="md:text-3xl text-[1.3rem] text-white">यह साइंटिफिकली लिंग बढ़ाने में सिद्ध है।</h3>
                        </div>
                    </div>
                </div>
                <div className={`bg-[rgb(18,23,68)]  md:p-6 md:pt-12 p-2 pt-5`} >
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="min-h-[80px]">
                            <img src='/main/hfv_images/sec1_icon3.webp' alt="pic" className="w-10/12 md:w-full mx-auto" loading='lazy' />

                        </div>
                        <div className="w-[90%] md:w-fit">
                            <h1 className="md:text-4xl text-[1.7rem] text-white font-bold md:mb-2">कामोन्माद की गारंटी</h1>
                            <h3 className="md:text-3xl text-[1.3rem] text-white">यह आपकी सेक्स इच्छा में बढ़ोतरी करता है।</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadeSection2;