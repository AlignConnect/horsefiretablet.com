"use client"
import { useState } from 'react';
import { useEffect } from 'react'



const BitlyLinks = () => {

    const [bitlyLinks, setbitlyLinks] = useState();

    async function getBitlysLinks() {
        const response = await fetch("https://bitesly.in/api/websites/horsefire", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                websites: "https://horsefiretablet.com"
            }),
        })

        const allLinks = await response.json();
        setbitlyLinks(allLinks?.data)
    }

    useEffect(() => {
        getBitlysLinks()
    }, [])



    return bitlyLinks
}

export default BitlyLinks
