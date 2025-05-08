import { Poppins } from "next/font/google";
import { motion } from 'framer-motion'
const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Ordernow = () => {
    return (

        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={poppin.className}><div className="text-center text-white font-bold fontPoppins">
                <a href="#form" className="inline-block bg-gradient-to-t from-red-500 to-red-700 px-1 rounded-full py-2 my-2 pop_imagehfv">
                    <span className=" bg-gradient-to-b from-red-500 to-red-700 px-5 rounded-full py-2">ORDER NOW</span>
                </a>
            </div></div>
        </motion.div>

    )
}

export default Ordernow