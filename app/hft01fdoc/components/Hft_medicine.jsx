import React from 'react'
import YoutubeFrame from "@/app/commonUse/Youtubefile/YoutubeFrame"
import Order_now from './Order_now'

function Hft_medicine() {
    return (
        <section>
            <div className="w-full max-w-7xl text-center mx-auto">

                <div className="fontPoppins text-[#1e4389] sm:text-5xl text-3xl font-extrabold sm:py-10 py-5">
                    Horsefire <span className="fontNoto"> एक विशेष औषधि</span>
                </div>


                <div className="grid sm:grid-cols-2 items-center  bg-[#deefff] mx-2">

                    <div className="">
                        <p className="text-black text-left fontNoto text-[1.2rem] md:text-2xl py-3 sm:px-4 px-2">
                            <span className="fontPoppins">Horse Fire Tablet</span> इन जैसी 16 बेस्ट जड़ीबूटियों और भस्मों का बेस्ट संयोजन है। इसके लैब टेस्टिंग के दौरान पाया गया कि मार्केट में उपलब्ध कई प्रोडक्ट की तुलना में इसका फार्मूलेशन सबसे बेस्ट है। यह पुरुष यौन समस्या पर दूसरों की तुलना में ज्यादा सटीक असर करता है। यह नेचुरल तरीके से पुरुष प्रमुख सेक्सुअल हॉर्मोन टेस्टोस्टेरोन में बृद्धि करता है।
                        </p>
                    </div>

                    <div className="">
                        <img
                            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/559860be-1f72-41e2-97e9-af0467d82e00/public"
                            alt="product_penis"
                            className="w-full mx-auto"
                            fetchPriority='high'
                            loading='eager' />

                    </div>

                </div>


                <p className="text-black text-center fontNoto italic font-semibold text-[1.3rem] md:text-2xl sm:py-6 py-5 px-2 sm:px-60">
                    <span className="fontPoppins">Horse Fire Tablet</span> का नियमित सेवन करने पर पुरुष जोशीले बनने लगते है। पार्ट में लोहे के रॉड जैसी सख्ती मिलने लगती है जो घंटो तक बनी रहती है। टाइमिंग और स्टैमिना में जोरदार बढोत्तरी होती है जिससे कोई भी पुरुष नॉनस्टॉप प्रदर्शन कर सकता है।
                </p>




                <div className="fontPoppins text-[#1e4389] sm:text-4xl text-3xl font-extrabold ">
                    Horsefire Tablet<span className="fontNoto"> पर ग्राहकों की प्रतिक्रिया </span>
                </div>


                <p className="text-black text-center fontNoto text-[1.3rem] md:text-2xl sm:py-8 py-2 px-2 sm:px-60">
                    समस्या पर अपने सटीक असर की वजह से Horsefire Tablet ने ऑनलाइन मार्केट में धूम मचा दिया है। कमजोर पुरुष इसके मदद से जोश, स्टैमिना, टाइमिंग और कड़कपन बढ़ाकर असली मर्दानगी का अनुभव कर रहे है, ग्राहकों की प्रतिक्रिया आप खुद देख सकते है-
                </p>

                {/* <div className="fontPoppins mx-auto sm:mx-0 sm:text-3xl text-xl py-1 rounded-md my-2 font-semibold">
                    Customer's review video
                </div> */}

                <div className="grid sm:grid-cols-2 sm:gap-10">
                    <div className="mx-3 sm:w-[100%]  sm:mx-auto sm:my-5 my-3">
                        <YoutubeFrame vid={"5dpQUMR_kRI"} />
                    </div>
                    <div className="mx-3 sm:w-[100%]  sm:mx-auto sm:my-5 my-3">
                        <YoutubeFrame vid={"FTeZiPHqf_k"} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hft_medicine