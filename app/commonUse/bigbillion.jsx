import BitlyLinks from '@/components/hooks/Bitly-links';
import React from 'react'

const bigbillion = () => {

  const links = BitlyLinks();



  return (
    // <div className='grid sm:grid-cols-2 max-w-4xl mx-auto gap-2 my-5'>
    <div className='grid sm:grid-cols-2 max-w-4xl mx-auto gap-2 my-5'>
      <a href={links?.flipkartMain} className=" pop_imagehfv_big">
        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2159ebfa-9be6-46ca-3a53-b149945d4600/public" alt="pic" className=" " loading='lazy' />
      </a>

      <a href={links?.amazonMain} className=" pop_imagehfv_big">
        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3859fc36-15f1-4c27-3c49-8f5d51f54d00/public" alt="pic" className="" loading='lazy' />
      </a>
    </div>

    // <div></div>
  )
}

export default bigbillion