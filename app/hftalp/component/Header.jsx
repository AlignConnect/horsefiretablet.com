import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});




const Header = () => {
    return (
        <section className={noto.className}>


            <div className='w-full bg-[url("https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cfc6e4dd-7f9a-4747-c6e6-62864d8d0400/public")] bg-cover  bg-no-repeat pt-[30px] md:pt-[100px]'>
                <div className='w-full md:w-[70rem] mx-auto grid grid-cols-2 items-center text-white '>

                    <div className="block md:hidden text-center col-span-2">
                        <h1 className='font-bold text-3xl'>HORSE FIRE</h1>
                        <h1 className='text-3xl tracking-wide'>TABLET</h1>
                    </div>


                    <div className='col-span-2 md:col-span-1 order-2 md:order-1 text-center md:text-start'>

                        <div className="hidden md:block">
                            <h1 className='font-bold text-7xl'>HORSE FIRE</h1>
                            <h1 className='text-5xl tracking-[25px]'>TABLET</h1>
                        </div>

                        <div className="py-[30px]">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4b5409eb-809c-4567-a62a-967df47f5400/public" alt="nodatafoud" loading="lazy" width={250} className="mx-auto md:mx-0" />
                        </div>



                        <h2 className="text-[#d24a44] text-3xl font-bold  md:pt-[15px] md:pb-[13px]">
                            सेक्स पावर बढ़ाएं,
                        </h2>

                        <h2 className="text-[#e5ac13] text-3xl md:text-5xl font-bold md:w-[70%] leading-[60px]">
                            पाएं असली पावरफुल मर्द का टैग
                        </h2>


                    </div>


                    <div className='col-span-2 md:col-span-1 imdata order-1 md:order-2'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/37327fbf-aea6-4de7-5c62-d9434286c500/public" alt="nodata" loading='eager' width='100%' height='100%' className="min-h-[250px]" />
                    </div>


                </div>
            </div>

        </section>
    )
}

export default Header