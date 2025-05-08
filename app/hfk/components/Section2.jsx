import dynamic from 'next/dynamic';

const Ordernow = dynamic(() => import('./Ordernow'), {
    loading: () => <p>load</p>
});
const Section2 = () => {

    const peopleManage = [{
        image: "/main/hfk_images/1aa.png",
        para1: "5 मिलियन+ ",
        para2: "संतुष्ट ग्राहक",
    }, {
        image: "/main/hfk_images/3a.png",
        para1: "कैश ऑन ",
        para2: "डिलीवरी",
    }, {
        image: "/main/hfk_images/4.png",
        para1: "100% ",
        para2: "प्रामाणिक",
    },
    ]

    return (
        <div className="w-full max-w-3xl mx-auto mb-5">
            <div className=" grid grid-cols-3 sm:hidden bg-white text-center py-3 fontPoppins font-bold mx-3 rounded-xl ">

                {peopleManage.map((e, key) => {
                    return <div className="" key={key}>
                        <img src={e.image} alt="pic" width='100%' height='100%' loading='lazy' className='w-8/12 mx-auto' />
                        <p className="mt-3">{e.para1} <br /> {e.para2}</p>
                    </div>
                })}
            </div>

            <div className="text-white px-3 mt-10 sm:mt-0">
                <div className="grid grid-cols-12 items-center font-extrabold ">

                    <video className='col-span-12 sm:col-span-4 w-full' autoPlay muted loop>
                        <source src="/main/hfk_images/ezgif_com-optimize.mp4" type="video/mp4" />
                    </video>

                    <div className="col-span-12 sm:col-span-8 ">
                        <div className="bg-sky-400 pb-2 pt-5 px-3 sm:p-5 shadow-inner shadow-black">
                            <h1 className="text-5xl ">कड़वा सच!</h1>
                            <p className="text-2xl sm:text-4xl font-bold mt-3 sm:mt-5 leading-tight">अगर कोई पुरुष अपने महिला पार्टनर को संतुष्ट नहीं कर पाता तो वह दूसरे पुरुष की खोज करेगी !</p>
                        </div>
                    </div>
                </div>
                <p className="text-xl sm:text-2xl pt-4 text-justify">आज के समय में एक्स्ट्रा मैरिटल अफेयर यानि शादी के बाद भी दूसरे पुरुष से रिश्ता बनाना और अपने पति को धोखा देना यौन कमजोरी का एक जिवंत उदाहरण है। महिलाये यौन संतुष्टि के लिए अपने पति से बेवफाई करती है।</p>
            </div>

            <Ordernow />

        </div>
    )
}
export default Section2;