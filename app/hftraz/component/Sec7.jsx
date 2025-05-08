import React from "react";
import Image from "next/image";

const sec7 = () => {
  const herbs = [
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e1288639-310d-450a-a045-87b31573ae00/public",
      para: "लम्बी सेक्स अवधि जोरदार प्रदर्शन",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/37a6efdc-1aee-43ab-735b-794fa06b2200/public",
      para: "लिंग की लम्बाई और सख्ती में वृद्धि",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a6ca660d-954d-4039-be30-d856c3f7e900/public",
      para: "बार बार सेक्स करने की उत्तेजना",
    },
    {
      img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a621ec64-e827-4b31-406a-59f0268dce00/public",
      para: "दमदार स्टैमिना और भरपूर शक्ति",
    },
   
  ];

  return (
    <div className="">
      <div className="relative ">
        <div className="relative z-10 py-5 sm:py-10 px-3 sm:px-0">
          <div className="text-center">
            <p className="text-3xl sm:text-5xl font-black ">मात्र 4 सप्ताह में <br/><span className="text-red-600">अनुभव करें</span></p>
          
        
            <div className="max-w-7xl mx-auto mt-5 sm:mt-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-10">
              {herbs.map((e, key) => {
                return (
                  <div className="" key={key}>
                    <img
                      src={e.img}
                      width="100%"
                      height="100%"
                      loading="lazy"
                      className=" mx-auto h-[50vw] sm:h-[20vw]"
                    />

                    <h2 className="font-bold text-xl sm:text-3xl mt-3 sm:mt-5">{e.para}</h2>
                  </div>
                );
              })}
            </div>

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

export default sec7;
