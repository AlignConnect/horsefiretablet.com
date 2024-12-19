import YoutubeFrame from "@/app/commonUse/Youtubefile/YoutubeFrame"


const Section5 = () => {


    return (
        <div className='w-full my-5'>


            <h3 className='mt-3 text-center text-2xl sm:text-3xl font-bold'>क्या कहते है सेलिब्रिटी <br /><span className='text-red-700 uppercase'>Horse Fire Tablet</span><br /> के बारे में</h3>
            <YoutubeFrame vid={"fTwW9OOSpUU"} />

            <div className="grid grid-cols-3 text-[0.8rem] sm:text-xl text-center text-red-600 my-5 fontPoppins px-3 gap-2 font-semibold">
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

            <div className="my-5 w-1/2 mx-auto">
                <a href="#form" className=""><img src="/main/hfe_images/ordernow.gif" alt="pic" width='100%' height='100%' /></a>
            </div>
        </div>
    )
}
export default Section5