import Image from 'next/image';
import '../hfv.css';

const Section1 = () => {

    const listproductBene = [
        { title: 'पति का छोटा, पतला और टेढ़ा लिंग', image: '/main/hfv_images/sec2_img1.webp' },
        { title: 'शीघ्रपतन, 1-5 मिनट की सेक्स अवधि', image: '/main/hfv_images/sec2_img2.webp' },
        { title: 'कमजोर स्टैमिना, जल्दी थकावट', image: '/main/hfv_images/sec2_img3.webp' },
        { title: 'जोश, उत्तेजना और सेक्स इच्छा की कमी', image: '/main/hfv_images/sec2_img4.webp' },
    ]

    return (
        <div className='w-full '>


            <div className="grid relative" >
                <div
                    style={{
                        backgroundImage: `url(/main/hfv_images/section1.jpg)`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right"
                    }}
                    className='pb-[7%] order-1'
                >
                    <div className="max-w-7xl mx-auto px-2 md:pt-10">
                        <div className="flex md:flex-row flex-col md:items-center justify-center">
                            <div className='w-[100%] md:w-[60%]'>

                                <h1 className=" md:text-8xl text-5xl pt-4 pb-4 md:pb-6 font-black text-center md:text-start  text-[#0e214c]  uppercase ">
                                    गारंटीड! रिजल्ट्स
                                </h1>
                                <h1 className=" md:text-8xl text-5xl font-black text-center md:text-start mb-4 md:mb-6 text-[#1fbbaf]  uppercase">
                                    मात्र 30 दिनों में
                                </h1>
                                <h1 className="md:text-6xl mt-0 md:mt-6  font-extrabold text-[2rem] text-black md:text-left text-center">
                                    बढ़ाएं सेक्स अवधि और लिंग
                                </h1>
                                <h2 className="md:text-3xl text-2xl font-bold text-[#0e204c] mt-4 md:mt-6 ">
                                    सर्वे के आंकड़ों के मुताबिक 80- 84% भारतीय महिलाएं सेक्स के दौरान चरम सुख नहीं पाती !
                                </h2>
                                <div className="my-12 hidden md:block md:text-left text-center">
                                    <div className="  inline-block text-left pop_imagehfv" >
                                        <a className="bg-[#213361] text-xl  font-bold fontPoppins py-5 px-11 w-full rounded-full hover:bg-[#1e2f5a] shadow-lg shadow-[#213361]/50 transition-colors text-white" href='#form'>
                                            INQUIRY NOW
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center mt-6 md:mt-0">
                                <img src="/main/hfv_images/sec1_product.png" alt="pic" />
                                <div className="mb-4 mt-7 block md:hidden md:text-left text-center">
                                    <div className="  inline-block text-left pop_imagehfv" >
                                        <a className="bg-[#213361] text-xl  font-bold fontPoppins py-3 px-11 w-full rounded-full hover:bg-[#1e2f5a] shadow-lg shadow-[#213361]/50 transition-colors text-white" href='#form'>
                                            INQUIRY NOW
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        backgroundImage: `url(/main/hfv_images/section2.jpg)`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        // backgroundPosition: WIdth > 768 ? "" : "100%"
                    }}
                    className='pt-[8%] md:pt-[10%] pb-4 order-3 md:order-2  bg-[100%] md:bg-left-top'

                >
                    <div className="max-w-7xl mx-auto px-2 md:pt-10">
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-6">
                            <div className="order-1 md:order-1 relative">
                                <h1 className="md:text-6xl text-2xl font-extrabold text-[#0e204c]  mb-3 block md:hidden">महिलाओं को चरम सुख न मिलने की वजह</h1>
                                <div className="relative -ms-5 w-[140%]">
                                    <img src="/main/hfv_images/sec2_girl.png" className='block md:hidden w-[100%] h-[120vw] ' alt="pic" />
                                    <div className="mb- md:mt-12 mt-0 block md:hidden text-center" >
                                        <div className="  inline-block text-left pop_imagehfv" >
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
                                            <img src={e.image} alt="pic" className="md:w-full w-10/12 md:h-inherit h-10/12 mx-auto" />
                                            <h1 className="text-[#074dcd] text-[1.1rem] md:text-3xl md:mt-4 mt-2 font-bold md:text-left  text-center leading-tight">{e.title}</h1>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <h1 className="md:text-3xl text-xl font-extrabold text-[#151515] mt-4 md:mt-5 lh-sm">टेड़ा, ढ़ीला, पतला लिंग और 2 मिनट की सेक्स अवधि आपकी पार्टनर के लिए संतोषजनक नहीं है। एक्सपर्ट कहते है की खुशहाल रिलेशनशिप के लिए सेक्स में पुरुष तथा महिला दोनों के चरमानंद का ख्याल रखना चाहिए पर अधिकांश पुरुष 2 या अधिकतम 5 मिनट के अंदर चरमानंद की प्राप्ति कर अपनी महिला पार्टनर को अधूरा छोड़ देते है। </h1>
                    </div>
                </div>


                <div className="transform md:translate-x-[-50%] md:translate-y-[-50%] md:left-1/2 md:top-[45%] md:absolute md:w-[85%] translate-x-[0%] translate-y-[0%] left-0 top-0 relative w-full mx-auto my-0 md:px-4  px-0 order-2 md:order-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center ">
                        <div className={`bg-[#21cdc1] md:p-6 md:pt-12 p-2 pt-5`} >
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="">
                                    <img src='/main/hfv_images/sec1_icon1.webp' alt="pic" className="w-10/12 md:w-full mx-auto" />
                                </div>
                                <div className="w-[90%] md:w-fit">
                                    <h1 className="md:text-4xl text-[1.7rem] text-white font-bold md:mb-2">इंडिया' #1 टाइमिंग बूस्टर</h1>
                                    <h3 className="md:text-3xl text-[1.3rem] text-white">यह इंडिया का नंबर वन सेक्स टाइम बढ़ाने वाला प्रोडक्ट है</h3>
                                </div>
                            </div>
                        </div>
                        <div className={`bg-[#3851a3]  md:p-6 md:pt-12 p-2 pt-5`} >
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="">
                                    <img src='/main/hfv_images/sec1_icon2.webp' alt="pic" className="w-10/12 md:w-full mx-auto" />
                                </div>
                                <div className="w-[90%] md:w-fit">
                                    <h1 className="md:text-4xl text-[1.7rem] text-white font-bold md:mb-2">प्रमाणित लिंग वर्धक</h1>
                                    <h3 className="md:text-3xl text-[1.3rem] text-white">यह साइंटिफिकली लिंग बढ़ाने में सिद्ध है।</h3>
                                </div>
                            </div>
                        </div>
                        <div className={`bg-[rgb(18,23,68)]  md:p-6 md:pt-12 p-2 pt-5`} >
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="">
                                    <img src='/main/hfv_images/sec1_icon3.webp' alt="pic" className="w-10/12 md:w-full mx-auto" />
                                </div>
                                <div className="w-[90%] md:w-fit">
                                    <h1 className="md:text-4xl text-[1.7rem] text-white font-bold md:mb-2">कामोन्माद की गारंटी</h1>
                                    <h3 className="md:text-3xl text-[1.3rem] text-white">यह आपकी सेक्स इच्छा में बढ़ोतरी करता है।</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Image src='/main/hkart_images/bg01.jpg' fill alt='pic' className='absolute top-0 z-0' /> */}
        </div>
    )
}
export default Section1;