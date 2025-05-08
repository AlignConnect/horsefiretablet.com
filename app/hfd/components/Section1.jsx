import dynamic from 'next/dynamic';
import '../hfv.css';


const HeaderMain = dynamic(() => import('../PreComponent/HeaderMain'), {
    loading: () => <p>loading</p>
})

const Headersection = dynamic(() => import('../PreComponent/HeaderSection'), {
    loading: () => <p>loading</p>
});

const HeaderSection2 = dynamic(() => import('../PreComponent/HeadeSection2'), {
    loading: () => <p>loading</p>
});

const Section1 = () => {



    return (


        <div className="w-full grid relative" >

            <HeaderMain />
            <Headersection />
            <HeaderSection2 />



            {/* <Image src='/main/hkart_images/bg01.jpg' fill alt='pic' className='absolute top-0 z-0' /> */}
        </div>
    )
}
export default Section1;