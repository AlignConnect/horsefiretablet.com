import React from 'react'

function Steely() {

    const Problem = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center  gap-3' key={key}>
                <img src={e.problem_icon} className='md:w-10 w-8 py-1' alt='Benifits_images' />
                <div className='fontNoto text-xl md:text-3xl font-semibold pt-2'>{e.problem_title}</div>
            </div>
        })
    }

    return (
        <div className='bg-black'>

            <div className="fontNoto bg-red-600 md:w-1/3 w-1/2 mx-auto pt-3 text-white font-extrabold text-2xl md:text-2xl rounded-xl">
                <a href="#form" >अभी आर्डर करें</a>
            </div>

            <div className="py-5">
                <img
                    className='w-72 md:w-3/4 mx-auto'
                    src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/291a6308-a1b7-433e-54f1-bf14beeb2c00/public"}
                    alt='steely_img'
                    fetchPriority='high'
                />
            </div>

            <div className="fontNoto font-extrabold text-2xl md:text-4xl text-white py-4">
                अब हर पुरुष पायेगा फौलादी लिंग और करेगा नॉनस्टॉप सेक्स घंटो तक!
            </div>

            <p className="fontNoto text-white text-[1.1rem] md:text-[1.4rem] px-2 py-2">
                आज के समय में पुरुषों की सबसे बड़ी <span className="text-yellow-400">समस्या यौन कमजोरी है जिसकी वजह से वे फॅमिली प्रेशर,</span> जॉब प्रेशर के अलावा सेक्स परफॉरमेंस प्रेशर भी महसूस करते है।
            </p>


            <div className="clippath_top py-[4vw] sm:py-[1.5vw] -mb-2"></div>
            <div className="bg-[#f5ce19] py-2">
                <div className='grid justify-center'>
                    {
                        Problem([
                            {
                                problem_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9d9a710c-588d-41fa-7ff0-db7b99fab700/public",
                                problem_title: "छोटा, पतला और टेढ़ा लिंग"
                            },
                            {
                                problem_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9f47e962-b781-4938-346a-6dfac8e1dc00/public",
                                problem_title: "शीघ्रपतन, 1-5 मिनट की सेक्स अवधि"
                            },
                            {
                                problem_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/08bb6283-6125-4809-8eda-2dd3a1206100/public",
                                problem_title: "कमजोर स्टैमिना, जल्दी थकावट"
                            },
                            {
                                problem_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/67ad491e-e1e2-480e-953a-5534838a4600/public",
                                problem_title: "जोश, उत्तेजना और सेक्स इच्छा की कमी "
                            }
                        ])
                    }
                </div>
            </div>
            <div className="clippath_bottom py-[4vw] sm:py-[1.5vw] -mt-1"></div>

            <p className="fontNoto text-white text-[1.1rem] md:text-[1.4rem] px-2 py-7">
                जिन पुरुषों में ये यौन समस्याएं है उनका तो परफॉरमेंस प्रेशर होना लाजमी है,<span className="text-yellow-400"> क्योंकि इनके साथ सेक्स और सेक्सुअल</span> लाइफ एन्जॉय करना नामुमकिन है।  चिंता ना करें इन्ही समस्या का <span className="text-yellow-400">सबसे सटीक समाधान है हॉर्सफायर टेबलेट!</span>
            </p>

            <div className="py-3">
                <img
                    className='w-72 md:w-3/4 mx-auto'
                    src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b0994812-e17f-417d-8c15-e7370068b500/public"}
                    alt='real_men'
                    fetchPriority='high'
                />
            </div>

            <div className="fontNoto bg-red-600 md:w-1/3 w-1/2 mx-auto pt-3 text-white font-extrabold text-2xl md:text-2xl rounded-xl">
                <a href="#form" >अभी आर्डर करें</a>
            </div>



            <p className="fontNoto text-white text-[1.1rem] md:text-[1.4rem] px-2 py-7">
                <span className="text-yellow-400"> हॉर्सफायर टेबलेट भारत का सर्वाधिक</span> बिकने वाला पुरुष लिंग वर्धक और सेक्स वर्धक उत्पाद है। इसमें मिश्रित दुर्लभ और अनोखे <span className="text-yellow-400">प्राकृतिक तत्व इसे अत्यंत पावरफुल</span> और पुरुष यौन कमजोरी में उपयोगी साबित करते है।
            </p>

        </div>
    )
}

export default Steely