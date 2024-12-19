import React from "react";

const sec9 = () => {
  const array = [
    {
      para: "सुबह और रात्रि भोजन के बाद एक टेबलेट दूध/पानी के साथ ",
    },
    {
      para: "बेहतर परिणाम के लिए 1 गिलास दूध के साथ लें",
    },
    {
      para: "एक महीने के अंदर सेक्स प्रदर्शन में सुधार अनुभव करें",
    },
  ];

  return (
    <div className="bg-zinc-300 px-3 py-7 sm:py-16">
      <div className="max-w-7xl mx-auto ">
        <p className="text-center text-[5.5vw] sm:text-4xl font-black leading-normal uppercase">
          Right Way of <span className="text-red-700">Consumption </span>
        </p>
        <div className="grid sm:grid-cols-3 items-center mt-3 sm:mt-10 gap-5 sm:gap-16" >
        {array.map((e, key) => {
          return (
              <div className="grid grid-cols-12 items-center gap-3" key={key}>
                <div className="col-span-3 text-4xl font-extrabold text-center border-[10px] border-zinc-100 fontPoppins h-20 rounded-full place-content-center bg-white">{key + 1}</div>
                <div className="col-span-9 text-xl font-semibold">{e.para}</div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default sec9;
