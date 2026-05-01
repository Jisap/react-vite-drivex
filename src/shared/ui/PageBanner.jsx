import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import bannerBg from "../../assets/images/page-header-bg.webp"
import { useEffect, useRef } from "react"



const PageBanner = ({
  title,
  currentPage,
  productName
}) => {

  const containerRef = useRef(null);

  return (
    <>
      <div
        ref={bannerRef}
        className="section-banner bg-center bg-cover bg-no-repeat min-h-112 flex justify-center items-center lg:items-end pb-10 relative z-10"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="container px-4 z-10 section-container text-center gap-5">
          <h3 className="heading-1 text-white text-left" data-aos="fade-center" data-aos-delay="300">
            {productName ? productName : title}
          </h3>

          <ul className="centered-row flex-wrap justify-center text-white space-x-2">
            <li data-aos="fade-center" data-aos-delay="200">
              <Link to="/">
                Home
              </Link>
              <ChevronRight size={18} data-aos="fade-center" data-aos-delay="300" />
            </li>

            <li data-aos="fade-center" data-aos-delay="400">
              {currentPage}
            </li>

            {productName && (
              <>
                <ChevronRight size={18} data-aos="fade-center" data-aos-delay="300" />
                <li data-aos="fade-center" data-aos-delay="400">
                  {productName}
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="overly bg-black/60 absolute top-0 left-0 w-full h-full"></div>
      </div>
    </>
  )
}

export default PageBanner