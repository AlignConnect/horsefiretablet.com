import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


function Header() {


    const Benefits = (arr) => {
        return arr?.map((e, key) => {
            return <div key={key}>
                <img src={e.benefit_icon} className='mx-auto md:w-1/2 w-3/4 min-h-[60px]' alt='customer_speaking_image' loading="lazy" />
                <div className='pt-2 md:text-xl text-md font-semibold text-center text-white'>{e.benefit_title}</div>
            </div >
        })
    }


    return (
        <div className={`${noto.className} w-full max-w-2xl text-center mx-auto`}>
            <div className="relative">
                <img
                    className='w-full min-h-[500px] md:min-h-[600px]'
                    src={"/main/hfb_images/header_img.webp"}
                    alt='header_img'
                    fetchPriority='high'
                />
                <div className="w-full font-semibold absolute -bottom-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 md:text-2xl text-xl text-white">
                    <span className="fontPoppins text-[#9bff00]">Horse Fire</span> से ढीले लिंग की समस्या को मिटायें,<br /> हाई पावर और स्टैमिना से करें घंटो सेक्स!
                </div>



            </div>
            <div className='bg-black py-4'>
                <div className='grid grid-cols-4 gap-2'>
                    {
                        Benefits([
                            {
                                benefit_icon: "/main/hfb_images/ling_icon.webp",
                                benefit_title: "सुडौल लिंग"
                            },
                            {
                                benefit_icon: "/main/hfb_images/timing_icon.webp",
                                benefit_title: "लम्बी अवधि"
                            },
                            {
                                benefit_icon: "/main/hfb_images/body_icon.webp",
                                benefit_title: "सुपर मर्दानगी"
                            },
                            {
                                benefit_icon: "/main/hfb_images/porn_style_icon.webp",
                                benefit_title: "ज्यादा सेक्स"
                            }
                        ])
                    }
                </div>
            </div>

            <img
                className='w-full min-h-[400px]'
                src={"/main/hfb_images/Get_Better.webp"}
                alt='Get_Better_Img'
                loading="lazy"
            />
        </div>
    )
}

export default Header;