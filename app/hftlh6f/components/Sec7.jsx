import dynamic from 'next/dynamic';
import React from 'react'

const FlipAmazon = dynamic(() => import('@/app/hft143f/components/FlipAmazon'), {
  loading: () => <p>loader</p>
});

const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_1'), {
  loading: () => <p>loader</p>
});


const Sec7 = () => {

  return (
    <div className="bg-white max-w-2xl mx-auto">


      <MostSelling />



    </div>
  )
}

export default Sec7