import { Noto_Serif_Devanagari } from "next/font/google";

const listproductBene = [
    { title: 'पति का छोटा, पतला और टेढ़ा लिंग', image: '/main/hfv_images/sec2_img1.webp' },
    { title: 'शीघ्रपतन, 1-5 मिनट की सेक्स अवधि', image: '/main/hfv_images/sec2_img2.webp' },
    { title: 'कमजोर स्टैमिना, जल्दी थकावट', image: '/main/hfv_images/sec2_img3.webp' },
    { title: 'जोश, उत्तेजना और सेक्स इच्छा की कमी', image: '/main/hfv_images/sec2_img4.webp' },
]

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const HeaderSection = () => {
    return (
        <div
            style={{
                backgroundImage: `url(/main/hfv_images/section2.jpg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // backgroundPosition: WIdth > 768 ? "" : "100%"
            }}
            className={`${noto.className} pt-[8%] md:pt-[10%] pb-4 order-3 md:order-2  bg-[100%] md:bg-left-top`}

        >
            <div className="max-w-7xl mx-auto px-2 md:pt-10">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-6">
                    <div className="order-1 md:order-1 relative">
                        <h1 className="md:text-6xl text-2xl font-extrabold text-[#0e204c]  mb-3 block md:hidden">महिलाओं को चरम सुख न मिलने की वजह</h1>
                        <div className="relative -ms-5 w-[140%]">
                            <img src="/main/hfv_images/sec2_girl.png" className='block md:hidden w-[100%] h-[120vw]' alt="pic" loading="lazy" />
                            <div className="md:mt-12 mt-0 block md:hidden text-center" >
                                <div className=" inline-block text-left pop_imagehfv" >
                                    <a className="bg-[#213361] text-[1.1rem]  font-bold fontPoppins py-2 px-3 w-full rounded-full hover:bg-[#1e2f5a] shadow-lg shadow-[#213361]/50 transition-colors text-white" href='#form'>
                                        INQUIRY NOW
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-2 md:order-2">
                        <h1 className="md:text-6xl text-4xl font-extrabold text-[#0e204c]  mb-4 hidden md:block">महिलाओं को चरम सुख न मिलने की वजह</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-6">
                            {listproductBene.map((e, key) => {
                                return <div className="w-full " key={key}>
                                    <img src={e.image} alt="pic" className="md:w-full w-10/12 md:h-inherit h-10/12 mx-auto" fetchPriority="high" />
                                    <h1 className="text-[#074dcd] text-[1.1rem] md:text-3xl md:mt-4 mt-2 font-bold md:text-left  text-center leading-tight">{e.title}</h1>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <h1 className="md:text-3xl text-xl font-extrabold text-[#151515] mt-4 md:mt-5 lh-sm">टेड़ा, ढ़ीला, पतला लिंग और 2 मिनट की सेक्स अवधि आपकी पार्टनर के लिए संतोषजनक नहीं है। एक्सपर्ट कहते है की खुशहाल रिलेशनशिप के लिए सेक्स में पुरुष तथा महिला दोनों के चरमानंद का ख्याल रखना चाहिए पर अधिकांश पुरुष 2 या अधिकतम 5 मिनट के अंदर चरमानंद की प्राप्ति कर अपनी महिला पार्टनर को अधूरा छोड़ देते है। </h1>
            </div>
        </div>)
}

export default HeaderSection;