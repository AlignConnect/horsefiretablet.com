import BitlyLinks from '@/components/hooks/Bitly-links';
import dynamic from 'next/dynamic';
import Image from 'next/image'

const Flip = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
});

function Header() {

    const links = BitlyLinks();

    return (
        <div className='w-full relative'>
            <div className=" relative z-10  pb-[5vw] sm:pb-0">
                <div className="max-w-7xl mx-auto sm:px-5 lg:px-0">
                    <div className=" text-center sm:text-start grid sm:grid-cols-2 items-center">
                        <div className="">
                            <div className="pt-[5vw] pb-[5vw] sm:pb-[2vw]  text-white">
                                <p className="sm:bg-white text-red-900 sm:text-red-600 italic font-bold sm:font-semibold py-1 sm:py-3 px-7 inline-block text-[5vw] sm:text-4xl">India's No.1 Product</p>
                                <h1 className="text-[11vw] sm:text-[5.4vw] font-bold leading-none mt-3 sm:mt-5">HORSE FIRE</h1>
                                <h2 className="text-[6vw] sm:text-[3vw] tracking-[2.3vw] leading-none">TABLET</h2>
                                <p className="fontArya text-[8vw] my-3 sm:text-[3vw] font-semibold text-[#441c03]">सेक्स पावर बढाए</p>
                                <img src="/main/hf99_images/pro2.webp" alt="pic" className="sm:hidden" width='100%' height='100%' fetchPriority='high' />
                                <h3 className="fontPoppins text-[7vw] sm:text-[3.2vw]  font-semibold">पाए असली पावरफुल मर्द का टेग</h3>
                            </div>
                        </div>
                        <div className="">
                            <img src="/main/hf99_images/pro2.webp" alt="pic" className="hidden sm:block" width='100%' height='100%' fetchPriority='high' />
                        </div>
                    </div>
                </div>
                <div className="pb-[5vw] fontPoppins">
                    <div className="w-11/12 mx-auto bg-white rounded-lg outline-dashed outline-1 outline-red-600 p-3 sm:p-5 -outline-offset-4 sm:-outline-offset-8 text-gray-500 text-[2vw] sm:text-[1.2vw]">
                        <div className="flex items-center">
                            <div className="w-4/12 sm:w-3/12">
                                <h1 className="text-[3.5vw] sm:text-[2.8vw] font-extrabold text-red-600 leading-none">FREE DELIVERY</h1>
                                <p className="">FREE DELIVERY OVER INDIA AVAILABLE</p>
                            </div>
                            <div className="w-[8%] h-full ">
                                <div className="border-red-500 border-2 h-[4vw] w-1 rounded-full mx-auto"></div>
                            </div>
                            <div className="w-3/12 sm:w-2/12">
                                <h1 className="text-[3.5vw] sm:text-[2.8vw] font-extrabold text-red-600 leading-none">10% OFF</h1>
                                <p className="">GET EXTRA 10% OFF ON PREPAID ORDERS</p>
                            </div>
                            <div className="w-[8%] h-full ">
                                <div className="border-red-500 border-2 h-[4vw] w-1 rounded-full mx-auto"></div>
                            </div>
                            <div className="w-4/12 sm:w-3/12">
                                <h1 className="text-[3.5vw] sm:text-[2.8vw] font-extrabold text-red-600 leading-none">TOP RATED</h1>
                                <p className="">NO. 1 MEN WELLNESS PRODUCT IN INDIA</p>
                            </div>
                            <div className="w-3/12 text-center hidden sm:block ">
                                <a href={links?.flipkartMain} className=""><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e4e0ec8f-b49a-4b0a-2798-6cb6af788800/public" alt="pic" className="w-[200px] md:w-[300px] mx-auto -mt-3" loading='lazy' /></a>



                            </div>
                        </div>
                    </div>
                </div>

                <div className="  sm:hidden px-1 rounded-md bg-white mx-1">
                    <Flip />
                </div>

            </div>
            <Image src='/main/hf99_images/bg1.webp' fill fetchPriority='high' alt='pic' />
        </div>
    )
}

export default Header