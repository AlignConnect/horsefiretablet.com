import React from 'react'
import { FaHandPointRight } from "react-icons/fa";

const Header = () => {
    return (
        <section>

            <img src="/main/hxb_images/header_img.jpg" alt="" className='w-full' />

            <div className="bg-[#fff001] fontNoto text-black font-extrabold sm:text-3xl text-2xl text-center pt-4 pb-2">
                लिंग में भरपूर उफान और लम्बी सेक्स<br /> टाइमिंग क्यों है जरुरी?
            </div>


            <div className="flex justify-center gap-2 bg-[#e5eae4] rounded-md mx-2 my-4 pt-3 pb-1 px-2">

                <div className="">
                    <FaHandPointRight size={24} />
                </div>

                <div className="">
                    <p className='fontNoto text-xl sm:text-2xl pl-2'>
                        दुनियाभर की महिलाओं पर हुए सर्वे के मुताबिक उन्हें लम्बा, मोटा और सख्त लिंग बहुत पसंद आता है।
                    </p>
                </div>

            </div>

            <div className="flex justify-center gap-2 bg-[#e5eae4] rounded-md mx-2 my-4 pt-3 pb-1 px-2">

                <div className=" ">
                    <FaHandPointRight size={24} />
                </div>

                <div className="">
                    <p className='fontNoto text-xl sm:text-2xl pl-2'>
                        महिलाएं सुडौल लिंग और लम्बे टाइमिंग वाले दमदार पुरुष के साथ सेक्स करके ऑर्गेज्म का अनुभव करती है।
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Header