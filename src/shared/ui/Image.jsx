

const Image = ({
  src,
  alt = "image",
  className = "",
  wrapperClass = "",
  hover = true,
  ...rest
}) => {
  return (
    <div className={`overflow-hidden ${wrapperClass}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-500 ease-out ${className} `}
        {...rest}
      />
    </div>
  )
}

export default Image