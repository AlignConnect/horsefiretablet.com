
function Hearbs() {

    const list4 = [
        {
            title: 'अश्वगंधा',
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/187eab14-1490-4ad6-bf8d-6a6571b6f600/public',
            para: 'इसके इस्तेमाल से नाइट्रिक ऑक्साइड का निर्माण होता है, टेस्टोस्टेरोन, पौरुष क्षमता और इरेक्शन में वृद्धि होती है।'
        },
        {
            title: 'शिलाजीत',
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ebb40222-61b0-4156-e70d-2789dcbd4300/public',
            para: 'नेचुरल वियाग्रा के नाम से मशहूर शिलाजीत पुरुषों में जोश, उत्तेजना, स्टैमिना और समय अवधि के विस्तार में मदद करता है।'
        },
        {
            title: 'सफेद मूसली',
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1195790e-a319-4ae4-8abb-fb14255c1900/public',
            para: 'यह टेस्टोस्टेरोन बढ़ाता है, पार्ट के टिश्‍यूज को ताकत प्रदान करता है, इरेक्शन में सुधार करता है और टाइमिंग बढ़ाता है।'
        },
        {
            title: 'केसर',
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cf3b9dad-76ef-4511-b211-c6c93408a000/public',
            para: 'इसे आयुर्वेद में कामोत्तेजक और बलवर्धक माना गया है। या मूड और स्टैमिना बढ़ाता है जिससे अवधि बढ़ने में मदद करती है।'
        },
        {
            title: 'गोक्षुरा',
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f0ee57c5-a049-40b5-53eb-4d8b69950500/public',
            para: 'यह पुरूषों में काम इच्छा को जागृत करता हैं, साथ ही शुक्राणुओं की गुणवत्ता बढ़ाने में भी गोक्षुरा अहम भूमिका निभाता हैं।'
        },
        {
            title: 'शतावरी',
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/89719e42-db36-4020-12db-0a3e4d0ca500/public',
            para: 'शतावरी के उपयोग से टेस्टोस्टेरोन हॉर्मोन, जोश और स्टैमिना में आश्चर्यजनक रूप से वृद्धि देखने को मिलती हैं।'
        },
    ]
    return (
        <div className='w-full'>
            <div className=" pt-10 pb-1">
                <p className="text-center px-3  sm:px-16 text-3xl sm:text-5xl font-bold !leading-tight">HORSE FIRE TABLET में मौजूद जड़ीबूटियां</p>
                <div className=" mt-5   text-[1.09rem] sm:text-2xl">
                    {list4.map((e, key) => {
                        return <div className="grid grid-cols-12 gap-2 sm:gap-6 border-t-2 border-gray-600 px-2 sm:px-10 pt-6 pb-4 items-center" key={key}>
                            <div className="col-span-5 sm:col-span-4">
                                <img src={e.image} alt="pic" width='100%' height='100%' loading='lazy' />
                            </div>
                            <div className="col-span-7 sm:col-span-8">
                                <p className="font-bold text-3xl sm:text-5xl">{e.title}</p>
                                <p className="sm:mt-1">{e.para}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <div className="text-center text-white font-bold mb-3 sm:mb-5 fontPoppins">
                    <a href="#form" className="inline-block text-xl bg-gradient-to-t from-red-500 to-red-700 px-1 rounded-full py-3 pop_imagehfv">
                        <span className=" bg-gradient-to-b from-red-500 to-red-700 px-5 rounded-full py-2">ORDER NOW</span>
                    </a>
                </div>

            <div className='w-full relative bg-[#5a5a5a]'>
                <div className=" py-5  px-3 sm:px-10 text-white text-xl sm:text-2xl text-justify space-y-5">
                    <h1 className="sm:px-2 textShadow text-center text-3xl sm:text-5xl font-bold leading-tight">HORSE FIRE TABLET एक विशेष औषधि</h1>
                    <p className="  ">Horse Fire Tablet इन जैसी 16 बेस्ट जड़ीबूटियों और भस्मों का बेस्ट संयोजन है। इसके लैब टेस्टिंग के दौरान पाया गया कि मार्केट में उपलब्ध कई प्रोडक्ट की तुलना में इसका फार्मूलेशन सबसे बेस्ट है। यह पुरुष यौन समस्या पर दूसरों की तुलना में ज्यादा सटीक असर करता है। यह नेचुरल तरीके से पुरुष प्रमुख सेक्सुअल हॉर्मोन टेस्टोस्टेरोन में बृद्धि करता है।</p>
                    <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cbc06132-549d-462c-3d84-d5a1e403f300/public' alt="pic" width='100%' height='100%' loading="lazy" className="my-3" />
                    <p className=" ">Horse Fire Tablet का नियमित सेवन करने पर पुरुष जोशीले बनने लगते है। पार्ट में लोहे के रॉड जैसी सख्ती मिलने लगती है जो घंटो तक बनी रहती है। टाइमिंग और स्टैमिना में जोरदार बढोत्तरी होती है जिससे कोई भी पुरुष नॉनस्टॉप प्रदर्शन कर सकता है। </p>


                </div>
            </div>
        </div>
    )
}

export default Hearbs