import React from 'react'

function Section1() {

    const list1 = ["अद्भुत, असरदार और अविश्वसनीय",
        "10 दिनों की मनी बैक गारंटी सुविधा",
        "100% संतोषजनक परिणाम नहीं तो पैसा वापिस",
        "अभी आर्डर करें और 50% से ज्यादा की बचत करें !",
        "प्रीपेड खरीदारी पर 10% की अतिरिक्त बचत"]

    return (
        <div className='w-full text-xl sm:text-2xl  '>

            <p className="text-justify sm:text-center py-5 sm:pt-10 sm:pb-7 px-3 sm:px-12 leading-normal">Horse Fire Tablet एक शुद्ध नेचुरल और आयुर्वेदिक औषधि है। आयुर्वेद को सदियों से सबसे सफल और दुष्प्रभाव मुक्त चिकित्सा पद्धति के तौर पर जाना जाता है। आयुर्वेद का अनुसरण और जड़ीबूटियों का रिसर्च कर यह औषधि तैयार की गयी है। Horse Fire Tablet पुरुष यौन कमजोरी का सबसे प्रभावी समाधान बनकर उभरा है, क्योंकि इसमें आयुर्वेद की सबसे मशहूर जड़ीबूटियों की उच्चतम क्वालिटी इस्तेमाल में लिया गया है।</p>

            <div className="bg-black pt-10 pb-7 px-3 sm:px-14 text-white">
                <p className="text-[#f5e31f] text-3xl sm:text-5xl font-bold uppercase text-center">We Offer Extra<br /> For You!</p>
                <div className=" text-2xl sm:text-3xl mt-5 space-y-3">
                    {list1.map((e, key) => {
                        return <div className="grid grid-cols-12 gap-1 sm:gap-4 " key={key}>
                            <div className=' col-span-2 sm:col-span-1'> <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6cfcb727-c964-4d4f-3661-95140fa3df00/public" alt="pic" width='100%' height='100%' loading='lazy' className='w-6/12 mx-auto sm:w-full' /></div>
                            <p className="col-span-10 sm:col-span-11">{e}</p>
                        </div>
                    })}
                </div>
            </div>

            <div className="bg-sky-700 py-7 px-3 sm:px-14 font-bold text-[1.4rem] sm:text-4xl ">
                <p className=" text-center leading-normal text-white ">विशेष:- ये सभी कामोत्तेजक जड़ीबूटियां वैज्ञानिक रूप से प्रमाणित है और Horse Fire Tablet भी आयुष मंत्रालय भारत सकरार द्वारा प्रमाणित उत्पाद है। </p>
                <div className="fontBebas text-4xl sm:text-6xl space-y-5 my-5">

                    <p className="bg-white rounded-xl px-4 flex gap-2 sm:gap-4 items-center">
                        <p className="text-red-600 text-6xl sm:text-8xl tracking-wide leading-none pt-3">0%</p>
                        <p className=" uppercase tracking-wide mt-1">sideeffects</p>
                    </p>

                    <p className="bg-white rounded-xl px-4 flex gap-2 sm:gap-4 items-center">
                        <p className="text-red-600 text-6xl sm:text-8xl tracking-wide leading-none pt-3">4.9</p>
                        <p className=" uppercase tracking-wide mt-1">Ratings</p>
                    </p>

                    <p className="bg-white rounded-xl px-4 flex gap-2 sm:gap-4 items-center">
                        <p className="text-red-600 text-6xl sm:text-8xl tracking-wide leading-none pt-3">100%</p>
                        <p className=" uppercase tracking-wide mt-1">Satisfaction</p>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Section1