import Image from "next/image"

const Footer = () => {
    return (

        <section>


            <div className='m-3'>
                <Image src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cb6100ef-7663-42d5-d7a7-1fea080f5400/public" height={300} width={300} alt='no' className='mx-auto' />
            </div>

            <div className='w-full md:w-3/4 mx-auto my-3'>
                <iframe width="100%" height="200px" src="https://www.youtube.com/embed/I6VBauarWrM?si=iWwnigf2aV8WSW9A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

            <div className='mx-auto'>
                <Image src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e473c425-0d46-4b46-8483-f7bda68b7f00/public"} height={100} width={1000} alt='no' />
            </div>

            <div className="pt-3">
                <Image src={"https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/17554022-8633-4549-8c43-fc8450a47300/public"} width={200} height={200} alt="notfound" className="mx-auto" />
            </div>

            <div className="py-3">
                <p className="font-bold text-center py-1 text-sm">AR Ayurveda Private Limited</p>
                <p className="text-xs text-center">FF 14, Ujala Avenue, Sarkhej Road,Vishala,<br /> Ahmedabad Gujarat ( INDIA ) – 380055</p>
            </div>

        </section>

    )
}

export default Footer