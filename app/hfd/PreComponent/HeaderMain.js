import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const HeaderMain = () => {
    return (
        <div
            style={{
                backgroundImage: `url(/main/hfv_images/section1.jpg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right"
            }}
            className={`${noto.className} pb-[7%] order-1`}
        >
            <div className="max-w-7xl mx-auto px-2 md:pt-10">
                <div className="flex md:flex-row flex-col md:items-center justify-center">
                    <div className='w-[100%] md:w-[60%]'>

                        <h1 className=" md:text-8xl text-5xl pt-4 pb-4 md:pb-6 font-black text-center md:text-start  text-[#0e214c]  uppercase ">
                            गारंटीड! रिजल्ट्स
                        </h1>
                        <h1 className=" md:text-8xl text-5xl font-black text-center md:text-start mb-4 md:mb-6 text-[#1fbbaf]  uppercase">
                            मात्र 30 दिनों में
                        </h1>
                        <h1 className="md:text-6xl mt-0 md:mt-6  font-extrabold text-[2rem] text-black md:text-left text-center">
                            बढ़ाएं सेक्स अवधि और लिंग
                        </h1>
                        <h2 className="md:text-3xl text-2xl font-bold text-[#0e204c] mt-4 md:mt-6 ">
                            सर्वे के आंकड़ों के मुताबिक 80- 84% भारतीय महिलाएं सेक्स के दौरान चरम सुख नहीं पाती !
                        </h2>
                        <div className="my-12 hidden md:block md:text-left text-center">
                            <div className="  inline-block text-left pop_imagehfv" >
                                <a className="bg-[#213361] text-xl  font-bold fontPoppins py-5 px-11 w-full rounded-full hover:bg-[#1e2f5a] shadow-lg shadow-[#213361]/50 transition-colors text-white" href='#form'>
                                    INQUIRY NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-6 md:mt-0">
                        <img src="/main/hfv_images/sec1_product.png" alt="pic" height={400} width={400} fetchPriority="high" />
                        <div className="mb-4 mt-7 block md:hidden md:text-left text-center">
                            <div className="  inline-block text-left pop_imagehfv" >
                                <a className="bg-[#213361] text-xl  font-bold fontPoppins py-3 px-11 w-full rounded-full hover:bg-[#1e2f5a] shadow-lg shadow-[#213361]/50 transition-colors text-white" href='#form'>
                                    INQUIRY NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default HeaderMain;