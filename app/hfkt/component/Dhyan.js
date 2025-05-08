function Dhyan() {
    return (
        <div className="w-full bg-[url('/main/hfkt_images/dhyanWeb.jpg')] bg-cover" >
            <div className="w-full max-w-6xl mx-auto">
                <div className='grid md:grid-cols-2 items-center pt-3'>
                    <div>
                        <div className="text-yellow-500 italic text-5xl text-center font-semibold py-3">
                            ध्यान दें!
                        </div>
                        <p className='fontNoto text-[1.1rem] md:text-[1.4rem] text-justify px-2 text-white'>
                            लैब रिसर्चर ने दावा किया कि "हॉर्सफायर टेबलेट" में लिंग और समय अवधि वृद्धि करने वाले हर तत्व और गुण मौजूद है। इससे हर पुरुष इतना पावरफुल बन सकता है की एक रात में लगातार 4 घंटे सेक्स करें फिर भी थकान नहीं होगी। कुछ सप्ताह तक इसका सेवन टाइमिंग में इतना इजाफा कर सकता है की कोई भी पुरुष आसानी से महिला का चरमसुख तक साथ दे सकता है।
                        </p>
                    </div>
                    <div className="min-h-[250px]">
                        <img
                            className='md:w-[90%] w-full h-[100%] mx-auto'
                            src={"/main/hfkt_images/candy.webp"}
                            alt='candey'
                            loading="lazy"
                        />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Dhyan;