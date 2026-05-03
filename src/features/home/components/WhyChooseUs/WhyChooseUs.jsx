import car from "./assets/car.png"
import appointment from "./assets/appointment.png"
import WhyChooseUsImg from "./assets/video-bg-image.jpg"
import { Play } from "lucide-react"
import { Link } from "react-router-dom"


const WhyChooseUs = () => {
  return (
    <>
      <div className="bg-heading">
        <section className="why-choose-us section section-container py-[8%] relative space-y-10">
          <div className="content-col text-white w-full lg:w-1/2 relative gap-0" data-aos="fade-right">
            <div className="main-title flex flex-col gap-3">
              <span className="sub-title" data-aos="fade-right" data-aos-delay="100">
                Why Choose Us
              </span>

              <h2 className="heading-1 max-w-2xl" data-aos="fade-right" data-aos-delay="200">
                Unmatched quality and service for your needs
              </h2>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default WhyChooseUs