import BitlyLinks from '@/components/hooks/Bitly-links'
const FlipAmazon = () => {

    const links = BitlyLinks();
    //console.log(links)

    return (
        <section className='w-full  mx-auto bg-white'>






            <div className="p-3  mx-auto text-center">
                <h5 className="purchaseProduct leading-tight text-center pt-2 mb-0">HORSE FIRE TABLET खरीदने के लिए निचे क्लिक करें</h5>
                <div className="grid grid-cols-2 items-center justify-center gap-1 pb-1">
                    <div className="">

                        <a href={links?.flipkartMain} className="w-full d-grid leading-none">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a34e1d92-85ba-4ac6-fc88-b5e2ff6ff000/public" alt="pic" className="w-[160px] md:w-[300px] mx-auto " loading='lazy' />
                        </a>

                    </div>

                    <div className="">
                        <a href={links?.amazonMain} className="w-full d-grid leading-none">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f80384a2-95de-44ba-1509-c69d0d2df500/public" alt="pic" className="w-[164px] md:w-[300px] mx-auto mb-2" loading='lazy' />
                        </a>
                    </div>
                </div>
            </div>



        </section>
    )
}
export default FlipAmazon;