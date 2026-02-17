import noImage from '../../assets/images/no-image.png'

const ImageWithFallback = ({ src, alt, className, ...props }) => {
  const handleError = (e) => {
    e.currentTarget.src = noImage
  }
  return (
    <img
      src={src || noImage}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  )
}

export default ImageWithFallback
