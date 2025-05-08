import Image from "next/image";
import React from "react";

const Sec2 = () => {
  const array = [
    {
      image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b7128a21-bbd8-4a6c-02c9-40581afefe00/public",
      para: "शीघ्रपतन- 2 मिनट या उससे कम समय में डिस्चार्ज",
    },
    {
      image:
      "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/767b4049-39c6-4074-b2d6-4fd80fc50600/public",
      para: "लिंग कमजोरी- छोटा, पतला या ढीला लिंग",
    },
    {
      image: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a94bdae3-f2d1-489e-35e9-6b247c87d300/public",
      para: "लो स्टैमिना- कुछ झटको में ही थकान और साँस फूलना",
    },
    {
      image:
        "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1b489d36-bf1b-43a1-f9e5-2e0686aac200/public",
      para: "लो लिबिडो- जोश, उत्तेजना या सेक्स चाहत की कमी",
    },
  ];

  return (
    <div className="">
      <div className="relative ">
        <div className="relative z-10 py-10 sm:py-20 text-center text-white px-3">

          <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-7xl font-extrabold leading-snug">
            निराशाजनक रात
            <br /> की वजह
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-5 sm:mt-10">
            {array.map((e, key) => {
              return <div className="" key={key}>
                <img
                  src={e.image}
                  width="100%"
                  loading="lazy"
                  fetchPriority="high"
                  className=" object-fill rounded-full h-[32vw] sm:h-[12vw] w-3/4 mx-auto"
                />
                <p className="mt-3 text-xl sm:text-2xl sm:mt-5 sm:px-3">{e.para}</p>
              </div>;
            })}
          </div>
          </div>
        </div>
        <Image
          src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c4817fbb-0999-4d62-dcb4-ef395ed7f700/public"
          fill
          loading="lazy"
          fetchPriority="high"
        />
      </div>
    </div>
  );
};

export default Sec2;
