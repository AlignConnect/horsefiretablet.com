"use client"
import React, { useEffect, useState } from "react";
import $ from 'jquery'

function Percentage() {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const sectionElement = document.getElementById('processbaract');
            if (sectionElement) {
                const rect = sectionElement.getBoundingClientRect();
                const threshold = 350;
                if (rect.top <= threshold && rect.bottom >= threshold) {
                    setIsActive(true);
                }
                else {
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isActive]);

    useEffect(() => {
        if (isActive) {
            progress_bar();
        }
    }, [isActive])

    function progress_bar() {

        var speed = 30;
        var items = $('.progress_bar').find('.progress_bar_item');


        items.each(function () {

            var item = $(this).find('.progress');
            var itemValue = item.data('progress');
            var i = 0;
            var value = $(this);

            var count = setInterval(function () {
                if (i <= itemValue) {
                    var iStr = i.toString();

                    item.css({
                        'width': iStr + '%'
                    });
                    value.find('.item_value').html(iStr + '%');
                }
                else {
                    clearInterval(count);
                }
                i++;
            }, speed);

        });
    }

    const Percentage_and_title = (arr) => {
        return arr?.map((e, key) => {
            return <div className='ce_ixelgen_progress_bar' key={key}>
                <div className="w-full max-w-2xl mx-auto progress_bar px-2">
                    <div className="progress_bar_item">
                        <div className='fontPoppins item_label text-sm md:text-xl mt-2 text-justify'>
                            {e.title}
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className="item_bar ">
                                <div className="progress " data-progress={e.percentage}>
                                </div>
                            </div>
                            <div className='fontPoppins item_value'>
                                0%
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        })
    }


    return (



        <div className="w-full max-w-2xl mx-auto py-2">
            <div className="text-center fontArya md:text-3xl text-2xl pt-3 font-extrabold">
                2000 पुरुषों ने <span className="text-red-600">Horse fire</span> के शानदार प्रभाव को सराहा-
            </div>

            <div className='py-4' id='processbaract'>
                {
                    Percentage_and_title([
                        {
                            title: "97% लोगों ने माना की उनकी सेक्स अवधि बढ़ गयी है।", percentage: "97"
                        },
                        {
                            title: "94% पुरुषों ने माना कि उनका इरेक्शन शून्य से उच्चतम स्तर पर पहुंचाया।", percentage: "94"
                        },
                        {
                            title: "99% पुरुषों की सेक्सुअल डिजायर यानि सेक्स इच्छा बढ़ गयी।", percentage: "99"
                        },
                        {
                            title: "सभी पुरुषों ने एक स्वर में कहा कि सेक्स प्रदर्शन में बहुत बदलाव आया है।", percentage: "100"
                        },
                        {
                            title: "सब ने माना की स्टैमिना, एनर्जी बढ़ाने में यह शानदार मदद करता है।", percentage: "100"
                        }
                    ])

                }
            </div>

        </div>
    )
}

export default Percentage