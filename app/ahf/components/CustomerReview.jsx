import { useMemo, useState } from 'react';
import reviewsData from '../../reviews.json'
import dayjs from 'dayjs';
import { noto } from '@/app/hftab/component/Sec2';
import { motion } from "framer-motion";
import React from "react";

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

                            <div className="w-[50px] h-[50px]">
                                <img
                                    src={e.profile_photo}
                                    alt="pic"
                                    className='w-[50px] h-[50px] rounded-full'
                                    loading='lazy'
                                />
                            </div>
                            <div>
                                <h5 className='mb-0 text-center align-center text-xl font-bold'>{e.name}&nbsp;
                                    <img
                                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d6864046-cca9-417f-d247-ad0766062c00/public"
                                        className='w-[18px] h-[18px] inline'
                                        alt="pic"
                                        loading='lazy'
                                    />
                                </h5>
                                <p className='m-0 text-start'>
                                    <span className="ms-1 text-[red] text-lg" > {dayjs().subtract(ey ? ey : key + key + 6, 'days').format("DD MMM YYYY")}</span>
                                </p>
                            </div>
                        </div>
                        <p className='text-start mt-0 text-[1.05rem]'>{e.comment}</p>
                        <div className="w-full md:w-[20rem] m-auto">
                            {/* {

                                key === 0 &&
                                <img src="/reviews/new12.jpg" alt="no" loading='lazy' className='min-w-[200px] max-w-[300px]' />
                            } */}
                            {

                                key === 1 &&
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b15dfcf0-712c-4ad1-749a-38d3b6682d00/public" alt="no" loading='lazy' className='min-w-[200px] max-w-[300px]' />
                            }
                            {

                                key === 2 &&
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ce3611bd-2dc5-4d37-f080-47c4eb429700/public" alt="no" loading='lazy' className='min-w-[200px] max-w-[300px]' />
                            }

                            {
                                key === 5 &&
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a151ce1b-6321-4327-01c6-f6e72a537e00/public" alt="no" loading='lazy' className='min-w-[200px] max-w-[300px]' />
                            }

                            {
                                key === 10 &&
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d28d6f15-4b96-4a08-e22a-84832551ad00/public" alt="no" loading='lazy' className='min-w-[200px] max-w-[300px]' />
                            }

                            {
                                key === 7 &&
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b15dfcf0-712c-4ad1-749a-38d3b6682d00/public" alt="no" loading='lazy' className='min-w-[200px] max-w-[300px]' />
                            }
                        </div>

                    </div>

                    {/* {key % 3 === 0 && <div className="">
                        <FlipAmazon />
                    </div>} */}
                </div>
            });
    }, [Reviews, numberOfitemsShown]);

    return (
        <div className='w-full'>
            <div className='w-full bg-gray-700 '>

                <section className='w-full bg-white py-3 md:py-7'>
                    <div className='md:w-[47rem] mx-auto w-full  overflow-hidden'>
                        <div className="px-2 pt-4 w-full">
                            <div className='text-2xl md:text-4xl font-bold mb-4 text-center'>What Our <span className="text-[#e91b1b]">Customers Say</span></div>
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
export default CustomerReview;export const Sec2 = () => {
    return (
        <div className='bg-white text-lg p-3 rounded-md'>
            <section className={noto.className}>

                <motion.p

                    initial={{ opacity: 0, scale: 0.1, transition: "1.2s" }}
                    whileInView={{ opacity: 1, scale: 1, transition: "1.2s" }}
                >
                    मेरा नाम स्नेहा और उम्र 26 साल है। दोस्तों शादी से पहले मैंने कई बार एडल्ट वीडियो देखी थी जिसमे उनके बड़े लिंग और देर तक अलग-अलग पोजीशन में जोरदार झटके देखकर सोचती थी कि शादी के बाद मुझे भी ऐसा ही मजा मिलेगा, पर मेरे पति फिसड्डी निकले ! उनके 4 इंच के छोटे से लिंग और 1 मिनट से भी कम सेक्स की वजह से सुहागरात पर मेरे अरमान धरे के धरे रह गए।
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, scale: 0.1, transition: "1.2s" }}
                    whileInView={{ opacity: 1, scale: 1, transition: "1.2s" }}
                >
                    शुरुआत में मैंने कोई रियेक्ट नहीं किया पर लगभग 2-3 सप्ताह तक हर बार ऐसा ही हुआ। वो हर बार कुछ शॉट्स लगाकर डिस्चार्ज हो जाते थे और लिंग दूसरे राउंड के लिए खड़ा ही नहीं होता था और मैं अधूरी रह जाती थी फिर मुझे उनपर चिढ़ होने लगी। दरअसल, मैं  बायोलॉजी की स्टूडेंट हूँ तो मुझे पता है की एक स्वस्थ पुरुष कम से कम 7 से 13 मिनट लगातार सेक्स करता है। इतना ही नहीं एक महिला को ओर्गेस्म के लिए कम से कम 23 से 27 मिनट सेक्स चाहिए जो आजकल के 80 से 83 प्रतिशत पुरुष करने में नाकाम है। पर मेरे पति तो अत्यंत कमजोर थे उनसे क्या ही उम्मीद करती।
                </motion.p>

                <motion.h1
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    className='text-4xl py-5 font-bold'
                >
                    बहुत कुछ आजमाये पर नहीं हुआ सुधार !
                </motion.h1>


                <motion.p
                    initial={{ opacity: 0, scale: 0.1, transition: "1.2s" }}
                    whileInView={{ opacity: 1, scale: 1, transition: "1.2s" }}
                >
                    अपनी कमजोरी और मुझे यौन सुख न दे पाने की वजह से वो दुखी रहने लगे थे। चूँकि उनका मेरे प्रति प्यार बहुत ज्यादा था इसलिए उनका दुःख देख मैं भी दुखी हो जाती थी। पर मुझे ऐसे ही असंतोष भरा जीवन नहीं बिताना था। मुझे कोई भी ऐसा समाधान चाहिए था जिससे उनके लिंग साइज और सेक्स अवधि में बृद्धि हो जाए।

                </motion.p>

                <div className='grid grid-cols-4'>

                    <div className='col-span-2'>

                        <motion.img src='/main/hftab_images/ling.webp' />

                    </div>


                    <div className='col-span-2'>



                    </div>


                </div>


            </section>
        </div>
    );
};
 