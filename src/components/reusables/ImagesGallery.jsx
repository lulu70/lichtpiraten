import React from "react"
import { gsap } from "gsap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImagesGallery = ({ images, overlayImage }) => {
  const imagesRefs = images.map(() => React.createRef())
  function enterOverlay({ index }) {
    gsap.to(imagesRefs[index].current, {
      x: 0,
      xPercent: 0,
    })
  }
  function exitOverlay({ index }) {
    gsap.to(imagesRefs[index].current, {
      xPercent: -100,
    })
  }
  return (
    <div className="mt-8 flex flex-wrap justify-between -mr-8">
      {images.map((image, index) => (
        <div key={image.id} className="w-1/2 lg:w-1/3">
          <div
            onPointerEnter={() => enterOverlay({ index })}
            onPointerLeave={() => exitOverlay({ index })}
            className="mr-8 mb-8 overflow-hidden relative select-none"
          >
            <GatsbyImage
              image={getImage(image.localFile)}
              alt={image.title}
              className="pointer-events-none w-full"
            />
            <div
              ref={imagesRefs[index]}
              className="flex justify-center transform -translate-x-full pointer-events-none absolute inset-0 w-full"
            >
              <GatsbyImage
                image={getImage(overlayImage.localFile)}
                alt={overlayImage.title}
                className="h-full w-full z-0"
              />
              <p className="border-t text-center lg:pt-4 absolute inset-y-1/3 lg:inset-y-2/3 text-xs lg:text-base w-full">
                {image.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImagesGallery
