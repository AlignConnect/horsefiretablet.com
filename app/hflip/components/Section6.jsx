import { Khand, Poppins } from 'next/font/google';
import dynamic from 'next/dynamic';

const YoutubeFrame = dynamic(() => import('@/app/commonUse/Youtubefile/YoutubeFrame'), {
    loading: () => <p>load</p>
});

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>load</p>
});

const ImageAlert = dynamic(() => import('../PowerComponent/ImageAlert'), {
    loading: () => <p>load time</p>
});

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700',]
});

const khand = Khand({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700',]
});

import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Section6 = () => {

    const effectList = [
        { title: '97% लोगों ने माना की उनकी अवधि में काफी इजाफा हुआ है।' },
        { title: '94% पुरुषों ने माना कि उनका कड़ापन उच्चतम स्तर पर पहुंचाया।' },
        { title: '99% पुरुषों की इन समस्याओं के साथ अन्य गुप्त समस्याएं हल हुई।' },
        { title: 'सभी पुरुषों ने एक स्वर में कहा कि प्रदर्शन में बहुत बदलाव आया है।' },
        { title: 'सब ने माना स्टैमिना, एनर्जी बढ़ाने में यह शानदार मदद करता है।' },

    ]

    return (
        <div className={`${noto.className} w-full`}>
            <div className={`relative ${poppins.className}`}>
                <div className="relative z-[10] font-semibold  text-2xl md:text-4xl text-white py-3 md:py-5 ">

                    <div className="flex gap-1 justify-center items-center">
                        <div className={`${khand.className}`}>
                            <h1 className="text-4xl md:text-6xl md:!leading-none" style={{ textShadow: 'black 1px 1px 1px' }}>10</h1>
                            <h4 className="text-[1.1rem] md:text-2xl !leading-none -mt-2" style={{ textShadow: 'black 1px 1px 1px' }}>DAYS</h4>
                        </div>
                        <div className="">
                            <p className="text-[yellow] !leading-none">MONEY BACK</p>
                            <p className="!leading-none">GUARANTEE</p>
                        </div>
                    </div>
                </div>
                <div className='absolute w-full h-full top-0 left-0'>

                    <img src={"/main/hflip_images/line.jpg"} className='h-[70px] md:h-[120px] w-full' />


                </div>
            </div>

            <div className="w-full bg-gradient-to-b from-amber-200 to-yellow-300">
                <div className="max-w-md mx-auto py-5 md:py-10">
                    <h1 className={`${khand.className} text-4xl md:text-6xl text-center mb-2 font-bold`}>एक्सपर्ट्स की प्रतिक्रिया</h1>
                    <YoutubeFrame vid='I6VBauarWrM' />
                </div>
            </div>

            <div className="w-full px-3 ">
                <div className="max-w-6xl mx-auto pt-5 md:py-10">
                    <h1 className={`${khand.className} text-4xl md:text-5xl text-center font-semibold`}>2000 पुरुषों ने Horse fire के शानदार प्रभाव को सराहा -</h1>
                    <div className={`${poppins.className} text-white font-semibold md:font-bold text-xl md:text-2xl text-center`}>
                        {effectList.map((list, key) => {
                            return <div className="" key={key}>
                                <div className="bg-gradient-to-t from-blue-700 to-sky-400 rounded-full my-2 md:m-4 p-2 md:p-2">
                                    <h1 className="bg-gradient-to-b from-blue-700 to-sky-400 rounded-full  p-2 md:p-3">{list.title}</h1>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>

            <div className="w-full ps-2 ">
                <div className="max-w-6xl mx-auto pt-5 pb-3 md:py-10">
                    <div className="grid grid-cols-5 items-center">
                        <div className="col-span-3">

                            <div className="border-green-700 border ">
                                <h1 className={`${khand.className} font-semibold text-4xl md:text-6xl text-white bg-green-700 pt-3 text-center`}>सेवन विधि-</h1>

                                <p className="text-[1rem] md:text-3xl w-11/12 lg:w-3/4 mx-auto pt-2 md:pt-10 text-justify">Horse Fire Tablet का सेवन बहुत ही आसान है। बेहतर सेक्स टाइमिंग, रॉक हार्ड इरेक्शन, जोश-स्टैमिना और शारीरिक शक्ति के लिए 1 टेबलेट सुबह-शाम 1 गिलास गुनगुने दूध या पानी के साथ लें ! बेहतर परिणाम के लिए दूध के साथ इस्तेमाल का सुझाव दिया गया है। </p>

                                <div className='max-w-xl mx-auto pb-3 hidden md:block'>
                                    <FlipAmazon />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2'>

                            <ImageAlert handleimage={"/main/hflip_images/hftpro.png"} />



                            {/* <div className='w-[80%] mx-auto block md:hidden mt-3'>
                                <ImageAlert handleimage={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e4e0ec8f-b49a-4b0a-2798-6cb6af788800/public"} />
                            </div> */}




                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section6;