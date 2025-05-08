import dynamic from 'next/dynamic';
import React from 'react'



const OrderNow = dynamic(() => import('./OrderBtn'), {
    loading: () => <p>Content is Loading</p>
});

const Header = () => {


    const reason_to_buy = (arr) => {
        return arr?.map((e, key) => {
            return <div className='' key={key}>
                <div className="  py-2  ">
                    <img src={e.icons} className="sm:w-16 w-12 mx-auto" alt="icons" />
                </div>
                <div className='text-black fontPoppins font-semibold sm:text-[1vw] text-[0.9rem] text-center leading-tight pb-1'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>
            </div >
        })
    }

    const customBlogReview = (arr) => {
        return arr?.map((e, key) => {
            return <div className='border border-dashed border-yellow-400 rounded-lg mx-3 my-5 ' key={key}>
                <div className="flex items-center px-2 py-2 gap-2 ">
                    <img src={e.review_img} className=" w-12" alt="icons" />
                    <div className="leading-tight fontPoppins">
                        <h2 className=' text-yellow-400 text-lg'>{e.review_name}</h2>
                        <small className='text-white'>{e.review_year}</small>
                    </div>
                </div>
                <p className='text-white fontAnek  px-2 pb-3 text-justify'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.review_cont }}
                    />
                </p>
            </div >
        })
    }

    return (
        <section>

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ed9cbd83-a100-4349-db20-71833ee64000/public" alt="" className='w-full' />
            <div className="bg-[#ffffe7] p-2">
                <div className=" grid grid-cols-3 items-center justify-center p-1 border border-dashed border-black rounded-lg">
                    {
                        reason_to_buy([
                            {
                                icons: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/524a52b4-8a7d-4ff4-13c5-2c7056a4dc00/public",
                                title: "Men's<br/> First Choice"
                            },
                            {
                                icons: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/00d2e1b8-5051-4b84-b398-4471779c7300/public",
                                title: "COD<br/> Available"
                            },
                            {
                                icons: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d1546922-6607-402b-8a6c-b930e4cadf00/public",
                                title: "Satisfied<br/>Customers "
                            }
                        ])
                    }

                </div>
                <div className='pt-3'>
                    <OrderNow />
                </div>

            </div>



            <div className="bg-black py-1">
                {
                    customBlogReview([
                        {
                            review_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a920bf8c-53fb-4ca9-b3ee-31f2d1c6ac00/public",
                            review_name: "Dinesh",
                            review_year: "38 Years",
                            review_cont: "वर्क लोड और बढ़ती उम्र के साथ मेरी सेक्स इच्छा खत्म हो रही थी, लिंग में पर्याप्त इरेक्शन नहीं मिलती थी और डिस्चार्ज बहुत जल्दी हो जाता है पर इसे खाने के बाद सब इच्छा बढ़ गयी है हार्ड इरेक्शन के साथ सेक्स लम्बा चलता है। "
                        },
                        {
                            review_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c3010de6-07ae-49f4-cce0-70bc6dee1900/public",
                            review_name: "Shobhan ",
                            review_year: "24 Years",
                            review_cont: "Meri shadi 4 mahine thi first-night ko lekar mai bahut tension me tha par Horse Fire Tablet ne mere marital life ko emajedar bnaya..Vo subah dard me thi par mere performance se kafi khush thi. Thanks Horse Fire"
                        },
                        {
                            review_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8e2fc363-dbca-49d8-a6d1-cfeee4612600/public",
                            review_name: "Sarvesh Kumar",
                            review_year: "32 Years ",
                            review_cont: "Horse Fire Tablet khane ke bad meri sex timing me kafi sudhar hua hai aur Erection bhi jordar milta hai. Phle meri life partner mujhse kush nhi thi lekin ab vo meri tarif krti hai aur sex ko enjoy krti hai."
                        },
                        {
                            review_img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/04953bc6-23e0-4ddd-3b3c-3451206bd500/public",
                            review_name: "Jitendra Jha ",
                            review_year: "29 Years",
                            review_cont: "Horse Fire Tablet is a real sex booster. It helps me to maintain stamina and erection for a long time sex... Also, my penis size increased which is amazing."
                        },
                    ])
                }

            </div>

        </section>
    )
}

export default Header