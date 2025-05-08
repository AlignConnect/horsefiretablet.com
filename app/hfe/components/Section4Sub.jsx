import Image from "next/image"

const Section4Sub = () => {

    const iconText = [{
        icon: "/main/hfe_images/womenicon1.png",
        para: "लंबा और सख्त लिंग"
    },
    {
        icon: "/main/hfe_images/womenicon2.png",
        para: "देर तक चलने वाला सेक्स"
    },
    {
        icon: "/main/hfe_images/womenicon3.png",
        para: "दमदार मर्द जो उन्हें ऑर्गेज्म दिलाएं"
    },
    ]

    const iconText11 = [{ para: "यौन शक्ति बढ़ाएं" },
    { para: "टेस्टोस्टेरोन का स्तर बढ़ाएं" },
    { para: "शुक्राणुओं की संख्या बढ़ाएं" },
    { para: "चिंता और तनाव में कमी लाएं" },
    { para: "इरेक्टाइल डिसफंक्शन को ठीक करें" },
    { para: "लिंग को सख्त और लम्बा बनाएं" },
    { para: "2nd inning के लिए तुरंत खड़ा करें" },
    ]

    return (
        <div className="w-full font-bold">
            <div className="relative ">
                <div className="relative z-10 px-5 py-8 grid gap-5 sm:gap-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-yellow-400">आखिर क्या चाहती हैं महिलाएं?</h1>

                    <div className="text-2xl sm:text-4xl sm:w-10/12 mx-auto grid gap-3 sm:gap-5">
                        {iconText.map((e, key) => {

                            return <div className="grid grid-cols-12 gap-2 sm:gap-3 items-center " key={key}>
                                <img src={e.icon} alt="pic" width='100%' height='100%' loading="lazy" className="col-span-2" />
                                <h1 className="col-span-10 pt-2 ">{e.para}</h1>
                            </div>
                        })}
                    </div>

                    <h1 className="text-2xl sm:text-3xl border-2 text-yellow-400 border-white sm:w-11/12 text-center px-6 pt-5 pb-1 mx-auto leading-relaxed ">एक रिसर्च के अनुसार <span className="commonhft">Horse Fire Tablet</span> के इस्तेमाल से पुरुषों की सभी सेक्सुअल परेशानियां ठीक हो जाती हैं.</h1>

                </div>
                <Image src='/main/hfe_images/third_bg.jpg' fill alt='pic' loading='lazy' className="hidden sm:block" />
                <Image src='/main/hfe_images/third_bg_mob.jpg' fill alt='pic' loading='lazy' className="block sm:hidden" />
            </div>

            <div className="my-5 w-1/2 mx-auto">
                <a href="#form" className=""><img src="/main/hfe_images/ordernow.gif" alt="pic" width='100%' height='100%' /></a>
            </div>

            <div className="pt-5 sm:py-5">

                <div className="px-5 ">
                    <h1 className="text-4xl sm:text-5xl text-center text-[#f91f20] ">Horse Fire Tablet <br /> <span className="text-yellow-400"> के फायदे</span></h1>
                </div>

                <div className="sm:w-10/12 px-5 sm:px-0 text-[1.3rem] sm:text-[2.2rem] mx-auto grid gap-8 my-5">
                    {iconText11.map((e, key) => {
                        return <div className="grid grid-cols-12 gap-4" key={key}>
                            <img src='/main/hfe_images/trueicon.png' alt="pic" width='100%' height='100%' loading="lazy" className="col-span-2 sm:col-span-1" />
                            <h1 className="col-span-10 sm:col-span-11 sm:pt-2 ">{e.para}</h1>
                        </div>
                    })}
                </div>
            </div>

        </div>
    )
}
export default Section4Sub