import dynamic from 'next/dynamic';
import React from 'react'

const AFAds = dynamic(() => import("@/app/commonUse/AFAds/AFAds"), {
    loading: () => <p>Loading...</p>,
});

const Footer = () => {
    return (
        <div className="">
            <div className="pb-3 bg-white">
                <AFAds />
            </div>

            <div className="w-full pb-[70px] mb-5 text-white text-center">
                <p className="poppins font-bold" >Horse Fire Tablet Copyright ©2024</p>
                <small className="text-center poppins m-0">All rights reserved | Privacy policy | Report</small><br />
                <div className='poppins p-0'>The results may vary depending on your individual features.</div>
                <div className='p-1'>आपके सोर्स डाटा और निजी गुण-धर्मों के आधार पर नतीजे अलग-अलग हो सकते हैं</div>
            </div>
        </div>


    )
}

export default Footer;