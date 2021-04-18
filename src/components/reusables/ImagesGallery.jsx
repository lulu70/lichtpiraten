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
            className="mr-8 mb-8 overflow-hidden relative"
          >
            <GatsbyImage
              image={getImage(image.localFile)}
              alt={image.title}
              className="pointer-events-none"
            />
            <div
              ref={imagesRefs[index]}
              className="flex justify-center transform -translate-x-full pointer-events-none absolute inset-0"
            >
              <GatsbyImage
                image={getImage(overlayImage.localFile)}
                alt={overlayImage.title}
                className="h-full"
              />
              <p className="border-t w-3/4 text-center pt-4 absolute inset-y-2/3 text-sm">
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
