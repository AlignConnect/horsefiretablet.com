function LimitedOffer() {
    return (
        <div className="">
            <div className="bg-red-600 ">
                <div className="max-w-3xl mx-auto relative mt-[2rem] md:mt-[12rem] ">
                    <div className={`flex flex-col text-xl md:text-4xl items-end mr-4 uppercase text-white fontPoppins py-5`}>
                        <h1 className="font-bold"> upto 60% off </h1>
                        <p className=""> Order Now!! </p>
                    </div>
                    <div>
                        <div className="absolute bottom-0 w-2/4">
                            <img
                                className='w-full'
                                src="/main/hfm_images/pro3.png"
                                alt='pro3'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LimitedOffer