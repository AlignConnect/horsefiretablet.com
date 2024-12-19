import Image from 'next/image'
import React from 'react'

const Sec5 = () => {



  return (
    <div className=' relative '>
      <div className="relative z-10 py-5 sm:py-10 max-w-7xl mx-auto px-3 gap-2 sm:px-0 grid sm:grid-cols-12 items-center">
        <div className="sm:col-span-4">
          <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d96e22fc-af33-42af-3082-4cb5d9883800/public" alt="pic2" className="mb-5 sm:mb-0" height='100%' width='100%' loading='lazy' />
        </div>
        <div className="sm:col-span-8">
          <p className="text-2xl sm:text-6xl font-bold">Stronger Erections, Improved Performance</p>
          <p className="sm:text-xl italic my-3 sm:my-10 text-justify">Regular use of Horse Fire increases testosterone levels and improves blood circulation in the corpora cavernosa, which gives a stronger erection to the penis. According to customer reviews, they gradually feel enhancements in erection, sex timing, mood, and libido, and can easily perform 3–4 rounds in just a few weeks.</p>
          <div className="flex gap-5">
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5bd35936-6931-4088-8d24-2983c585d600/public" alt="pic2" className="w-32" height='100%' width='100%' loading='lazy' />
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c2b4a8e5-a6ef-4d88-7830-37f725f55300/public" alt="pic2" className="w-32" height='100%' width='100%' loading='lazy' />

          </div>
        </div>
      </div>
      <Image fill alt='pic' src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b8dba234-feae-4220-4c35-1e47b164a900/public' loading='lazy' />


    </div>
  )
}

export default Sec5