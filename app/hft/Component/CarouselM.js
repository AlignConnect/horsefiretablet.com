"use client";
import { useState } from 'react';
import { hft } from '../PowerComponent/HftClass';

const data = [
    {
        no: 1,
        first: "छोटा लिंग",
        firstimg: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/782589c4-b83e-425d-432f-ec2951765e00/public',
        second: "बढ़ जाता है",
        secondimg: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/482ad78f-aca4-4045-c397-ada1264f0c00/public'
    },
    {
        no: 2,
        first: "ढीला लिंग",
        firstimg: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cdc455ca-564f-42a0-daa7-a9848982ed00/public',
        second: "कड़क होता है",
        secondimg: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/42bf083c-cef5-40f8-9df0-4dea84001d00/public'
    },
    {
        no: 3,
        first: "शीघ्रपतन",
        firstimg: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/083c1fbd-2f96-434d-ca7f-98cb06644600/public',
        second: "45+ मिनट सेक्स",
        secondimg: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5385b870-b994-4a90-0844-ab475cad9700/public'
    },
    {
        no: 4,
        first: "कम स्टैमिना  ",
        firstimg: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4ea56291-7353-40fa-72f1-a8692c898a00/public',
        second: "हाई स्टैमिना",
        secondimg: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b8e06f67-83cf-4a6b-3373-ad287348fa00/public'
    },
    {
        no: 5,
        first: "दुखी पार्टनर ",
        firstimg: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5174da47-6851-46e7-24f0-e8bee11fe800/public',
        second: "संतुष्ट पार्टनर",
        secondimg: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/899ce1d3-4b12-405a-6264-98f9d0e5d300/public'
    },
];



const CarouselM = () => {

    const [sli, setsli] = useState(data[0]);


    setInterval(() => {
        sli?.no === 1 && setsli(data[1]);
        sli?.no === 2 && setsli(data[2]);
        sli?.no === 3 && setsli(data[3]);
        sli?.no === 4 && setsli(data[4]);
        sli?.no === 5 && setsli(data[0]);
    }, 4000);


    return (
        <div className='w-full md:w-[768px] mx-auto text-center'>

            <h3 className='text-xl'> <span className='knight' >Horsefire Tablet</span> लेने के बाद !!</h3>

            <div className='sizeof'>
                <div className='card_display'>

                    <div className='animaone'>
                        {
                            hft.cardgif(sli?.first, sli?.firstimg, "bold")
                        }
                    </div>


                    <div className='animatwo'>
                        {
                            hft.cardgif(sli?.second, sli?.secondimg, "bold")
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CarouselM;