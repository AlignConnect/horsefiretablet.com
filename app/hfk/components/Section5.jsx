import YoutubeFrame from "@/app/commonUse/Youtubefile/YoutubeFrame"
import { useGlobalContext } from "@/app/statemanage/context";


const Section5 = () => {

    const { hours, minutes, remainingSeconds } = useGlobalContext();

    return (
        <div className="text-center text-white">


            <div className='w-full my-5 sm:my-10 '>
                <div className="max-w-2xl  mx-auto">
                    <h3 className='mt-3  text-2xl sm:text-3xl font-bold'>क्या कहते है सेलिब्रिटी <br /><span className='text-red-700 uppercase'>Horse Fire Tablet</span><br /> के बारे में</h3>
                    <YoutubeFrame vid={"I6VBauarWrM"} />

                    <div className="grid grid-cols-3 text-[0.8rem] sm:text-xl  text-red-600 my-5 fontPoppins px-3 gap-2 font-semibold">
                        <div className="border-dashed border-2 rounded-xl p-1 sm:p-3">
                            10 Days <br />  Money Back  <br /> Guarantee
                        </div>
                        <div className="border-dashed border-2 rounded-xl p-1 sm:p-3">
                            प्रीपेड <br />  आर्डर पर  <br /> भारी बचत
                        </div>
                        <div className="border-dashed border-2 rounded-xl p-1 sm:p-3">
                            FREE <br />  DELIVERY ALL  <br /> OVER INDIA
                        </div>
                    </div>

                    <h1 className="text-xl  italic">Hurry !! Suplies are Limited Order Now and Avail The Offer</h1>
                </div>
            </div>
            <p className="bg-red-600 text-2xl pt-4 pb-1  ">{`${hours} : ${minutes} : ${remainingSeconds}`}</p>

        </div>
    )
}
export default Section5