import Image from 'next/image';
import '../hfk.css';

const Section1 = () => {

    const satisfyCus = [{
        image: "/main/hfk_images/1.png",
        para1: "Satisfied",
        para2: "Customers",
    }, {
        image: "/main/hfk_images/2.png",
        para1: "Money back",
        para2: "Guaranttee",
    }, {
        image: "/main/hfk_images/3.png",
        para1: "Secure",
        para2: "Payment",
    },
    ]

    return (<div className="relative text-white">
        <div className="max-w-3xl mx-auto pt-8 sm:py-8 relative z-10 text-xl px-5 overflow-hidden">
            <img src="/main/hfk_images/1ranking_mobile.png" alt="pic" width='100%' height='100%' className="sm:w-3/4" loading='lazy' />

            <div className="grid grid-cols-6 sm:grid-cols-12 section1 mt-5 sm:my-5 items-center">
                <div className="col-span-6">
                    <h1 className="text-[2.5rem] sm:text-6xl font-extrabold leading-none pt-3 sm:pt-5">मर्दाना ताकत <br className="hidden sm:block" />का राज़</h1>
                    <p className="font-bold text-center sm:text-left my-5">ज्यादातर महिलाएं सेक्स में संतुष्टि का दिखावा करती है ताकि रिश्ते को निभा सके ! क्योंकि पुरुष छोटे, ढीले लिंग या फिर शीघ्रपतन से परेशान है।</p>

                    <ul className="fontPoppins space-y-3 ms-7 hidden sm:block">
                        <li>सेक्स टाइम <span >10x</span> बढ़ सकता है</li>
                        <li>कड़कपन <span >2x</span> बढ़ जाएगी</li>
                        <li>लम्बाई 15 दिनों में <span >5CM</span> तक</li>
                        <li>मोटाई <span >1.5</span> से 2 CM तक </li>
                        <li><span >4x</span> स्टैमिना और एनर्जी </li>
                    </ul>

                </div>
                <div className="col-span-6 relative">
                    <img src="/main/hfk_images/pro1-min.webp" alt="pic" width='100%' height='100%' fetchPriority='high' className='w-10/12 md:w-8/12 mx-auto hidden sm:block' />
                    <img src="/main/hfk_images/pro1-min_mobile.webp" alt="pic" width='100%' height='100%' fetchPriority='high' className='sm:hidden' />

                    <a href="#form"><img src="/main/hfk_images/Comp.gif" alt="pic" className="pop_imagehfv absolute -right-10 sm:right-0 top-0" width='50%' height='100%' fetchPriority='high' /></a>
                    <ul className="fontPoppins space-y-3 ms-7 mt-7 sm:hidden">
                        <li>सेक्स टाइम <span >10x</span> बढ़ सकता है</li>
                        <li>कड़कपन <span >2x</span> बढ़ जाएगी</li>
                        <li>लम्बाई 15 दिनों में <span >5CM</span> तक</li>
                        <li>मोटाई <span >1.5</span> से 2 CM तक </li>
                        <li><span >4x</span> स्टैमिना और एनर्जी </li>
                    </ul>
                </div>

            </div>

            <div className="sm:grid grid-cols-12 items-center border-dashed border-2 border-white fontPoppins py-3 rounded-md hidden ">
                {satisfyCus.map((e, key) => {
                    return <div className="col-span-4 mx-5" key={key}>

                        <div className="grid grid-cols-12 items-center gap-2 justify-center ">
                            <img src={e.image} alt="pic" width='100%' height='100%' loading='lazy' className='col-span-4' />
                            <h1 className="col-span-8">{e.para1}<br />{e.para2}</h1>
                        </div>
                    </div>
                })}

            </div>
        </div>
        <Image src='/main/hfk_images/bg1.jpg' alt='pic' fill className=' hidden sm:block' />
        <Image src='/main/hfk_images/ksgback.png' alt='pic' fill className='sm:hidden' />
    </div>
    )
}
export default Section1;