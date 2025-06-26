import BitlyLinks from '@/components/hooks/Bitly-links'
const FlipAmazon = () => {

    const links = BitlyLinks();
    //console.log(links)

    return (
        <section className='  mx-auto bg-white'>


            <div className="p-3 w-full sm:w-[700px]  mx-auto text-center">
                <h5 className="purchaseProduct leading-tight text-center pt-2 mb-0">Flipkart, Amazon से खरीदें, पाएं हर आर्डर पर छूट !!</h5>
                <div className="grid grid-cols-2 items-center justify-center gap-1 pb-1">
                    <div className="">

                        <a href={links?.flipkartMain} className="w-full d-grid leading-none">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d6b53864-0097-4cde-fa30-9723cc268600/public" alt="pic" className="w-[160px] md:w-[300px] mx-auto " loading='lazy' />
                        </a>

                    </div>

                    <div className="">
                        <a href={links?.amazonMain} className="w-full d-grid leading-none">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9b630eb5-2ca6-44f4-5d28-d95a6cb1d800/public" alt="pic" className="w-[164px] md:w-[300px] mx-auto" loading='lazy' />
                        </a>
                    </div>
                </div>
            </div>



        </section>
    )
}
export default FlipAmazon;


// const FlipAmazon = () => {
//     return (

//         <div>
          


//             <div className="p-3 bg-white sm:w-[700px] mx-auto text-center">
//                 <h5 className="purchaseProduct leading-tight text-center py-2 mb-0">Flipkart, Amazon से खरीदें, पाएं हर आर्डर पर छूट !!</h5>
//                 <div className="grid grid-cols-2 items-start justify-center gap-1 py-1">
//                     <div className="">
//                         <a href="https://www.flipkart.com/r-ayurveda-horse-fire-tablets-ayurvedic-stamina-booster-men/p/itme353eac8ec05d" className="w-full d-grid leading-none">
//                             <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d6b53864-0097-4cde-fa30-9723cc268600/public" alt="pic" className="w-[160px] md:w-[300px] mx-auto " loading='lazy' />
//                         </a>


//                     </div>



//                     <div className="">
//                         <a href="https://www.amazon.in/Ayurveda-HorseFire-Tablet-Men/dp/B0BYJ8KM7S/ref=pd_rhf_cr_s_pd_crcd_d_sccl_1_4/259-5652770-9119827?th=1" className="w-full d-grid leading-none">
//                             <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9b630eb5-2ca6-44f4-5d28-d95a6cb1d800/public" alt="pic" className="w-[164px] md:w-[300px] mx-auto" loading='lazy' />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>



//     )
// }
// export default FlipAmazon;