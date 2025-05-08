import dynamic from 'next/dynamic';
import React from 'react'

const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_1'), {
  loading: () => <p>loader</p>
});

const Sec7 = () => {

  return (
    <div className="bg-inherit max-w-3xl mx-auto">


      <MostSelling />

    </div>
  )
}

export default Sec7