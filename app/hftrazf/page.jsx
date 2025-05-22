"use client";
import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";
import React, { useEffect } from "react";

const Header = dynamic(() => import("./component/Header"));

const Sec1 = dynamic(() => import("./component/Sec1"));
const Sec2 = dynamic(() => import("./component/Sec2"));
const Sec3 = dynamic(() => import("./component/Sec3"));
const Sec4 = dynamic(() => import("./component/Sec4"));
const Sec5 = dynamic(() => import("./component/Sec5"));
const Sec6 = dynamic(() => import("./component/Sec6"));
const Sec7 = dynamic(() => import("./component/Sec7"));
const Sec8 = dynamic(() => import("./component/Sec8"));
const Sec9 = dynamic(() => import("./component/Sec9"));
const Sec10 = dynamic(() => import("./component/Sec10"));
const Form = dynamic(() => import("./component/Form"));
const Review = dynamic(() => import("@/app/hfopt/components/CustomerReview"));
const Footer = dynamic(() => import("@/app/commonUse/Footer"));
const Footerpop = dynamic(() =>
  import("@/app/commonUse/bottompopup/BottomHandler")
);

const Order = dynamic(() => import("@/app/commonUse/AmaFlipDialog/FlipAmazon"));

const noto = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const page = () => {
  useEffect(() => {
    localStorage.setItem("PATH_KEY", "/hftrazf");
  }, []);

  return (
    <div className={`${noto.className}`}>
      <Header />

      <Sec1 />

      <div className="my-2">
        <Order />
      </div>
      <Sec2 />
      <div className="my-2">
        <Order />
      </div>
      <Sec3 />
      <div className="my-2">
        <Order />
      </div>
      <Sec4 />
      <div className="my-2">
        <Order />
      </div>
      <Sec5 />
      <div className="my-2">
        <Order />
      </div>
      <Sec6 />
      <div className="my-2">
        <Order />
      </div>
      <Sec7 />
      <div className="my-2">
        <Order />
      </div>
      <Sec8 />
      <div className="my-2">
        <Order />
      </div>
      <Sec9 />
      <div className="my-2">
        <Order />
      </div>
      <Sec10 />
      <div className="bg-[#d13131]">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-[95%] mx-auto rounded-lg py-5 z-10 text-center">
            <div className="font-bold text-xl bg-yellow-500 sm:text-3xl text-white w-60 sm:w-80 z-20 px-5 rounded-full text-center pt-2 absolute transform -translate-x-1/2 -translate-y-1/2 top-0 left-1/2">
              नक्कालों से सावधान !
            </div>

            <div className="p-2 text-[1rem] sm:text-lg bg-[#d13131] text-white pt-7 pb-0 relative z-10">
              <p>
                Horse Fire Tablet की बढ़ती लोकप्रियता को देखते हुए मार्केट में
                कुछ नकली विक्रेता आ गए है। ध्यान से AR Ayurveda ब्रांड देखकर ही
                प्रोडक्ट खरीदें !
              </p>
            </div>
          </div>
        </div>
      </div>
      <Form />
      <div className="bg-white">
        <Review />
      </div>

      <Footer />
      <Footerpop />
    </div>
  );
};

export default page;
