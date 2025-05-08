import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Anubhav = () => {
    return (
        <section className={noto.className}>


            <div className='grid grid-cols-2 items-center'>

                <h1 className='text-red-700 font-black text-6xl py-3 text-center col-span-2' style={{ fontFamily: "fantasy" }}>Horse Fire</h1>

                <div className='col-span-2 md:col-span-1'>
                    <img src="/main/hf369a_images/procouple.webp" alt="df" className='w-full' />
                </div>

                <div className='col-span-2 md:col-span-1 text-black text-center w-[90%] mx-auto my-3'>
                    <h3 className='text-4xl font-bold'>हर टेबलेट में दिलाएं</h3>
                    <h4 className='text-5xl font-black'>अद्भुत अनुभव</h4>

                    <p className="text-start w-[90%] my-2 text-lg">
                        अगर आप शीघ्रपतन, लिंग में ढ़ीलापन, छोटा-टेढ़ा लिंग शरीर में सेक्स स्टैमिना की कमी या किसी भी यौन कमजोरी से परेशन है तो आपको एक बार Horse Fire टेबलेट अवश्य आजमाना चाहिए !
                    </p>
                </div>

            </div>


            <section className="bg-[url('/main/hf369a_images/mobile3.webp')]">

                <h1 className="text-3xl text-center w-[90%] md:w-[70%] mx-auto pt-[30px] pb-[10px] font-bold">

                    कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें

                </h1>

            </section>



        </section>
    )
}

export default Anubhav