import dynamic from 'next/dynamic';
import React from 'react'

const FlipAmazonw = dynamic(() => import('./FlipAmazonw'), {
    loading: () => <p>loader</p>
});

const Sec1 = () => {

    const listReviewP = [
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/617cd0de-fb25-439b-799a-a27debe0b600/public',
            title: '96.6% of Men',
            para: 'Found it Beneficial'
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1cdb5e7b-05ee-4fbf-fdad-63e739831c00/public',
            title: '20 Laks+',
            para: 'Satisfied Customers'
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fcbd7f26-68c1-4461-0d86-0d198ff96000/public',
            title: 'Save Extra 10%',
            para: 'on Prepaid Order'
        },
    ]

    return (
        <div>
            <a href="#form" className=""><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c8246e00-9677-406d-9605-48ba751c8200/public" alt="pic" height='100%' width='100%' loading='lazy' /></a>

            <div className="py-5 px-3 sm:p-14 sm:pb-8 space-y-8 text-xl sm:text-[1.7rem]">
                {
                    listReviewP.map((e, key) => {
                        return <div className="border-2 border-dotted border-gray-700 grid grid-cols-12 px-1 py-2 sm:p-3 items-center gap-2 sm:gap-5" key={key}>
                            <div className="col-span-3">
                                <img src={e.image} alt="pic" height='100%' width='100%' loading='lazy' />
                            </div>
                            <div className="col-span-9 uppercase fontPoppins font-bold ">
                                <p className="text-blue-700 font-extrabold">{e.title}</p>
                                <p className="sm:mt-2">{e.para}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            <FlipAmazonw />

        </div>
    )
}

export default Sec1