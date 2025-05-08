const ImageAlert = ({ handleimage }) => {
    return (
        <img src={handleimage} className="w-[360px] md:w-[100%] max-h-full min-h-[230px] md:min-h-[500px]" alt="noimage" loading="lazy" />
    )
}

export default ImageAlert;