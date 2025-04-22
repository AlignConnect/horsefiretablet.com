import { Khand, Noto_Serif_Devanagari } from 'next/font/google'

const khand = Khand({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700',]
});

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

function Header() {
    return (<div className={noto.className}>
        <div className="bg-gray-100">
            <div className="grid md:grid-cols-2 items-center md:py-6 py-5 w-full max-w-7xl mx-auto">
                <div className='text-center order-2 md:order-none'>
                    <div className={`${khand.className} text-[#fc2500] text-7xl md:text-9xl font-extrabold  pt-5 md:py-2`}
                        style={{ textShadow: "2px 1px 1px rgba(0, 0, 0, 0.62)" }}>
                        आखिरकार
                    </div>
                    <div className='text-[1.2rem] md:text-3xl py-2 font-semibold'>
                        मुझे सेक्स पावर बढ़ाने का असरदार दवा मिल ही गया!
                    </div>
                    <div className='text-[1.2rem] md:text-xl text-blue-700 font-bold'>
                        मजेदार सेक्स लाइफ चाहते है तो सिर्फ 5 मिनट दें, और इस पोस्ट को पूरा पढ़ें!
                    </div>
                </div>
                <div className='text-center mx-auto min-h-[350px]'>
                    <img className='w-80 md:w-96' src={"/main/hfu_images/akhirkar.webp"} fetchPriority='high'
                        alt='akhirkar' loading='lazy' />
                </div>
            </div>
        </div>



        <div className="bg-yellow-500">
            <div className='grid md:grid-cols-4 items-center py-5 w-full max-w-5xl mx-auto'>
                <div className=''>
                    <img className='hidden md:block w-[25%] md:w-32' src={"/main/hfu_images/rashika_profile.png"} alt='rashika_profile_image' loading='lazy' />
                </div>
                <div className='md:col-span-3'>
                    <div className='flex items-center md:block'>

                        <img className='md:hidden block w-[25%] md:w-32 z-[10] relative' src={"/main/hfu_images/rashika_profile.png"} alt='rashika_profile_image' loading='lazy' />
                        <div className={`${khand.className} -ml-3 md:ml-0 w-3/4 md:w-80 my-2 text-center col-span-2 bg-black text-white font-extrabold text-2xl md:text-3xl py-2`}>
                            दोस्तों, मैं हूँ रशिका
                        </div>
                    </div>
                    <p className='text-[1.2rem] md:text-2xl text-justify px-2 mt-3'>
                        29 साल की जवान लड़की 6 साल पहले मेरी शादी हुई थी पर मेरे हाथ सिर्फ निराशा ही लगी क्योंकि 8 साल बड़े मेरे पति सेक्स के खेल में  कमजोर मिले। मैं अपनी गदराई जवानी लेकर दिन-रात तड़पती रहती थी। उनके ढीले लिंग से कुछ नहीं हो पाता था अगर कभी कभार थोड़ी बहुत सख्ती मिल भी जाए तो 2-4 झटको में डिस्चार्ज हो जाते थे फिर चाहे हाथ से हिलाऊ या मुँह से चूसूं लिंग खड़ा नहीं होता था।
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header;