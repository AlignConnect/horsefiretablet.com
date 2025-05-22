import React from 'react'

const Sec3 = () => {

  const data = [
    {
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4a7ffd92-9729-4594-b4fa-ddfcafd19b00/public',
      para: '96.6% of Men Found',
      brpara: 'it Beneficial'
    },
    {
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2ec2e92e-6ced-4985-169d-9bac8aa0dc00/public',
      para: '20 Laks+ Satisfied',
      brpara: 'Customers'
    },
    {
      img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7e04bf8c-d93e-4723-a1af-a7f6234bec00/public',
      para: 'Save Extra 10% on',
      brpara: 'Prepaid Order'
    }
  ]

  return (
    <div className='bg-[#f5d34b] rounded-xl py-3 px-3 sm:py-5 sm:px-10 grid sm:grid-cols-3 gap-5 sm:gap-10 text-2xl sm:text-3xl  uppercase font-extrabold fontBebas'>

      {data.map((e, key) => {
        return <div className="grid grid-cols-12 gap-3 items-center" key={key}>
          <div className="col-span-3">
            <img src={e.img} className="" alt="pic2" height='100%' width='100%' loading='lazy' />
          </div>
          <div className="col-span-9 text-zinc-900">
            <p className="">{e.para}</p>
            <p className="">{e.brpara}</p>
          </div>
        </div>
      })}
    </div>
  )
}

export default Sec3