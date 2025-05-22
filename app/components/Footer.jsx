import dynamic from "next/dynamic";
import React from "react";

const AFAds = dynamic(() => import("@/app/commonUse/AFAds/AFAds"), {
  loading: () => <p>Loading...</p>,
});

const Footer = () => {
  return (

    <div className="">
      <div className="pb-3 bg-white">
        <AFAds />
      </div>
      <div style={{ backgroundColor: 'black' }}>
        <div className="max-w-3xl text-center text-white mx-auto px-3 py-5 md:text-xl text-md">
          <h1 className="md:text-2xl text-md font-bold ">
            Horse Fire Tablet Copyright ©2024.
          </h1>
          <h2 >
            All rights reserved | Privacy policy | Report
          </h2>
          <p >
            The results may vary depending on your individual features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
