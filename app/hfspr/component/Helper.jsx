export const Purush = (arr) => {

    return arr.map((e, key) => {

        return <div key={key}>
            <div>
                <img src={e.img} alt="sdf" loading="lazy" className="sm:w-[70%] mx-auto rounded-xl" />
            </div>
            <div className="sm:pb-10 pt-5">
                <h1 className="text-2xl text-white font-bold text-center">{e.title}</h1>
            </div>
        </div>


    })
}


export const Medicine = (name, img, title) => {


    return <div className="grid grid-cols-8 gap-5 mt-8 sm:my-8 items-center">

        <div className="col-span-8 sm:col-span-3 mx-auto">
            <img src={img} alt={img} className="w-[80%] sm:w-[120px] rounded-full mx-auto" />
        </div>

        <div className="col-span-8 sm:col-span-5 px-2">

            <h1 className="font-bold text-green-900 text-2xl sm:text-2xl text-center sm:text-start">{name}</h1>

            <p className="font-bold text-lg sm:text-xl text-center sm:text-start">{title}</p>
        </div>

    </div>


}


export const Consumption = (img, title, count) => {


    return <div className="text-center bg-white w-[250px] mx-auto px-5 pt-14 pb-5 rounded-2xl relative mt-20">

        <div className="absolute transform translate-y-[-50%] translate-x-[-50%] left-[50%] top-0">
            <img src={img} alt={img} className="rounded-full mx-auto" />
        </div>

        <div className="py-8 relative">
            <h1 className="text-xl ">{title}</h1>
        </div>

        <div className="bg-[#ff0000] inline-block text-white pt-2 px-3 rounded-full shadow-2xl">{count}</div>

    </div>

}


export const reasons = (arr) => {
    return arr?.map((e, key) => {
        return (
            <div key={key} className="">
                <img
                    src={e.reason_img}
                    className="mx-auto md:w-20 w-16 "
                    alt="reason_img"
                    loading="lazy"
                />
                <div className="md:text-md text-sm text-center text-black font-semibold pt-2">
                    <div dangerouslySetInnerHTML={{ __html: e.reason_title }} />
                </div>
            </div>
        );
    });
};
