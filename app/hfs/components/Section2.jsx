import Image from "next/image";

const Section2 = () => {

    return (

        <div className="text-white w-full">

            <h1 className="bg-gradient-to-t from-[#071930] via-[#0d2950] to-[#133b72] px-1 text-[1.7rem] md:text-[1.8rem] text-center font-bold pt-4 pb-1">अधिकांश पुरुषों को सेक्स के दौरान ये समस्याएं होती हैं </h1>

            <img src='/main/hfs_images/image4.png' width='100%' height='100%' alt='pic' loading='eager' fetchPriority="high" decoding="async" />

            <div className="relative">

                <div className=" grid grid-cols-12  ps-4 z-10 relative items-end">
                    <div className="col-span-6">
                        <h1 className="text-3xl sm:text-5xl font-bold  text-center !leading-tight mb-2 ">महिलाएं ऐसा मर्द चाहती हैं जो</h1>
                    </div>
                    <div className="col-span-6">
                        <img src="/main/hfs_images/girlpic.png" alt="pic" width='100%' height='100%' loading='lazy' />
                    </div>
                </div>

                <div className="bg-gradient-to-t from-[#071930] via-[#0d2950] to-[#133b72] px-1 absolute bottom-0 h-3/4 left-0 w-full border-y-8 border-[#fca311]" ></div>

            </div>


        </div>
    )
}
export default Section2;