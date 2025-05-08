import dynamic from "next/dynamic";
import React from "react";

const CommonImg = dynamic(() => import("./CommonImg"), {
  loading: () => <p>Loading...</p>,
});

const Hftpro = () => {
  return (
    <div className="bg-red-600 ">
      <div className="max-w-3xl mx-auto relative mt-[5rem] md:mt-[12rem]">
        <div className={`flex flex-col md:text-4xl items-end mr-4 uppercase text-white fontPoppins py-5`}>
          <h1 className="font-bold"> upto 50% off </h1>
          <p className=""> Limited offer !!! </p>
        </div>
        <div>
          <div className="absolute bottom-0 w-2/4">
            <CommonImg imglink="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7b3e6326-8160-428d-c23e-0521f1821200/public" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hftpro;
