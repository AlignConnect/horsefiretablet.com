"use client";
import { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import reviewsData from '../../reviews.json';


const CustomerReview = () => {

    const [Reviews] = useState(reviewsData);
    const [numberOfitemsShown, setNumberOfItemsToShown] = useState(5);

    const showMore = () => {
        if (numberOfitemsShown + 3 <= Reviews.length) {
            setNumberOfItemsToShown(numberOfitemsShown + 3);
        } else {
            setNumberOfItemsToShown(Reviews.length);
        }
    };


    const itemsToShow = useMemo(() => {
        return Reviews
            .slice(0, numberOfitemsShown).map((e, key) => {

                let ey = 0;

                switch (key) {
                    case 0:
                        ey = 1
                        break;
                    case 1:
                        ey = 3
                        break;
                    case 2:
                        ey = 6
                        break;
                    case 3:
                        ey = 9
                        break;
                    case 4:
                        ey = 11
                        break;
                    case 5:
                        ey = 15
                        break;
                    case 6:
                        ey = 18
                        break;
                    case 7:
                        ey = 20
                        break;
                    case 8:
                        ey = 24
                        break;
                    case 9:
                        ey = 25;
                        break;
                    case 10:
                        ey = 27;
                        break;

                    default:
                        break;
                }

                return <div key={key}>
                    <div className="mx-2 my-5 p-2 rounded-md" style={{ boxShadow: "-1px 0px 5px 0px black" }} key={key}>
                        <div className='flex justify-start align-items-center gap-2 mb-2 mt-2'>

                            <div className="w-[50px] h-[50px] ">
                                <img src={e.profile_photo} alt="pic" className='max-w-[50px] min-w-[40px] w-[50px] max-h-[50px] min-h-[40px] h-[50px] rounded-full' decoding='async' fetchPriority='low' loading='lazy' />
                            </div>
                            <div>
                                <h5 className='mb-0 text-center align-center text-xl font-bold'>{e.name}&nbsp;<img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d6864046-cca9-417f-d247-ad0766062c00/public" className='w-[18px] h-[18px] inline' alt="pic" loading='lazy' fetchPriority='low' decoding='async'
                                    loader={<p>wait</p>} /></h5>
                                <p className='m-0 text-start'>
                                    <span className="ms-1 text-[red] text-lg" > {dayjs().subtract(ey ? ey : key + key + 6, 'days').format("DD MMM YYYY")}</span>
                                </p>
                            </div>
                        </div>
                        <p className='text-start mt-0 text-[1.05rem]'>{e.comment}</p>
                        <div>
                            {

                                key === 1 &&
                                <img
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/760b3d2e-9473-49b5-d77b-c2fb157bf300/public"
                                    loading='lazy'
                                    className='w-[360px] md:w-[20rem] mx-auto'
                                    alt="no"
                                />
                            }

                            {
                                key === 3 &&
                                <img
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a151ce1b-6321-4327-01c6-f6e72a537e00/public"
                                    loading='lazy'
                                    className='w-[360px] md:w-[20rem] mx-auto'
                                    alt="no"
                                />
                            }

                            {
                                key === 10 &&
                                <img
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d28d6f15-4b96-4a08-e22a-84832551ad00/public"
                                    loading='lazy'
                                    className='w-[360px] md:w-[20rem] mx-auto'
                                    alt="no"
                                />
                            }

                            {
                                key === 7 &&
                                <img
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b15dfcf0-712c-4ad1-749a-38d3b6682d00/public"
                                    loading='lazy'
                                    className='w-[360px] md:w-[20rem] mx-auto'
                                    alt="no"
                                />
                            }
                        </div>

                    </div>

                    {key % 3 === 0 && <div className="-my-3">
                        {/* <FlipAmazon /> */}
                    </div>}
                </div>
            });
    }, [Reviews, numberOfitemsShown]);

    return (
        <div className='w-full'>
            <section className='w-full py-3 md:py-7'>
                <div className='text-2xl md:text-4xl  text-white pt-4 pb-1 sm:pb-0 font-bold bg-gradient-to-t  from-[#071930] via-[#0d2950] to-[#133b72] mb-4 text-center'>What Our <span className="text-[#e91b1b]">Customers Say</span></div>
                <div className="px-2  w-full">
                    <div className="text-center">
                        <div className=" w-full" >{itemsToShow.length ? itemsToShow : "Loading..."}
                            {numberOfitemsShown >= reviewsData.length ? (
                                ""
                            ) : (
                                <button className='text-white font-bold text-xl md:text-2xl px-3 my-3 md:px-10 py-1 md:py-2 bg-[red] rounded-md' onClick={showMore}>Show more</button>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default CustomerReview; 