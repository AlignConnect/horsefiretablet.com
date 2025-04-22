"use client";
import React, { useEffect, useMemo, useState } from 'react';
import { useGlobalContext } from "@/app/statemanage/context";
import dynamic from "next/dynamic";
import { usePathname } from 'next/navigation';


const BottomPopupCall = dynamic(() => import('./bottomPopupCall'), {
    loading: () => <p>loading</p>
});

const BottomPopupForm = dynamic(() => import('./bottomPopupForm'), {
    loading: () => <p>loading</p>
})

const BottomHandler = () => {

    const { GetCallSetting, FetchWebCheckout, callDetail, sc, isPopupOpen } = useGlobalContext();

    const data = usePathname();


    const [Ap, setAp] = useState({ api: "", key: "" });


    function checkcall() {

        // let checkcolumn = localStorage.getItem('PATH_KEY');
        let checkcolumn = "/" + data.split("/")[1];


        switch (checkcolumn) {

            case "/":
                return setAp({
                    api: process.env.NEXT_APP_URL,
                    key: process.env.NEXT_APP_API_KEY
                });
            case "/hfh":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFH,
                    key: process.env.NEXT_APP_API_KEY_HFH
                });

            case "/hft":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFT,
                    key: process.env.NEXT_APP_API_KEY_HFT
                });

            case "/hfo":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFO,
                    key: process.env.NEXT_APP_API_KEY_HFO
                });

            case "/hxt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HXT,
                    key: process.env.NEXT_APP_API_KEY_HXT
                });

            case "/hfu":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFU,
                    key: process.env.NEXT_APP_API_KEY_HFU
                });



            case "/hfd":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFD,
                    key: process.env.NEXT_APP_API_KEY_HFD
                });


            case "/hflip":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFLIP,
                    key: process.env.NEXT_APP_API_KEY_HFLIP
                });

            case "/hfq":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFQ,
                    key: process.env.NEXT_APP_API_KEY_HFQ
                });

            case "/hfkrt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFKRT,
                    key: process.env.NEXT_APP_API_KEY_HFKRT
                });


            case "/hfkt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFKT,
                    key: process.env.NEXT_APP_API_KEY_HFKT
                });

            case "/hfkart":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFKART,
                    key: process.env.NEXT_APP_API_KEY_HFKART
                });

            case "/hkart":
                return setAp({
                    api: process.env.NEXT_APP_URL_HKART,
                    key: process.env.NEXT_APP_API_KEY_HKART
                });

            case "/hfp":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFP,
                    key: process.env.NEXT_APP_API_KEY_HFP
                });

            case "/hfb":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFB,
                    key: process.env.NEXT_APP_API_KEY_HFB
                });

            case "/bhf":
                return setAp({
                    api: process.env.NEXT_APP_URL_BHF,
                    key: process.env.NEXT_APP_API_KEY_BHF
                });

            case "/bhfkt":
                return setAp({
                    api: process.env.NEXT_APP_URL_BHFKT,
                    key: process.env.NEXT_APP_API_KEY_BHFKT
                });


            case "/hfs":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFS,
                    key: process.env.NEXT_APP_API_KEY_HFS
                });


            case "/ahf":
                return setAp({
                    api: process.env.NEXT_APP_URL_AHF,
                    key: process.env.NEXT_APP_API_KEY_AHF
                });

            case "/ahfkt":
                return setAp({
                    api: process.env.NEXT_APP_URL_AHFKT,
                    key: process.env.NEXT_APP_API_KEY_AHFKT
                });

            case "/hfe":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFE,
                    key: process.env.NEXT_APP_API_KEY_HFE
                });

            case "/hfk":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFK,
                    key: process.env.NEXT_APP_API_KEY_HFK
                });

            case "/hfm":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFM,
                    key: process.env.NEXT_APP_API_KEY_HFM
                });

            case "/hftpro":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTPRO,
                    key: process.env.NEXT_APP_API_KEY_HFTPRO
                });

            case "/hftprof":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTPROF,
                    key: process.env.NEXT_APP_API_KEY_HFTPROF
                });

            case "/cjhf":
                return setAp({
                    api: process.env.NEXT_APP_URL_CJHF,
                    key: process.env.NEXT_APP_API_KEY_CJHF
                });

            // HF01A

            case "/hf01a":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF01A,
                    key: process.env.NEXT_APP_API_KEY_HF01A
                });
            // HF369A

            case "/hf369clickadu":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF369CLICKADU,
                    key: process.env.NEXT_APP_API_KEY_HF369CLICKADU
                });

            case "/hf69h":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF69H,
                    key: process.env.NEXT_APP_API_KEY_HF69H
                });

            case "/hf69hcadu":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF69HCADU,
                    key: process.env.NEXT_APP_API_KEY_HF69HCADU
                });

            case "/hf99":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF99,
                    key: process.env.NEXT_APP_API_KEY_HF99
                });

            case "/hf99n":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF99N,
                    key: process.env.NEXT_APP_API_KEY_HF99N
                });

            case "/hftsin":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTSIN,
                    key: process.env.NEXT_APP_API_KEY_HFTSIN
                });

            case "/hftdel":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTDEL,
                    key: process.env.NEXT_APP_API_KEY_HFTDEL
                });

            case "/hf71":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF71,
                    key: process.env.NEXT_APP_API_KEY_HF71
                });

            case "/hf71n":
                return setAp({
                    api: process.env.NEXT_APP_URL_HF71N,
                    key: process.env.NEXT_APP_API_KEY_HF71N
                });

            case "/hft01doc":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFT01DOC,
                    key: process.env.NEXT_APP_API_KEY_HFT01DOC
                });

            case "/hftsx":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTSX,
                    key: process.env.NEXT_APP_API_KEY_HFTSX
                });

            case "/hftsxf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTSXF,
                    key: process.env.NEXT_APP_API_KEY_HFTSXF
                });

            case "/hfrush":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFRUSH,
                    key: process.env.NEXT_APP_API_KEY_HFRUSH
                });

            case "/hftxc":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTXC,
                    key: process.env.NEXT_APP_API_KEY_HFTXC
                });

            // HFOPT
            case "/hfopt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFOPT,
                    key: process.env.NEXT_APP_API_KEY_HFOPT
                });

            case "/hxb":
                return setAp({
                    api: process.env.NEXT_APP_URL_HXB,
                    key: process.env.NEXT_APP_API_KEY_HXB
                });

            case "/hfstar":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFSTAR,
                    key: process.env.NEXT_APP_API_KEY_HFSTAR
                });

            case "/hftab":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTAB,
                    key: process.env.NEXT_APP_API_KEY_HFTAB
                });

            case "/hftalp":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTALP,
                    key: process.env.NEXT_APP_API_KEY_HFTALP
                });

            case "/hfuri":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFURI,
                    key: process.env.NEXT_APP_API_KEY_HFURI
                });

            case "/hfjsx":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFJSX,
                    key: process.env.NEXT_APP_API_KEY_HFJSX
                });

            case "/hfjflip":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFJFLIP,
                    key: process.env.NEXT_APP_API_KEY_HFJFLIP
                });

            case "/hft143":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFT143,
                    key: process.env.NEXT_APP_API_KEY_HFT143
                });


            case "/hft143f":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFT143F,
                    key: process.env.NEXT_APP_API_KEY_HFT143F
                });

            case "/hftlh6":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTLH6,
                    key: process.env.NEXT_APP_API_KEY_HFTLH6
                });

            case "/hftlh6f":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTLH6F,
                    key: process.env.NEXT_APP_API_KEY_HFTLH6F
                });

            // HFTCHECK

            case "/hftcheck":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTCHECK,
                    key: process.env.NEXT_APP_API_KEY_HFTCHECK
                });

            case "/hftchkflip":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTCHKFLIP,
                    key: process.env.NEXT_APP_API_KEY_HFTCHKFLIP
                });

            case "/hftoral69":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTORAL69,
                    key: process.env.NEXT_APP_API_KEY_HFTORAL69
                });

            case "/hftoral69f":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTORAL69F,
                    key: process.env.NEXT_APP_API_KEY_HFTORAL69F
                });


            case "/hfts":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTS,
                    key: process.env.NEXT_APP_API_KEY_HFTS
                });

            case "/hftrx":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTRX,
                    key: process.env.NEXT_APP_API_KEY_HFTRX
                });

            case "/hftrci":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTRCI,
                    key: process.env.NEXT_APP_API_KEY_HFTRCI
                });

            case "/hftrcif":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTRCIF,
                    key: process.env.NEXT_APP_API_KEY_HFTRCIF
                });

            case "/hfteng":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTENG,
                    key: process.env.NEXT_APP_API_KEY_HFTENG
                });


            case "/hftengf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTENGF,
                    key: process.env.NEXT_APP_API_KEY_HFTENGF
                });

            case "/enghftf":
                return setAp({
                    api: process.env.NEXT_APP_URL_ENGHFTF,
                    key: process.env.NEXT_APP_API_KEY_ENGHFTF
                });

            case "/enghft":
                return setAp({
                    api: process.env.NEXT_APP_URL_ENGHFT,
                    key: process.env.NEXT_APP_API_KEY_ENGHFT
                });

            case "/hftbng":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTBENGAL,
                    key: process.env.NEXT_APP_API_KEY_HFTBENGAL
                });

            case "/hftbngf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTBENGALF,
                    key: process.env.NEXT_APP_API_KEY_HFTBENGALF
                });


            case "/hfxyc":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFXYC,
                    key: process.env.NEXT_APP_API_KEY_HFXYC
                });

            case "/hfxycflp":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFXYCFLP,
                    key: process.env.NEXT_APP_API_KEY_HFXYCFLP
                });

            case "/hfsxy":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFSXY,
                    key: process.env.NEXT_APP_API_KEY_HFSXY
                });

            case "/hfck":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCK,
                    key: process.env.NEXT_APP_API_KEY_HFCK
                });

            case "/hfckflip":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFCKFLIP,
                    key: process.env.NEXT_APP_API_KEY_HFCKFLIP
                });


            case "/hfsxyflip":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFSXYFLIP,
                    key: process.env.NEXT_APP_API_KEY_HFSXYFLIP
                });

            case "/hftrazf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTRAZF,
                    key: process.env.NEXT_APP_API_KEY_HFTRAZF
                });

            case "/hftraz":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTRAZ,
                    key: process.env.NEXT_APP_API_KEY_HFTRAZ
                });


            case "/hftjc":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTJC,
                    key: process.env.NEXT_APP_API_KEY_HFTJC
                });


            case "/hftjcf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTJCF,
                    key: process.env.NEXT_APP_API_KEY_HFTJCF
                });

            case "/hftai":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTAI,
                    key: process.env.NEXT_APP_API_KEY_HFTAI
                });


            case "/hfspr":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFSPR,
                    key: process.env.NEXT_APP_API_KEY_HFSPR
                });


            case "/hftnxt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTNXT,
                    key: process.env.NEXT_APP_API_KEY_HFTNXT
                });


            case "/hftnxtf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTNXTF,
                    key: process.env.NEXT_APP_API_KEY_HFTNXTF
                });


            case "/hftjnt":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTJNT,
                    key: process.env.NEXT_APP_API_KEY_HFTJNT
                });


            case "/hftv":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTV,
                    key: process.env.NEXT_APP_API_KEY_HFTV
                });

            case "/hftvht":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTVHT,
                    key: process.env.NEXT_APP_API_KEY_HFTVHT
                });

            case "/hftvhtf":
                return setAp({
                    api: process.env.NEXT_APP_URL_HFTVHTF,
                    key: process.env.NEXT_APP_API_KEY_HFTVHTF
                });





            default:
                return setAp({
                    api: process.env.NEXT_APP_URL,
                    key: process.env.NEXT_APP_API_KEY
                });
        }

    }

    useEffect(() => {
        checkcall();
    }, []);



    useMemo(() => {

        if (Ap.api && Ap.key) {
            GetCallSetting(Ap.key);
            FetchWebCheckout(Ap.key, Ap.api);
        }

    }, [Ap]);


    return (

        <div>

            {

                !isPopupOpen && <div className={`w-full block sm:hidden ${sc > 50 ? "tt" : 'xx'} fixed z-[10000] text-white`}>
                    {
                        callDetail.callStatus ? <BottomPopupCall /> :
                            <BottomPopupForm />
                    }
                </div>
            }

        </div>

    )
}

export default BottomHandler;