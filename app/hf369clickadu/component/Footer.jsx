import dynamic from "next/dynamic";
import { Poppins } from "next/font/google";
const AFAds = dynamic(() => import("@/app/commonUse/AFAds/AFAds"), {
    loading: () => <p>Loading...</p>,
});

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Footer = () => {
    return (

        <div className="">
        <div className="pb-3 bg-white">
            <AFAds />
        </div>

        <section className={poppin.className}>
            <div className="w-full py-4 mb-[4rem] md:mb-0 text-center text-white bg-black">
                <p className="text-center text-xl m-0 font-bold">Horse Fire Tablet Copyright ©2024</p>
                {/* <small className="text-center poppins text-base m-0">All rights reserved | Privacy policy | Report</small> <br /> */}

                <p className='text-[0.9rem]  text-center p-2  md:mb-0'>A product, represented on this website  is food or dietary supplement</p>
            </div>

        </section>
        </div>


    )
}

export default Footer