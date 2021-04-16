import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SizeWrapper from "../../reusables/SizeWrapper"
import createChunks from "../../../helpers/createChunks"
import useTabIsUsed from "../../../hooks/useTabIsUsed"
import getClassNamesByTabIsUsedState from "../../../helpers/getClassNamesByTabIsUsedState"
import { gsap } from "gsap"

const Divider = () => (
  <div className="flex mx-auto max-w-xl mt-4 items-center space-x-2">
    <div className="border-t border-gray-400 flex-1"></div>
    <div className="w-2 h-2 bg-gray-400 transform rotate-45" />
    <div className="border-t border-gray-400 flex-1"></div>
  </div>
)

const Gallery = ({ images, thumbOverlay }) => {
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
      {images.map(({ image, description }, index) => (
        <div key={image.id} className="w-1/2 lg:w-1/3">
          <div className="mr-8 mb-8 aspect-w-16 aspect-h-9 overflow-hidden relative">
            <GatsbyImage
              onPointerEnter={() => enterOverlay({ index })}
              onPointerLeave={() => exitOverlay({ index })}
              image={getImage(image)}
              alt={description}
            />
            <div
              ref={imagesRefs[index]}
              className="flex justify-center transform -translate-x-full pointer-events-none"
            >
              <GatsbyImage
                image={getImage(thumbOverlay)}
                alt={thumbOverlay.name}
                className="h-full"
              />
              <p className="border-t w-3/4 text-center pt-4 absolute inset-y-2/3 text-sm">
                {description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const Artwork = ({ data }) => {
  const [currentGalleryIndex, setCurrentGalleryIndex] = React.useState(0)
  const tabIsUsed = useTabIsUsed()
  const chunkSize = 6
  const images = [
    {
      image: data.katerHolzig,
      description: "KATER HOLZIG",
    },
    {
      image: data.teufelsbergFulldomeShow,
      description: "TEUFELSBERG FULLDOME SHOW",
    },
    { image: data.verzauberung, description: "VERZAUBERUNG" },
    {
      image: data.furImmerImNebel,
      description: "FÜR IMMER IM NEBEL - FOREVER FOG",
    },
    {
      image: data.random30C3Hamburg2013,
      description: "RANDOM 30C3 HAMBURG 2013",
    },
    { image: data.timeMachine, description: "TIMEMACHINE" },
    {
      image: data.teufelsbergFulldomeShow,
      description: "TEUFELSBERG FULLDOME SHOW",
    },
    {
      image: data.katerHolzig,
      description: "KATER HOLZIG",
    },
    {
      image: data.furImmerImNebel,
      description: "FÜR IMMER IM NEBEL - FOREVER FOG",
    },
    { image: data.verzauberung, description: "VERZAUBERUNG" },
    { image: data.timeMachine, description: "TIMEMACHINE" },
    {
      image: data.random30C3Hamburg2013,
      description: "RANDOM 30C3 HAMBURG 2013",
    },
  ]
  const galleriesImages = createChunks({ arr: images, size: chunkSize })
  const isFirstImage = currentGalleryIndex === 0
  const isLastImage = currentGalleryIndex === galleriesImages.length - 1
  return (
    <section id="ARTWORKS" className="relative bg-black text-gray-400 py-12">
      <SizeWrapper>
        <h2 className="text-xl text-center">ARTWORKS</h2>
        <Divider />
        <p className="mt-4 text-center font-light text-xl">
          Audio Visual live shows, Installations & Collaborations.
        </p>
        <Gallery
          images={galleriesImages[currentGalleryIndex]}
          thumbOverlay={data.thumbOverlay}
        />
        <div className="flex justify-center space-x-4">
          <button
            className={`text-sm ${
              isFirstImage ? "text-gray-700" : "text-current"
            } ${getClassNamesByTabIsUsedState(tabIsUsed)}`}
            disabled={isFirstImage}
            onClick={() => {
              setCurrentGalleryIndex(currentGalleryIndex - 1)
            }}
          >
            {"<<"}
          </button>
          {galleriesImages.map((gallery, index) => (
            <button
              key={index}
              className={`active:text-accent text-xl ${
                index === currentGalleryIndex ? "text-accent" : "text-current"
              } ${getClassNamesByTabIsUsedState(tabIsUsed)}`}
              onClick={() => {
                setCurrentGalleryIndex(index)
              }}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`text-sm ${
              isLastImage ? "text-gray-700" : "text-current"
            } ${getClassNamesByTabIsUsedState(tabIsUsed)}`}
            disabled={isLastImage}
            onClick={() => {
              setCurrentGalleryIndex(currentGalleryIndex + 1)
            }}
          >
            {">>"}
          </button>
        </div>
      </SizeWrapper>
    </section>
  )
}

export default Artwork
