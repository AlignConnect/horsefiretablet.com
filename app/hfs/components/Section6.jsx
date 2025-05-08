import dynamic from "next/dynamic";

const YoutubeFrame = dynamic(() => import("@/app/commonUse/Youtubefile/YoutubeFrame"), {
    loading: () => <p>loading</p>
});

const Section6 = () => {

    return (
        <div className='w-full mt-8'>
            <h3 className='mt-3 text-center text-2xl sm:text-3xl font-bold'>क्या कहते है CUSTOMER <br /><span className='text-red-700 uppercase'>Horse Fire Tablet</span><br /> के बारे में</h3>
            <YoutubeFrame vid={"5dpQUMR_kRI"} />
        </div>
    )
}
export default Section6;