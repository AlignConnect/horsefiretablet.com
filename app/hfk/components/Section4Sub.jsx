import dynamic from 'next/dynamic';

const Ordernow = dynamic(() => import('./Ordernow'), {
    loading: () => <p>load</p>
});

const Section4Sub = () => {

    return (
        <div className="w-full bg-zinc-800 text-white py-5 sm:py-10">
            <div className="max-w-3xl mx-auto  px-3 text-xl sm:text-2xl ">

                <h1 className="text-3xl sm:text-4xl text-yellow-400 font-extrabold">आँख बंद करके विश्वास कर सकते है </h1>
                <p className="text-justify mt-2">हमे अपने प्रोडक्ट पर पूर्ण विश्वास है, इसलिए आत्मविश्वास उच्च स्तर पर है। इसी विश्वास की वजह से मनी बैक गारंटी भी दे रहे है। मतलब परिणाम नहीं तो आप अपना मूल्य वापस पा सकते है। पर हमे यकीन है ऐसा दिन नहीं आएगा क्योंकि यह बहुत प्रभावी तरीके से कार्य करता है। लाखों पुरुषों ने Horse Fire Tablet की मदद से अपनी शीघ्रपतन, लिंग में ढीलापन, छोटापन, पतलापन, टेढ़ापन व एनर्जी और स्टैमिना की कमी जैसी समस्याओं को जड़ से मिटाया है जिससे सेक्स लाइफ में खुशियों की बहार आ गयी है। </p>

                <div className="relative mb-5">
                    <img src='/main/hfk_images/pro3last-mini.webp' alt="pic" className="px-5 relative z-10" width='100%' height='100%' loading="lazy" />
                    <div className="bg-gray-300 w-full h-1/2 bottom-0 absolute"></div>
                    <a href="#form"><img src="/main/hfk_images/Comp.gif" alt="pic" className="pop_imagehfv absolute left-1/4 top-[14%] w-4/12 z-20" width='100%' height='100%' loading='lazy' /></a>
                </div>
                <Ordernow />

                <div className="text-3xl sm:text-4xl text-yellow-400  text-center">
                    <h1 className="font-extrabold pt-5">ज्यादा सोचने वाले पछताते है !</h1>
                    <p className="text-[#f26010] text-xl sm:text-2xl  mt-2 font-bold">आप उन लाखों पुरुषों में शामिल हो जाएँ जो सुडौल लिंग और लम्बी सेक्स टाइमिंग से महिला पार्टनर की चूत की गर्मी उतार रहे है !</p>
                    <h1 className="font-extrabold mt-6">विशेष सुविधा!!</h1>
                    <p className="bg-green-500 text-xl pt-5 pb-2 px-2 sm:px-5 mt-1 rounded-xl text-white">पुरुषों की समस्या के हिसाब से उनकी उम्र, हाइट और वजन का आंकलन करके Horse Fire Tablet कस्टमाइज्ड भी तैयार किया जाता है जिससे यह समस्या पर सटीक असर करता है। </p>

                </div>
            </div>
        </div>
    )
}
export default Section4Sub;