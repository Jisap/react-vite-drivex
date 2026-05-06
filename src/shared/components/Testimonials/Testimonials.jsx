
import { testimonials } from "../../data/testimonials"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import TestimonialsCard from "../../ui/TestimonialsCard"

const Testimonials = () => {
  return (
    <>
      <div className="section pt-[8%] pb-[4%] relative space-y-8">
        <div className="content-col text-black w-full lg:w-1/2 relative gap-8 mx-auto">
          <div className="main-title flex flex-col text-center mx-auto gap-3">
            <span className="sub-title" data-aos="fade-down" data-aos-delay="100">
              Testimonials
            </span>

            <h2 className="heading-1 max-w-120" data-aos="fade-down" data-aos-delay="200">
              What our customers are saying about us
            </h2>
          </div>
        </div>

        <Splide
          options={{
            type: "loop",
            autoplay: true,
            interval: 3000,
            perPage: 1,
            gap: "1rem",
            arrows: false,
            pagination: true,
            breakpoints: {
              1024: {
                perPage: 2,
              },
              650: {
                perPage: 1,
              },
            }
          }}
        >
          {testimonials.map((tst, index) => (
            <SplideSlide key={tst.id} className="py-5!">
              <div
                data-aos="fade-center"
                data-aos-delay={120 * index}
              >
                <TestimonialsCard
                  id={tst.id}
                  image={tst.image}
                  name={tst.name}
                  position={tst.position}
                  pera={tst.pera}
                />

              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  )
}

export default Testimonials