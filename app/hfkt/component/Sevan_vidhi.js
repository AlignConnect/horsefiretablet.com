function Sevan_vidhi() {
    return (
        <section className="overflow-hidden">
            <div className="w-full bg-[url('/main/hfkt_images/tablet_back.jpg')] bg-repeat md:h-[600px] h-[450px] relative">
                <div className="max-w-6xl py-4 mx-auto relative">
                    <div className="relative">
                        <img
                            className='w-full md:h-[50vh] mx-auto absolute'
                            src={"/main/hfkt_images/board.jpg"}
                            alt='board'
                            loading="lazy"

                        />
                    </div>

                    <div className="relative flex items-center justify-center w-full h-[250px] md:h-[420px] flex-col">
                        <div className="fontPoppins font-semibold text-center text-white text-2xl md:text-4xl">सेवन विधि</div>
                        <div className="z-[10] w-3/4 mx-auto">
                            <p className="fontNoto text-[1.1rem] md:text-[2rem] text-justify py-3 text-white">बेहतर सेक्स टाइमिंग, रॉक हार्ड इरेक्शन, जोश-स्टैमिना और शारीरिक शक्ति के लिए 1 टेबलेट सुबह-शाम 1 गिलास गुनगुने दूध या पानी के साथ लें! बेहतर परिणाम के लिए दूध के साथ इस्तेमाल का सुझाव दिया गया है।</p>
                        </div>
                    </div>

                    <div className="absolute transform md:top-[280px] right-[-20px] top-[210px] right-0">

                        <img
                            className='md:w-64 w-48 mx-auto px-2'
                            src={"/main/hfkt_images/mobilehfk.webp"}
                            alt='hftsingle'
                            loading="lazy"
                        />
                    </div>

                </div>
            </div>

        </section>

    )
}

export default Sevan_vidhi;