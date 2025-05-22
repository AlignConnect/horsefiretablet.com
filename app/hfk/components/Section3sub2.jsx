import dynamic from 'next/dynamic';

const Ordernow = dynamic(() => import('./Ordernow'), {
    loading: () => <p>load</p>
});

const Section3sub2 = () => {

    const yourBene = [{
        image: '/main/hfk_images/testo.png',
        title: 'टेस्टोस्टेरोन बढ़ाये',
        para: 'टेस्टोस्टेरोन लेवल बढ़ाता है जिससे शरीर में एनर्जी, स्टैमिना और लिंग में कड़कपन बढ़ जाता है।',
    },
    {
        image: '/main/hfk_images/sperm_counts.png',
        title: 'स्पर्म काउंट बढ़ाये',
        para: 'पुरुषों में स्पर्म काउंट बढ़ाता है यानि की नैचुरली शुक्राणुओं की संख्या में सुधार करता है।',
    },
    {
        image: '/main/hfk_images/josh.png',
        title: 'जोश जगाये',
        para: 'गोली खाने के कुछ ही देर में पुरुष जोशीले और उत्तेजित होकर सेक्स के लिए तैयार हो जाते है।',
    },
    {
        image: '/main/hfk_images/ling.png',
        title: 'लिंग साइज बढ़ाये  ',
        para: 'लिंग की नसों को मजबूत करता है व तंग चमड़ी को ग्रो कर साइज में सुधार करता है।',
    },
    {
        image: '/main/hfk_images/timing.png',
        title: 'टाइमिंग बढ़ाये',
        para: 'दिमाग पर कण्ट्रोल बढ़ जाता है, टाइमिंग बढ़ने लगती है और शीघ्रपतन से रिकवरी हो जाती है।',
    },
    {
        image: '/main/hfk_images/sankhlan.png',
        title: 'दोबारा उत्तेजित करे',
        para: 'शुरुआत में जब स्खलन होता है दोबारा कुछ ही देर में लिंग सेक्स के लिए उत्तेजित हो जाता है।',
    }]

    return (
        <div className="w-full bg-zinc-800 text-white  py-5 sm:py-10">
            <div className="max-w-3xl mx-auto mb-5 px-3 text-xl sm:text-xl ">

                <h1 className="fontPoppins text-2xl sm:text-4xl text-center mb-5 sm:mb-10 font-bold">कैसे काम करता है?</h1>

                <div className=" grid grid-cols-4 sm:grid-cols-12 items-center gap-7 sm:gap-2 ">
                    <div className="col-span-4 space-y-10">
                        {yourBene.slice(0, 3).map((e, key) => {
                            return <div className="grid grid-cols-12 gap-2 items-center" key={key}>
                                <img src={e.image} alt="pic" className={`col-span-4 ${key == 1 ? "sm:order-first order-last" : ""} `} width='100%' height='100%' loading="lazy" />
                                <div className="col-span-8">
                                    <h1 className="font-bold text-2xl leading-none">{e.title}</h1>
                                    <p className="text-[1rem] leading-tight mt-1">{e.para}</p>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="col-span-4 relative">
                        <img src='/main/hfk_images/pro1-min.webp' alt="pic" className="col-span-4 hidden sm:block" width='100%' height='100%' loading="lazy" />
                        <img src='/main/hfk_images/pro1a-min.webp' alt="pic" className="col-span-4 w-1/2 mx-auto block sm:hidden" width='100%' height='100%' loading="lazy" />
                        <a href="#form"><img src="/main/hfk_images/Comp.gif" alt="pic" className="pop_imagehfv absolute right-16 -top-3 sm:-right-8 sm:top-0 w-4/12 sm:w-8/12" width='100%' height='100%' loading='lazy' /></a>

                    </div>
                    <div className="col-span-4 space-y-10">
                        {yourBene.slice(3, 6).map((e, key) => {
                            return <div className="grid grid-cols-12 gap-2 items-center" key={key}>
                                <img src={e.image} alt="pic" className={`col-span-4 ${key == 1 ? "sm:order-first order-last" : ""} `} width='100%' height='100%' loading="lazy" />
                                <div className="col-span-8">
                                    <h1 className="font-bold text-2xl leading-none ">{e.title}</h1>
                                    <p className="text-[1rem] leading-tight mt-1">{e.para}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>

            <Ordernow />
        </div>
    )
}
export default Section3sub2;