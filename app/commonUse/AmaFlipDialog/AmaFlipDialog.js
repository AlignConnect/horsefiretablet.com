import { useGlobalContext } from "@/app/statemanage/context";




import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Noto_Serif_Devanagari } from "next/font/google";
import { IconButton } from '@mui/material';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import BitlyLinks from "@/components/hooks/Bitly-links";


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const AmaFlipDialog = ({ type }) => {

    const links = BitlyLinks();


    const { isPopupOpen, closePopup } = useGlobalContext();

    const [ChLink, setChLink] = useState({
        checkout: links?.flipkartCheckout,
        close: links?.close,
        amzn: links?.amazonCheckout,
        ar: links?.arCheckout
    })


    useEffect(() => {

        setChLink({
            checkout: links?.flipkartCheckout,
            close: links?.close,
            amzn: links?.amazonCheckout,
            ar: links?.arCheckout
        })

    }, [links])




    // useEffect(() => {


    //     switch (type) {

    //         case "exo":
    //             setChLink({ checkout: "https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d", close: 'https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d', amzn: "https://www.amazon.in/Ayurveda-HorseFire-Tablet-Men/dp/B0BYJ8KM7S/ref=pd_rhf_cr_s_pd_crcd_d_sccl_1_4/259-5652770-9119827?th=1", ar: "https://arayurveda.shop/products/horse-fire-tablets" })
    //             break;
    //         case "ts":
    //             setChLink({ checkout: "https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d", close: 'https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d', amzn: "https://www.amazon.in/Ayurveda-HorseFire-Tablet-Men/dp/B0BYJ8KM7S/ref=pd_rhf_cr_s_pd_crcd_d_sccl_1_4/259-5652770-9119827?th=1", ar: "https://arayurveda.shop/products/horse-fire-tablets" })
    //             break;

    //         case "bng":
    //             setChLink({ checkout: "https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d", close: 'https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d', amzn: "https://www.amazon.in/Ayurveda-HorseFire-Tablet-Men/dp/B0BYJ8KM7S/ref=pd_rhf_cr_s_pd_crcd_d_sccl_1_4/259-5652770-9119827?th=1", ar: "https://arayurveda.shop/products/horse-fire-tablets" })
    //             break;

    //         case "english":
    //             setChLink({ checkout: "https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d", close: 'https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d', amzn: "https://www.amazon.in/Ayurveda-HorseFire-Tablet-Men/dp/B0BYJ8KM7S/ref=pd_rhf_cr_s_pd_crcd_d_sccl_1_4/259-5652770-9119827?th=1", ar: "https://arayurveda.shop/products/horse-fire-tablets" })

    //             break;
    //         default:
    //             setChLink({ checkout: "https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d", close: 'https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d', amzn: "https://www.amazon.in/Ayurveda-HorseFire-Tablet-Men/dp/B0BYJ8KM7S/ref=pd_rhf_cr_s_pd_crcd_d_sccl_1_4/259-5652770-9119827?th=1", ar: "https://arayurveda.shop/products/horse-fire-tablets" })
    //             break;
    //     }


    //     return () => {

    //     }
    // }, [])


    return (
        <div >

            <Dialog
                open={isPopupOpen}
                maxWidth='xs'
                sx={{
                    "& .MuiPaper-root.MuiDialog-paper": {
                        mx: 1,
                        my: 0,
                        maxHeight: 'calc(100% - 0px)'
                    }
                }}
            >
                <DialogContent sx={{
                    px: 1,
                    py: 2
                }}>
                    <IconButton
                        aria-label="close"
                        LinkComponent={"a"}
                        href={ChLink.close}
                        onClick={() => {
                            closePopup();
                            // window.location.href = "https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d";

                        }}
                        sx={{
                            position: 'absolute',
                            top: 2,
                            right: 5,
                            color: 'black',
                            border: '1px solid black',
                            zIndex: 1000,
                            px: "2px",
                            py: "1px"
                        }}
                    >
                        <IoMdClose className="w-[20px]" />
                    </IconButton>

                    <div className="">


                        {/* // FLIPKART */}
                        <div className="pb-4 w-[99%] mx-auto ">



                            <div className="flex items-center">





                                <div className="w-[65%] relative">

                                    <div className="absolute right-5 ">
                                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/34d3a54e-ce20-4c0a-4b55-052f66910a00/public" alt="sdsd" loading="lazy" />
                                    </div>



                                    <div>
                                        <small className="text-white  bg-[#01a3a0] px-2 py-1 rounded-sm uppercase">Best Seller</small>
                                    </div>

                                    <div className="flex items-center gap-1 my-2">
                                        <div className="bg-[green] text-sm my-1 flex items-center text-white gap-2 px-2 rounded-[3px]">
                                            <div>4.1 </div>
                                            <div><FaStar className="" /></div>
                                        </div>
                                        <div className="text-sm">Based On</div>
                                    </div>

                                    <div>
                                        <div className="flex items-center text-[green]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStarHalfAlt />
                                        </div>

                                        <div>
                                            <p className="text-[14px] pt-1 font-bold text-black">7330 Ratings &  1138 Reviews</p>
                                        </div>

                                        <div>
                                            <p className="text-[12px] text-black"><b>1500+ people  bought</b> in last 30 days</p>
                                        </div>



                                    </div>

                                    <div>
                                        <p className="text-[13px] pt-4 font-semibold mycolor text-black"><b>Flipkart</b> से खरीदने के लिए क्लिक करें</p>
                                    </div>

                                </div>


                                <div className="w-[35%] relative -top-3">
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b3919aa5-df84-4cbe-e8c3-dfd1d6c93e00/public" alt="ads" loading="lazy" className="" />
                                </div>


                            </div>

                            <div className="flex items-center border p-2 justify-between gap-5">

                                <div className="w-[50%] text-center">
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1369a0a5-d191-4392-bf47-5c170ecb8600/public" alt="asdasd" loading="lazy" className="object-cover w-[70%] mx-auto sm:w-[50%]" />
                                </div>



                                <div className="w-[50%] text-center">
                                    <a href={ChLink.checkout} className="bg-[#fc641b]  text-white text-[10px] sm:text-sm py-2 px-3 sm:px-5 block myx">BUY NOW</a>
                                </div>

                            </div>

                        </div>

                        {/* //----------------------------------------------------------------- */}

                        <div className="pb-4 w-[99%] mx-auto ">
                            <div className=" flex items-center">
                                {/* <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1c0bc244-a4e1-460e-ec1a-71cb2e9c2b00/public" alt="sdsd" loading="lazy" className="w-full object-cover" /> */}


                                <div className="w-[65%] relative">

                                    <div className="absolute right-5 ">
                                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7107dea8-1bd1-42c3-f00a-b23872642900/public" alt="sdsd" loading="lazy" />
                                    </div>

                                    {/* <div>
                                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e5e3cf8b-f566-49b4-b428-2b4762b26400/public" alt="sdsd" loading="lazy" className="w-[100px]" />
                                    </div> */}

                                    <div>
                                        <small className="text-white  bg-black px-2 py-1 rounded-sm">Amazon's <span className="text-[#f9a32b]">Choise</span></small>
                                    </div>
                                    <div className="flex items-center gap-1 my-2">
                                        <div className="bg-[#f9a32b] text-sm my-1 flex items-center text-white gap-2 px-2 rounded-[3px]">
                                            <div>4.1 </div>
                                            <div><FaStar className="" /></div>
                                        </div>
                                        <div className="text-sm">Based On</div>
                                    </div>

                                    <div>
                                        <div className="flex items-center text-[#f9a32b]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStarHalfAlt />
                                        </div>

                                        <div>
                                            <p className="text-[14px] pt-1 font-bold text-black">991 global Ratings</p>
                                        </div>

                                        <div>
                                            <p className="text-[12px] text-black"><b>2000+ people  bought</b> in last 30 days</p>
                                        </div>



                                    </div>

                                    <div>
                                        <p className="text-[13px] pt-4 font-semibold mycolor text-black"><strong>Amazon</strong> से खरीदने के लिए क्लिक करें</p>
                                    </div>

                                </div>


                                <div className="w-[35%] relative -top-3">
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b3919aa5-df84-4cbe-e8c3-dfd1d6c93e00/public" alt="ads" loading="lazy" className="" />
                                </div>


                            </div>

                            <div className="flex items-center border p-2 justify-between gap-5">

                                <div className="w-[50%] text-center">
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3edacd08-1afb-49b1-9aba-2cdda7681400/public" alt="asdasd" loading="lazy" className="object-cover w-[70%] mx-auto sm:w-[50%]" />
                                </div>

                                {/* <div>
                                    <p className="text-[10px] sm:text-sm px-2">से खरीदने के लिए क्लिक करें</p>
                                </div> */}

                                <div className="w-[50%] text-center">
                                    <a href={ChLink.amzn} className="bg-[#fc641b]  text-white text-[10px] sm:text-sm py-2 px-3 sm:px-5 block myx">BUY NOW</a>
                                </div>

                            </div>

                        </div>


                        <div className="pb-4 w-[99%] mx-auto ">
                            <div className=" flex items-center">
                                {/* <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1c0bc244-a4e1-460e-ec1a-71cb2e9c2b00/public" alt="sdsd" loading="lazy" className="w-full object-cover" /> */}


                                <div className="w-[65%] relative">


                                    <div className="absolute right-5 ">
                                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c633761b-37e6-4b13-0e70-aa7810098400/public" alt="sdsd" loading="lazy" />
                                    </div>

                                    <div>
                                        <small className="text-white  bg-black px-2 py-1 rounded-sm">Customer Choise</small>
                                    </div>

                                    <div className="flex items-center gap-1 my-2">
                                        <div className="bg-[green] text-sm my-1 flex items-center text-white gap-2 px-2 rounded-[3px]">
                                            <div>4.1 </div>
                                            <div><FaStar className="" /></div>
                                        </div>
                                        <div className="text-sm">Based On</div>
                                    </div>

                                    <div>
                                        <div className="flex items-center text-[#f9a32b]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStarHalfAlt />
                                        </div>

                                        <div>
                                            <p className="text-[14px] pt-1 font-bold text-black">823 Reviews</p>
                                        </div>

                                        <div>
                                            <p className="text-[12px] font-bold text-black"><b className="text-[#fc641b]">EXTRA 10% OFF</b> ON ONLINE PAYMENT</p>
                                        </div>

                                        <div>
                                            <p className="text-[12px] text-black"><b>3500+ people  bought</b> in last 30 days</p>
                                        </div>



                                    </div>

                                    {/* <div>
                                        <p className="text-[12px] pt-4 font-semibold mycolor"><b>OFFICIAL WEBSITE</b> से खरीदने के लिए क्लिक करें</p>
                                    </div> */}

                                </div>



                                <div className="w-[35%] relative -top-3">
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b3919aa5-df84-4cbe-e8c3-dfd1d6c93e00/public" alt="ads" loading="lazy" className="" />
                                </div>


                            </div>

                            <div className="w-full">
                                <p className="text-[12px] pt-4 font-semibold mycolor text-black"><b>OFFICIAL WEBSITE</b> से खरीदने के लिए क्लिक करें</p>
                            </div>


                            <div className="flex items-center border p-2 justify-between gap-5">

                                <div className="w-[50%] text-center">
                                    <img src="https://arayurveda.shop/cdn/shop/files/logo_ac0cc0ca-a61d-4e10-803b-1bd55dec84bd.gif?v=1736327202&width=150" alt="asdasd" loading="lazy" className="object-cover w-[70%] mx-auto sm:w-[50%]" />
                                </div>

                                {/* <div>
                                    <p className="text-[10px] sm:text-sm px-2">से खरीदने के लिए क्लिक करें</p>
                                </div> */}

                                <div className="w-[50%] text-center">
                                    <a href={ChLink.ar} className="bg-[#fc641b]  text-white text-[10px] sm:text-sm py-2 px-3 sm:px-5 block myx">BUY NOW</a>
                                </div>

                            </div>

                        </div>

                        {/* 
                        <div className="py-4">
                            <div className="w-[95%] mx-auto">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/912432d1-5a7f-4a57-1b75-3bc708d05500/public" alt="sdsd" loading="lazy" className="w-full object-cover" />
                            </div>

                            <div className="flex items-center border my-3 p-2 justify-between">

                                <div>
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3edacd08-1afb-49b1-9aba-2cdda7681400/public" alt="asdasd" loading="lazy" className="object-cover w-[85px] sm:w-[100px]" />
                                </div>

                                <div>
                                    <p className="text-[10px] sm:text-sm px-2">से खरीदने के लिए क्लिक करें</p>
                                </div>

                                <div>
                                    <a href={ChLink.checkout} className="bg-[#fc641b] text-white text-[10px] sm:text-sm py-2 px-3 sm:px-5 block myx">BUY NOW</a>
                                </div>

                            </div>


                        </div> */}


                        {/* <div className="py-4">
                            <div className="w-[95%] mx-auto">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/24c9d810-1aed-471b-35e1-345967a27600/public" alt="sdsd" loading="lazy" className="w-full object-cover" />
                            </div>


                            <div className="flex items-center border my-3 p-2 justify-between">

                                <div>
                                    <img src="https://arayurveda.shop/cdn/shop/files/logo_ac0cc0ca-a61d-4e10-803b-1bd55dec84bd.gif?v=1736327202&width=150" alt="asdasd" loading="lazy" className="object-cover w-[85px] sm:w-[100px]" />
                                </div>

                                <div>
                                    <p className="text-[10px] sm:text-sm px-2">से खरीदने के लिए क्लिक करें</p>
                                </div>

                                <div>
                                    <a href={"https://arayurveda.shop/products/horse-fire-tablets"} className="bg-[#fc641b] text-white text-[10px] sm:text-sm py-2 px-3 sm:px-5 block myx">BUY NOW</a>

                                </div>

                            </div>
                        </div> */}

                    </div>

                    {/* 
                    <div className={`${noto.className}   text-black`}>
                        <div className="bg-[white] ">

                            <section className="text-end " style={{ fontFamily: "sans-serif" }}>

                                <div className='text-center'>
                                    <section className="w-full pyd-2">
                                        <a href={ChLink.checkout} style={{ textDecoration: 'none' }}><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/87383624-e24f-4d1c-c588-52ac0c861300/public" alt="no" className="" /></a>
                                    </section>

                                    <section className="p-2 bg-[white] text-center font-bold border border-white rounded-[5px] mx-2 flex justify-center items-center gap-2" >
                                        <div className='w-[3rem] md:w-[5rem]'  >
                                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/edb2a474-9f8b-4f9d-5286-162720cb6600/public" alt="no" className="w-full" />
                                        </div>

                                        <div className='text-md'>
                                            Buy from Trusted Website
                                        </div>
                                    </section>

                                    <div className='text-md ' >
                                        Flipkart से खरीदने के लिए निचे क्लिक करें
                                    </div>

                                    <div className="grid justify-center my-1">
                                        <div className="flex items-center gap-2">
                                            <div className="fingImg11">
                                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/624185b0-363f-4a93-6efc-538c054a9d00/public" alt="" width={'100%'} />
                                            </div>

                                            <div className="AmaFlipPop" style={{ paddingTop: '-0.5rem' }}>
                                                <a href={ChLink.checkout} style={{ textDecoration: 'none' }}><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1369a0a5-d191-4392-bf47-5c170ecb8600/public" className='OrderNowPopAmaFlip' alt="pic" style={{ width: '75%' }} /></a>
                                            </div>


                                            <div className="fingImg">
                                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/624185b0-363f-4a93-6efc-538c054a9d00/public" alt="" width={'100%'} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-md  mt-5 mb-2 font-noto' >
                                        Amazon से खरीदने के लिए निचे क्लिक करें
                                    </div>
                                    <div className="grid justify-center">
                                        <div className="flex items-center gap-2">
                                            <div className="fingImg11">
                                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/624185b0-363f-4a93-6efc-538c054a9d00/public" alt="" width={'100%'} />
                                            </div>

                                            <div className="AmaFlipPop" style={{ paddingTop: '-0.5rem' }}>
                                                <a href={ChLink.amzn} style={{ textDecoration: 'none' }}>
                                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3edacd08-1afb-49b1-9aba-2cdda7681400/public" className='OrderNowPopAmaFlip' alt="pic" style={{ width: '75%' }} /></a>
                                            </div>


                                            <div className="fingImg">
                                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/624185b0-363f-4a93-6efc-538c054a9d00/public" alt="" width={'100%'} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='font-noto bg-[#ffa800] pt-2 my-4 -mx-1 px-1 rounded-md text-center font-bold text-md'>आपकी यौन समस्या का 100% गारंटीड इलाज</div>

                                </div>

                            </section>
                        </div>
                    </div> */}

                </DialogContent>

            </Dialog>
        </div>
    )
}

export default AmaFlipDialog