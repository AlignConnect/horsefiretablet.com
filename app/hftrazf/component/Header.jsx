import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { Noto_Serif_Devanagari } from "next/font/google";
import Image from "next/image";

const noto = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Header = () => {
  return (
    <div className="">
      <div className="hidden sm:block">
        <div className="relative">
          <img
            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/afd9a754-dec4-41a1-5e3d-a1e8cd4ffa00/public"
            width="100%"
            height="100%"
            loading="lazy"
            fetchPriority="high"
          />
          <div className="absolute z-10 -translate-x-1/2 -translate-y-1/2 top-[55%] lg:top-[65%] left-1/2 w-full h-full">
            <div className="px-3 grid grid-cols-2 align-middle ">
              <div className="ms-[10%] lg:ms-[25%]">
                <h1 className="text-[3vw] lg:text-[2.5vw] italic bg-gradient-to-b font-bold fontAnton uppercase  from-[#0067ea] via-[#0eadf1] to-[#00c1eb] bg-clip-text text-transparent fontAnton">
                  India's No. 1 Sex Booster
                </h1>

                <h2 className="text-[5vw] font-extrabold text-[#ad2b15] fontBitter leading-none ">
                  HORSE FIRE TABLET
                </h2>

                <p className="text-[2.5vw] leading-none my-7 me-[25%]">
                  सर्दी में रोमांचक सेक्स के लिए करें खुद को तैयार
                </p>

                <div className="bg-gradient-to-t from-[#065730] to-[#19793a] rounded-se-[50px] rounded-es-[50px] text-white py-4 px-5 text-[1.6vw] font-bold inline fontAnton uppercase">
                  +20 Lakh Satisfied Customers
                </div>

                <img
                  src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a52a5628-b9d4-4f37-76a8-2536c519c100/public"
                  width="70%"
                  height="100%"
                  loading="lazy"
                  fetchPriority="high"
                  className="mt-5 lg:mt-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden">
        <div className="relative ">
          <img
            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4727b64d-1227-45e3-2e3a-c079c5466800/public"
            width="100%"
            height="100%"
            loading="lazy"
            fetchPriority="high"
          />

          <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[52%] text-center left-1/2 z-10 w-full h-full">
            <p className="text-[6.5vw] italic bg-gradient-to-b font-bold fontAnton uppercase  from-[#0067ea] via-[#0eadf1] to-[#00c1eb] bg-clip-text text-transparent ">
              India's No. 1 Sex Booster
            </p>
            <h2 className="text-[10vw] font-black text-[#ad2b15]  leading-none mt-1">
              HORSE FIRE TABLET
            </h2>
            <p className="text-[5.8vw] leading-none] font-semibold ">
              सर्दी में रोमांचक सेक्स के लिए करें खुद को तैयार
            </p>
          </div>

          <div className="absolute -translate-x-1/2 -translate-y-1/2  text-center -bottom-[10%] left-1/2 z-20 w-full ">
            <div className="bg-gradient-to-t from-[#065730] to-[#19793a] rounded-se-[50px] rounded-es-[50px] text-white py-3 px-5 text-[4.6vw] font-bold inline fontAnton uppercase">
              +20 Lakh Satisfied Customers
            </div>

            <img
              src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a52a5628-b9d4-4f37-76a8-2536c519c100/public"
              width="80%"
              height="100%"
              loading="lazy"
              fetchPriority="high"
              className="mt-3 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
