import { useGlobalContext } from "@/app/statemanage/context";
import dynamic from "next/dynamic";

const YoutubeFrame = dynamic(() => import('./YoutubeFrame'), {
    loading: () => <p>load</p>
});

const Section7 = () => {
    const { hours, minutes, remainingSeconds } = useGlobalContext();


    return (
        <div className="w-full ">

            <div className="py-5 max-w-7xl mx-auto px-3">
                <p className="text-[1.4rem] sm:text-2xl lg:text-4xl text-center font-bold">क्या कहते है सेलिब्रिटी <span className="text-red-700 ">HORSE FIRE TABLET</span> के बारे में</p>
                <div className="max-w-xl mx-auto">
                    <YoutubeFrame vid='I6VBauarWrM?si=tdO5vsv5UtXYG9D3' />
                </div>

                <div className="max-w-6xl mx-auto mt-5 sm:mt-8">
                    <p className="text-3xl sm:text-4xl lg:text-6xl text-center font-extrabold text-[#015f72]">विशेष सुविधा-</p>
                    <p className="font-semibold text-center">पुरुषों की समस्या के हिसाब से उनकी उम्र, हाइट और वजन का आंकलन करके <span className="text-red-600 font-bold">Horse Fire Tablet</span> कस्टमाइज्ड भी तैयार किया जाता है जिससे यह समस्या पर सटीक असर करता है। </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-12 gap-5 sm:gap-0 items-center">
                        <div className=" col-span-12 sm:col-span-4">
                            <img src="/main/hfrush_images/3.png" alt="pic" className="w-1/2 sm:w-full mx-auto" width='100%' height='100%' loading="lazy" />
                        </div>
                        <div className="col-span-12 sm:col-span-8 text-center">
                            <p className="fontPoppins text-[#015f72] font-bold xl:text-4xl">Male Enhancement Support</p>
                            <p className="fontPoppins text-[#015f72] font-bold xl:text-4xl">60 Tablets - 30 Days Supply</p>
                            <p className="inline-block bg-red-600 px-5 pt-3 italic text-white font-bold my-3 sm:my-8">50% DISCOUNT</p>
                            <img src="/main/hfrush_images/24.png" alt="pic" className="" width='100%' height='100%' loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#025f71] py-3 sm:py-5 text-white text-center fontPoppins">
                <p className=" font-semibold text-[yellow] ">LIMITED TIME OFFER</p>
                <p className="font-bold">{hours +" : "+ minutes+" : "+remainingSeconds}</p>
            </div>

        </div>
    )
}
export default Section7