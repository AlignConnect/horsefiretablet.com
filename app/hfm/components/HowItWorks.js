function HowItWorks() {

    const how_it_work_content = [
        {
            work_content: "प्रत्येक टेबलेट शरीर में टेस्टोस्टेरोन हॉर्मोन और नाइट्रिक ऑक्साइड का उत्पादन करता है जिससे रक्त वाहिकाएं चौड़ी होती है।",
            work_image: '/main/hfm_images/1tab.png'
        },
        {
            work_content: "लिंग की तंग चमड़ी खुलती है और नसों में रक्त तेजी से बहाव होता है, फलस्वरूप लिंग कड़कपन में सुधार होता है।",
            work_image: '/main/hfm_images/2penis.png'
        },
        {
            work_content: "इस्तेमाल के पहले दिन से इसके घटक समस्या की रिकवरी करने लगते है, और शरीर को कमजोरी मुक्त कर देते है।",
            work_image: '/main/hfm_images/3recovery.png'
        },
        {
            work_content: "जोश, उत्साह, एनर्जी, स्टैमिना बढ़ाने का कार्य करता है पुरुष बिना थके लम्बा सेक्स प्रदर्शन करने में सक्षम बनता है।",
            work_image: '/main/hfm_images/4sex.png'
        }
    ]

    return (
        <div>
            <div className='my-6'>

                <h1 className='text-center fontArya font-semibold  text-3xl md:text-4xl py-1'>
                    यह <span className="text-red-600">काम</span> किस प्रकार करता है?
                </h1>

                <div className='px-3 py-6'>
                    {how_it_work_content.map((e, key) => {
                        return <div className="flex justify-center items-center py-2" key={key}>
                            <div className="!w-28 mx-auto">
                                <img className='w-80'
                                    src={e.work_image}
                                />
                            </div>
                            <div className="w-full px-2">
                                <div className="text-black text-justify fontNoto text-[1.1rem] md:text-xl">{e.work_content}</div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <div className="">
                <div className="bg-red-600 ">
                    <div className="max-w-3xl mx-auto relative mt-[3rem] md:mt-[13rem] ">
                        <div className={`flex flex-col text-xl md:text-4xl items-end mr-4 uppercase text-white fontPoppins py-5`}>
                            <h1 className="font-bold"> Horsefire Tablet </h1>
                            <p className="fontArya "> एक उत्कृष्ट मिश्रण! </p>
                        </div>
                        <div>
                            <div className="absolute bottom-0 w-2/4">
                                <img
                                    className='w-full'
                                    src="/main/hfm_images/couple_with_product.webp"
                                    alt='couple_with_product'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks