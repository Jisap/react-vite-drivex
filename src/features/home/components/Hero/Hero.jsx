import Button from "../../../../shared/components/Button"
import carVideo from "./assets/car-video.mp4"



const Hero = () => {
  return (
    <>
      <section className="hero h-screen w-full relative centered-row justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={carVideo} type="video/mp4" />
        </video>

        <span className="hero-overly"></span>

        <div className="section text-white w-full flex flex-col justify-center items-start xl:items-end">
          <div className="content relative">
            <h2
              className="text-5xl sm:text-7xl lg:text-8xl uppercase! max-w-200 font-semibold tracking-wide"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Test Drive Your <span className="text-yellow-500">Dream</span> Car
            </h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero