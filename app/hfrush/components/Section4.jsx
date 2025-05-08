import dynamic from 'next/dynamic';

const FormRedirect = dynamic(() => import('./FormRedirect'), {
    loading: () => <p>load</p>
});



const Section4 = () => {


    const paraList = ["#1 यौन श्रेणी में विक्रेता", "10 दिनों की मनी बैक गारंटी", "COD यानि डिलीवरी पर भुगतान", "प्रीपेड आर्डर पर 10% अतिरिक्त बचत", "Flipkart, Amazon पर उपलब्ध"]


    return (
        <div className="">
            <div className="relative text-white">
                <div className="relative z-10 ">
                    <div className="max-w-7xl mx-auto px-3 py-7 sm:py-14 ">

                        <p className=" text-[2.1rem] sm:text-5xl lg:text-6xl font-bold text-center mb-3 sm:mb-7 leading-tight"><span className="fontPoppins uppercase">Horse Fire Tablet</span>  की गोली </p>
                        <div className="grid grid-cols-2 gap-5 sm:gap-10 items-center lg:text-2xl">


                            <div className="grid sm:grid-cols-2 items-center gap-3 sm:gap-5" >
                                <img src='/main/hfrush_images/30.png' alt="pic" className="" width='100%' height='100%' loading="lazy" />
                                <div className="">
                                    <p className='font-bold !leading-none mb-2 text-2xl lg:text-3xl xl:text-[2.5rem]'><span className="text-red-600">लिंग की सख्ती</span> और <span className="text-yellow-400">साइज बढ़ाये</span></p>
                                    <p className="">नसों को पम्प करके, रक्त संचार बेहतर करके साइज और शक्ति बढ़ाए </p>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 items-center gap-3 sm:gap-5" >
                                <img src='/main/hfrush_images/31.png' alt="pic" className="" width='100%' height='100%' loading="lazy" />
                                <div className="">
                                    <p className='font-bold !leading-none mb-2 text-2xl lg:text-3xl xl:text-[2.5rem]'><span className="text-red-600">सेक्स टाइम</span> 1 घंटे <span className="text-yellow-400">से ज्यादा करे</span></p>
                                    <p className="">मानसिक शक्ति बढ़ाकर, कण्ट्रोल क्षमता बढ़ाये और शीघ्रपतन रोके</p>

                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 items-center gap-3 sm:gap-5" >
                                <img src='/main/hfrush_images/32.png' alt="pic" className="" width='100%' height='100%' loading="lazy" />
                                <div className="">
                                    <p className='font-bold !leading-none mb-2 text-2xl lg:text-3xl xl:text-[2.5rem]'><span className="text-red-600">शरीर में स्टैमिना</span> और <span className="text-yellow-400">एनर्जी बढ़ाये</span></p>
                                    <p className="">टेस्टोस्टेरोन हॉर्मोन बूस्ट करे, बॉडी को नॉरिश करें और शक्ति बढ़ाएं</p>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 items-center gap-3 sm:gap-5" >
                                <img src='/main/hfrush_images/33.png' alt="pic" className="" width='100%' height='100%' loading="lazy" />
                                <div className="">
                                    <p className='font-bold !leading-none mb-2 text-2xl lg:text-3xl xl:text-[2.5rem]'><span className="text-red-600">जोश और उत्तेजना</span> का <span className="text-yellow-400">स्तर बढ़ाये</span></p>
                                    <p className="">इसमें मिश्रित कामोत्तेजक गुणों वाली जड़ीबूटियां जोश और उत्तेजना बढाए</p>
                                </div>
                            </div>

                        </div>


                        <div className="sm:pt-5">
                            <FormRedirect />
                        </div>
                    </div>
                </div>
                <img src="/main/hfrush_images/19.png" alt="img11" className="absolute top-0 left-0 h-full" width='100%' height='100%' />
            </div>


            <div className=" py-7 md:py-14 relative">

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="uppercase text-3xl leading-tight font-black mb-5 text-center sm:hidden px-3 text-[yellow]">Why Men Trust Horse Fire</h1>

                    <div className='grid grid-cols-12 gap-2 sm:gap-5 items-center sm:items-center ps-2 pe-3 sm:px-5'>
                        <img src='/main/hfrush_images/37.png' alt="pic" width='100%' height='100%' loading='lazy' className='col-span-4 sm:col-span-3' />
                        <div className="col-span-8 sm:col-span-9">
                            <h1 className="uppercase text-4xl leading-tight text-[yellow] font-black mb-8 hidden sm:block">Why Men Trust Horse Fire</h1>
                            <div className="space-y-5  text-white  text-[1.01rem] sm:text-xl lg:text-2xl ">
                                {paraList.map((e, key) => {
                                    return <p className="bg-red-600 rounded-tr-xl px-2 sm:px-5 sm:pt-3 pt-2 " key={key}>{e}</p>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/main/hfrush_images/11.png" alt="img11" className="absolute top-0 left-0 h-full" width='100%' height='100%' />
            </div>
        </div>
    )
}
export default Section4;