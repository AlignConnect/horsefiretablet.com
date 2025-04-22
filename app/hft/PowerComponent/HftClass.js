import { BsCheck } from "react-icons/bs"

export class hft {


    static ulli(arr) {
        return <ul> {
            arr?.map((e, key) => {
                return <li key={key} className='li_style'>{e}</li>
            })
        }
        </ul>
    }

    static card = (name, img, bold) => {

        return <div className='cards'>

            <div className='first_card'>

                <video autoPlay loop muted className="h-full" style={{ scale: "115%" }}>
                    <source src={img} type="video/mp4" width={"100%"} />
                </video>

                {/* <img src={img}/> */}

            </div>
            <div className="relative" style={{ position: "relative" }}>

                <div className={bold}>{name}</div>

            </div>

        </div>
    }


    static cardgif = (name, img, bold) => {

        return <div className='cards'>

            <div className='first_card'>

                {/* <video autoPlay loop muted className="h-full" style={{ scale: "115%" }}>
                    <source src={img} type="video/mp4" width={"100%"} />
                </video> */}

                <img src={img} loading="lazy" />

            </div>
            <div className="relative" style={{ position: "relative" }}>

                <div className={bold}>{name}</div>

            </div>

        </div>
    }



    static Bs() {

        return <div className='bs_ '>


            <div className='card_display one__'>
                {
                    this.card("कम से कम 30+ मिनट सेक्स करे", '/main/hft_images/3.mp4', "second_card")
                }
                {
                    this.card("बिस्तर पर उनकी चीख निकाल दें", '/main/hft_images/4.mp4', "second_card")
                }
            </div>

            <div className='card_display two__'>

                {
                    this.card("जिनका लिंग बड़ा और सख्त हो", '/main/hft_images/1.mp4', "second_card")
                }

                {
                    this.card("जिनमे घोड़े जैसी स्टैमिना हो", '/main/hft_images/2.mp4', "second_card")
                }
            </div>


        </div>

    }


    static ulli_true = (arr) => {
        return <ul className="px-4"> {
            arr?.map((e, key) => {
                return <div className='flex items-start' key={key}>
                    <div className='mt-2'><BsCheck className='tikmark' /></div>
                    <li key={key} className='li_style_new'>{e}</li>

                </div>
            })
        }
        </ul>
    }



}