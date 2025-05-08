import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react'

const Sec1 = dynamic(() => import('./Sec1'), {
    loading: () => <p>loader</p>
});

const Sec2 = dynamic(() => import('./Sec2'), {
    loading: () => <p>loader</p>
});

const Sec3 = dynamic(() => import('./Sec3'), {
    loading: () => <p>loader</p>
});

const Sec4 = dynamic(() => import('./Sec4'), {
    loading: () => <p>loader</p>
});


const Main = () => {




    return (
        <div>

            <div className="relative  ">
                <Sec1 />

                <Sec2 />

                <Sec3 />
                
                <Sec4 />


            </div>
        </div>
    )
}

export default Main