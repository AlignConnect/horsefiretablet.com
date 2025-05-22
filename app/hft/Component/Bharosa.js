import dynamic from "next/dynamic";

const HorseTablet = dynamic(() => import('../PowerComponent/HorseTablet'), {
    loading: () => <p>load horsefire tablet</p>
})


const Expert = dynamic(() => import('../PowerComponent/Expert'), {
    loading: () => <p>load horsefire tablet</p>
})

const Bharosa = () => {
    return (
        <section className="max-w-full md:w-[750px] mx-auto">

            <HorseTablet />

            <Expert />

        </section>
    )
}

export default Bharosa;