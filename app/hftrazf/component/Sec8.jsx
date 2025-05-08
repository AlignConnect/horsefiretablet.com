import dynamic from "next/dynamic";
import React from "react";


const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_2'), {
  loading: () => <p>loader</p>
});

const sec8 = () => {
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
    <div className="bg-white px-3 py-7 sm:py-16">
      <div className="max-w-7xl mx-auto ">
        <p className="text-center text-xl sm:text-[2vw] font-bold leading-normal">
          इस सर्दी अपनी पार्टनर को सेक्स में संतुष्टि देने और सेक्सुअल लाइफ में रोमांच भरने
          <br /> <span className="text-red-700">के लिए आज ही Horse Fire Tablet को अपने लाइफ का हिस्सा बनाये !</span>
        </p>
      
      </div>
      <MostSelling />

     
    </div>
  );
};

export default sec8;
