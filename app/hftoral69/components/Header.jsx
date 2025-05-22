
import React from 'react'
import { IoMdMenu } from 'react-icons/io'

const Header = () => {
    return (
        <div className="flex items-center justify-between px-3  ">
            <a href="#form" aria-label="Read more "><IoMdMenu className='text-2xl text-white' /></a>
            <a href="#form" aria-label="Read more "><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/dce5b0f2-f951-4b85-fd33-42ce8ac05600/public" alt="piC" loading="lazy" width='30rem' height='100%' /></a>
        </div>
    )
}

export default Header