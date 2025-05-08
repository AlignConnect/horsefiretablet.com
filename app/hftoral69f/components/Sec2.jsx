import dynamic from 'next/dynamic';
import React from 'react'

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
  loading: () => <p>loader</p>
});

const data = [
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/89380dca-29ff-447f-8369-65c442c49700/public',
    para: 'लम्बा और मोटा लिंग'
  },
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/568ed344-3b89-4080-637f-b6d6a8326200/public',
    para: 'लम्बा सेक्स और ऑर्गज़्म'
  },
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b51fcdcb-0a7f-4d5c-2b4d-1d24f468f900/public',
    para: 'छोटा और पतला लिंग'
  }, 
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/eb434123-9f26-49ac-5a43-475bf50e8400/public',
    para: '1-2 मिनट का सेक्स'
  },

]

const Sec2 = () => {
  return (
    <div className='mt-5 mb-3 sm:mt-12 sm:mb-7 '>
      <div className=" mx-5 sm:mx-10 text-[15vw] sm:text-[5.7rem] leading-none  font-extrabold text-center">
        <span className="text-red-500">आपकी पार्टनर</span> को चाहिए
      </div>
      <div className=" relative">
        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7340000f-dd59-4c8e-cd27-ff0354e9c500/public" alt="pic" height='100%' width='100%' loading='lazy' className='' />


        <div className="">
          <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/42634b75-8bc0-491d-d45d-919416c11e00/public" alt="pic" height='100%' width='100%' loading='lazy' className='w-20 absolute top-0 -left-10 rotate-90' />
          <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/42634b75-8bc0-491d-d45d-919416c11e00/public" alt="pic" height='100%' width='100%' loading='lazy' className='w-20 absolute bottom-[20%] -right-10 rotate-6' />
        </div>


      </div>
      <div className="-mt-[10%] relative z-10 mx-2 sm:mx-3  ">
        <div className="border-4 border-yellow-500 rounded-[8vw] sm:rounded-[5vw] py-7 sm:py-16 bg-zinc-800 px-2 sm:px-10 text-[1.1rem] sm:text-2xl"  style={{boxShadow: "rgba(209, 116, 59, 0.25) 0px 54px 55px, rgba(209, 116, 59, 0.12) 0px -12px 30px, rgba(209, 116, 59, 0.12) 0px 4px 6px, rgba(209, 116, 59, 0.17) 0px 12px 13px, rgba(209, 116, 59, 0.09) 0px -3px 5px"}}>
          <div className="grid grid-cols-2 gap-2 sm:gap-20 ">
            {data.slice(0, 2).map((e, key) => {
              return <div className="" key={key}>
                <p className="rounded-xl sm:rounded-full bg-yellow-600 pt-3 text-center font-bold mb-4">{e.para}</p>
                <img src={e.image} alt="pic" height='100%' width='100%' loading='lazy' className='rounded-3xl' />
              </div>
            })}
          </div>
          <div className=" mx-5 sm:mx-10 text-[10vw] sm:text-[5.7rem] leading-none  font-extrabold text-center mt-14 sm:mt-16 text-white">
            <span className="">उन्हें क्या </span> मिलता है ?
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-20 mt-2 sm:mt-5 ">
            {data.slice(2, 5).map((e, key) => {
              return <div className="" key={key}>
                <p className="rounded-xl sm:rounded-full bg-yellow-600 pt-3 text-center font-bold mb-4">{e.para}</p>
                <img src={e.image} alt="pic" height='100%' width='100%' loading='lazy' className='rounded-3xl' />
              </div>
            })}
          </div>
        </div>
      </div>
      <div className="mt-5">
        
      <FlipAmazon/>
      </div>
    </div>
  )
}

export default Sec2