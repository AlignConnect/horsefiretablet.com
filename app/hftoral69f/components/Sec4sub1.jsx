

import React from 'react'



const dataList = [
  {
    img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/adff4c5f-c007-4d61-9964-28abdd3b0e00/public',
    para: 'पाएं लम्बा और फौलादी लिंग'
  },
  {
    img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/23069d82-d803-4fce-3993-651c4bc14600/public',
    para: 'लॉन्ग लास्टिंग सेक्स टाइमिंग'
  },
  {
    img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/58f77dbe-d081-4230-919b-1ef530d97900/public',
    para: 'पाए सेक्स का असली मजा'
  },
  {
    img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7d1e647a-87af-465f-53b9-e7bc0ae21300/public',
    para: 'हर बार पार्टनर को दें चरमसुख'
  },
]

const Sec4sub1 = () => {

  return (
    <div className='my-5 sm:my-7'>
      <div className="px-3 sm:px-10 " >
        <p className="text-[10vw] sm:text-5xl font-extrabold leading-none py-5 w-[70vw] sm:w-80 mx-auto text-center
        ">HORSE FIRE <span className="text-[#f55437]">का कमाल</span>  </p>

        <div className="grid text-[1.3rem] sm:text-3xl gap-3 sm:gap-10 font-semibold">
          {dataList.map((e, key) => {
            return <div className="bg-gray-200 rounded-lg p-2" key={key}>
              <div className="grid grid-cols-12 gap-3 sm:gap-10 items-center">
                <div className="col-span-5">
                  <img src={e.img} alt="pic" height='100%' width='100%' loading='lazy' className='rounded-lg' />
                </div>
                <div className="col-span-7">
                  <p className="">{e.para}</p>
                </div>
              </div>
            </div>
          })}
        </div>

        <p className="text-[6vw] sm:text-4xl my-5 sm:my-10 font-bold text-center sm:leading-snug">
        Horse Fire की प्रत्येक गोली शुद्धता और यौनवर्धक क्षमता से भरपूर <span className="text-[#f55437]">है जिसकी वजह से इसकी मांग प्रतिदिन बढ़ती जा रही है। </span>
        </p>

      </div>
    </div>
  )
}

export default Sec4sub1