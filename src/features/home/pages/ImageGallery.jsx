import PageBanner from '../../../shared/ui/PageBanner'
import gallery1 from "../../../assets/images/imagegallery/gallery-1.jpg"
import gallery2 from "../../../assets/images/imagegallery/gallery-2.jpg"
import gallery3 from "../../../assets/images/imagegallery/gallery-3.jpg"
import gallery4 from "../../../assets/images/imagegallery/gallery-4.jpg"
import gallery5 from "../../../assets/images/imagegallery/gallery-5.jpg"
import gallery6 from "../../../assets/images/imagegallery/gallery-6.jpg"
import gallery7 from "../../../assets/images/imagegallery/gallery-7.jpg"
import gallery8 from "../../../assets/images/imagegallery/gallery-8.jpg"
import gallery9 from "../../../assets/images/imagegallery/gallery-9.jpg"



const ImageGallery = () => {

  const gallery = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
  ];

  return (
    <>
      <PageBanner
        title="Image Gallery"
        currentPage="Image Gallery"
      />
    </>
  )
}

export default ImageGallery