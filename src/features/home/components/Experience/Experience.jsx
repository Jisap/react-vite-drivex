import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import Button from "../../../../shared/components/Button"
import experienceImg1 from "./assets/experience-image-01.jpg"
import experienceImg2 from "./assets/experience-image-02.jpg"
import experienceImg3 from "./assets/experience-image-03.jpg"
import experienceImg4 from "./assets/experience-image-04.jpg"
import experienceImg5 from "./assets/experience-image-05.jpg"
import experienceImg6 from "./assets/experience-image-06.jpg"




const Experience = () => {

  const images = [
    experienceImg1,
    experienceImg2,
    experienceImg3,
    experienceImg4,
    experienceImg5,
    experienceImg6,
  ];

  return (
    <>
      <div className="bg-heading">
        <section className="experience section py-[8%] relative space-y-10">
          <div className="experience-content text-white section-container item-start gap-10 lg:gap-14">
            <div className="main-title flex flex-col gap-3 w-full lg:w-1/2">
              <span className="sub-title" data-aos="fade-right" data-aos-delay="100">
                Welcome to DriveX
              </span>

              <h2 className="heading-1 max-w-2xl" data-aos="fade-right" data-aos-delay="200">
                The ultimate driving experience
              </h2>
            </div>

            <div className="content-desc flex flex-col gap-6 w-full lg:w-1/2">
              <p className="text-desc text-gray-light" data-aos="fade-left" data-aos-delay="500">
                Discover the joy of driving with our premium selection of vehicles, each carefully chosen to deliver an exceptional experience. From sleek sedans to powerful SUVs, we have the perfect ride for every journey.
              </p>

              <Button
                data-aos="fade-up"
                dat-aos-delay="600"
                type="link"
                to="/service"
                text={"Read More"}
                className="btn-yellow"
              />
            </div>
          </div>

          <Splide
            options={{
              type: "loop",
              perPage: 3,
              gap: "1rem",
              arrows: false,
              pagination: false,
              autoplay: false,
              breaPoints: {
                1200: { perPage: 3 },
                1024: { perPage: 2 },
                768: { perPage: 1 }
              }
            }}
          >
            {images.map((img, index) => (
              <SplideSlide key={index}>
                <div data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="overflow-hidden group rounded-xl">
                    <img
                      src={img}
                      alt={`Experience Image ${index + 1}`}
                      className="w-full h-120 object-cover transition duration-500 group-hover:scale-110"
                    />

                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>

        </section>
      </div>
    </>
  )
}

export default Experience