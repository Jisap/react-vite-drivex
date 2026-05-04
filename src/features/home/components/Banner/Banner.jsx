import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import precisionImg1 from "./assets/banner-image-01.jpg"
import precisionImg2 from "./assets/banner-image-02.jpg"




const Banner = () => {
  return (
    <>
      <section className="relative h-140 md:h-250 overflow-hidden">
        <Splide
          options={{
            type: "fade",
            rewind: true,
            autoplay: true,
            interval: 4000,
            speed: 2000,
            arrows: false,
            pagination: false,
            pauseOnHover: false,
          }}
          className="h-full"
        >
          {[precisionImg1, precisionImg2].map((img, index) => (
            <SplideSlide key={index}>
              <div className="relative h-140 md:h-250 w-full overflow-hidden group">
                <img
                  src={img}
                  alt="banner"
                  className="w-full h-full object-cover transition-transform divide-purple-400 ease-linear group-[.is-active]:scale-110"
                />

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
                  <h2 className="text-3xl md:text-6xl font-semibold uppercase! max-w-200" data-aos="fade-center" data-aos-delay="200">
                    Discover the ease and convenience of renting with us
                  </h2>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </section>
    </>
  )
}

export default Banner