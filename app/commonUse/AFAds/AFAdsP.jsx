import BitlyLinks from "@/components/hooks/Bitly-links";
import dynamic from "next/dynamic";

const CommonImg = dynamic(() => import("@/app/components/CommonImg"), {
    loading: () => <p>Loading...</p>,
});

const AFAdsP = () => {


    const links = BitlyLinks();

    return (
        <div className='text-inherit bg-inherit flex items-center justify-center flex-col gap-5'>
            <div className="">
                <CommonImg imglink="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/028e3269-d3a0-42a7-2ec0-2f65cc251200/public" />
            </div>
            <p className="text-3xl -mb-2 font-semibold">We are Available:</p>
            <div className="flex w-full justify-center items-center gap-5">
                <a href={links?.flipkartMain}



                    className=""><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1369a0a5-d191-4392-bf47-5c170ecb8600/public" alt="pic" className="w-40" width='100%' height='100%' /></a>

                <a href={links?.amazonMain}


                    className=""><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3edacd08-1afb-49b1-9aba-2cdda7681400/public" alt="pic" className="w-40" width='100%' height='100%' /></a>
            </div>
        </div>
    )
}

export default AFAdsP