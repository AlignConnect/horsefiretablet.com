function Header() {

    const about_product_order = (arr) => {
        return arr?.map((e, key) => {
            return <div className='' key={key} >
                <img src={e.product_icon} className='mx-auto w-16 md:w-20 ' alt='product_order_icon' />
                <div className='fontPoppins text-center pt-2 text-md md:text-xl font-semibold text-white'>{e.product_order_title}</div>
            </div >
        })
    }

    return (
        <section className="relative">
            <div className=" relative z-10 bg-white">
                <div className="relative z-10 pt-3">
                    <div className="fontPoppins text-center text-5xl md:text-7xl font-extrabold text-white">
                        HORSE FIRE
                    </div>
                    <div className="fontKalnia text-center text-2xl tracking-[.25em] text-white">
                        TABLETS
                    </div>
                    <div className="fontArya text-center text-white text-xl md:text-3xl py-2">
                        देर तक सेक्स करने का सबसे सफल फार्मूला
                    </div>
                    <img
                        className='w-96 md:w-full h-full py-4 px-4'
                        src="/main/hfm_images/horsefire_tablet_cup.webp"
                        alt='horsefire_tablet_cup'
                        fetchPriority="high"
                    />
                </div>
                <div className="absolute top-0 left-0 h-[75%] w-full headerBackground rounded-b-full">
                </div>
            </div>

            <div className="headerBackground">
                <div className='grid grid-cols-3 gap-2 py-3'>
                    {
                        about_product_order([

                            {
                                product_icon: "/main/hfm_images/save10.png",
                                product_order_title: "ON PREPAID ORDER"
                            },
                            {
                                product_icon: "/main/hfm_images/10days.png",
                                product_order_title: "MONEYBACK GUARANTEE"
                            },
                            {
                                product_icon: "/main/hfm_images/free.png",
                                product_order_title: "ALL OVER INDIA"
                            }
                        ])
                    }
                </div>
            </div>




        </section>
    )
}

export default Header