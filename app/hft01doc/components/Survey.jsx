import React from 'react'

function Survey() {

    const Tablet_benifits = (arr) => {
        return arr?.map((e, key) => {
            return <div className='sm:py-4 py-2' key={key}>
                <div className=" w-36 h-36 overflow-hidden rounded-full mx-auto">
                    <img src={e.tablet_benifit_icon} className="w-[100%] h-[100%] bg-cover" alt="" />
                </div>
                <div className='fontNoto sm:pt-3 pt-2 md:text-2xl text-xl font-semibold text-center px-2'>{e.tablet_benifit_title}</div>
            </div >
        })
    }

    return (
        <section className="bg-[url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/575c67ab-06b2-4c37-2047-9c1a4656ae00/public')] bg-cover" >
            < div className="w-full max-w-7xl text-center mx-auto" >

                <p className="text-black text-justify fontNoto text-[1.3rem] md:text-2xl sm:py-10 py-5 px-2">
                    "दोस्तों, दशकों से आज तक कई सर्वे होते आ रहे है जिसमे पुरुष भाग लेते है। इस सर्वे में ये पता चला है की पुरुषों में शीघ्रपतन, पार्ट में ढीलापन, स्टैमिना और एनर्जी की कमी जैसी यौन समस्या तेजी से बढ़ रही है। ऐसे में पुरुषों की को चाहिये <span className="fontPoppins">Horse Fire Tablet</span> जैसी असरदार औषधि जो समस्या पर तेजी से असर करें और इसे जड़ से उखाड़ फेके।"
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {
                        Tablet_benifits([
                            {
                                tablet_benifit_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5eb2966f-f04c-4ff9-413d-da02f52c8800/public",
                                tablet_benifit_title: "लिंग की लम्बाई-मोटाई में वृद्धि"
                            },
                            {
                                tablet_benifit_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/47d90df4-7431-40d7-ec34-5a68991fce00/public",
                                tablet_benifit_title: "सेक्स समय अवधि में वृद्धि "
                            },
                            {
                                tablet_benifit_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6e76a204-e211-47c5-e28f-ccef356eb500/public",
                                tablet_benifit_title: "स्टैमिना में वृद्धि थकान से राहत"
                            },
                            {
                                tablet_benifit_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/335e30e4-e514-4130-6662-5341d0587100/public",
                                tablet_benifit_title: "जोश और आत्मविश्वास में वृद्धि"
                            }
                        ])
                    }
                </div>


                <div className="grid sm:grid-cols-2 items-center sm:py-5 py-3">

                    <div className="">
                        <p className="text-black text-justify fontNoto text-[1.3rem] md:text-2xl py-3 px-2">
                            <span className="fontPoppins">Horse Fire Tablet</span> एक शुद्ध नेचुरल और आयुर्वेदिक औषधि है। आयुर्वेद को सदियों से सबसे सफल और दुष्प्रभाव मुक्त चिकित्सा पद्धति के तौर पर जाना जाता है। आयुर्वेद का अनुसरण और जड़ीबूटियों का रिसर्च कर यह औषधि तैयार की गयी है। <span className="fontPoppins">Horse Fire</span> पुरुष यौन कमजोरी का सबसे प्रभावी समाधान बनकर उभरा है, क्योंकि इसमें आयुर्वेद की सबसे मशहूर जड़ीबूटियों की उच्चतम क्वालिटी इस्तेमाल में लिया गया है।
                        </p>
                    </div>

                    <div className="">
                        <img
                            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ce57081d-0569-45fb-eab4-a2b093fada00/public"
                            alt="hft_certificate"
                            className="sm:w-full w-full  px-2"
                            fetchPriority='high'
                            loading='eager' />

                    </div>

                </div>

            </div >
        </section >
    )
}

export default Survey