import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react'

const Sec1 = dynamic(() => import("./Sec1"), {
    loading: () => <p>loader</p>
});
const Header = dynamic(() => import("./Header"), {
    loading: () => <p>loader</p>
});


const Main = () => {
    return (
        <div>

            <div className="relative">
                <div className="relative z-10 py-4">
                    <Header />

                    <Sec1 />
                </div>
                <Image src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cf284b23-a076-4024-1eb1-aeec051d2000/public" fill fetchPriority='high' alt='pic' loading='lazy' />
            </div>
        </div>
    )
}

export default Main