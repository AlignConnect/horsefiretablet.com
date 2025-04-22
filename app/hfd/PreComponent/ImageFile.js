const ImageFile = ({ imsrc, height = "100%", width = "100%", clname = "" }) => {
    return (
        <img className={clname} src={imsrc} alt="no" height={height} width={width} decoding='async' loading='lazy' />
    )
}

export default ImageFile;