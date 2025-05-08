import Image from "next/image";
import React from "react";

const Sec6 = () => {
  return (
    <div className="">
      <div className="relative ">
        <div className="relative z-10 pt-8 sm:pt-10  text-white max-w-5xl mx-auto px-3">
          <div className="grid sm:grid-cols-12 gap-5 ">
            <div className="sm:col-span-4 order-2 sm:order-1">
              <img
                src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9cd610c5-ecf4-43a2-37c8-b4620aa12f00/public"
                width="100%"
                loading="lazy"
              />
            </div>
            <div className="sm:col-span-8 order-1 sm:order-2">
              <div className="flex items-center gap-2 sm:gap-5">
                <div className="">
                  <p className="font-extrabold text-2xl sm:text-3xl ">डॉ विनय सोलंकी</p>
                  <p className=" text-2xl ">साइकोलॉजिस्ट</p>
                  <p className="text-xl sm:text-2xl ">PHD in Psychology</p>
                </div>
                <div className="w-5/12 sm:w-3/12">
                  <img
                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/80d243ac-f82f-4e46-bebe-318da5965100/public"
                    width="100%"
                    loading="lazy"
                  />
                </div>
              </div>

              <p className="text-xl leading-relaxed mt-5">सेक्स कपल्स के बीच प्यार को बढाता है पर सेक्स कमजोरी की वजह से यह प्यार कम होने लगता है। महिला पार्टनर को यौन संतुष्टि नहीं मिलने पर यह प्यार किसी अन्य आकर्षित पुरुष पर केंद्रित हो जाता है। पुरुष को अपने स्वास्थ्य पर ध्यान देना चाहिए। अगर पुरुष कमजोरी है तो निसंकोच Horse Fire Tablet आर्डर करें। इसके इस्तेमाल से अपनी सेक्स समस्या जड़ से मिटायें और महिला पार्टनर की खुशियों का ध्यान रखें। </p>
            </div>
          </div>
        </div>
        <Image
          src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/14db041d-9d8d-46c6-cf80-c5088ae42200/public"
          fill
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Sec6;
