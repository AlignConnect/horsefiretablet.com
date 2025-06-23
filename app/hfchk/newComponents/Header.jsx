import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

// Helper functions and components
import { reactStarIcon } from "../utils/Hfq";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { changeSelectedProduct, selectProductById } from "@/lib/slice/product.slice";

// React Slick Carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShiProcket from "@/app/commonUse/Shiprocket";

// Styles for zoom functionality
// import styles from "./Header.module.css";

const Header = () => {
    const { productsdata, selectProducts, allVariants } = useSelector(
        (state) => state.productslice
    );


    const dispatch = useDispatch();

    const [ProductData, setProductData] = useState({
        title: "",
    });



    useEffect(() => {
        setProductData({
            title: productsdata?.title,
        });
    }, [productsdata]);



    const sliderRef = useRef(null);

    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index); // Navigate to the specified slide
    };


    let [ImageValue, setImageValue] = useState(0)

    // Handle product selection
    const handleClick = (e) => {
        dispatch(selectProductById({ selectProductData: e }));
    };

    // React Slick Carousel settings
    const settings = {
        customPaging: function (i) {

            let valueX = i;



            // Ensure the `images` array exists before making changes
            valueX = ImageValue == valueX ? productsdata?.images.length - 1 : i


            return <img
                src={productsdata?.images?.[valueX]?.src}
                alt={`Thumbnail ${i}`}
                className="w-full mx-auto min-h-[70px]"
            />
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb h-[90px] sm:h-[120px]",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        initialSlide: 0,
        autoplaySpeed: 3000,
        className: "h-[69vh] sm:h-[80vh] sm:botton-0",
    };




    const [zoomStyle, setZoomStyle] = useState({});
    const [showZoom, setShowZoom] = useState(false);

    const handleMouseMove = (e, imgs) => {

        if (!showZoom) {
            return
        }

        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse X relative to the image
        const y = e.clientY - rect.top;  // Mouse Y relative to the image
        const width = rect.width;
        const height = rect.height;

        // Calculate background position for the zoomed image
        const backgroundPosX = (x / width) * 100;
        const backgroundPosY = (y / height) * 100;

        setZoomStyle({
            backgroundImage: `url(${imgs})`,
            backgroundPosition: `${backgroundPosX}% ${backgroundPosY}%`,
            backgroundSize: `${width * 2}px ${height * 2}px`, // Adjust zoom level here
        });
    };



    return (
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-5 pb-5 sm:py-10 ">
            {/* Image Carousel and Zoom */}
            <div className="relative w-full">
                <div className="top-1">
                    <Slider ref={sliderRef} {...settings}>
                        {productsdata?.images?.map((img, index) => {



                            if (productsdata?.images.length - 1 === index) {
                                return;
                            }


                            let valueX = index;

                            // Ensure the `images` array exists before making changes
                            valueX = ImageValue == valueX ? productsdata?.images.length - 1 : index



                            return <div key={index}
                                className=""
                                onMouseMove={(e) => handleMouseMove(e, img?.src)}
                                onMouseEnter={() => setShowZoom(true)}
                                onMouseLeave={() => setShowZoom(false)}
                            >
                                <img
                                    // id="zoomedImage"
                                    style={{ cursor: "cell" }}
                                    src={productsdata?.images?.[valueX]?.src}
                                    alt={`Product ${index + 1}`}
                                    className="w-full"
                                />
                                {/* <div className={"imgZoomResult"}></div> */}
                            </div>
                        })}
                    </Slider>
                </div>
            </div>

            {/* Product Details */}
            <div>

                {showZoom ? <div className="zoomed-image" style={zoomStyle}></div> :
                    <div className="bg-[#edf3e1] p-5 rounded-md">
                        <div>
                            <h1 className="text-xl sm:text-3xl poppinsFont font-semibold">
                                {ProductData.title}
                            </h1>
                            <div className="text-[17px] poppinsFont flex items-center">
                                <div className="py-5">{reactStarIcon(5)}</div>
                                <div className="p-3">4.8</div>
                                <div className="text-gray-700">(68 Reviews)</div>
                            </div>
                        </div>

                        <div className="poppinsFont">
                            <div className="font-semibold flex items-center gap-3">
                                <div className="text-xl">
                                    &#8377;{parseInt(selectProducts?.price)}
                                </div>
                                <strike className="text-[14px] text-gray-600">
                                    &#8377;{parseInt(selectProducts?.compare_at_price)}
                                </strike>
                                <Badge className="rounded-xl bg-[#dc661d]">
                                    SAVE &nbsp;
                                    <span className="text-[9px] font-[500]">
                                        &#8377; {parseInt(selectProducts?.compare_at_price - selectProducts?.price)}
                                    </span>
                                </Badge>
                            </div>

                            <div className="py-5 text-gray-600">
                                <p className="text-[17px]">Size: {selectProducts?.title}</p>
                            </div>

                            <div className="flex items-center gap-5">
                                {allVariants?.map((e, key) => (
                                    <div key={key} className="text-lg">
                                        <Button

                                            className={`border border-green-700 ${selectProducts?.id === e?.id ? "bg-green-700 text-white" : ""
                                                }`}
                                            variant="filled"
                                            id={key}
                                            onClick={(ef) => {


                                                if (ef.target.id > 0) {
                                                    setImageValue(6)
                                                } else {
                                                    setImageValue(0)
                                                }

                                                goToSlide(0)
                                                handleClick(e)
                                            }}
                                        >
                                            Pack of {key === 0 ? "2" : "1"}
                                        </Button>
                                    </div>
                                ))}
                            </div>

                            <div className="py-5 flex items-center text-[16px] font-[400]">
                                <p>Availability: - </p>
                                <p className="text-green-700">&nbsp;Ready to Ship</p>
                            </div>

                            <div className="">
                                {/* <Button className="min-w-[250px] py-5 bg-green-700">BUY NOW</Button> */}
                                {/* <ShiProcket /> */}
                                <div>
                                    <a href='/checkout' className="bg-green-700 fontJosefin sm:text-xl text-center text-white font-semibold pt-1 pb-1 mt-3 sm:mt-0 px-4 rounded w-full mx-auto sm:px-14">
                                        BUY NOW
                                    </a>
                                </div>
                            </div>

                            <div className="my-5">
                                <img
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d2c6cc63-5062-4275-245d-b44dcd948c00/public"
                                    alt="Promo"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div >
    );
};

export default Header;
