import { Alkatra } from 'next/font/google';
import { Noto_Serif_Devanagari } from "next/font/google";

const alkatra = Alkatra({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700']
});


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



function Turant_order() {
    return (
        <div className={noto.className}>
            <div className="w-full max-w-4xl mx-auto px-1 md:px-0">
                <div className='md:grid grid-cols-2 items-center md:py-4 py-2'>
                    <div>
                        <img
                            className='w-52 md:w-80 min-h-[300px] max-h-[600px] mx-auto'
                            src={"/main/hfo_images/niks_indian_hft.webp"}
                            alt='niks_indian_hft'
                            loading='lazy'
                        />
                        <div className={`${alkatra.className} text-2xl md:text-3xl text-center text-white pt-2 bg-black rounded-lg`}>
                            आपकी यौन समस्या का 100% गारंटीड इलाज, अभी ऑर्डर करें !
                        </div>
                    </div>
                    <div className='pt-5 md:py-0'>
                        <div className='md:text-5xl text-4xl font-extrabold'>
                            मैंने तुरंत ऑर्डर किया..
                        </div>
                        <p className='text-md md:text-xl text-justify md:py-2'>
                            मैं ख़ुशी से उछल पड़ी आखिर वो दिन आने वाला था जो मैं चाहती थी। बिना देर किये मैंने तुरंत सर्च करके Horse Fire Tablet ऑर्डर कर दिया। यह कंपनी ऑफिसियल साइट के अलावा Amazon, Flipkart पर भी उपलब्ध है। ये देख कर मेरा विश्वास और भी ज्यादा बढ़ गया की ट्रस्टेड वेबसाइट्स पर लिस्टेड है।
                        </p>

                        <div className='block md:hidden'>
                            <img src='/main/hfo_images/amaflip.webp' loading='lazy' className='w-[400px] min-h-[300px]' />
                        </div>

                    </div>
                </div>

                <div className='grid md:grid-cols-2 items-center md:py-10 my-0'>
                    <div className='order-2 md:order-1'>
                        <p className='text-md md:text-xl text-justify'>
                            4 दिन के अंदर प्रोडक्ट डिलीवर हो गया। एक्सपर्ट के बताये तरीके से सेवन करने लगे मात्र एक सप्ताह में रिजल्ट देख मैं चौक गयी। उनका लिंग बहुत कठोर हो गया था। लिंग का उभार साफ दिख रहा था की बहुत दिनों बाद सेक्स के लिए बेताब है। मैं भी बेचैन थी परिमाण देखने के लिए, फिर हमने सेक्स किया पहली बार हमारा सेक्स नॉनस्टॉप 15 मिनट से ज्यादा चला था वो भी मात्र एक सप्ताह में। मैं अंदर ही अंदर संतुष्टि महसूस कर रही थी।
                        </p>


                        <img
                            className='w-80 block md:hidden mx-auto min-h-[200px] max-h-[400px]'
                            src={"/main/hfo_images/sex_position.jpg"}
                            alt='sex_position'
                            loading='lazy'
                        />

                        <p className='text-md md:text-xl text-justify  md:py-2 py-0 pt-3'>
                            मेरे पति भी इस अविश्वसनीय प्रभाव से हैरान थे। मात्र 15 दिनों में उनका लिंग लम्बा और मोटा भी दिखने लगा था, सेक्स अवधि में भी जोरदार वृद्धि हो गयी। अगले सेक्स में उन्होंने मुझे 4 बार झाड़ दिए। अब उनका लिंग मजबूत हो गया है। हर शॉट में मेरी चीख निकल जाती है पर मुझे वो मजा मिलता है जो मैं हमेशा से चाहती थी।
                        </p>
                    </div>
                    <div className='order-1 md:order-2'>
                        <div className='flex gap-3 py-3 '>
                            <div className={`${alkatra.className} text-end text-3xl md:text-7xl font-extrabold !leading-tight`}>
                                पति ने रात भर में 4 बार पानी निकाला
                            </div>
                            <div className="border-r-8 border-red-500 h-[4rem] md:h-14 md:mt-4 ">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Turant_order