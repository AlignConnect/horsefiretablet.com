
const Section4 = () => {

    const yourBene11 = [{
        title: 'ढीला और कमजोर लिंग बन जाता है सख्त और मजबूत',
        image: '/main/hfs_images/list_1.mp4'
    },
    {
        title: 'जल्दी निकलने वाला वीर्य आता है देर से',
        image: '/main/hfs_images/list_2.mp4'
    },
    {
        title: 'कामेच्छा की कमी को दूर करके भरपूर सेक्सुअल उत्तेजना का संचार करता है',
        image: '/main/hfs_images/list_3.mp4'
    },
    {
        title: 'असंतुष्ट पार्टनर को संतुष्ट करता है',
        image: '/main/hfs_images/list_4.mp4'
    },
    {
        title: 'मर्दाना कमी को ठीक करके मर्दाना शक्ति बढ़ाता है',
        image: '/main/hfs_images/list_5.mp4'
    }]


    return (
        <div className="w-full">
            <h1 className="bg-gradient-to-t from-[#071930] via-[#0d2950] to-[#133b72] px-1 text-yellow-500 text-[1.7rem] md:text-3xl text-center font-bold pt-4 pb-1">Horse Fire Tablet का रिजल्ट</h1>

            <div className="p-3 sm:p-5 text-[1.2rem] sm:text-3xl font-bold text-center leading-tight sm:leading-snug">
                {yourBene11.map((e, key) => {
                    return <div className="border my-5 p-3 grid grid-cols-12 rounded-2xl border-black gap-3 sm:gap-5 items-center" key={key}>
                        {/* <div className="col-span-6 ">
                            <img src={e.image} alt="pic" className="rounded-2xl" width='100%' height='100%' loading="lazy" />
                        </div> */}
                        <video className='col-span-6 rounded-2xl' autoPlay muted loop>
                            <source src={e.image} type="video/mp4" />
                        </video>


                        <div className="col-span-6">{e.title}</div>
                    </div>
                })}
            </div>

            <p className="text-xl sm:text-2xl px-3 sm:px-5 -mt-3 mb-3">कमजोर सेक्स, सेक्स नहीं करने या अधूरा सेक्स करने के बराबर हैं. इसलिए <span className="text-red-500">Horse Fire Tablet</span>  की मदद से अपनी सेक्सुअल लाइफ को बनाएं Happy और रातों को बनाएं रंगीन!</p>

            <div className="mt-3 w-1/2 mx-auto">
                <a href="#form" className=""><img src="/main/hfs_images/ordernow.gif" alt="pic" width='100%' height='100%' /></a>
            </div>
        </div>
    )
}
export default Section4;