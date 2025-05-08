import { Poppins } from 'next/font/google';
import Image from 'next/image';

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700',]
});

const Section3 = () => {
    return (
        <div className={`w-full `}>
            <div className={`relative `}>
                <div className="relative z-[10] font-semibold text-center text-2xl md:text-3xl text-white py-2 md:py-5 ">
                    <p className="text-[yellow]">FREE DELIVERY</p>
                    <p className="">ALL OVER INDIA</p>
                </div>
                <div className='absolute w-full h-full top-0 left-0'>
                    <Image
                        src={"/main/hflip_images/line.jpg"}
                        fill
                        style={{
                            height: "100%",
                            width: "100%"
                        }}
                        loading='lazy'
                        alt='pic'
                    />
                </div>
            </div>

            <div className="text-black bg-[#efefef]">
                <div className="relative ">
                    <div className="relative z-[10] py-5 md:py-10 ">
                        <div className="max-w-6xl mx-auto px-3 ">

                            <div className="grid md:grid-cols-4 gap-0 md:gap-10 items-center">
                                <div className="md:col-span-2  ">
                                    <h2 className={`${poppins.className} font-bold text-[red] text-2xl md:text-4xl text-center !italic `}>केमिकल वाली गोलियों से बचें</h2>
                                    <p className="text-[1.1rem] md:text-2xl md:mt-10 mt-3 text-justify">अभी तक सैकड़ो डॉक्टर और यौन हेल्थ विशेषज्ञों ने पुरुषों को केमिकल वाली गोलियों से बचने का निर्देश दिया है। केमिकलयुक्त दवाये किडनी, लिवर, हार्ट और पेट की तमाम गंभीर समस्याओं को उपन्न करती है। इनके बड़े दुष्प्रभाव होते है, वही नेचुरल जड़ीबूटियों को जवानी से लेकर बुढ़ापे तक इस्तेमाल कर सकते है और कोई दुष्प्रभाव देखने को नहीं मिलेगा।</p>
                                </div>
                                <div className="md:col-span-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className='md:absolute w-full bg-[#efefef] h-full md:h-full top-0 right-0 py-36 md:py-60'>
                        <Image
                            src={"/main/hflip_images/medicineweb.jpg"}
                            fill
                            style={{
                                height: "100%",
                                width: "100%"
                            }}
                            className='hidden md:block'
                            loading='lazy'
                            alt='pic'
                        />
                        <Image
                            src={"/main/hflip_images/medicinemob.jpg"}
                            fill
                            className='md:hidden block'
                            loading='lazy'
                            alt='pic'
                        />
                    </div>
                </div>
            </div>

            <div className="italic font-extrabold text-xl px-3 text-justify md:text-2xl mt-5 md:mt-40 max-w-6xl mx-auto">"जिन जड़ीबूटियों को अमेरिकन और अफ्रीकन इस्तेमाल करते है उनकी सबसे बेहतरीन क्वालिटी भारत में पायी जाती है। भारत में सदियों से प्राकृतिक जड़ीबूटियों को उपचार के रूप में लिया गया है। परन्तु 2020 के दशक में जब पूरा विश्व एक महामारी से ग्रसित था तब ये प्रचलन में आयी थी। इनके इस्तेमाल से करोङों जीवन बचाये गए और तभी से आयुर्वेद पर पर भारतीय लोगों का भरोसा बढ़ गया।"</div>
        </div>
    )
}
export default Section3;