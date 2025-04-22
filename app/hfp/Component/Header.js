import dayjs from "dayjs";
import '../hfp.css'

const Header = () => {
    return (
        <div className='bg-white p-4 mar mx-auto border'>
            <div className='flex justify-center items-center w-full'>
                <div className='text-red-400 font-bold bg-light z-40' >ATTENTION&nbsp;:&nbsp; </div>

                <marquee direction="Left" className="text-black">
                    Due to the huge popularity of our product, our stocks are running out. At
                    &nbsp;
                    {
                        dayjs().add(1, 'day').format("YYYY-MM-DD")
                    }</marquee>
            </div>
        </div>
    )
}

export default Header;