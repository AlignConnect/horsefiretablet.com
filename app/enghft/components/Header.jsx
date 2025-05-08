import dynamic from 'next/dynamic';
import React from 'react'


const Order_now = dynamic(() => import('./Order_now'), {
    loading: () => <p>loader</p>
})


const Header = () => {





    return (
        <div className=""></div>

    )
}

export default Header