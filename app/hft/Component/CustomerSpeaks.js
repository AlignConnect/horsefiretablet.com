"use client";
import dynamic from "next/dynamic";


const YoutubeFrame = dynamic(() => import('../../commonUse/Youtubefile/YoutubeFrame'), {
    loading: () => <p>load</p>
})

const CustomerSpeaks = () => {
    return (
        <section className="w-full md:w-[768px] mx-auto my-5">
            <h3 className='my-3 text-center text-2xl'> <span className='knight'>Customer</span> Speaks</h3>
            <YoutubeFrame vid={"5dpQUMR_kRI"} />
        </section>
    )
}

export default CustomerSpeaks;