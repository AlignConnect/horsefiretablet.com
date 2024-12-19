function ChangeLife() {

    const life_chagne_medicine = [
        {
            content: "Horse Fire Tablet का इस्तेमाल करने के बाद मिनट या 2 मिनट के अंदर डिस्चार्ज होने वाले पुरुष भी घंटो सेक्स का लुत्फ़ उठाने लगते है।",
            image: '/main/hfm_images/gif_2.mp4'
        },
        {
            content: "कमजोर लिंग रॉड जैसा सख्त और मजबूत हो जाता है और ये कड़कपन लगातार घंटे भर सेक्स के बाद भी ढीला नहीं पड़ता।",
            image: '/main/hfm_images/gif_3.mp4'
        },
        {
            content: "इसका मतलब वो पुरुष भी नॉनस्टॉप घंटो सेक्स कर सकते है जो कभी 2 मिनट में झड़ जाता था और अपने कमजोर लिंग की वजह से दुखी थे। ",
            image: '/main/hfm_images/gif_1.mp4'
        }
    ]

    return (
        <div>
            <div>
                <div className="text-center fontArya md:text-3xl text-2xl pt-3 font-extrabold">
                    बदल जाएगी आपकी <span className="text-red-600">सेक्स लाइफ</span>
                </div>
                {life_chagne_medicine.map((e, key) => {
                    return <div className="my-4 md:my-6 grid sm:grid-cols-2 grid-cols-1 gif_background gap-1 items-center md:gap-0" key={key}>
                        <div className={`w-full h-full ${key == 1 ? 'md:order-1' : ''}`}>
                            <video className='w-full h-full' autoPlay muted loop>
                                <source src={e.image} type="video/mp4" className='h-full' />
                            </video>
                        </div>
                        <div className="w-full px-2">
                            <h3 className="fontArya py-3  text-white text-md md:text-xl text-justify">{e.content}</h3>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ChangeLife