import React from 'react'


const v = (arr) => {
    return arr?.map((e, key) => {
        return <div className='col-span-3 text-center' key={key}>
            <div className='flex justify-center items-center h-[70px] md:h-[120px]'>
                <img src={e.img} alt="no" className='w-[40px] md:w-[100px] min-h-[30px]' />
            </div>
            <div className='my-2'>
                <h1 className='icon-title'>{e.title}</h1>
            </div>
        </div>
    })
}





const importance = () => {


    return (
        <div>
            <div className='text-center w-full bg-[#7d100b]'>

                <div className='grid grid-cols-12 justify-content-center align-items-center m-auto ico'>
                    {
                        v([
                            { img: "/main/hfp_images/one.png", title: "लम्बा सुडोल लिंग" },
                            { img: "/main/hfp_images/two.png", title: "लम्बी सेक्स अवधि " },
                            { img: "/main/hfp_images/three.png", title: "भरपूर संतुष्टि" },
                            { img: "/main/hfp_images/four.png", title: "जोरदार उत्तेजना" },
                        ])
                    }
                </div>

            </div>
        </div>
    )
}

export default importance