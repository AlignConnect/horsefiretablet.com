import dynamic from 'next/dynamic';
import React from 'react'

const Form = dynamic(() => import('./Form'), {
    loading: () => <p>loader</p>
});

function Tab_Exp() {
    return (
        <div className="">

            

                <div className='w-full max-w-md mx-auto px-3'>

                    <h1 className=" text-3xl sm:text-4xl  text-center  font-extrabold">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें!</h1>

                    <div className=" max-w-5xl mx-auto  mt-5">
                        <Form />
                    </div>

            </div>
        </div>
    )
}

export default Tab_Exp