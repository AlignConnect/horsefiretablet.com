import dynamic from 'next/dynamic';
const Inquiry = dynamic(() => import('./Inquiry'));


const Section3 = () => {



    const Problem = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center gap-3 my-1' key={key}>
                <img src={e.problem_icon} className='w-8' alt='rightside_images' />
                <div dangerouslySetInnerHTML={{ __html: `<span class="text-black font-extrabold">${e.problem_title}</span>` }} className='fontNoto text-xl md:text-2xl font-semibold text-left '></div>
            </div>
        })
    }



    return (
        <section className='bg-white py-4'>

            <div className='flex justify-center items-center'>

                <div className='inline-flex bg-white px-5 my-4 pt-3 pb-2 gap-2 border border-dashed  border-black'>

                    <div className=''>
                        <img src="/main/hfuri_images/point.webp" alt="sdsd" loading='lazy' className='w-[40px]' />
                    </div>

                    <div className=''>
                        <h1 className='text-2xl font-bold pt-1 text-red-600'>हमारा लक्ष्य</h1>
                    </div>

                </div>

            </div>


            <p className='text-lg border-dashed border w-[95%] pt-2 my-4 px-2 mx-auto border-black'>
                "हम चाहते है प्रत्येक पुरुष दमदार यौन क्षमता वाला हो, ताकि वैवाहिक जीवन या लव रिलेशनशिप में रोमांच रहे। यौन असंतुष्टि की वजह से रिश्ते में कड़वाहट और दरार न आये!"
            </p>


            <div>
                <img src="/main/hfuri_images/ht.webp" alt="" />
            </div>


            <div className='pt-3'>
                <Inquiry />
            </div>

            <div>


                <div className='flex items-center p-3 gap-3'>
                    <div>
                        <img src="/main/hfuri_images/s1.webp" alt="aads" loading='lazy' className='w-[150px]' />
                    </div>

                    <p className='font-bold text-xl pt-2'>
                        क्योंकि 93% महिलाएं बड़ा और मोटा लिंग पसंद करती है
                    </p>
                </div>


                <div className='flex items-center p-3 gap-3'>
                    <div>
                        <img src="/main/hfuri_images/s2.webp" alt="aads" loading='lazy' className='w-[150px]' />
                    </div>

                    <p className='font-bold text-xl pt-2'>
                        क्योंकि महिलाओं को औसतन 27 मिनट नॉनस्टॉप सेक्स चाहिए
                    </p>
                </div>



                <div className='flex items-center p-3 gap-3'>
                    <div>
                        <img src="/main/hfuri_images/s3.webp" alt="aads" loading='lazy' className='w-[150px]' />
                    </div>

                    <p className='font-bold text-xl pt-2'>
                        क्योंकि महिलाएं कमजोर पुरुषों को पसंद नहीं करती है
                    </p>
                </div>

                <div className='flex items-center p-3 gap-3'>
                    <div>
                        <img src="/main/hfuri_images/s4.webp" alt="aads" loading='lazy' className='w-[150px]' />
                    </div>
                    <p className='font-bold text-xl pt-2'>
                        क्योंकि आपकी पार्टनर भी इच्छाएं आप पूरी नहीं कर पाते है
                    </p>
                </div>
            </div>


            <div className='bg-[#bce5ff]'>
                <div>
                    <img src="/main/hfuri_images/tra.webp" alt="aads" loading='lazy' className='w-full p-3' />
                </div>
                <p className='text-lg px-2 font-semibold'>
                    हॉर्सफायर टेबलेट लिंग के <span className='text-[#6b091a]'> कॉर्पस केवरोसोम  में रक्त का प्रवाह बढ़ाता है </span> और कोशिकाओं का निर्माण करता है जिससे लिंग के नसों का फैलना, साइज का बढ़ना सुनिश्चित होता है। इसका इस्तेमाल के प्रथम दिन से ही समस्या की रिकवरी चालू हो जाती है और कुछ दिनों के इस्तेमाल पश्चात    <span className='text-[#6b091a]'>  लिंग बड़ा, कड़ा और खड़ा हो जाता है। </span>
                </p>
            </div>

            <div className='pt-3'>

                <Inquiry />

            </div>

            <div className='grid grid-cols-2 p-2 gap-2'>
                <div>
                    <img src="/main/hfuri_images/g3.webp" alt="asdasd" loading='lazy' className='' />
                    <p className='text-lg p-2 font-bold text-center'>सख्त और कठोर लिंग </p>
                </div>

                <div>
                    <img src="/main/hfuri_images/g2.webp" alt="asdasd" loading='lazy' className='' />
                    <p className='text-lg p-2 text-center font-bold'>30 से 45 मिनट लगातार सेक्स </p>
                </div>
            </div>


            <div className='flex justify-evenly items-center px-3'>

                <div className='flex flex-col justify-center gap-2 items-center'>
                    <div className='w-[70px] h-[5px] bg-red-900'></div>
                    <div className='w-[70px] h-[5px] bg-red-900'></div>
                    <div className='w-[70px] h-[5px] bg-red-900'></div>
                </div>


                <div>
                    <img src="/main/hfuri_images/g1.webp" alt="asdasd" loading='lazy' className='w-[150px] md:w-[250px] mx-auto rounded-xl' />
                </div>

                <div className='flex flex-col justify-center gap-2 items-center'>
                    <div className='w-[70px] h-[5px] bg-red-900'></div>
                    <div className='w-[70px] h-[5px] bg-red-900'></div>
                    <div className='w-[70px] h-[5px] bg-red-900'></div>
                </div>

            </div>


            <div className='py-7 text-center'>
                <h1 className='text-center text-3xl font-black underline shadow-txt py-3'>PROUD TO BE</h1>

                <div className='grid justify-center w-5/6 mx-auto'>

                    {
                        Problem([
                            {
                                problem_icon: "/main/hfuri_images/point.webp",
                                problem_title: "भारत का <span class='text-[#0861b5]'>#1 सेक्स वर्धक</span> विक्रेता"
                            },

                            {
                                problem_icon: "/main/hfuri_images/point.webp",
                                problem_title: "<span class='text-[#0861b5]'>10 लाख से ज्यादा</span> संतुष्ट ग्राहक"
                            },

                            {
                                problem_icon: "/main/hfuri_images/point.webp",
                                problem_title: "यौनवर्धक श्रेणी में फ्लिपकार्ट पर <span class='text-[#0861b5]'>#1 ट्रेंडिंग विक्रेता</span>"
                            },
                        ])
                    }

                </div>

            </div>


            <div className='md:w-[80%] mx-auto border rounded-md border-black p-2  font-bold text-lg'>
                देर न करें, आज ही हॉर्सफायर टेबलेट आजमाए और अपनी पार्टनर को वह सुख दें जिसकी वो हक़दार है !!
            </div>

        </section>)
}

export default Section3