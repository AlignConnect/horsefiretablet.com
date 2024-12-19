import React from "react";
import Image from "next/image";

const Section8 = () => {
  return (
    <section className="bg-primary">
      <div className="w-full md:max-w-4xl m-auto  px-3">
        <div className="flex justify-center items-center pt-10">
          <Image
            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/16d77477-c7d6-4a5e-b565-9de2894a8400/public"
            width={0}
            height={0}
            sizes="100vw"
            className="w-96"
            loading="lazy"
          />
        </div>
      </div>
      ;
    </section>
  );
};

export default Section8;
