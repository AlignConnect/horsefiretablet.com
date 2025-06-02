'use client';
import React, { useState, useEffect } from "react";
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
    const [activeIndex, setActiveIndex] = useState(1);
    const [transitioning, setTransitioning] = useState(false);
    const [direction, setDirection] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 640);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            goNext();
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const getCardIndex = (position) => {
        const total = benefits.length;
        if (position === "left") {
            return (activeIndex - 1 + total) % total;
        } else if (position === "center") {
            return activeIndex;
        } else {
            return (activeIndex + 1) % total;
        }
    };

    const goNext = () => {
        if (transitioning) return;
        setDirection("right");
        setTransitioning(true);
        setActiveIndex((prev) => (prev + 1) % benefits.length);
        setTimeout(() => setTransitioning(false), 500);
    };

    const goPrev = () => {
        if (transitioning) return;
        setDirection("left");
        setTransitioning(true);
        setActiveIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
        setTimeout(() => setTransitioning(false), 500);
    };

    return (
        <div className="w-full mx-auto sm:py-8 py-2 sm:px-2 px-1">
            <div className="relative flex items-center justify-center">
                {/* Navigation buttons */}
                <button
                    onClick={goPrev}
                    className="absolute left-0 z-20 bg-white/80 hover:bg-white rounded-full p-1 shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Previous benefit"
                >
                    <FaAngleDoubleLeft className="text-gray-800 text-xs" />
                </button>

                <button
                    onClick={goNext}
                    className="absolute right-0 z-20 bg-white/80 hover:bg-white rounded-full p-1 shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Next benefit"
                >
                    <FaAngleDoubleRight className="text-gray-800 text-xs" />
                </button>

                {/* Carousel container */}
                <div className="relative w-full sm:h-[400px] h-[250px] flex items-center justify-center overflow-hidden">
                    {/* Left card */}
                    <div
                        className={`absolute transition-all duration-500 ease-in-out ${transitioning && direction === "right" ? "animate-slide-out-left" : ""
                            }`}
                        style={{
                            transform: isMobile
                                ? "translateX(-90%) scale(0.65) translateY(40px)"
                                : "translateX(-110%) scale(0.75) translateY(60px)",
                            filter: "blur(2px)",
                            zIndex: 10,
                        }}
                    >
                        <div className="w-[200px]">
                            <img
                                src={benefits[getCardIndex("left")].img}
                                alt="Benefit"
                                className="w-full h-[160px] object-cover rounded-xl shadow-lg"
                            />
                            {/* <div className="font-extrabold text-base pt-2 bg-yellow-500 text-center rounded-xl p-2 mt-2">
                                {benefits[getCardIndex("left")].content}
                            </div> */}
                        </div>
                    </div>

                    {/* Center card */}
                    <div
                        className={`absolute transition-all duration-500 ease-in-out ${transitioning && direction === "right"
                            ? "animate-jump-in-right"
                            : transitioning && direction === "left"
                                ? "animate-jump-in-left"
                                : ""
                            }`}
                        style={{
                            transform: "translateX(0) scale(1)",
                            filter: "blur(0)",
                            zIndex: 20,
                        }}
                    >
                        <div className="w-[200px] sm:w-[270px]">
                            <img
                                src={benefits[getCardIndex("center")].img}
                                alt="Benefit"
                                className="w-full sm:h-[290px] h-[150px] object-cover rounded-xl shadow-lg"
                            />
                            <div className="font-extrabold  sm:text-[1.2rem] pt-3 py-1 px-1 bg-yellow-500 text-center rounded-xl mt-4 leading-tight" >
                                {benefits[getCardIndex("center")].content}
                            </div>
                        </div>
                    </div>

                    {/* Right card */}
                    <div
                        className={`absolute transition-all duration-500 ease-in-out ${transitioning && direction === "left" ? "animate-slide-out-right" : ""
                            }`}
                        style={{
                            transform: isMobile
                                ? "translateX(90%) scale(0.65) translateY(40px)"
                                : "translateX(110%) scale(0.75) translateY(60px)",
                            filter: "blur(2px)",
                            zIndex: 10,
                        }}
                    >
                        <div className="w-[200px]">
                            <img
                                src={benefits[getCardIndex("right")].img}
                                alt="Benefit"
                                className="w-full h-[160px] object-cover rounded-xl shadow-lg"
                            />
                            {/* <div className="font-extrabold text-base pt-2 bg-yellow-500 text-center rounded-xl p-2 mt-2">
                                {benefits[getCardIndex("right")].content}
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination indicators */}
            <div className="flex justify-center mt-8 space-x-2">
                {benefits.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (!transitioning) {
                                setDirection(index > activeIndex ? "right" : "left");
                                setTransitioning(true);
                                setActiveIndex(index);
                                setTimeout(() => setTransitioning(false), 500);
                            }
                        }}
                        className={`w-1 h-1 rounded-full transition-all ${index === activeIndex
                            ? "bg-yellow-500 scale-125"
                            : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to benefit ${index + 1}`}
                    />
                ))}
            </div>

            {/* Animation styles */}
            <style jsx global>{`
                @keyframes jump-in-right {
                    0% {
                        transform: translateX(100%) scale(0.8);
                        opacity: 0;
                    }
                    50% {
                        transform: translateX(50%) scale(1.2);
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(0) scale(1);
                    }
                }

                @keyframes jump-in-left {
                    0% {
                        transform: translateX(-100%) scale(0.8);
                        opacity: 0;
                    }
                    50% {
                        transform: translateX(-30%) scale(1.1);
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(0) scale(1);
                    }
                }

                @keyframes slide-out-left {
                    to {
                        transform: translateX(-100%) scale(0.7);
                        opacity: 0;
                    }
                }

                @keyframes slide-out-right {
                    to {
                        transform: translateX(100%) scale(0.7);
                        opacity: 0;
                    }
                }

                .animate-jump-in-right {
                    animation: jump-in-right 0.5s ease-out forwards;
                }

                .animate-jump-in-left {
                    animation: jump-in-left 0.5s ease-out forwards;
                }

                .animate-slide-out-left {
                    animation: slide-out-left 0.5s ease-in forwards;
                }

                .animate-slide-out-right {
                    animation: slide-out-right 0.5s ease-in forwards;
                }
            `}</style>
        </div>
    );
};

export default BenefitSlider;
