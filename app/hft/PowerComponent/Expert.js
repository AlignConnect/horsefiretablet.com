import dynamic from "next/dynamic";

const ImageAlert = dynamic(() => import('../PowerComponent/ImageAlert'), {
    loading: () => <p>load time</p>
})
const Expert = () => {
    return (
        <section className="py-3">

            <h2 className="text-white font-bold mb-4 text-center text-xl">Expert's Opinions & Recommendations</h2>
            <div className="px-1 md:px-4">
                <div className="relative bg-white px-4">
                    <div className="grid grid-cols-12 items-center py-4 md:p-2" >
                        <div className="col-span-12 md:col-span-4 text-center mb-4 z-10">

                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9344f156-073b-48b9-910d-0756f5907a00/public" alt="noimage" width={160} className="mx-auto" />

                            <div className="text-black font-bold my-2">
                                <h4>Dr. Arun Kumar</h4>
                                <h6 className="mb-0">33 years of experience</h6>
                                <small className='text-dark'>MD - Alternate Medicine, <br />BAMS
                                    Ayurveda, Sexologist</small>
                            </div>

                        </div>
                        <div className="col-span-12 md:col-span-8">
                            <p className="mb-0 text-black text-justify font-[400]" >Horse Fire Tablet is a Powerful sex timing and penis size booster, Most important, it has no chemical substance and is totally natural formulation. It has all herbs with aphrodisiac properties that help to boost testosterone, produce nitric oxides, and improve blood flow in the penis as a result men get rock-hard erections and sex better. You can trust one and see results yourself.</p>

                            <div className="mt-1 flex justify-end">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e8da3e3a-9381-4b7f-1bb0-77952cdab200/public" alt="pic" className="max-h-[100px] min-h-[90px] max-w-[100px] min-w-[90px]" loading="lazy" />
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0c1b78b2-0666-427d-56d9-04998b01a400/public" alt="pic" className="max-h-[100px] min-h-[90px] max-w-[100px] min-w-[90px]" loading="lazy" />

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </section>
    )
}

export default Expert;