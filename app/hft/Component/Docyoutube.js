"use client";
import dynamic from 'next/dynamic';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const YoutubeFrame = dynamic(() => import('../../commonUse/Youtubefile/YoutubeFrame'), {
    loading: () => <p>load timing</p>
});

const Docyoutube = () => {
    return (
        <section className="max-w-full md:w-[750px] mx-auto">
            <h3 className='my-2 text-center text-2xl'> <span className='knight'>Doctor</span> Recommendation</h3>

            <Carousel showStatus={false}>
                <YoutubeFrame vid={"I7RqbSjlptY"} />
                <YoutubeFrame vid={"rf51nF8mlb0"} />
                <YoutubeFrame vid={"MEu79bhcSGk"} />
            </Carousel>


        </section>
    )
}

export default Docyoutube;