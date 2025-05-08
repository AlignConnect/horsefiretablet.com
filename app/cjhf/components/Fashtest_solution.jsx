
function Fashtest_solution() {

    const horsefire_use = (arr) => {
        return arr?.map((e, key) => {
            return <div className="mx-2 my-6" key={key}>
                <div className="relative">
                    <div>
                        <img
                            className='mx-auto w-full rounded-lg'
                            src={e.horsefire_use_gif}
                            alt='horsefire_use_gif'
                            loading="lazy"
                        />

                    </div>
                    <div className="text-white  absolute inset-x-0 -bottom-8 md:-bottom-6 bg-[#2ab9cc] rounded-md text-center text-[1.1rem] md:text-xl font-semibold fontNoto py-2 mx-2">
                        <h2 className="md:w-2/2 m-auto text-center ">{e.horsefire_use_title}</h2>
                    </div>

                </div>
            </div>
        }
        )
    };

    return (
        <div>
            <div className="bg-[#e9e9e9] text-[#2ab9cc] py-2 text-center  fontPoppins text-3xl font-semibold md:my-5">
                FASTETS SOLUTION
            </div>

            <div className="fontNoto text-3xl md:text-5xl font-extrabold px-2 py-7">
                <span className="">&#x201C;</span>इसके इस्तेमाल से अनुभव करें
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 items-center ">
                {
                    horsefire_use([
                        {
                            horsefire_use_gif: "/main/cjhf_images/gif5.webp",
                            horsefire_use_title: "लम्बी सेक्स अवधि जोरदार प्रदर्शन"
                        },
                        {
                            horsefire_use_gif: "/main/cjhf_images/gif6.webp",
                            horsefire_use_title: "लिंग की लम्बाई और सख्ती में वृद्धि"
                        },
                        {
                            horsefire_use_gif: "/main/cjhf_images/gif7.webp",
                            horsefire_use_title: "बार बार सेक्स की उत्तेजना "
                        },
                        {
                            horsefire_use_gif: "/main/cjhf_images/gif8.webp",
                            horsefire_use_title: "दमदार स्टैमिना और भरपूर शक्ति "
                        }

                    ])
                }
            </div>
        </div>
    )
}

export default Fashtest_solution