
import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'

const FlipAmazonw = dynamic(() => import('./FlipAmazonw'), {
  loading: () => <p>loader</p>
});

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
  loading: () => <p>loader</p>
});



const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_1'), {
  loading: () => <p>loader</p>
});


const dataList = [
  {
    img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1319b639-daa5-48eb-d928-657083e6f300/public',
    para: '100% सुरक्षित और आयुष मंत्रालय द्वारा प्रमाणित है। '
  },
  {
    img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/05987ec8-e49f-4a60-5b77-b623b2d54300/public',
    para: 'प्रोडक्ट रिसीव के बाद पेमेंट की सुविधा उपलब्ध है।'
  },
  {
    img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cba23b0a-8540-4db1-9064-ceceac547800/public',
    para: 'दस दिनों की मनी बैक गारंटी सुविधा उपलब्ध है।'
  },
  {
    img: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1fa94310-a8d3-4635-4d37-a84af35da000/public',
    para: 'समस्या के हिसाब से प्रोडक्ट तैयार करने की सुविधा।'
  },
]

const Sec4sub1 = () => {

  return (
    <div className="">
      <div className='py-5 sm:py-7 bg-sky-200'>

        <div className="relative">
          <p className="relative z-10 text-center py-10 sm:py-14 text-white text-2xl sm:text-3xl font-bold">Horse Fire Tablet ही क्यों? </p>
          <Image fill alt='hft' loading='lazy' src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/23ffba55-a40d-4b67-c70a-024796d75c00/public' />
        </div>

        <div className="px-3 sm:px-10 grid grid-cols-2 text-xl sm:text-2xl font-bold text-center  gap-5 sm:gap-5 mt-5 sm:my-8" >
          {dataList.map((e, key) => {
            return <div className="" key={key}>
              <img src={e.img} alt="pic" height='100%' width='100%' loading='lazy' className='w-10/12 sm:w-8/12 mx-auto' />
              <p className="mt-3 sm:mt-5">{e.para}</p>

            </div>
          })}
        </div>

        <FlipAmazonw />

      </div>

      <div className=" text-white">

        <MostSelling />

      </div>


    </div>
  )
}

export default Sec4sub1