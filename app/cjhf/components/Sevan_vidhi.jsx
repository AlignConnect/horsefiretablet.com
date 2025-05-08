function Sevan_vidhi() {


    const Sevan_vidhi_steps = (arr) => {
        return arr?.map((e, key) => {
            return <div className="" key={key}>
                <div className="flex items-center justify-center gap-2 border border-gray-300 rounded-xl p-2">
                    <img
                        className='md:w-24 w-20 min-h-16 max-h-24'
                        src={e.step_image}
                        alt='sevan_vishi_steps_image'
                        loading="lazy"
                    />
                    <div className="text-xl fontNoto md:text-2xl font-semibold text-black">
                        {e.step_text}
                    </div>
                </div>
            </div>
        }
        )
    };

    return (
        <div className="pt-7">
            <div className="fontNoto text-4xl  md:text-5xl font-extrabold px-2">
                <span className="">&#x201C;</span>ऐसे करें सेवन
            </div>
            <div className="grid md:grid-cols-2 items-center gap-4 my-3 py-3 text-justify px-2">
                {
                    Sevan_vidhi_steps([
                        {
                            step_image: "/main/cjhf_images/milk.png",
                            step_text: "सुबह-शाम 1 टेबलेट 1 गिलास गुनगुने दूध के साथ।"
                        },
                        {
                            step_image: "/main/cjhf_images/watch.png",
                            step_text: "असर दिखने पर चाहे तो 24 घंटे में 1 गोली खाएं।"
                        },
                        {
                            step_image: "/main/cjhf_images/calender.png",
                            step_text: "कम से कम 3 महीने का कोर्स तो अवश्य पूरा करें।"
                        },
                        {
                            step_image: "/main/cjhf_images/expert.png",
                            step_text: "या फिर बेहतर सलाह के लिए एक्सपर्ट से संपर्क करें !"
                        }
                    ])
                }
            </div>
        </div>
    )
}

export default Sevan_vidhi