import { useMemo, useState } from 'react';
import reviewsData from '../../reviewsbng.json'
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';


const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
    loading: () => <p>loader</p>
})

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

                return <div className='' key={key}>
                    <div className=" mx-2 my-5 p-2 rounded-md" style={{ boxShadow: " rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em" }} key={key}>
                        <div className='flex justify-start align-items-center gap-2 mb-2 mt-2'>

                            <div className="w-[50px] h-[50px]">
                                <img
                                    src={e.profile_photo}
                                    alt="pic"
                                    className='w-[60px] h-[50px] rounded-full'
                                    loading='lazy'
                                />
                            </div>
                            <div className=''>
                                <h5 className='fontPoppins mb-0 text-center pt-1 align-center text-md sm:text-xl font-semibold'>{e.name}&nbsp;
                                    <img
                                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d6864046-cca9-417f-d247-ad0766062c00/public"
                                        className='w-[15px] h-[15px] inline'
                                        alt="pic"
                                        loading='lazy'
                                    />
                                </h5>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/058e73ae-9631-499a-7fbd-746878573c00/public" alt="" className='w-16  ' />
                            </div>
                        </div>
                        <p className='fontNoto text-start mt-0 text-[1rem] py-1'>{e.comment}</p>
                        <div className="w-full md:w-[20rem] m-auto text-center">
                            {/* {

                                key === 0 &&
                                <img src="/reviews/new12.jpg" alt="no" loading='lazy' className='min-w-[200px] max-w-[300px]' />
                            } */}
                            {

                                key === 1 &&
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b15dfcf0-712c-4ad1-749a-38d3b6682d00/public" alt="no" loading='lazy' className='min-w-[200px] max-w-[300px] mx-auto py-2' />
                            }
                            {

                                key === 2 &&
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ce3611bd-2dc5-4d37-f080-47c4eb429700/public" alt="no" loading='lazy' className='min-w-[200px] max-w-[300px] mx-auto py-2' />
                            }

                            {
                                key === 5 &&
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a151ce1b-6321-4327-01c6-f6e72a537e00/public" alt="no" loading='lazy' className='min-w-[200px] max-w-[300px] mx-auto py-2' />
                            }

                            {
                                key === 11 &&
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d28d6f15-4b96-4a08-e22a-84832551ad00/public" alt="no" loading='lazy' className='min-w-[200px] max-w-[300px] mx-auto py-2' />
                            }

                            {
                                key === 7 &&
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b15dfcf0-712c-4ad1-749a-38d3b6682d00/public" alt="no" loading='lazy' className='min-w-[200px] max-w-[300px] mx-auto py-2' />
                            }
                        </div>
                        <p className='m-0 text-end'>
                            <span className=" text-gray-500 text-sm" > {dayjs().subtract(ey ? ey : key + key + 6, 'days').format("DD MMM YYYY")}</span>
                        </p>

                    </div>

                    {key % 3 === 0 && <div className="-mx-3 -my-3 fontPoppins">
                        <FlipAmazon />
                    </div>}

                    {/* {key % 3 === 0 && <div className="">
                        <FlipAmazon />
                    </div>} */}
                </div>
            });
    }, [Reviews, numberOfitemsShown]);

    return (
        <div className='w-full'>
            <div className='w-full bg-gray-700'>

                <section className='w-full bg-white py-3 md:py-7'>
                    <div className=' mx-auto w-full max-w-4xl  overflow-hidden'>
                        <div className="px-2 pt-4 w-full">
                            <div className='fontPoppins text-2xl md:text-4xl font-bold mb-4 text-center'>What Our <span className="text-[#e91b1b]">Customer's Say</span></div>
                            <div className="text-center">
                                <div className=" w-full" >{itemsToShow.length ? itemsToShow : "Loading..."}
                                    {numberOfitemsShown >= reviewsData.length ? (
                                        ""
                                    ) : (
                                        <button className='text-white font-bold px-3 my-3 py-1 bg-[red] rounded-md' onClick={showMore}>Show more</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div>


            </div>

        </div>
    )
}
export default CustomerReview; 