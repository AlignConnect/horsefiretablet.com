
const Section4 = () => {

    const yourBene11 = [{
        title: 'ढीला और कमजोर लिंग बन जाता है सख्त और मजबूत',
        image: '/main/hfs_images/list_1.mp4'
    },
    {
        title: 'जल्दी निकलने वाला वीर्य आता है देर से',
        image: '/main/hfs_images/list_2.mp4'
    },
    {
        title: 'कामेच्छा की कमी को दूर करके भरपूर सेक्सुअल उत्तेजना का संचार करता है',
        image: '/main/hfs_images/list_3.mp4'
    },
    {
        title: 'असंतुष्ट पार्टनर को संतुष्ट करता है',
        image: '/main/hfs_images/list_4.mp4'
    },
    {
        title: 'मर्दाना कमी को ठीक करके मर्दाना शक्ति बढ़ाता है',
        image: '/main/hfs_images/list_5.mp4'
    }]


    return (
        <div className="relative w-full ">
            <div className="w-full grid grid-cols-12 relative z-10">
                <div className="col-span-7">
                    <img src="/main/hfe_images/product3.png" alt="pic" width='100%' height='100%' loading="lazy" />
                </div>
                <div className="flex flex-col justify-between col-span-4">
                    <img src="/main/hfe_images/savefifty.png" alt="pic" width='100%' height='100%' loading="lazy" />
                    <div className="text-center mb-[15%]">
                        <a href="#from" className="rounded-full text-black font-bold orderBtnLayer px-3 sm:px-4 pt-2 text-[0.8rem] sm:text-xl pop_imagehfv inline-block ">ORDER NOW</a>
                    </div>
                </div>
            </div>
            <div className="bg-[#ca1413] h-2/5 w-full absolute bottom-0 left-0"></div>
        </div>
    )
}
export default Section4;