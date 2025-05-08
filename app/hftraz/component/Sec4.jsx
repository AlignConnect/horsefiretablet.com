import React from "react";
import Image from "next/image";

const sec4 = () => {
  const herbs = [
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ec6bc9a6-77e4-4f1d-1e58-6e92a2e1c700/public",
      title: "अश्वगंधा",
      para: "कई शोधों से प्रमाणित हुआ है की अश्वगंधा के इस्तेमाल से टेस्टोस्टेरोन और सेक्स स्टैमिना में जोरदार वृद्धि होती है।",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b9313347-691c-4ae4-e002-859948ad1700/public",
      title: "शिलाजीत",
      para: "शिलाजीत कहे या नेचुरल वियाग्रा, यह पुरुषों में जोश, उत्तेजना, स्टैमिना और सेक्स टाइमिंग बढ़ाने में मदद करता है।",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b6966304-184d-4eab-cea1-8a60c3140b00/public",
      title: "कौंचा",
      para: "कौंचा पुरूषों में थकान और कमजोरी दूर कर कामोत्तेजना की वृद्धि करने के लिए मुख्य तौर से जाना जाता है।",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cbd7ea17-4f15-44ae-7ef8-d7d9f2c48500/public",
      title: "सफेद मूसली",
      para: "सफ़ेद मूसली बेहतरीन टेस्टोस्टेरोन बूस्टर है। इसके इस्तेमाल से इरेक्शन और स्टैमिना में आसानी से बृद्धि होती है।",
    },
   
  ];

  return (
    <div className="">
      <div className="relative ">
        <div className="relative z-10 py-5 sm:py-10 px-3 sm:px-0">
          <div className="text-center">
            <p className="text-3xl sm:text-5xl font-black ">Proven Sexual</p>
            <p className="text-[1.8rem] sm:text-6xl text-red-600 font-black">
              Power Booster Herbs
            </p>
            <p className=" sm:text-2xl max-w-5xl mx-auto text-zinc-900 mt-2">
              Unlock your sensual potential with our proven sexual power booster
              herbs, carefully crafted to ignite passion and enhance intimacy.
            </p>

            <div className="max-w-7xl mx-auto mt-5 sm:mt-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-10">
              {herbs.map((e, key) => {
                return (
                  <div className=" border-white border-4 sm:border-[15px] rounded-lg shadow-xl bg-[#fffbe8] py-3 sm:pt-8 sm:pb-5 px-1 sm:px-4" key={key}>
                    <img
                      src={e.img}
                      width="100%"
                      height="100%"
                      loading="lazy"
                      className="w-40 mx-auto"
                    />

                    <h2 className="font-black text-3xl mt-3">{e.title}</h2>
                    <p className="font-semibold mt-1 text-[1.1rem] sm:text-xl ">{e.para}</p>
                  </div>
                );
              })}
            </div>

            <p className="text-xl sm:text-3xl font-bold mt-8 sm:mt-16"><span className="text-red-600">Horse Fire के प्रत्येक टेबलेट में आयुर्वेद की </span>14 सबसे उपयोगी यौनवर्धक जड़ीबूटियां उचित कॉम्बिनेशन में समाहित है। यह हर तरह के पुरुष गुप्त रोग को <span className="text-red-600">जड़ से मिटाने के लिए सिद्ध है।</span> </p>
            </div>
          </div>
        </div>
        <Image
          src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/88179681-a14c-4ca9-a4c0-f9e9d1778300/public"
          fill
          loading="lazy"
          fetchPriority="high"
        />
      </div>
    </div>
  );
};

export default sec4;
