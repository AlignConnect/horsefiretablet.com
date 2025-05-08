import React from 'react'

function Herbs() {


    const Herbs = (arr) => {
        return arr?.map((e, key) => {
            return <div className='' key={key}>
                <img src={e.herbs_icon} className='md:w-1/3 w-1/2 mx-auto py-3' alt='Benifits_images' />
                <div className='fontNoto text-3xl md:text-4xl font-extrabold'>{e.herbs_name}</div>
                <div className=" fontNoto text-xl md:text-2xl italic pt-1 px-2">{e.herbs_content}</div>
                {/* <div className={`${key == arr.length - 1 ? "" : "border-b border-black "} fontNoto text-xl md:text-2xl italic pt-1 px-2`}>{e.herbs_content}</div> */}
            </div >
        })
    }


    return (
        <div className='bg-gray-200 py-2'>


            <div className="fontPoppins text-red-600 text-3xl md:text-4xl text-center font-extrabold pt-3">
                HORSE FIRE TABLET
            </div>


            <div className="fontNoto font-extrabold text-2xl md:text-3xl text-[#2e8541] py-3  px-1">
                17 भरोसेमंद एवं शक्तिशाली जड़ीबूटियों और भस्मों का अनूठा संयोजन है।
            </div>


            <div className=''>
                {
                    Herbs([
                        {
                            herbs_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1d9e53c6-0a83-40f3-c5e8-10de8c1a4a00/public",
                            herbs_name: "अश्वगंधा-",
                            herbs_content: "टेस्टोस्टेरोन और नाइट्रिक ऑक्साइड का निर्माण कर अंग में मजबूती बढ़ाता है।"
                        },
                        {
                            herbs_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c049681b-8c6f-41f1-e80e-0a2bf2ecb300/public",
                            herbs_name: "शिलाजीत-",
                            herbs_content: "यह उत्तेजक हर्ब है, यह शरीर में शक्ति और स्फूर्ति भी बढ़ाने में मददगार है।"
                        },
                        {
                            herbs_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2028e069-59e5-4039-660f-eac20feb6e00/public",
                            herbs_name: "सफ़ेद मूसली-",
                            herbs_content: "यह भी बेहतरीन टेस्टोस्टेरोन बूस्टर है जो शरीर को सक्रीय और उत्तेजित रखता है।"
                        },
                        {
                            herbs_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/78703ae6-671f-4f5e-8d12-cb0421e00800/public",
                            herbs_name: "गोखरू-",
                            herbs_content: "पुरुषों को जोशीला और ऊर्जावान बनाता है, अंग में कड़ापन उत्पन्न करता है।"
                        }
                    ])
                }
            </div>

        </div>
    )
}

export default Herbs