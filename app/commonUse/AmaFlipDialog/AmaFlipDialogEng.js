import { useGlobalContext } from "@/app/statemanage/context";




import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Noto_Serif_Devanagari } from "next/font/google";
import { IconButton } from '@mui/material';
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
        <div>

            <Dialog
                open={isPopupOpen}
                maxWidth='xs'
                sx={{
                    "& .MuiPaper-root.MuiDialog-paper": {
                        mx: 2,
                        my: 0,
                        maxHeight: 'calc(100% - 40px)'
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
                            // window.location.href = ChLink.close;
                        }}
                        sx={{
                            position: 'absolute',
                            right: { xs: 5, sm: 20 },
                            top: 5,
                            color: 'black',
                            border: '1px solid black',
                            px: 1,
                            py: 0
                        }}
                    >
                        x
                    </IconButton>
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

                                    <div className='text-sm font-extrabold font-noto ' >
                                        Click the link below to buy from Flipkart
                                    </div>

                                    <div className="grid justify-center my-1">
                                        <div className="flex items-center gap-2">
                                            <div className="fingImg11">
                                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/624185b0-363f-4a93-6efc-538c054a9d00/public" alt="" width={'100%'} />
                                            </div>

                                            <div className="AmaFlipPop pop_imagehfv" style={{ paddingTop: '-0.5rem' }}>
                                                <a href={ChLink.checkout} style={{ textDecoration: 'none' }}><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1369a0a5-d191-4392-bf47-5c170ecb8600/public" className='OrderNowPopAmaFlip' alt="pic" style={{ width: '75%' }} /></a>
                                            </div>


                                            <div className="fingImg">
                                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/624185b0-363f-4a93-6efc-538c054a9d00/public" alt="" width={'100%'} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-sm  mt-5 mb-4 font-noto font-extrabold' >
                                        Click the link below to buy from Amazon
                                    </div>
                                    <div className="grid justify-center">
                                        <div className="flex items-center gap-2">
                                            <div className="fingImg11">
                                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/624185b0-363f-4a93-6efc-538c054a9d00/public" alt="" width={'100%'} />
                                            </div>

                                            <div className="AmaFlipPop pop_imagehfv" style={{ paddingTop: '-0.5rem' }}>
                                                <a href={ChLink.amzn} style={{ textDecoration: 'none' }}>
                                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3edacd08-1afb-49b1-9aba-2cdda7681400/public" className='OrderNowPopAmaFlip' alt="pic" style={{ width: '75%' }} /></a>
                                            </div>


                                            <div className="fingImg">
                                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/624185b0-363f-4a93-6efc-538c054a9d00/public" alt="" width={'100%'} />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="grid justify-center">
                                        <div className="flex items-center gap-2">
                                            <div className="fingImg11">
                                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/624185b0-363f-4a93-6efc-538c054a9d00/public" alt="" width={'100%'} />
                                            </div>

                                            <div className="AmaFlipPop pop_imagehfv" style={{ paddingTop: '-0.5rem' }}>
                                                <a href={ChLink.amzn} style={{ textDecoration: 'none' }}>
                                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3edacd08-1afb-49b1-9aba-2cdda7681400/public" className='OrderNowPopAmaFlip' alt="pic" style={{ width: '75%' }} /></a>
                                            </div>


                                            <div className="fingImg">
                                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/624185b0-363f-4a93-6efc-538c054a9d00/public" alt="" width={'100%'} />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='font-noto bg-[#ffa800] pt-2 my-4 -mx-1 px-1 rounded-md text-center font-bold text-md'>100% Guaranteed solution to your sexual problem</div>

                                </div>

                            </section>
                        </div>
                    </div>

                </DialogContent>

            </Dialog>
        </div>
    )
}

export default AmaFlipDialog