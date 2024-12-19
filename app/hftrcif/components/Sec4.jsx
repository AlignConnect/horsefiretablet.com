
import dynamic from 'next/dynamic';
import React from 'react'

const FlipAmazon = dynamic(() => import('./FlipAmazon'), {
  loading: () => <p>loader</p>
});

const FlipAmazonw = dynamic(() => import('./FlipAmazonw'), {
  loading: () => <p>loader</p>
});

const Flipkart = dynamic(() => import('./Flipkart'), {
  loading: () => <p>loader</p>
});



const Sec4 = () => {

  const dataListing = [
    {
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e02d8a60-b180-440e-9c9f-218d0496a400/public',
      title: 'जोरदार ऊर्जा और स्टैमिना'
    },
    {
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c3828ee0-bf09-4639-4f80-c95dc7a9c500/public',
      title: 'मनचाही लम्बी अवधि'
    },
    {
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3c3c2fe7-db5a-4366-1677-2745dba92f00/public',
      title: 'मजबूत खड़ापन देर तक'
    },
    {
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/567ebe31-89d0-45ed-7032-c3debe3c0d00/public',
      title: 'मिनिमम 4 राउंड हर बार'
    }
  ]

  return (
    <div className="">

      <div className='my-5 sm:my-10'>
        <div className="max-w-96 px-3 mx-auto">
          <p className="text-xl sm:text-[1.62rem] font-bold text-center"><span className="text-red-700 font-extrabold">Horse Fire Tablet </span> से वो  <br /> सब पाएं जिसकी आप कल्पना करते है। </p>
          <div className="border-4 border-red-700 p-5 sm:p-8 rounded-b-[3rem]">
            <img src={'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6cb83816-5cb9-454a-bc9e-df8fb9e78900/public'} alt="pic" height='100%' width='100%' loading='lazy' className='' />
            <Flipkart />
          </div>
        </div>


        <div className="text-2xl sm:text-3xl text-center font-bold text-red-700 px-3 sm:px-10 mb-5">
          {dataListing.map((e, key) => {
            return <div className="" key={key}>
              <div className="mt-5  sm:mt-10 sm:mb-3" dangerouslySetInnerHTML={{ __html: e.title }} />
              <img src={e.image} alt="pic" height='100%' width='100%' loading='lazy' />

            </div>
          })}
        </div>
        <FlipAmazonw />

      </div>
      <img src={'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/44d9618e-dc4f-4e76-4349-54bf5fb2c300/public'} alt="pic" height='100%' width='100%' loading='lazy' />
      <div className="bg-black text-white p-5">
        <div className=" p-5 sm:py-10 border border-dotted border-[yellow]">

          <p className=" text-center font-bold text-xl sm:text-[1.6rem] leading-snug mb-3">
            पर चिंता न करें अब ये सब दूर नहीं !! आयुर्वेद की सबसे महानतम खोज <span className="text-[yellow]">Horse Fire Tablet</span> से इस समस्या को जड़ से मिटायें और पाए लम्बे, <span className="text-[yellow]">मोटे</span> और <span className="text-[yellow]">फौलादी लिंग</span>  के साथ जोरदार <span className="text-[yellow]">सेक्स स्टैमिना</span> ! रीसर्च के मुताबिक महिलाये 13 से 26 मिनट लगातार लंड के झटके मिलने पर झड़ती है पर Horse Fire Tablet की मदद से पुरुष उससे भी <span className="text-[yellow]">ज्यादा देर</span> तक सेक्स कर सकता है।
          </p>
          <Flipkart />
        </div>

      </div>


    </div>

  )
}

export default Sec4