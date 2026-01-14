import React, { useState } from "react"

const BlurImage = ({
  src,
  alt = "",
  className = "",
  imgClassName = "",
  ...props
}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blur placeholder */}
      <div
        className={`absolute inset-0 bg-slate-300/40 dark:bg-slate-700/40 transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`
          w-full h-full object-cover
          transition-all duration-700 ease-out
          ${loaded ? "blur-0 scale-100" : "blur-xl scale-105"}
          ${imgClassName}
        `}
        {...props}
      />
    </div>
  )
}

export default BlurImage
