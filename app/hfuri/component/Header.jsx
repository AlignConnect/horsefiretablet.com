import dynamic from 'next/dynamic';
import { Poppins } from 'next/font/google';


const Inquiry = dynamic(() => import('./Inquiry'));


const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


// const dragstart = (start) => {

//     console.log(start.target);
//     console.log("trigger is start")
//     start.target.className += " border-2 border-red-400"
//     setTimeout(() => {
//         start.target.className += " hidden"
//     }, 0);

// }


// const dragend = (end) => {

//     console.log(end.target);
//     console.log("trigger is end")
//     end.target.className = "imgbox"
// }




// const dragover = (over) => {
//     over.preventDefault();
//     console.log("over")

// }


// const dragenter = (enter) => {

//     console.log("enter")

// }


// const dragleave = (leave) => {

//     console.log("leave")

// }


// const drop = (drop) => {

//     console.log("drop")

//     drop.target.append(document.querySelector(".imgbox"))

// }




const Header = () => {
    return (
        <section>

            <div>
                <img src="/main/hfuri_images/first.webp" alt="dsf" loading='lazy' className='w-full' draggable="true" />
            </div>


            {/* //------------------------------------------ */}


            {/* <div className="whitebox" onDragOver={dragover} onDragEnter={dragenter} onDragLeave={dragleave} onDrop={drop}>

                <div className="imgbox" draggable={true} onDragStart={dragstart} onDragEnd={dragend} > </div>

            </div>
            <div className="whitebox" onDragOver={dragover} onDragEnter={dragenter} onDragLeave={dragleave} onDrop={drop}></div>
            <div className="whitebox" onDragOver={dragover} onDragEnter={dragenter} onDragLeave={dragleave} onDrop={drop}></div>
            <div className="whitebox" onDragOver={dragover} onDragEnter={dragenter} onDragLeave={dragleave} onDrop={drop}></div> */}


            {/* //------------------------------------------ */}



            {/* <div className=''>
                भारत में   <span>मर्दाना कमजोरी </span> का बेजोड़ इलाज
            </div> */}

            <div className='bg-white relative leading-3'>

                <h1 className={`${poppin.className} text-4xl md:text-5xl font-bold text-center pt-[30px]`} > BE A <span className='text-red-600'>MONSTER</span> </h1>
                <h2 className={`${poppin.className} absolute text-5xl md:text-6xl font-bold transform translate-x-[150%] md:translate-x-[240%]`}>IN</h2>

                <div>
                    <img src="/main/hfuri_images/monster.webp" alt="dsf" loading='lazy' className='w-[60%] mx-auto' />
                </div>

            </div>


            <Inquiry />



            <div className={`${poppin.className} text-4xl font-bold text-white text-center py-[20px] bg-[#0f9aff]`}>

                JUST 30 DAYS

            </div>

            {/* #f1edee */}

            <div className='bg-[#f1edee] py-5'>

                <div className='flex justify-center items-center py-3 gap-3'>
                    <img src="/main/hfuri_images/l.webp" alt="asdasd" loading='lazy' className='w-[40px]' />
                    <img src="/main/hfuri_images/thi.webp" alt="asdasd" loading='lazy' className='w-[10rem]' />
                    <img src="/main/hfuri_images/r.webp" alt="asdasd" loading='lazy' className='w-[40px]' />
                </div>

                <div className='w-[90%] bg-[#0f9aff] mx-auto rounded-2xl overflow-hidden'>

                    <h2 className='text-white text-2xl text-center p-4 pt-5'>बीवी को रखना है खुश तो बने मर्द और दें भरपूर यौन सुख !</h2>

                    <div>
                        <img src="/main/hfuri_images/vui.webp" alt="sd" loading='lazy' className='w-full' />
                    </div>

                </div>

            </div>



        </section >)
}

export default Header