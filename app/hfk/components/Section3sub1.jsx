import dynamic from 'next/dynamic';

const Ordernow = dynamic(() => import('./Ordernow'), {
    loading: () => <p>load</p>
});

const Section3sub1 = () => {

    const yourBene = [{
        title: 'उनके अंग अंग में तरंग जगाएं',
        image: '/main/hfs_images/1gif.mp4'
    },
    {
        title: 'बिस्तर पर उनकी चीख निकाल दें ',
        image: '/main/hfs_images/2gif.mp4'
    },
    {
        title: 'जिसका लिंग रॉड की भांति लम्बा, मोटा और कड़कदार हो',
        image: '/main/hfs_images/3gif.mp4'
    },
    {
        title: 'अधिक देर तक सेक्स कर सकें',
        image: '/main/hfs_images/4gif.mp4'
    },
    {
        title: 'उन्हें चरम सुख की अनुभूति कराएं ',
        image: '/main/hfs_images/5gif.mp4'
    }]

    return (
        <div className="w-full sm:bg-[#ebebeb] bg-[#ffd200] text-justify font-semibold py-5 sm:py-10">
            <div className="max-w-3xl mx-auto  px-3 text-xl sm:text-xl mb-5 sm:mb-8 grid grid-cols-12 items-center gap-y-5 gap-x-5">
                <div className="col-span-12 sm:col-span-7 order-2 sm:order-1">
                    <h1 className="text-4xl font-bold">Horse Fire हर <br /> पुरुष की जरुरत !</h1>
                    <p className="mt-2 ">देखें, महिला को सेक्स में ऑर्गेज़्म सुख देने के लिए पुरुष का लिंग लम्बा मोटा और सुडौल होना चाहिए। साथ ही सेक्स टाइम भी बिना झड़े 20 मिनट से ज्यादा होनी चाहिए। क्योंकि महिला योनि के आंतरिक हिस्से में मौजूद G-SPOT पर सुडौल लिंग के लम्बे समय तक के घर्षण से ही महिलाओं को ऑर्गेज़्म सुख मिलता है। </p>
                </div>
                <div className="col-span-12 sm:col-span-5 relative order-1 sm:order-2">
                    <img src="/main/hfk_images/pro2c-min.webp" alt="pic" width='100%' height='100%' loading="lazy" />
                    <a href="#form"><img src="/main/hfk_images/Comp.gif" alt="pic" className="pop_imagehfv absolute right-3 -top-1" width='50%' height='100%' loading='lazy' /></a>
                </div>
                <img src="/main/hfk_images/lab.jpg" alt="pic" width='100%' height='100%' loading="lazy" className="col-span-12 sm:col-span-5  border border-black order-3" />
                <div className="col-span-12 sm:col-span-7 order-4"><p className="mt-2 ">"काफी रिसर्चो के बाद इस फार्मूलेशन को तैयार किया है जिसे लैब रिसर्च में एक्सपर्ट ने बेस्ट फार्मूलेशन बताया है। वैसे ही हम चाहते है की इसकी उपयोगिता आप तय करें।" जब यह आपकी समस्या को हल करें तो आप इसे बेस्ट बोले, ताकि आपके रिव्यु से दूसरे पुरुष भी जो अन्य प्रोडक्ट के पीछे ठगी का शिकार हुए है वो इसे खाकर अपनी समस्या जड़ से मिटा सकें।</p></div>
            </div>

            <Ordernow />
        </div>
    )
}
export default Section3sub1;