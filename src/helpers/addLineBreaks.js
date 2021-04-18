import React from "react"

const addLineBreaks = text => {
  return text.split("\n").reduce((children, textSegment, index) => {
    return [...children, index > 0 && <br key={index} />, textSegment]
  }, [])
}

export default addLineBreaks
