import { Noto_Serif_Devanagari } from 'next/font/google';
import React, { useState, useEffect, useRef } from 'react'


const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});




const Chart = () => {




    const [isElementInView, setIsElementInView] = useState(false);
    const myRefd = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            const elementRect = myRefd.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if the element is in view
            const isVisible = elementRect.top < windowHeight && elementRect.bottom >= 0;
            setIsElementInView(isVisible);
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to run the effect only once




    const hrxs = (per, durations, lct, sec, fire) => {
        const [duration, setduration] = useState(0);
        const [count, setcount] = useState(0);
        useEffect(() => {
            if (isElementInView) {

                setduration(duration + 1);
                if (duration < 500) {
                    let nw = (duration * per) / 500;

                    setcount(Math.ceil(nw))

                }
            }

        }, [isElementInView, duration])
        return <div className='col-span-12 text-center my-3'>
            <div className='frx px-1'>
                <div className='content-frx'>
                    {lct}
                </div>
                <div className='fi-perx'>
                    <div className={isElementInView ? "sx" : ""} ref={myRefd} style={{ width: isElementInView ? count + "%" : "0%" }}></div>
                </div>

                <div>
                    <h5 className='text-white font-bold text-xl px-1  mb-0 pt-1' style={{ width: "1" }}>{count}%</h5>
                </div>

            </div>
        </div >

    }


    const hrx = (per, durations, lct, sec, fire) => {
        const [duration, setduration] = useState(0);
        const [count, setcount] = useState(0);
        useEffect(() => {
            if (isElementInView) {
                setduration(duration + 1);
                if (duration < 500) {
                    let nw = (duration * per) / 500;
                    setcount(Math.ceil(nw))
                }
            }
        }, [duration, isElementInView])




        return <div className='col-span-2 text-center'>
            <h5 className='text-white font-bold text-2xl'> {isElementInView ? count + "%" : "0%"} </h5>

            <div className='fr'>

                <div className='content-fr'>
                    {lct}
                </div>


                <div className='fi-per' ref={myRefd}>
                    <div className={isElementInView ? "s" : ""} style={{ height: count + "%" }}></div>
                </div>

            </div>
        </div >

    }




    return (

        <section className={`${noto.className} w-full overflow-hidden`}>


            <div className='back-5 hidden md:block'>

                <h2 className='text-center text-white text-light fw-bold text-[25px] md:text-[41px] py-[20px]' >2000 पुरुषों ने Horse fire के शानदार प्रभाव को सराहा</h2>

                <div className='grid grid-cols-12 justify-center items-center'>

                    <div className='col-span-1 x-side'>


                    </div>

                    {
                        hrx(97, 3, "93% लोगों ने माना की उनकी सेक्स अवधि बढ़ गयी है। ", 3, 100)
                    }

                    {
                        hrx(94, 3, "90% पुरुषों ने माना कि उनका इरेक्शन शून्य से उच्चतम स्तर पर पहुंचाया।", 3, 100)
                    }
                    {
                        hrx(99, 3, "86% पुरुषों की सेक्सुअल डिजायर यानि सेक्स इच्छा बढ़ गयी।", 3, 100)
                    }
                    {
                        hrx(100, 3, "सभी पुरुषों ने एक स्वर में कहा कि सेक्स प्रदर्शन में बहुत बदलाव आया है। ", 3, 100)
                    }
                    {
                        hrx(100, 3, "सब ने माना की स्टैमिना, एनर्जी बढ़ाने में यह शानदार मदद करता है।", 3, 100)
                    }



                </div>



            </div>




            <div className='grid grid-cols-12 block md:hidden h-[400px] mb-4' >
                <div className='col-span-12 text-center pt-4 text-white font-bold text-[22px]' >2000 पुरुषों ने Horse fire के<br /> शानदार प्रभाव को सराहा</div>


                {
                    hrxs(97, 3, "97% लोगों ने माना की उनकी सेक्स अवधि बढ़ गयी है। ", 3, 100)
                }

                {
                    hrxs(94, 3, "94% पुरुषों ने माना कि उनका इरेक्शन शून्य से उच्चतम स्तर पर पहुंचाया।", 3, 100)
                }
                {
                    hrxs(99, 3, "99% पुरुषों की सेक्सुअल डिजायर यानि सेक्स इच्छा बढ़ गयी।", 3, 100)
                }
                {
                    hrxs(100, 3, "सभी पुरुषों ने एक स्वर में कहा कि सेक्स प्रदर्शन में बहुत बदलाव आया है। ", 3, 100)
                }
                {
                    hrxs(100, 3, "सब ने माना की स्टैमिना, एनर्जी बढ़ाने में यह शानदार मदद करता है।", 3, 100)
                }
            </div>

        </section>
    )
}


export default Chart;