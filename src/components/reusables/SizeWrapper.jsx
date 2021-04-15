import React from "react"

const SizeWrapper = ({ children, className }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4  ${className}`}>{children}</div>
  )
}

export default SizeWrapper
