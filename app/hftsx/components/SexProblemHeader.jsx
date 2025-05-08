
function SexProblemHeader() {

    const list = [
        'लिंग की लम्बाई-मोटाई में वृद्धि'
        ,
        'सेक्स समय अवधि में वृद्धि'
        ,
        'स्टैमिना में वृद्धि थकान से राहत'
        ,
        'जोश और आत्मविश्वास में वृद्धि'
        ,
    ]

    return (

        <div className="w-full text-xl sm:text-2xl py-5 sm:py-10 px-3 sm:px-12 ">
            <p className="text-3xl sm:text-5xl font-bold text-center leading-tight">जाने सेक्स टाइमिंग और लिंग साइज बढ़ाने की NO.1 औषधि के बारे में</p>
            <p className="text-justify sm:text-center leading-normal">दोस्तों, दशकों से आज तक कई सर्वे होते आ रहे है जिसमे पुरुष भाग लेते है। इस सर्वे में ये पता चला है की पुरुषों में शीघ्रपतन, पार्ट में ढीलापन, स्टैमिना और एनर्जी की कमी जैसी यौन समस्या तेजी से बढ़ रही है। ऐसे में पुरुषों की को चाहिये Horse Fire Tablet जैसी असरदार औषधि जो समस्या पर तेजी से असर करें और इसे जड़ से उखाड़ फेके। </p>
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f19afe51-5ac3-4bbf-7add-2269894e4a00/public" alt="pic" width='100%' height='100%' loading='lazy' className='my-5 w-3/4 mx-auto' />
            <div className=" font-bold text-green-600 space-y-3 text-2xl sm:text-4xl">
                {
                    list.map((e, key) => {
                        return <div className="flex gap-4" key={key}>
                           <div  className='w-10 sm:w-12 ' ><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/47c8e33c-a730-431c-45f3-fa8874ceb800/public" alt="pic" width='100%' height='100%' loading='lazy'/></div> 
                            <p className="mt-2">{e}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SexProblemHeader