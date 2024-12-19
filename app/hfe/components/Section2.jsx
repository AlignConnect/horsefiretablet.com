import Image from "next/image";

const Section2 = () => {

    const yourBeneList = [{
        title: 'स्तंभन दोष को ठीक करना चाहते हैं?',
    },
    {
        title: 'मर्दाना शक्ति को बढ़ाना चाहते हैं?',
    },
    {
        title: 'देर तक प्रदर्शन करना चाहते हैं?',
    },
    {
        title: 'शुक्राणुओं की संख्या बढ़ाना चाहते हैं?',
    },
    {
        title: 'शारीरिक कमजोरी को जड़ से ठीक करना चाहते हैं?',
    }]

    return (
        <div className="">
            <div className="w-full relative ">
                <div className=" bg-black w-full px-3 sm:px-5 relative z-10 pt-7 sm:pt-10">

                    <h1 className="  text-[1.05rem] sm:text-[1.45rem] text-center font-bold  ">एक पुरुष के जीवन का सबसे कठिन समय तब होता है, जब वह अपनी मर्दाना ताकत को खो देता हैं. अपनी महिला पार्टनर को संतुष्ट नहीं कर पाता हैं.</h1>


                    <div className="text-xl sm:text-2xl font-bold grid justify-center py-4 gap-5">

                        {yourBeneList.map((e, key) => {
                            return <div className="askManageBorder" key={key}>
                                <div className="relative px-3 sm:px-5 py-2 sm:py-3" >
                                    <p className=" relative z-10 flex gap-3 sm:gap-4 items-center"><span className="askQueKey px-3 sm:px-4 pt-2 sm:pt-3 rounded-full">{key + 1}</span><span className="pt-2 sm:pt-3">{e.title}</span></p>
                                    <Image src='/main/hfe_images/second_bg.jpg' fill alt='pic' loading='lazy' />
                                </div>
                            </div>
                        })}
                    </div>


                </div>
                <Image src='/main/hfe_images/second_bg.jpg' fill alt='pic' loading='lazy' />
            </div >
            <img src='/main/hfe_images/image3.jpg' width='100%' height='100%' alt='pic' loading='lazy' />
        </div>

    )
}
export default Section2;