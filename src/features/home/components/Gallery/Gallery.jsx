import galleryImg1 from "./assets/gallery-image-01.jpg"
import galleryImg2 from "./assets/gallery-image-02.jpg"


const Gallery = () => {
  return (
    <>
      <div className="gallery section section-container py-[8%] relative gap-10 lg:gap-14">
        <div className="gallery-image lg:sticky top-0 left-0 w-auto h-full group overflow-hidden rounded-lg">
          <img
            src={galleryImg1}
            alt="gallery-img"
            className="section-image group-hover:scale-100 transition-all duration-300"
            data-aos="fade-center"
            data-aos-delay="100"
          />
        </div>

        <div className="gallery-image w-auto h-auto group overflow-hidden" data-aos="fade-center" data-aos-delay="300">
          <img
            src={galleryImg2}
            alt="gallery-img"
            className="section-image group-hover:scale-100 transition-all duration-300"
          />
        </div>
      </div>
    </>
  )
}

export default Gallery