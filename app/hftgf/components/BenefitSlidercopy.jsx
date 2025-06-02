'use client';
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const benefits = [
    {
        content: "लम्बा और चट्टान जैसा सख्त लिंग",
        img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4f3cea52-dcd7-40af-403e-55d3669fee00/public",
    },
    {
        content: "बिना झड़े लंबी सेक्स टाइमिंग",
        img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b8d43fb8-8189-4267-4503-91f3e0fef000/public",
    },
    {
        content: "4 राउंड तक सेक्स बिना थके",
        img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a476c20d-865d-418b-41c6-f37ad50b0600/public",
    },
    {
        content: "डिस्चार्ज के बाद भी नेक्स्ट राउंड के लिए कड़कपन",
        img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ae45e9d2-70cf-458a-2eeb-4dda75237000/public",
    },
];

const BenefitSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoPlayRef = useRef();

    const nextItem = () => {
        setCurrentIndex((prev) => (prev + 1) % benefits.length);
    };

    const prevItem = () => {
        setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
    };

    useEffect(() => {
        autoPlayRef.current = nextItem;
    });

    useEffect(() => {
        const play = () => autoPlayRef.current();
        const interval = setInterval(play, 4000);
        return () => clearInterval(interval);
    }, []);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

    return (
        <div className="relative w-full sm:h-[550px] h-[400px] overflow-hidden bg-black">
            <div className="absolute inset-0 flex items-center justify-center">
                {benefits.map((benefit, index) => {
                    const offset = (index - currentIndex + benefits.length) % benefits.length;
                    if (offset >= 3) return null;

                    const isActive = offset === 0;

                    const leftPos = isMobile
                        ? isActive
                            ? "50%"
                            : offset === 1
                                ? "90%"
                                : "10%"
                        : isActive
                            ? "50%"
                            : offset === 1
                                ? "80%"
                                : "20%";

                    const widthVal = isMobile
                        ? isActive
                            ? "75vw"
                            : "40vw"
                        : isActive
                            ? "20vw"
                            : "12vw";

                    const baseStyle = {
                        position: "absolute",
                        top: `${10 + offset * 5}%`,
                        left: leftPos,
                        transform: `translateX(-50%) scale(${isActive ? 1 : 0.8})`,
                        width: widthVal,
                        opacity: isActive ? 1 : 0.6,
                        zIndex: isActive ? 3 : 1,
                        transition: "all 0.6s ease-in-out",
                        filter: isActive ? "none" : "blur(2px)",
                    };

                    return (
                        <div
                            key={index}
                            style={baseStyle}
                            className="text-center text-white"
                        >
                            <img
                                src={benefit.img}
                                alt={`Benefit ${index + 1}`}
                                className="w-full rounded-xl shadow-lg"
                            />
                            <div className="sm:mt-5 mt-3 font-extrabold sm:text-2xl text-xl text-yellow-500">
                                {benefit.content}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-1 transform -translate-y-1/2 z-10">
                <button onClick={prevItem} className="text-white text-md">
                    <FaAngleDoubleLeft />
                </button>
            </div>
            <div className="absolute top-1/2 right-1 transform -translate-y-1/2 z-10">
                <button onClick={nextItem} className="text-white text-md">
                    <FaAngleDoubleRight />
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {benefits.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-1 h-1 rounded-full cursor-pointer ${i === currentIndex ? "bg-white" : "bg-gray-500"}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default BenefitSlider;





/* 
.benefit-carousel-container {
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.benefit-carousel-items {
  position: relative;
  width: 100%;
  height: 100%;
}

.benefit-carousel-item {
  position: absolute;
  font-size: 24px;
  font-weight: bold;
  color: #495057;
  border-radius: 10px;
  transition: all 0.5s ease;
  overflow: hidden;
}


.benefit-carousel-nav {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.benefit-carousel-nav button {
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.benefit-carousel-nav button:hover {
  background-color: #0056b3;
}

.benefit-carousel-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  z-index: 10;
}

.benefit-carousel-dots span {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #ced4da;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.benefit-carousel-dots span.active {
  background-color: #007bff;
} 
*/
