function Doctor() {
    return (<div>
        <div className="w-full bg-[url('/main/hfkt_images/doctor_background.jpg')] bg-cover" >
            <div className='w-full max-w-6xl mx-auto py-4'>
                <div className='grid grid-cols-2 items-center'>
                    <div>
                        <img
                            className='md:w-[70%] w-full min-[300px] h-[100%] mx-auto'
                            src={"/main/hfkt_images/doctor_img.png"}
                            alt='doctor_img'
                            loading="lazy"
                        />
                    </div>
                    <div className='text-center'>
                        <div className='text-[#0dbfff] font-semibold text-xl md:text-4xl'>डॉ विनय सोलंकी</div>
                        <div className='text-[#9f0c07] text-md md:text-2xl font-semibold'>(साइकोलॉजिस्ट)</div>
                        <div className='text-[#9f0c07] text-md md:text-2xl font-semibold'>B.Sc, MA in Psychology</div>
                    </div>
                </div>
                <p className='fontNoto text-[1.1rem] md:text-[1.4rem] text-justify px-1 border-solid border-2 border-black py-2 rounded-md'>
                    सेक्स दम्पति के बीच प्यार को बढाता है पर सेक्स कमजोरी की वजह से यह प्यार कम होने लगता है। महिला पार्टनर को यौन संतुष्टि नहीं मिलने पर यह प्यार किसी अन्य आकर्षित पुरुष पर केंद्रित हो जाता है। पुरुष को अपने स्वास्थ्य पर ध्यान देना चाहिए। अगर पुरुष कमजोरी है तो निसंकोच हॉर्सफायर टेबलेट आर्डर करें। इसके इस्तेमाल से अपनी सेक्स समस्या जड़ से मिटायें और महिला पार्टनर की खुशियों का ध्यान रखें।
                </p>
            </div>
        </div >


    </div>
    )
}

export default Doctor;