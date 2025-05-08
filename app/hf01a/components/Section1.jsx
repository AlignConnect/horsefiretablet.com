import '../hf01a.css';

const Section1 = () => {

    return (
        <div className='w-full bg-gray-200 py-5 sm:py-10'>
            <div className="grid grid-cols-12 items-center px-3 gap-5 sm:gap-0">
                <div className="hidden sm:block sm:col-span-2"></div>

                <div className="col-span-6">
                    <h1 className="text-[13vw] sm:text-[10vw] font-bold fontPoppins leading-none text-[#b3322c]">HORSE FIRE</h1>

                    <p className="tracking-[0.4em] text-[5vw] sm:text-[2vw] fontPoppins font-semibold">TABLETS</p>

                    <p className="text-[5.2vw] sm:text-[3vw] font-bold mt-5 leading-tight"><span className="text-[#b3322c]">यौन कमजोर</span> पुरुषों की पहली पसंद</p>
                    <p className="text-gray-700 text-[3.3vw] sm:text-[1.3vw] mt-2 font-bold ">शीघ्रपतन, लिंग कमजोरी व शारीरिक<br /> कमजोरी दूर करने में उपयोगी!</p>
                </div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f75688d6-83a5-4ce5-5064-784787cc2f00/public" alt="pic" width='100%' height='100%' className='col-span-6 sm:col-span-4' fetchPriority='high' />
            </div>

            <div className="text-center mt-5">
                <a href="#form" className="bg-red-700 px-5 fontPoppins sm:px-36 text-white text-[5vw] sm:text-[3vw] py-1 md:py-2 rounded-xl font-bold">
                    ORDER
                </a>
            </div>
        </div>
    )
}
export default Section1;