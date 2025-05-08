import dynamic from 'next/dynamic';


const FormRedirect = dynamic(() => import('./FormRedirect'), {
    loading: () => <p>load</p>
});


const Section2 = () => {

    const data = [
        {
            title: "शुद्ध आयुर्वेदिक और दुष्प्रभाव मुक्त",
            url: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/148e4d8e-f735-42c5-be31-cab99fdfbd00/public",
        },
        {
            title: "COD पेमेंट सुविधा उपलब्ध",
            url: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/148c6fa3-5535-4b2b-c540-5ae078810f00/public",
        },
        {
            title: "10 दिनों की मनी बैक गारंटी सुविधा",
            url: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a37cf9f9-739e-47de-ca21-c3603d128600/public",
        },
        {
            title: "ट्रस्टेड और प्रमाणित ब्रांड",
            url: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/543c51a7-3ab1-46de-228c-04ba185f9300/public",
        },
        {
            title: "Amazon और Flipkart पर उपलब्ध",
            url: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/af9fb2b0-a5c4-41f5-3a64-24613a8b0700/public",
        },

        {
            title: "सिक्योर पैकेजिंग और फ़ास्ट डिलीवरी ",
            url: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6868b49c-0a2c-4362-df25-10d6a4d27c00/public",
        },
    ];

    return (
        <div className="">

            <div className=" w-full py-5 md:py-10  relative">

                <div className="relative z-10 max-w-7xl mx-auto px-3">
                    <p className="italic font-semibold">बात सेक्स को एन्जॉय करने की हो तो, स्त्रीभोग का सुख वही पुरुष लूट सकता है, जो निरोग है, बलवान है, वीर्यवान और जिनके लिंग में दम है। जो रोगी है, बलहीन है, वीर्यक्षीण है, कमजोर लिंग वाला है, वह स्त्री-भोग का आनन्द नहीं उठा सकता। क्यों कि जो खुद को स्वस्थ रखने मे सक्षम नहीं वो दूसरे को क्या सुख देगा !</p>
                </div>
                <div className=" relative z-10 -top-[3vw] left-0">
                    <img src='/main/hfstar_images/s3.webp' width='100%' height='100%' className=" w-full sm:w-1/2" loading="lazy" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-3">

                    <div className="grid grid-cols-12 gap-[4vw] items-end -mt-[16vw] sm:-mt-[23vw] mb-5">
                        <div className="col-span-12 sm:col-span-5">
                            <img src='/main/hfstar_images/fire.png' width='100%' height='100%' className="w-11/12 mx-auto sm:w-full" loading="lazy" />
                        </div>

                        <div className="col-span-12 sm:col-span-7">
                            <img src='/main/hfstar_images/pro1.webp' width='100%' height='100%' className="sm:ps-5" loading="lazy" />
                            <div className="sm:pb-5">
                                <FormRedirect />
                            </div>
                        </div>
                    </div>
                    <p className="">परन्तु, अब हर पुरुष बड़े और मोटे लिंग के साथ घंटो तक नॉनस्टॉप सेक्स करके उठा पाएगा सेक्स का असली मजा गारंटीड! क्योंकि आ गया है यौन कमजोरी का सबसे असरदार इलाज "हॉर्सफायर टेबलेट" यह भारत का सबसे ज्यादा बिकने वाला लिंगवर्धक और यौनवर्धक उत्पाद है। "हॉर्सफायर टेबलेट" का सेक्स कमजोरी पर रिजल्ट एक्यूरेसी 100% है। अपने सकारात्मक प्रभाव और दुष्प्रभावमुक्त होने की वजह से हॉर्सफायर टेबलेट भारतीय पुरुषों में अत्यंत लोकप्रिय बन गया है। </p>
                </div>

                <img src="/main/hfstar_images/s5.jpg" alt="img11" className="absolute top-0 left-0 h-full" width='100%' height='100%' loading="lazy" />
            </div>

            <section className={` bg-[#f9f6e3] pb-6 md:p-10`}>
                <h1 className={`fontPoppins text-center text-4xl md:text-5xl px-3 font-bold pt-5 md:pt-1 pb-8`}>
                    Why Trust on Horse Fire Tablet
                </h1>
                <div className="w-full md:max-w-7xl  mx-auto px-3">
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-y-10 md:gap-4 lg:text-[1.33rem]">
                        {data.map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    className="md:w-1/2 md:mx-auto flex flex-col items-center justify-center text-center rounded-xl border-2 border-zinc-800 py-3 px-0 sm:p-3"
                                >
                                    <img
                                        src={item.url}
                                        width={100}
                                        height={100}
                                        alt="image1"
                                        loading="lazy"
                                    />
                                    <p className=" font-semibold pt-4">{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="sm:pt-5">
                    <FormRedirect />
                </div>
            </section>

        </div>
    )
}
export default Section2;