import dynamic from 'next/dynamic';

const FormRedirect = dynamic(() => import('./FormRedirect'), {
    loading: () => <p>load</p>
});



const Section4 = () => {




    return (
        <div className="relative ">
            <div className="relative z-10 max-w-7xl mx-auto px-3 py-7 sm:py-14">
                <div className="text-4xl sm:text-[4.5vw] font-extrabold text-center leading-tight ">
                    <h1 className="">हॉर्स फायर <span className="text-[#e4b215]"> काम कैसे </span></h1>
                    <h1 className="text-[#e4b215]">करता है</h1>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 sm:gap-10 items-center">
                    <img src="/main/hfstar_images/penis.jpg" alt="img11" className="" width='100%' height='100%' loading='lazy' />
                    <p className="mt-5 sm:mt-5">यह कोई जादू नहीं बल्कि प्रकृति और विज्ञान का अनोखा संयोजन है जो जादू की तरह काम करके शीघ्रपतन, लिंग ढीलापन जैसी सभी यौन कमजोरियों को गायब कर देता है। इस्तेमाल के पहले दिन से ही यह समस्या की जड़ पर काम शुरू कर देता है। टेस्टोस्टेरोन हार्मोन का स्तर बढ़ाता है, लिंग की नसों में रक्त का बहाव तेज करता है जिससे ढीला लिंग भी मजबूती से खड़ा होने लगता है। वीर्य स्खलन में देरी लाता है जिससे सेक्स अवधि में बृद्धि होती है और नाकाम पुरुष भी महिला को हर बार संतुष्ट करने में सक्षम न जाते है। </p>
                </div>
                <p className="mt-5 sm:mt-10">
                    "हॉर्सफायर टेबलेट" वे पुरुष अवश्य आजमाए जिनके लिंग में ढीलापन है, या फिर फर्स्ट राउंड सेक्स के बाद लिंग में इरेक्शन नहीं मिलती है। अगर कोई पुरुष 2  मिनट या उससे भी कम समय में स्खलित हो जाता है यानि वीर्य डिस्चार्ज हो जाता है तो मात्र 30 दिनों तक यानी एक पैक नियमित गुनगने दूध के साथ सेवन करके अंतर खुद देख लें। अगला पैक आप खुद आर्डर करेंगे साथ ही 3-4 महीने नियमित सेवन करने पर आपकी यौन कमजोरी जड़ से खत्म हो जाएगी और आपको किसी भी यौनवर्धक दवा की जरुरत नहीं पड़ेगी।
                </p>

                <FormRedirect/>
            </div>
            <img src="/main/hfstar_images/s5.jpg" alt="img11" className="absolute top-0 left-0 h-full" width='100%' height='100%' loading='lazy' />
        </div>

    )
}
export default Section4;