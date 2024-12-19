import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import '../Checkout.css'

const Material = () => {


    const [sell, setsell] = useState(70)

    useEffect(() => {

        setInterval(() => {
            const total = (new Date().getMinutes() * 60) + (new Date().getSeconds());
            setsell(() => {
                const log = Math.ceil((total * 87) / 3600)
                return log + 70
            })

        }, 1000);

        return () => {

            clearInterval();

        }

    }, [])



    return (

        <section className='px-2'>
            <div className='bg-[#eae09b] p-2 rounded-sm'>

                <div className='font-bold text-xl'>Offers</div>
                <ul className='list-disc save_extra'>
                    <li className='text-sm'>Save Extra 10% with Online Payment</li>
                    <li className='text-sm'>COD Available</li>
                </ul>

            </div>

            <section>
                <div className='text-center my-3 flex justify-center items-center'>
                    <Image src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f4f5e12f-c83e-4528-fada-b87270d74100/public" alt="no" width={21} height={21} />
                    <div style={{ fontWeight: 700 }}>
                        &nbsp;{sell} People Ordered Online in Last 1 Hour
                    </div>
                </div>

            </section>


        </section>

    )



}

export default Material