import { Noto_Serif_Devanagari } from "next/font/google";

import { Poppins } from "next/font/google";
const poppin = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const Freedelivery = () => {
  return (
    <section className={`${noto.className} w-full bg-[#0d0d0d]`}>

      <div className='w-[90%] md:w-[70rem] mx-auto text-white py-[30px]'>

        <div className='bg-[#fff2d5] border border-2 border-[#d98c02] rounded-[20px]'>

          <div className="flex flex-col md:flex-row text-black items-center">

            <div className='w-[75%] text-start md:text-center column-css pt-[25px] md:py-[25px]'>


              <div className="md:px-7 border-b-2 border-black md:border-0 my-5 md:my-0">
                <h2 className='font-bold text-xl'>FREE DELIVERY</h2>
                <small className={`${poppin.className} italic text-[14px]`}>FREE DELIVERY ALL OVER INDIA AVAILABEL</small>
              </div>


              <div className="md:px-7 border-b-2 border-black md:border-0 my-5 md:my-0">
                <h2 className='font-bold text-xl'> 10% OFF</h2>
                <small className={`${poppin.className} italic text-[14px]`}>GET EXTRA 10% OFF ON PREPAID ORDERS</small>
              </div>


              <div className="md:px-7 border-b-2 border-black md:border-0 my-5 md:my-0">
                <h2 className='font-bold text-xl'> TOP RATED</h2>
                <small className={`${poppin.className} italic text-[14px]`}> NO.1 MEN WELLNESS PRODUCT IN INDIA</small>
              </div>


            </div>

            <div className='w-full md:w-[25%] text-center my-5'>

              <a href="#form" className='rounded-xl bg-red-700 text-white pt-3 pb-1 px-5'>
                ORDER NOW
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* // started sleeping girl */}

      <section className="relative w-full md:w-[70rem] mx-auto min-h-[480px] md:min-h-[550px]">

        <div className="absolute w-[350px] bottom-0 md:w-full">
          <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9fa981e6-b9db-4721-5b70-9e9406b95f00/public" alt="nofgg" loading="lazy" />
        </div>

        <div className="w-full md:w-[75%] flex flex-col md:flex-row justify-around items-center md:items-baseline ms-auto px-5">
          <div className="text-white font-bold flex gap-2 md:block">
            <h1 className="text-4xl md:text-6xl">महिलाओं </h1>
            <h1 className="text-4xl md:text-6xl text-yellow-600"> की ख्वाहिश</h1>
          </div>

          <div className="bg-white rounded-[30px] pb-[100px]">
            <ul className="text-3xl md:p-5 px-5">
              <li className="py-2 font-bold flex items-center gap-2"> <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fe99b7c7-8a1f-4528-744e-adb76e958a00/public" loading="lazy" width={35} /> <span className="pt-4"> जंबो साइज लिंग      </span></li>
              <li className="py-2 font-bold flex items-center gap-2"> <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fe99b7c7-8a1f-4528-744e-adb76e958a00/public" loading="lazy" width={35} /> <span className="pt-4"> ज्यादा सेक्स टाइमिंग   </span> </li>
              <li className="py-2 font-bold flex items-center gap-2"> <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fe99b7c7-8a1f-4528-744e-adb76e958a00/public" loading="lazy" width={35} /> <span className="pt-4"> दमदार स्टैमिना      </span> </li>
              <li className="py-2 font-bold flex items-center gap-2"> <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fe99b7c7-8a1f-4528-744e-adb76e958a00/public" loading="lazy" width={35} /> <span className="pt-4"> बेहतर सेक्स ऑर्गेज़्म </span>  </li>
            </ul>
          </div>
        </div>



      </section>

    </section>
  )
}

export default Freedelivery