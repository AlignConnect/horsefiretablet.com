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
                    <div className="mx-2 bg-black my-5 p-2 rounded-md" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} key={key}>
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
                                <h5 className='mb-0 text-center align-center text-xl fontPoppins font-semibold text-yellow-500'>{e.name}&nbsp;
                                    <img
                                        decoding='async'
                                        src="/common_images/verify.svg"
                                        className='inline'
                                        alt="pic"
                                        height={18}
                                        width={18}
                                    />
                                </h5>
                                <div className='m-0 text-start'>
                                    <span className=" text-[gray] text-sm" > {dayjs().subtract(ey ? ey : key + key + 6, 'days').format("DD MMM YYYY")}</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-start mt-0 text-[0.9rem] text-white'>{e.comment}</div>
                        <div className="w-full md:w-[20rem] m-auto">
                            {/* {

                                key === 0 &&
                                <img
                                    alt="notfount"
                                    fetchPriority='high'
                                    loading='eager'
                                    decoding='async'
                                    src="/reviews/new12.jpg"
                                    className='min-w-[330px] max-w-[300px]'
                                />
                            } */}
                            {

                                key === 1 &&
                                <img
                                    alt='notdf'
                                    fetchPriority='high'
                                    loading='eager'
                                    decoding='async'
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d5e3a89b-42a0-4717-20c8-49c5e1a5bb00/public"
                                    className='min-w-[330px] max-w-[300px]'
                                />
                            }
                            {

                                key === 2 &&
                                <img
                                    alt="notfount"
                                    fetchPriority='high'
                                    loading='eager'
                                    decoding='async'
                                    src="/reviews/b_f.jpg"
                                    className='min-w-[330px] max-w-[300px]'
                                />
                            }

                            {
                                key === 5 &&
                                <img
                                    alt="notfount"
                                    fetchPriority='high'
                                    loading='eager'
                                    decoding='async'
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d9150399-df58-428c-f3ac-43f624de2500/public"
                                    className='min-w-[330px]  max-w-[300px]'
                                />
                            }

                            {
                                key === 10 &&
                                <img
                                    alt="notfount"
                                    fetchPriority='high'
                                    loading='eager'
                                    decoding='async'
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cadcb4e9-4482-46f0-ad6d-76d5247d8b00/public"
                                    lassName='min-w-[330px] max-w-[300px]'
                                />
                            }

                            {
                                key === 7 &&
                                <img
                                    alt="notfount"
                                    fetchPriority='high'
                                    loading='eager'
                                    decoding='async'
                                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d5e3a89b-42a0-4717-20c8-49c5e1a5bb00/public"
                                    className='min-w-[330px] max-w-[300px]'
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
            <div className='bg-white '>

                <section className='w-full reason_bg py-3 md:py-7'>
                    <div className='w-full max-w-7xl mx-auto overflow-hidden'>
                        <div className="pt-4 w-full max-w-5xl mx-auto">
                            <div className='fontPoppins text-2xl md:text-3xl font-bold mb-4 text-center'>What Our <span className="text-[#e91b1b]">Customer's Say</span></div>
                            <div className="text-center">
                                <div className="w-full" >{itemsToShow.length ? itemsToShow : "Loading..."}
                                    {numberOfitemsShown >= reviewsData.length ? (
                                        ""
                                    ) : (
                                        <button className='text-white font-bold px-3 my-2 py-1 bg-[red] rounded-md' onClick={showMore}>Show more</button>
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