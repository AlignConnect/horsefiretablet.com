import React from 'react'
import { MdOutlineSupportAgent } from 'react-icons/md';

function Customer_Experiance() {

    const customer_experiance_points = (arr) => {
        return arr?.map((e, key) => {
            return <div className="py-2" key={key}>
                <div className="grid grid-cols-12 items-center">
                    <img
                        className='w-24 h-24 rounded-full mx-auto col-span-4'
                        src={e.step_image}
                        alt='customer_experiance'
                        loading="lazy"
                    />
                    <div dangerouslySetInnerHTML={{ __html: `<span class="text-white">${e.step_text}</span>` }} className="fontNoto text-xl md:text-2xl font-semibold text-white col-span-8" />
                </div>
            </div>
        }
        )
    };

    return (
        <div className="bg-[url('/main/hf69h_images/bg_position.jpg')] bg-cover">
            <div className=' w-full max-w-6xl mx-auto'>

                <div className='md:py-10 py-5'>
                    <div className="fontNoto text-center text-3xl md:text-5xl font-extrabold pt-6 text-white md:py-5 px-2">
                        <span className="text-[#d51515]">Horse Fire </span>के बारे में ग्राहकों के अनुभव
                    </div>

                    <div className="grid md:grid-cols-2 items-center gap-4 py-6 px-2">
                        {
                            customer_experiance_points([
                                {
                                    step_image: "/main/hf69h_images/1.webp",
                                    step_text: "15 दिनों के अंदर सेक्स अवधि में <span class='text-[#d51515]'>10x वृद्धि</span>"
                                },
                                {
                                    step_image: "/main/hf69h_images/3.webp",
                                    step_text: "जोश, शक्ति और स्टैमिना मे <span class='text-[#d51515]'>अद्भुत वृद्धि </span>"
                                },
                                {
                                    step_image: "/main/hf69h_images/2.webp",
                                    step_text: "लिंग के लम्बाई, मोटाई और <span class='text-[#d51515]'>कड़कपन में वृद्धि </span>"
                                },
                                {
                                    step_image: "/main/hf69h_images/4.webp",
                                    step_text: "कामेच्छा में वृद्धि, अन्य <span class='text-[#d51515]'> गुप्त रोग जड़ से हल </span>"
                                }
                            ])
                        }
                    </div>
                    <div className="my-2">
                        <div className="bg-[#f9d830] flex items-center justify-center md:w-72 w-80 py-1 rounded-2xl mx-auto">
                            <div className="">
                                <MdOutlineSupportAgent className="inline text-5xl  " />
                            </div>
                            <div className="fontKalnia md:text-md text-black  text-center rounded-2xl font-semibold">
                                <a href="#form">
                                    Talk to health expert
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Customer_Experiance