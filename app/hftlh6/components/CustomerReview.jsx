"use client";
import { useMemo, useState } from 'react';
import reviewsData from '../../reviews.json'
import dayjs from 'dayjs';

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
                    <div className="mx-2 my-5 p-2 rounded-md" style={{ boxShadow: "-1px 0px 5px 0px  rgba(0, 0, 0, 0.16)" }} key={key}>
                        <div className='flex justify-start align-items-center gap-2 mb-2 mt-2'>

                            <div className="w-[50px] h-[50px]">
                                <img
                                    decoding='async'
                                    src={e.profile_photo}
                                    alt="pic"
                                    className='rounded-full'
                                    height={50}
                                    width={50}
                                />
                            </div>
                            <div>
                                <div className="flex  gap-2">
                                    <p className='text-md font-bold'>{e.name} </p>
                                    <img
                                        decoding='async'
                                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d6864046-cca9-417f-d247-ad0766062c00/public"
                                        alt="pic"
                                        height={18}
                                        width={18}
                                    />
                                </div>

                                <p className='m-0 text-start text-sm '>
                                    {dayjs().subtract(ey ? ey : key + key + 6, 'days').format("DD MMM YYYY")}
                                </p>
                            </div>
                        </div>
                        <p className='text-start mt-0 text-[0.9rem]'>{e.comment}</p>
                        <div className="w-full md:w-[20rem] m-auto">

                            {

                                key === 1 &&
                                <img
                                    alt='notdf'
                                    fetchPriority='high'
                                    loading='lazy'
                                    decoding='async'
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b15dfcf0-712c-4ad1-749a-38d3b6682d00/public"
                                    width='300px'
                                    height='100%'
                                />
                            }
                            {

                                key === 2 &&
                                <img
                                    alt="notfount"
                                    fetchPriority='high'
                                    loading='lazy'
                                    decoding='async'
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ce3611bd-2dc5-4d37-f080-47c4eb429700/public"
                                    width='300px'
                                    height='100%'
                                />
                            }

                            {
                                key === 5 &&
                                <img
                                    alt="notfount"
                                    fetchPriority='high'
                                    loading='lazy'
                                    decoding='async'
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a151ce1b-6321-4327-01c6-f6e72a537e00/public"
                                    width='300px'
                                    height='100%'
                                />
                            }

                            {
                                key === 10 &&
                                <img
                                    alt="notfount"
                                    fetchPriority='high'
                                    loading='lazy'
                                    decoding='async'
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d28d6f15-4b96-4a08-e22a-84832551ad00/public"
                                    width='300px'
                                    height='100%'
                                />
                            }

                            {
                                key === 7 &&
                                <img
                                    alt="notfount"
                                    fetchPriority='high'
                                    loading='lazy'
                                    decoding='async'
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b15dfcf0-712c-4ad1-749a-38d3b6682d00/public"
                                    width='300px'
                                    height='100%'
                                />
                            }
                        </div>

                    </div>

                    {/* {key % 3 === 0 && <div className="">
                        <FlipAmazon />
                    </div>} */}
                </div >
            });
    }, [Reviews, numberOfitemsShown]);

    return (
        <div>
            <div className='bg-gray-700 text-black'>

                <section className='w-full bg-white py-3 md:py-7'>
                    <div className='w-full max-w-2xl mx-auto overflow-hidden'>
                        <div className="pt-4 w-full max-w-2xl mx-auto">
                            <div className='fontPoppins text-2xl md:text-3xl font-bold mb-4 text-center'>What Our <span className="text-[#e91b1b]">Customer's Say</span></div>
                            <div className="text-center">
                                <div className="w-full" >{itemsToShow.length ? itemsToShow : "Loading..."}
                                    {numberOfitemsShown >= reviewsData.length ? (
                                        ""
                                    ) : (
                                        <button className='text-white font-bold px-3 my-2 py-1 bg-red-700 rounded-md relative z-20' onClick={showMore}>Show more</button>
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