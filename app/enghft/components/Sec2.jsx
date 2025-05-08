import Image from 'next/image'
import React from 'react'

const Sec2 = () => {
  const data = [
    {
      title: 'Low energy and Stamina',
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/08399cfd-c302-4b13-499f-93b148cefb00/public',
      para: 'Most men get tired very quickly during physical activity or in bed. As a result, the brain signals early ejaculation.',
    },
    {
      title: 'Lack of sex timing, aka PE',
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cb44a0eb-4ba0-4b7c-1338-6eb09ec73f00/public',
      para: 'Men suffering from premature ejaculation ejaculate within a minute or sometimes even without having sex.',
    },
    {
      title: 'Small penis & Low erection',
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8cbc87a0-4d97-429c-5a9c-3cc0a28c9a00/public',
      para: "Men with a small or loose penis are unable to stimulate a woman's G-Spot and hence cannot have enjoyable sex.",
    },
    {
      title: 'Unable to satisfy your partner',
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9d965922-cfee-4d34-bb9d-0d6b70f1ab00/public',
      para: "Due to sexual problems, males are unable to fulfill their partners' sexual desires; as a result, many women cheat on their partners.",
    }
  ]

  return (
    <div className='relative'>

      <div className="relative z-10 pt-36 md:pt-20  px-3 md:px-0">
        <div className="grid md:grid-cols-12 items-end ">

          <p className="font-extrabold text-2xl md:text-4xl  md:hidden">ARE YOU SUFFERING FROM THE BELOW-MENTIONED PROBLEMS?</p>

          <div className="md:col-span-7 order-1 md:order-1">
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/dc1bcc44-b0a3-4cd6-8a39-dd9f1b60ac00/public" alt="pic2" className="" height='100%' width='100%' loading='lazy' />
          </div>
          <div className="md:col-span-4 md:-ml-[30%] order-2 md:order-2">
            <p className="font-extrabold text-2xl md:text-4xl hidden md:block">ARE YOU SUFFERING FROM THE BELOW-MENTIONED PROBLEMS?</p>

            <div className="space-y-5 text-[0.8rem] md:text-[1.1rem] leading-tight mb-5 xl:mb-10">
              {
                data.map((e, key) => {
                  return <div className="" key={key}>
                    <h1 className="text-[1.2rem]  font-extrabold md:hidden">{e.title}</h1>

                    <div className="grid grid-cols-12 items-center gap-3 mt-2 md:gap-5" >
                      <div className="col-span-3 md:col-span-2">
                        <img src={e.img} className="" alt="pic2" height='100%' width='100%' loading='lazy' />
                      </div>
                      <div className="col-span-9 md:col-span-9">
                        <h1 className="text-2xl font-extrabold hidden md:block">{e.title}</h1>
                        <p className="">{e.para}</p>
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>

      <Image fill alt='pic' src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6fdcd5b4-13b6-4173-5e8d-8387e5544700/public' loading='lazy' />
    </div>
  )
}

export default Sec2