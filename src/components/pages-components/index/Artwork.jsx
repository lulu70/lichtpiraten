import React from "react"
import Container from "../../reusables/Container"
import createChunks from "../../../helpers/createChunks"
import useTabIsUsed from "../../../hooks/useTabIsUsed"
import getClassNamesByTabIsUsedState from "../../../helpers/getClassNamesByTabIsUsedState"
import Divider from "../../reusables/Divider"
import ImagesGallery from "../../reusables/ImagesGallery"

const Artwork = ({ data }) => {
  const [currentGalleryIndex, setCurrentGalleryIndex] = React.useState(0)
  const tabIsUsed = useTabIsUsed()
  const {
    artworksSection: { title, subtitle, images, overlayImage },
  } = data
  const chunkSize = 6
  const galleriesImages = createChunks({ arr: images, size: chunkSize })
  const isFirstImage = currentGalleryIndex === 0
  const isLastImage = currentGalleryIndex === galleriesImages.length - 1
  return (
    <section id="ARTWORKS" className="relative bg-black text-gray-400 py-12">
      <Container>
        <h2 className="text-xl text-center">{title}</h2>
        <Divider />
        <p className="mt-4 text-center font-light text-xl">{subtitle}</p>
        <ImagesGallery
          images={galleriesImages[currentGalleryIndex]}
          overlayImage={overlayImage}
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
          {galleriesImages.map((_, index) => (
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
      </Container>
    </section>
  )
}

export default Artwork
