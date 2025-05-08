// import dynamic from "next/dynamic";

// const ImageAlert = dynamic(() => import('../PowerComponent/ImageAlert'), {
//     loading: () => <p>load</p>
// });

const Section1 = () => {
    return (
        <section className="w-full md:w-[750px] mx-auto text-white">

            <div className='text-center absolute transform translate-x-[50%] translate-y-[-200%]'>
                <a href='#form' className="bg-[#f4b800] font-bold py-[10px] px-[21px] rounded-[4px]">अभी ऑर्डर करे </a>
            </div>

            <div className="max-h-full min-h-[220px] w-full">
                {/* <ImageAlert handleimage={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/415f02ec-b5d6-4f7e-ed47-1c5bbddbde00/public"} /> */}
                <img src={'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/415f02ec-b5d6-4f7e-ed47-1c5bbddbde00/public'} className="md:w-[768px] max-h-full min-h-[230px] md:min-h-[500px]" alt="noimage" fetchPriority="high" />

            </div>




        </section>
    )
}

export default Section1;