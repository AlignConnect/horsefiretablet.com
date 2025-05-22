import { Noto_Serif_Devanagari } from 'next/font/google';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});




const Carouseljs = () => {
    return (
        <section className={noto.className}>

            <div className='bg-white px-2'>
                <h1 className='istemal text-center font-bold pt-5 pb-3'>जिन्होंने इस्तेमाल किया वे परिणाम से संतुष्ट है!</h1>


                <Carousel autoPlay infiniteLoop={true} interval={2000} showStatus={false}>

                    <div className='grid grid-cols-12 mx-auto items-center w-[100%] md:w-[75%]' >
                        <div className='md:col-span-4 col-span-12 my-4'>
                            <img src="/main/hfp_images/srk.png" alt="no" className='w-full' />
                        </div>

                        <div className='col-span-12 md:col-span-8'>
                            <h2 className='text-center sx-color font-bold'> &#10077;
                                सेक्स लम्बा चलता है
                                &#10078;  </h2>

                            <p className='italic cvs'>
                                मेरी गर्लफ्रेंड को मुझसे शिकायत रहती थी की मैं उसे संतुष्ट नहीं कर पाता हूँ। ये सच है की वो मूड में भी नहीं आती थी तब तक मेरा स्खलन हो जाता था। इस कमजोरी से मेरे कई ब्रेकअप हुए पर जब से Horse Fire इस्तेमाल किया हूँ मैं एक पोर्नस्टार की तरह प्रदर्शन करता हूँ। अब मेरी शादी हो चुकी है और में अपनी घरवाली को हर बार संतुष्ट करता हूँ।
                            </p>
                            <h5 className='text-end italic text-dark'>Dipak Shah, 28 Year</h5>
                        </div>
                    </div>



                    <div className='grid grid-cols-12 mx-auto items-center w-[100%] md:w-[75%]' >

                        <div className='md:col-span-4 col-span-12 my-4'>
                            <img src="/main/hfp_images/srkk.png" alt="no" className='w-100' />
                        </div>

                        <div className='col-span-12 md:col-span-8'>
                            <h2 className='text-center sx-color font-bold'> &#10077;
                                इरेक्शन में सुधार हुआ
                                &#10078;  </h2>

                            <p className='fst-italic cvs'>
                                परफॉरमेंस प्रेशर की वजह से सेक्स के समय मेरे लिंग में उचित इरेक्शन नहीं मिलता था। और शायद मुझे इस की कमजोरी थी क्योंकि हमेशा मेरे लिंग ढीला ही रहता था। धन्यवाद Horse Fire का जिसकी मदद से अब मुझे मजबूत इरेक्शन मिलती है और पतन के बाद भी कुछ ही देर में दोबारा इरेक्शन मिल जाती है। इतना ही नहीं लिंग की साइज में भी बृद्धि हो गयी है।
                            </p>
                            <h5 className='text-end fst-italic text-dark'>Shikhar Desai, 32 Year</h5>
                        </div>
                    </div>

                </Carousel>


                <div className='col-span-12'>

                    <div className='aaj-order-kare'>
                        <button className='' onClick={() => window.location.href = "#form"}>
                            आज ही ऑर्डर करे
                        </button>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Carouseljs;