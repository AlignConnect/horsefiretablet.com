import dynamic from 'next/dynamic';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FormRedirect = dynamic(() => import('./FormRedirect'), {
    loading: () => <p>load</p>
});

const Section3 = () => {

    const listproductBene = [
        {
            title: 'अश्वगंधा',
            image: '/main/hfrush_images/16.png',
            para: 'महानतम टेस्टोस्टेरोन और नाइट्रिक ऑक्साइड वर्धक'
        },
        {
            title: 'शिलाजीत',
            image: '/main/hfrush_images/17.png',
            para: 'नेचुरल वियाग्रा जो लिंग को कड़क और जोश बढ़ाए'
        },
        {
            title: 'केसर',
            image: '/main/hfrush_images/27.png',
            para: 'श्रेष्ठ शक्ति एवं ऊर्जा वर्धक जो बेड पर लम्बा टिकाये'
        },
        {
            title: 'सफ़ेद मूसली',
            image: '/main/hfrush_images/28.png',
            para: 'शीघ्रपतन एंव ढीले लिंग की समस्या में कारगर'
        },
        {
            title: 'गोखरू',
            image: '/main/hfrush_images/26.png',
            para: 'लिंग मजबूती, व कामोत्तेजना बढ़ाने में अत्यंत असरदार'
        },
        {
            title: 'अभ्रक भस्म',
            image: '/main/hfrush_images/25.png',
            para: 'सर्वोत्तम उत्तेजक एवं शक्तिवर्धक, लिंग की सख्ती बढाए'
        },
    ]

    var settings = {
        dots: false,
        speed: 1000,
        initialSlide: 0,
        infinite: true,
        className: "center",
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className=" w-full py-8 md:py-16 px-3 relative text-white">

            <div className="relative z-10">
                <div className=" max-w-6xl mx-auto  text-center">
                    <p className=" leading-snug">चिंता न करें आपकी सभी समस्याएं हो जाएँगी जड़ से गायब ! <span className="text-red-600 uppercase font-bold">Horse Fire Tablet</span> के इस्तेमाल से बस कुछ ही दिनों बढ़ जाएगी <span className="text-yellow-400"> आपकी मर्दानगी</span> और आप बन जायेंगे <span className="text-yellow-400"> बेस्ट परफ़ॉर्मर</span> !!</p>

                    <p className="text-[1.45rem] sm:text-4xl lg:text-6xl font-extrabold mt-7 sm:mt-10"><span className="text-red-600 uppercase">Horse Fire </span> में मिश्रित ट्रस्टेड हर्ब्स </p>
                    <p className="text-xl sm:text-3xl lg:text-[2.8rem] fontPoppins font-bold">100% Safe and <span className="text-yellow-400">Proven Ingedients</span>
                    </p>
                </div>


                <div className="border-y-2 border-white border-dashed my-7 sm:mt-10 sm:mb-14 ">
                    <div className="max-w-7xl mx-auto px-4 sm:px-5 pt-5 pb-3 sm:py-5  text-center sm:text-left">
                        <Slider {...settings} >
                            {
                                listproductBene.map((e, key) => {
                                    return <div className="!grid grid-cols-12 gap-1 sm:gap-5 items-center sm:px-10" key={key}>
                                        <div className="col-span-12 sm:col-span-4">
                                            <img src={e.image} alt="pic" width='100%' height='100%' className='w-1/2 sm:w-full mx-auto' loading='lazy' />
                                        </div>

                                        <div className="col-span-12 sm:col-span-8" >
                                            <p className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl mt-5 sm:mt-4 text-white font-extrabold">{e.title}</p>
                                            <p className="">{e.para}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </Slider>
                    </div>
                </div>
                <div className="sm:hidden">

               <FormRedirect/>
                </div>

                <div className="max-w-6xl mx-auto">
                    <p className="text-3xl text-center sm:text-4xl lg:text-6xl font-extrabold mt-7 sm:mt-10"><span className="text-yellow-400 uppercase">पार्टनर की ख़ुशी  </span> का रखें ख्याल </p>

                    <div className="grid sm:grid-cols-2 items-center gap-5 sm:gap-5">
                        <img src="/main/hfrush_images/18.png" alt="pic" className="" width='100%' height='100%' />
                        <div className="">
                            <p className=" uppercase text-2xl sm:text-3xl lg:text-[2.8rem] font-bold">
                                <span className="text-yellow-400">What</span>
                                <span className=" text-red-600"> expert thinks</span>
                            </p>
                            <p className="text-justify mt-3 leading-snug">
                            इंडियन इंस्टीट्यूट ऑफ सेक्सोलोजी, भुवनेश्वर के द्वारा किये गए कई सर्वे में पाया गया की <span className="text-yellow-400"> महिलाओं में सेक्स की इच्छा पुरुषों से प्रबल होती है।</span> इतना ही नहीं ज्यादात्तर महिलाये          
                                <span className="text-yellow-400">लम्बे और मोटे लिंग </span> की चाहत करती है तथा उनका स्खलन अवधि भी औसतन 20 मिनट का होता है। यानि की
                                <span className="text-yellow-400"> महिला पार्टनर</span> को चाहिए
                                <span className="text-yellow-400"> लम्बा सेक्स पर शीघ्रपतन से परेशान पुरुष </span> जल्दी स्खलित हो जाते है वही 
                                <span className="text-yellow-400"> इरेक्टाइल डिसफंक्शन</span> से पीड़ित
                                <span className="text-yellow-400"> पुरुष सेक्स</span> करने में और अपने
                                <span className="text-yellow-400"> महिला पार्टनर को यौन सुख देने में असमर्थ</span> होते है। इस वजह से 
                                <span className="text-yellow-400"> रिश्ते में कड़वाहट, तनाव व बेवफाई</span>
                                <span className="text-yellow-400"></span> जैसी गतिविधि भी होने लगती है। 
                                </p>
                        </div>
                    </div>

                </div>
                <FormRedirect/>
            </div>
            <img src="/main/hfrush_images/15.png" alt="img11" className="absolute top-0 left-0 h-full" width='100%' height='100%' />
        </div>
    )
}
export default Section3;