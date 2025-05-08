const Section5 = () => {

    const listproductBene11 = [
        { title: 'लिंग की लम्बाई 22 CM यानि 9 इंच तक तथा मोटाई भी बढ़ सकती है।', image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7f69fc94-0a28-4fd0-8019-4cb922830300/public', para: 'लिंग की लम्बाई' },
        { title: 'पोर्न एक्टर्स की तरह ताकत, जोश और बॉडी में स्टैमिना का निर्माण होगा।', image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6c8704dc-9788-496f-aaea-95bbd0084500/public', para: 'स्टैमिना का निर्माण' },
        { title: '2 मिनट से कम या 3-4 मिनट की अवधि उछल कर 45 मिनट से ज्यादा होगी।', image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/535f1f77-5d3b-4c16-622c-11f388e19f00/public', para: 'सेक्स टाइमिंग' },
        { title: '65 साल के पुरुष का भी लिंग उत्तेजित होगा, सेक्स की इच्छा जाग्रत हो जाएगी।', image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/51714e36-813c-4ac6-2d26-389416286f00/public', para: 'सेक्स के प्रति इच्छा' },
    ]

    return (
        <div className='w-full '>

            <div className="py-5 md:py-10 bg-gray-100">
                <div className="max-w-4xl mx-auto px-3">
                    <h1 className="text-[8vw] text-center font-bold md:text-[3vw] leading-none">Horse Fire <span className="text-blue-500">खाने के बाद</span></h1>

                    <div className="space-y-5 md:space-y-10 mt-3 md:mt-8 text-[1rem] md:text-xl font-semibold">
                        {listproductBene11.map((e, key) => {
                            return <div className="rounded-3xl border border-blue-500 grid grid-cols-12 gap-5 items-center" key={key}>
                                <img src={e.image} alt="pic" className="col-span-4 sm:col-span-2 rounded-l-3xl" width='100%' height='100%' loading="lazy" />
                                <div className="col-span-8 sm:col-span-10 pt-5 pb-2">
                                    <p className="text-2xl md:text-3xl ">{e.para}</p>
                                    <p className=" text-gray-700 ">{e.title}</p>

                                </div>
                            </div>
                        })}
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Section5