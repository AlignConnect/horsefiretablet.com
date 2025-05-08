import React from 'react'

function HftUse() {

    const Hftuse_benifits = (arr) => {
        return arr?.map((e, key) => {
            return <div className='py-2' key={key}>
                <div className='fontNoto text-3xl  font-extrabold pt-3 text-yellow-300'>{e.Hftuse_benifits_title}</div>
                <video className='md:w-1/2 w-3/4 h-full mx-auto rounded-xl py-1' autoPlay muted loop>
                    <source src={e.Hftuse_benifits_gif} type="video/mp4" className='h-full' />
                </video>
                <div className=" fontNoto text-xl md:text-xl pt-3 px-2 text-white">{e.Hftuse_benifits_content}</div>
            </div >
        })
    }

    return (
        <section className='bg-black'>
            <div className="">
                <div className="fontNoto font-extrabold text-white text-3xl  md:py-4 py-2">
                    <span className='text-red-600 font-semibold fontPoppins'>Horse Fire Tablet</span> के इस्तेमाल से पाएं
                </div>

                <div className=''>
                    {
                        Hftuse_benifits([
                            {
                                Hftuse_benifits_gif: "/main/hftsin_images/gif_1.mp4",
                                Hftuse_benifits_title: "लिंग साइज में वृद्धि",
                                Hftuse_benifits_content: "लिंग की लम्बाई 22 CM यानि 9 इंच तक तथा मोटाई भी बढ़ सकती है। "
                            },
                            {
                                Hftuse_benifits_gif: "/main/hftsin_images/gif_2.mp4",
                                Hftuse_benifits_title: "जोरदार ऊर्जा और स्टैमिना",
                                Hftuse_benifits_content: "पोर्न एक्टर्स की तरह ताकत, जोश और बॉडी में स्टैमिना का निर्माण होगा।"
                            },
                            {
                                Hftuse_benifits_gif: "/main/hftsin_images/gif_3.mp4",
                                Hftuse_benifits_title: "लम्बी सेक्स टाइमिंग ",
                                Hftuse_benifits_content: "2 मिनट से कम या 3-4 मिनट की अवधि उछल कर 45 मिनट से ज्यादा होगी।"
                            },
                            {
                                Hftuse_benifits_gif: "/main/hftsin_images/gif_4.mp4",
                                Hftuse_benifits_title: "अद्भुत जोश और उत्तेजना",
                                Hftuse_benifits_content: "65 साल के पुरुष का भी लिंग उत्तेजित होगा, सेक्स की इच्छा जाग्रत हो जाएगी।"
                            }
                        ])
                    }
                </div>


                <div className="fontNoto font-extrabold text-3xl md:text-4xl text-black pt-4 pb-1 bg-yellow-400 my-2">
                    सेवन विधि-
                </div>

                <p className="fontNoto text-white text-justify text-[1.1rem] md:text-[1.4rem] px-2 py-5">
                    <span className=" font-normal fontPoppins text-red-600">Horse Fire Tablet</span> का सेवन बहुत ही आसान है। बेहतर सेक्स टाइमिंग, रॉक हार्ड इरेक्शन, जोश-स्टैमिना और शारीरिक शक्ति के लिए 1 टेबलेट सुबह-शाम 1 गिलास गुनगुने दूध या पानी के साथ लें ! बेहतर परिणाम के लिए दूध के साथ इस्तेमाल का सुझाव दिया गया है।
                </p>


                <div className="fontNoto font-extrabold text-yellow-400 text-2xl md:text-4xl  md:py-4 py-2">
                    आप भी आजमाए, बेहतर दमखम पाए
                </div>


                <img
                    className='w-80 md:w-96 mx-auto px-2 '
                    src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/75e22348-d3bd-4948-c027-6c15b9856b00/public"}
                    alt='ubfold'
                    fetchPriority='high'
                />

                <div className="py-7">
                    <div className="fontPoppins bg-[#1dbd3f] md:w-1/3 w-1/2 mx-auto py-1 text-white font-extrabold text-xl md:text-2xl 
                outline-2 outline-offset-1 outline-dotted outline-[#1dbd3f] ">
                        UPTO 50% OFF
                    </div>
                </div>

                <p className="fontNoto text-white text-center text-[1.2rem] md:text-[1.5rem] px-2">
                    आप भी <span className=" font-normal text-red-400">"हॉर्सफायर टेबलेट"</span> के इस्तेमाल से उन लाखों पुरुषों में शामिल हो जाये जो कभी निराश थे पर आज अपनी मैरिड लाइफ में काफी खुश और संतुष्ट है।
                </p>

            </div>
        </section>
    )
}

export default HftUse