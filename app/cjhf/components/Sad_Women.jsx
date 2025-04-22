function Sad_Women() {

    const why_women_sad_part1 = (arr) => {
        return arr?.map((e, key) => {
            return <div className='py-4' key={key}>
                <div className="w-32 h-32 overflow-hidden rounded-full mx-auto">
                    <img src={e.sad_icon} className="w-[100%] h-[100%] bg-cover" alt="" />
                </div>
                <div className='fontNoto pt-2 md:text-2xl text-xl font-semibold text-center'>{e.sad_title}</div>
            </div >
        })
    }

    const why_women_sad_part2 = (arr) => {
        return arr?.map((e, key) => {
            return <div className='py-4' key={key}>
                <div className="w-32 h-32 overflow-hidden rounded-full mx-auto">
                    <img src={e.sad_icon_part2} className="w-[100%] h-[100%] bg-cover" alt="" />
                </div>

                <div className='fontNoto pt-2 md:text-2xl text-xl font-semibold text-center'>{e.sad_title_part2}</div>
            </div >
        })
    }


    return (
        <div className="py-2 md:px-5">
            <div className="fontNoto text-3xl md:text-5xl font-extrabold  py-5">
                <span className="">&#x201C;</span>महिलाओ के निराशा की वजह
            </div>

            <div className="md:flex items-center gap-3">
                <div className="flex md:grid">
                    {
                        why_women_sad_part1([
                            {
                                sad_icon: "/main/cjhf_images/sad2.webp",
                                sad_title: "पार्टनर का छोटा-ढ़ीला लिंग"
                            },
                            {
                                sad_icon: "/main/cjhf_images/sad1.webp",
                                sad_title: "सेक्सुअली कमजोर पार्टनर"
                            }
                        ])
                    }
                </div>

                <img
                    className='md:w-1/2 w-72 mx-auto'
                    src="/main/cjhf_images/sad_women.webp"
                    alt='sad_women'
                />

                <div className="md:flex items-center gap-3">
                    <div className="flex md:grid">

                        {
                            why_women_sad_part2([
                                {
                                    sad_icon_part2: "/main/cjhf_images/sad3.webp",
                                    sad_title_part2: "जरुरत से कम सेक्स अवधि"
                                },
                                {
                                    sad_icon_part2: "/main/cjhf_images/sad4.webp",
                                    sad_title_part2: "सेकंड राउंड सेक्स में असमर्थ"
                                }
                            ])
                        }
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Sad_Women