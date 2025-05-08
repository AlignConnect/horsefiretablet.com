function Reason() {

    const sex_weekness_reason = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center gap-2 ' key={key}>
                <img src="/main/hfm_images/wrong.webp" className='md:w-10 w-8 py-1' alt='wrong_hebits' />
                <div className='fontArya md:text-3xl text-xl text-center text-white '>{e.reason_title}</div>
            </div >

        })
    }


    return (
        <div>
            <div className="bg-[url('/main/hfm_images/bg_reason.webp')] bg-cover bg-no-repeat py-6">
                <div className="text-center fontArya text-3xl md:text-5xl px-1 font-extrabold text-yellow-400">
                    सेक्स कमजोरी के कारण
                </div>

                <div className="text-white">
                    <div className="grid justify-center py-3">
                        {
                            sex_weekness_reason([
                                {
                                    reason_title: "टेस्टोस्टेरोन हॉर्मोन की कमी"
                                },
                                {
                                    reason_title: "अनिद्रा और मानसिक तनाव"
                                },
                                {
                                    reason_title: "अपौष्टिक आहार(जंक फूड)"

                                },
                                {
                                    reason_title: "एल्कोहल का ज्यादा सेवन"

                                },
                                {
                                    reason_title: "धूम्रपान व नशीली पदार्थों की लत"
                                }
                            ])
                        }
                    </div>
                </div>

            </div>
            <div className="text-black text-justify fontNoto text-[1.2rem] md:text-xl px-2 py-3">
                <span className='font-semibold fontKalnia'>Dr. Mahesh Gupta </span>ने बताया टेस्टोस्टेरोन पुरुष सेक्स हॉर्मोन है इसकी कमी से लिंग में ढीलापन, शरीर में एनर्जी और स्टैमिना स्टैमिना की कमी तथा वही अनिद्रा व मानसिक तौर पर कमजोर या तनाव महसूस करने से सेक्स की इच्छा कम हो जाती है। पुरुषों के पेनाइल टिश्यूज ढीले और कमजोर होते है जिससे डिस्चार्ज पर कण्ट्रोल नहीं रहता और वीर्यपात जल्दी हो जाता है।
            </div>
        </div>
    )
}

export default Reason