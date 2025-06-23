import BitlyLinks from "@/components/hooks/Bitly-links";

const Flipkart = () => {


    const links = BitlyLinks();


    return (
        <section className='max-w-xl mx-auto'>

            <div className="p-3 bg-inherit w-100">
                <a href={links?.flipkartMain} className="w-full d-grid leading-none">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e4e0ec8f-b49a-4b0a-2798-6cb6af788800/public" alt="pic" className="w-[200px] md:w-[300px] mx-auto -mt-3" loading='lazy'
                    />
                </a>
            </div>

        </section>
    )
}
export default Flipkart;