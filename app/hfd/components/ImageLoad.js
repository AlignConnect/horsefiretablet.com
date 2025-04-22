import Image from "next/image";

const ImageLoad = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-6 md:mt-0">
            <Image src="/main/hfv_images/sec1_product.png" alt="pic" height={400} width={400} fetchPriority="high" />
            <div className="mb-4 mt-7 block md:hidden md:text-left text-center">
                <div className="  inline-block text-left pop_imagehfv" >
                    <a className="bg-[#213361] text-xl  font-bold fontPoppins py-3 px-11 w-full rounded-full hover:bg-[#1e2f5a] shadow-lg shadow-[#213361]/50 transition-colors text-white" href='#form'>
                        INQUIRY NOW
                    </a>
                </div>
            </div>
        </div>)
}

export default ImageLoad;