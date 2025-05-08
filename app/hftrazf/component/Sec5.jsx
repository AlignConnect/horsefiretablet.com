import Image from "next/image";
import React from "react";

const Sec5 = () => {
  const array = [
    {
      image:
        "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d2b81ada-2918-4499-2598-e57cdb581800/public",
      para: "COD Payment Available",
    },
    {
      image:
        "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f7919aa7-e7c5-400f-aee8-827de5ca8700/public",
      para: "Big Discount in Festival Season",
    },
    {
      image:
        "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8ecc3c64-53a5-48ef-7294-cb0313e0d600/public",
      para: "Save 10% Extra on Prepaid",
    },
    {
      image:
        "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/34b2ceba-7d29-47ab-ae7d-de3c5f542400/public",
      para: "First Choice of men in India",
    },
  ];

  return (
    <div className="">
      <div className="relative ">
        <div className="relative z-10 py-8 sm:py-10 text-center text-white max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 ">
            {array.map((e, key) => {
              return (
                <div className="" key={key}>
                  <img
                    src={e.image}
                    width="100%"
                    loading="lazy"
                    fetchPriority="high"
                    className=" object-fill rounded-full  w-3/4 mx-auto bg-white p-3 sm:p-10"
                  />
                  <p className="mt-3 text-xl sm:text-2xl sm:mt-5 sm:px-5">
                    {e.para}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <Image
          src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c4817fbb-0999-4d62-dcb4-ef395ed7f700/public"
          fill
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Sec5;
