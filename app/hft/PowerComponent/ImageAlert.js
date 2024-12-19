const ImageAlert = ({ handleimage }) => {
    return (
        <img src={handleimage} className="md:w-[768px] max-h-full min-h-[230px] md:min-h-[500px]" alt="noimage" loading="lazy" />
    )
}

export default ImageAlert;