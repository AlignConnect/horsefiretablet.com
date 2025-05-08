const Section4 = () => {
    return (
        <section className="w-full fontNoto">

            <div className="max-w-4xl mx-auto px-3 pt-5 text-center md:py-10 min-h-[200px]">

                <img
                    src={"/main/hflip_images/dhamaka_offer.png"}
                    loading='lazy'
                    className='mx-auto foo animate-foo w-3/4 md:w-1/3'
                    
                />

                <h4 className="text-xl md:text-2xl font-semibold my-5 md:my-10">जी हाँ, Summer "धमाका" Sale में ऑनलाइन पेमेंट पर प्रतिदिन 100 भाग्यशाली ग्राहकों को मिल रहा है हॉर्सफायर का पैक बिल्कुल फ्री! मौका हाथ से ना जाने दे, फ्री में हॉर्सफायर मंगाए। अगर आप भाग्यशाली हुए तो आपका भी पूरा पैसा आपके अकाउंट में ट्रांसफर कर दिया जायेगा!</h4>

                <a href="#form" className="text-[1rem] md:text-2xl font-bold px-0 md:px-10 text-blue-600">(नोट- अन्य ग्राहकों के लिए 50% का बम्पर डिस्काउंट और ऑनलाइन पेमेंट पर 10% अतिरिक्त बचत उपलब्ध है।)</a>
            </div>
        </section>
    )
}
export default Section4;