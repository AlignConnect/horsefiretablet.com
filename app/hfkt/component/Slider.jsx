"use client";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const SliderData = [
    {
      gif: "/main/hfkt_images/01-min.mp4",
      title: "लम्बी सेक्स अवधि जोरदार प्रदर्शन",
    },

    {
      gif: "/main/hfkt_images/02-min.mp4",
      title: "लिंग की लम्बाई और सख्ती में वृद्धि",
    },

    {
      gif: "/main/hfkt_images/03-min.mp4",
      title: "बार बार सेक्स की उत्तेजना ",
    },

    {
      gif: "/main/hfkt_images/04-min.mp4",
      title: "दमदार स्टैमिना और भरपूर शक्ति",
    },
  ];

  const nextSlide = () => {
    setcurrentIndex(
      currentIndex === SliderData.length - 1 ? 0 : currentIndex + 1
    );
  };

  const preSlide = () => {
    setcurrentIndex(
      currentIndex === 0 ? SliderData.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="">
      <div className="fontPoppins text-[#a32d16] text-2xl md:text-4xl text-center font-extrabold pt-4 md:py-5">
        इसके इस्तेमाल से अनुभव करें
      </div>
      <div className="flex justify-center overflow-hidden">
        {SliderData.map((item, i) => {
          return (

            <div className="relative py-2" key={i}>
              <div className="flex flex-col justify-center items-center">

                <video className={
                  currentIndex === i
                    ? " md:w-[600px] md:h-[350px] w-[100%] h-[250px]  bg-cover block rounded-lg "
                    : "hidden "
                } autoPlay muted loop >
                  <source src={item.gif} type="video/mp4" />
                </video>
                <AiOutlineArrowLeft
                  className="absolute text-red left-2 md:left-5 top-[40%] text-4xl font-bold bg-white rounded-full p-2  cursor-pointer"
                  onClick={preSlide}
                />
                <AiOutlineArrowRight
                  className="absolute right-2 md:right-6 top-[40%] text-4xl font-bold bg-white rounded-full p-2 cursor-pointer"
                  onClick={nextSlide}
                />
              </div>
              <div>
                <h1
                  className={
                    currentIndex === i
                      ? "fontPoppins font-bold text-md  md:text-2xl py-1 text-black w-full md:pt-3 px-2 text-center mb-3 "
                      : "hidden"
                  }
                >
                  {item.title}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
