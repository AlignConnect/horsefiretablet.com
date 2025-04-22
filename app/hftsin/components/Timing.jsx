import React from 'react'

function Timing() {


    const How_to_works = (arr) => {
        return arr?.map((e, key) => {
            return <div className=''><div className='grid grid-cols-12' key={key}>
                <img src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ee0a72d6-ad10-487b-8e53-c638a82df500/public"} className='col-span-1 w-10 mx-auto px-1' alt='right_tick' />
                <p className='col-span-11 fontNoto text-white text-justify text-[1.1rem] md:text-[1.4rem] px-2 pb-2'>{e.work_content}</p>
            </div >
                <hr className='mx-3' />,
            </div>
        })
    }


    return (
        <section>
            <div className="bg-[url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/721c3752-318c-46f4-7902-cb2dc4ea8100/public')] bg-cover" >
                <p className="fontNoto text-white text-[1.1rem] md:text-[1.4rem] px-2 py-7">
                    आज के समय में <span className="text-yellow-400 fontPoppins"> Horse Fire Tablet </span> यौन कमजोर पुरुषो की मर्दानगी बढ़ाने में सर्वाधिक इस्तेमाल हो रहा है और भारतीय पुरुष इसके प्रभाव से काफी संतुष्ट भी पाए जा रहे है। पुरुषों में हॉर्सफायर टेबलेट की लोकप्रियता की वजह से बाजार में इसकी मांग काफी बढ़ गयी है।
                </p>

                <img
                    className='w-80 md:w-3/4 mx-auto py-7'
                    src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/765b5153-4a15-40fa-b46a-0af6c6939000/public"}
                    alt='header_img'
                    fetchPriority='high'
                />


                <div className="fontNoto bg-red-600 md:w-1/3 w-1/2 mx-auto pt-3 text-white font-extrabold text-2xl md:text-2xl rounded-xl">
                    <a href="#form" >अभी आर्डर करें</a>
                </div>

                <p className="fontNoto text-white text-[1.1rem] md:text-[1.4rem] px-2 py-7">
                    <span className="text-yellow-400 fontPoppins"> Horse Fire Tablet </span> की मदद से अपनी शीघ्रपतन, लिंग में ढीलापन, छोटापन, पतलापन, टेढ़ापन व एनर्जी और स्टैमिना की कमी जैसी समस्याओं को जड़ से मिटाये और सेक्स लाइफ में खुशियों की बहार लाएं।
                </p>

            </div>


            <div className="bg-black md:pt-5">
                <div className="talk-bubble tri-right round btm-left">
                    <div className="talktext px-10 md:px-36 pt-4 ">
                        <p className='fontNoto font-extrabold text-2xl md:text-3xl'>जानिए Horse Fire किस<br /> प्रकार काम करता है?</p>
                    </div>
                </div>
            </div>
            <div className="bg-black md:px-5 px-2">
                {
                    How_to_works([
                        {
                            work_content: "इसके पीछे कोई राज या चमत्कार नहीं बल्कि विज्ञान है। कॉर्पस केवरोसोम (Corpus cavernosum) ये लिंग का एक भाग होता है। जब ये रक्त से पूरी तरह भर जाता है तो लिंग के आकार में बृद्धि हो जाती है यानि खड़ा हो जाता है।"
                        },
                        {
                            work_content: "Horse Fire रक्त प्रवाह में सुधार करने के साथ कोशिकाओं के निर्माण की प्रक्रिया में भी सहायक होता है जिससे कॉर्पस केवरोसोम(Corpus cavernosum) का विस्तार होता है। लिंग स्वतः ही कड़ा और खड़ा हो जाता है।"
                        },
                        {
                            work_content: "यह टेस्टोस्टेरोन हॉर्मोन का लेवल बढ़ाने में मदद करता है जिससे एनर्जी ऊर्जा और लिंग के कड़कपन में मदद मिलती है। यह सेरोटोनिन इत्यादि ख़ुशी वाले हॉर्मोन रिलीज़ करता है जिससे प्रेशर काम होता है और सेक्स टाइमिंग बढ़ती है।  "
                        }
                    ])
                }
            </div>


           
        </section>
    )
}

export default Timing;