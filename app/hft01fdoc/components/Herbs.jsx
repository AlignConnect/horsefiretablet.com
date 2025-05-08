import React from 'react'

function Herbs() {

    const Herbs = (arr) => {
        return arr?.map((e, key) => {
            return <div className='shaddow_herbs bg-white rounded-2xl sm:my-4 my-2' key={key}>
                <img src={e.herbs_icon} className='w-24 sm:w-36 mx-auto py-2' alt='Herbs_images' />
                <div className=" fontNoto text-left text-md md:text-[1.3rem] py-2 px-2">{e.herbs_content}</div>
                <div className='fontNoto text-white pt-3 text-xl md:text-2xl font-extrabold bg-[#1e4389] rounded-t-md rounded-xl'>{e.herbs_name}</div>
            </div >
        })
    }

    return (
        <section>
            <div className="herbs_background">
                <div className="w-full max-w-7xl text-center mx-auto">

                    <div className="fontPoppins text-[#1e4389] sm:text-5xl text-2xl font-extrabold sm:py-10 py-5">
                        Horse Fire Tablet <span className="fontNoto">में मौजूद जड़ीबूटियां</span>
                    </div>

                    <div className=' sm:w-1/6 w-80 mx-auto fontPoppins bg-white rounded-xl  sm:text-xl text-[#1e4389] py-2'>
                        Important Herbs
                    </div>

                    <div className='grid sm:grid-cols-3 grid-cols-2 sm:gap-16 gap-4 py-5 mx-2'>
                        {
                            Herbs([
                                {
                                    herbs_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/02e3e8e3-0aa5-4c32-a5d0-f531924acd00/public",
                                    herbs_name: "अश्वगंधा",
                                    herbs_content: "इसके इस्तेमाल से नाइट्रिक ऑक्साइड का निर्माण होता है, टेस्टोस्टेरोन, पौरुष क्षमता और इरेक्शन में वृद्धि होती है। "
                                },
                                {
                                    herbs_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e570f576-4f21-4ce1-d5b0-c8cc9f47a000/public",
                                    herbs_name: "शिलाजीत",
                                    herbs_content: "नेचुरल वियाग्रा के नाम से मशहूर शिलाजीत पुरुषों में जोश, उत्तेजना, स्टैमिना और समय अवधि के विस्तार में मदद करता है। "
                                },
                                {
                                    herbs_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f71d6acc-05dc-408e-f657-962a00087c00/public",
                                    herbs_name: "सफेद मूसली",
                                    herbs_content: "यह टेस्टोस्टेरोन बढ़ाता है, पार्ट के टिश्‍यूज को ताकत प्रदान करता है, इरेक्शन में सुधार करता है और टाइमिंग बढ़ाता है।"
                                },
                                {
                                    herbs_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/be50817e-7677-43a9-f1b7-5620b9abff00/public",
                                    herbs_name: "केसर",
                                    herbs_content: "इसे आयुर्वेद में कामोत्तेजक और बलवर्धक माना गया है। या मूड और स्टैमिना बढ़ाता है जिससे अवधि बढ़ने में मदद करती है।"
                                },
                                {
                                    herbs_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b024eb47-17e8-461a-af87-bf8e5a84e600/public",
                                    herbs_name: "गोक्षुरा",
                                    herbs_content: "यह पुरूषों में काम इच्छा को जागृत करता हैं, साथ ही शुक्राणुओं की गुणवत्ता बढ़ाने में भी गोक्षुरा अहम भूमिका निभाता हैं।"
                                },
                                {
                                    herbs_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/033a27c4-7912-4ca5-655f-0e7f78e02d00/public",
                                    herbs_name: "शतावरी",
                                    herbs_content: " शतावरी के उपयोग से टेस्टोस्टेरोन हॉर्मोन, जोश और स्टैमिना में आश्चर्यजनक रूप से वृद्धि देखने को मिलती हैं। "
                                }
                            ])
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Herbs