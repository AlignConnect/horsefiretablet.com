import dynamic from "next/dynamic";

const AFAds = dynamic(() => import("@/app/commonUse/AFAds/AFAds"), {
    loading: () => <p>Loading...</p>,
});

const Footer = () => {
    return (

        <div className="">
            <div className="pb-3 bg-white">
                <AFAds />
            </div>

            <div className="w-full py-4 mb-[5rem] md:mb-0 text-center text-white bg-black">
                <p className="text-center text-xl m-0 font-bold">Horse Fire Tablet Copyright ©2024</p>
                <small className="text-center poppins text-base m-0">All rights reserved | Privacy policy | Report</small> <br />

            </div>
        </div>
    )
}
export default Footer;