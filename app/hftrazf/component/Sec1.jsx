import React from "react";
import { Noto_Serif_Devanagari } from "next/font/google";
import dynamic from "next/dynamic";
import Image from "next/image";

const Order = dynamic(() => import("@/app/commonUse/AmaFlipDialog/FlipAmazon"));

const noto = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Sec1 = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="relative z-10 max-w-7xl mx-auto sm:py-[5vw] ">
          <div className="grid sm:grid-cols-2 items-center">
            <img
              src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/884fbc17-0b17-4752-0aa7-2dbea7721d00/public"
              width="100%"
              height="100%"
              loading="lazy"
            />

            <div className="px-4 sm:ps-[8%] sm:pe-0 py-5 sm:py-0">
              <p className="font-black text-2xl sm:text-5xl ">
                Get Ready for{" "}
                <span className="text-red-600">Winter Nights</span>
              </p>

              <p className="mt-3 sm:mt-5 text-[1.1rem] sm:text-2xl ">अगर आप भी शीघ्रपतन, और कमजोर लिंग की वजह से सर्दी की रात को रोमांचक नहीं बना पा है तो <span className="font-bold">Horse Fire Tablet</span> आजमाकर इस साल सर्दी से पहले खुद को करें तैयार और बने धमाकेदार सेक्स करने के काबिल और कड़कड़ाती ठण्ड में भी हर रात पार्टनर को दें गर्मी का एहसास !</p>
            </div>
          </div>
        </div>
        <Image
          src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9e8abdd0-0ea0-427e-f486-2919b2701000/public"
          fill
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Sec1;
