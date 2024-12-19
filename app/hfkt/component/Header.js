import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});




function Header() {
    return (<section>
        <div className='relative'>
            <div className='relative min-[500px]'>
                <img
                    className='w-[100%] h-[100%] md:block hidden'
                    src={"/main/hfkt_images/winter_desk_img.jpg"}
                    alt='winter_desk_img'
                    fetchPriority='high'
                />
                <img
                    className='w-[100%] h-[100%] md:hidden block'
                    src={"/main/hfkt_images/winter_mobile_img.jpg"}
                    alt='winter_mobile_img'
                    fetchPriority='high'
                />
                <div className={`${poppins.className} 
                absolute top-12 md:top-52 text-center md:text-start md:left-44 w-full md:w-1/2 z-0 md:text-6xl text-2xl text-[#fccf04] font-extrabold md:leading-[5rem]`}
                    style={{ textShadow: "0.6px 2.7px 2px rgba(66, 68, 90, 1)" }}>
                    इस सर्दी सेक्स अवधि और लिंग<br /> बढ़ाकर लें सेक्स का असली मजा
                </div>
                <div className={`${poppins.className}  
                absolute  top-32 md:top-96 md:left-44 left-20 w-1/2 md:w-1/4
                 inline-block text-white md:text-3xl text-xl text-center font-semibold border-solid border-2 border-white rounded-lg py-1`}>
                    Know More
                </div>
            </div>

        </div>
        <div className='w-full max-w-6xl mx-auto py-2'>
            <p className='fontNoto text-[1.1rem] md:text-[1.4rem] text-justify px-1'>
                सर्दी का मजा तभी है जब ठिठुरती रात में आप अपनी बीवी को जिस्म की गर्मी देने में काबिल हो। ये सच है की सेक्स के लिए ठण्ड के मौसम को सबसे ज्यादा माकूल माना जाता है ऐसे में अगर पुरुष शीघ्रपतन, लिंग कमजोरी शारीरिक अक्षमता के शिकार हो तो सेक्स का मजा कैसे उठायें!! सेक्स कमजोरी सिर्फ ठंडी का मजा ख़राब नहीं करती बल्कि उम्र रहते लाइफ से रोमांस ख़त्म कर देती है। पति-पत्नी के रिश्ते बिगड़ने लगते है। हर साल अखबारों में लाखों मामले बाहरी अफेयर के छपते है जिनका कारण पति की यौन कमजोरी और पत्नी की असंतोष को माना जाता है।
            </p>
        </div>
    </section>
    )
}

export default Header;