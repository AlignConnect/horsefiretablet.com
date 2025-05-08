import dynamic from 'next/dynamic';
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

const FlipAmazon = dynamic(() => {
    return import('./FlipAmazon')
}, {
    loading: () => <p>loader</p>
})

function Order_kiya() {
    return (<div className={noto.className}>
        <div className='bg-white'>
            <div className='w-full max-w-5xl mx-auto py-3 '>
                <div className={`${khand.className} text-[#ac1618] font-extrabold text-center text-4xl md:text-6xl py-5`}>
                    मैंने तुरंत आर्डर किया..
                </div>

                <p className='text-[1.2rem] md:text-2xl text-justify px-2'>
                    मैंने ख़ुशी से उछल पड़ी आखिर वो दिन आने वाला था जो मैं चाहती थी। बिना देर किये मैंने तुरंत सर्च करके Horse Fire Tablet आर्डर कर दिया। यह कंपनी ले ऑफिसियल साइट के आलावा Amazon, Flipkart, पर भी उपलब्ध है। ये देख कर मेरा विश्वास और भी ज्यादा बढ़ गया की ट्रस्टेड वेबसाइट्स पर लिस्टेड है।
                </p>
            </div>
        </div>

        <div className='bg-black'>
            <div className='w-full max-w-5xl mx-auto '>
                <img className='w-full md:block hidden' src={"/main/hfu_images/4bar_web.webp"}
                    alt='4bar_web' loading='lazy' />

                <img className='w-full block md:hidden' src={"/main/hfu_images/4bar_mob.jpg"}
                    alt='4bar_mob' loading='lazy' />
            </div>
        </div>

        <FlipAmazon />


        <div className='bg-white'>
            <div className='w-full max-w-5xl mx-auto py-3 '>
                <p className='text-[1.2rem] md:text-2xl text-justify px-2 py-2'>
                    4 दिन के अंदर प्रोडक्ट डिलीवर हो गया। एक्सपर्ट के बताये तरीके से सेवन करने लगे मात्र एक सप्ताह में रिजल्ट देख मैं चौक गयी। उनका लिंग बहुत कठोर हो गया था। लिंग का उभार साफ दिख रहा था की बहुत दिनों बाद सेक्स के लिए बेताब है। मैं भी बेचैन थी परिमाण देखने के लिए, फिर हमने सेक्स किया पहली बार हमारा सेक्स नॉनस्टॉप 15 मिनट से ज्यादा चला था वो भी मात्र एक सप्ताह में। मैं अंदर ही अंदर संतुष्टि महसूस कर रही थी।
                </p>

                <p className='text-[1.2rem] md:text-2xl text-justify px-2 py-2'>
                    मेरे पति भी इस अविश्वसनीय प्रभाव से हैरान थे। मात्र 15 दिनों में उनका लिंग लम्बा और मोटा भी दिखने लगा था, सेक्स अवधि में भी जोरदार वृद्धि हो गयी। अगले सेक्स में उन्होंने मुझे 4 बार झाड़ दिए। अब उनका लिंग मजबूत हो गया है। हर शॉट में मेरी चीख निकल जाती है पर मुझे वो मजा मिलता है जो मैं हमेशा से चाहती थी।
                </p>
                <div className='grid md:grid-cols-2 items-center'>
                    <div className='mx-auto'>
                        <img className='w-2/3 mx-auto' src={"/main/hfu_images/horsefire.webp"}
                            alt='horsefire' loading='lazy' />
                    </div>
                    <div className={`${khand.className} font-extrabold text-center text-5xl md:text-8xl`}>
                        सेक्स लाइफ<br /><span className='text-[#ac1618] '>को एन्जॉय करें</span>
                    </div>
                </div>

                <p className='text-[1.2rem] md:text-2xl text-justify px-2 py-2'>
                    मैं उन लड़कियों में से हूँ जो लाइफ को इंजॉय करना चाहती है न की काटना ! अगर कोई भी पुरुष जल्दी डिस्चार्ज हो जाता है, लिंग में दम नहीं है तो उसे Horse Fire Tablet अवश्य आजमानी चाहिए !
                </p>
            </div>

        </div>
        <FlipAmazon />


    </div>

    )
}

export default Order_kiya;