"use client"
import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleClick = (index) => setActiveIndex(activeIndex === index ? null : index);

    useEffect(() => {
    }, [activeIndex]);

    return (
        <div className="">
            {items.map((item, index) => {
                return <div
                    key={index}
                    className={`item ${activeIndex === index ? 'active' : ''} mx-1 px-1 border-t-2 border-[#beb29b]  py-1`}
                >
                    <div className=''>
                        <button className='fontNoto text-xl md:text-xl py-2 w-full text-left' onClick={() => handleClick(index)}>
                            <div className='flex justify-between items-center font-semibold'>
                                <div>{item.title}</div>
                                {activeIndex === index ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
                            </div>
                        </button>

                    </div>
                    <div className="textNoto text-[1rem] text-justify py-1" hidden={activeIndex !== index}>
                        {item.content}
                    </div>
                </div>
            })}
        </div>
    );
};

export default Accordion;