import * as React from "react"

// Simplified image wrapper for the standalone site — renders a plain <img>.
const Image = React.forwardRef(
  (
    {
      src,
      alt = "",
      className,
      fittingType,
      focalPointX,
      focalPointY,
      originWidth,
      originHeight,
      quality,
      ...props
    },
    ref
  ) => (
    <img ref={ref} src={src} alt={alt} loading="lazy" className={className} {...props} />
  )
)
Image.displayName = "Image"

export { Image }