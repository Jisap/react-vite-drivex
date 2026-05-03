import { Play } from "lucide-react"
import { useState } from "react"
import FAQItem from "../../../../shared/ui/FAQItem.jsx"
import Image from "../../../../shared/ui/Image"
import workImg from "./assest/work-img-1.jpg"

export const works = [
  {
    title: "1. Browse And Select",
    content: "Explore our diverse fleet and find the perfect vehicle for your needs. We offer everything from luxury sedans to rugged SUVs.",
  },
  {
    title: "2. Book And Confirm",
    content: "Complete the booking process online with ease and convenience. Our secure payment system and instant confirmation give you peace of mind.",
  },
  {
    title: "3. Pick-Up And Enjoy",
    content: "Experience a comfortable and memorable journey with your chosen vehicle. Our team ensures a smooth hand-over at your preferred location.",
  },
];

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="bg-white">
      <section className="work-section section section-container py-[8%] relative flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20">
        <div className="content-col text-heading w-full lg:w-1/2 relative" data-aos="fade-left">
          <div className="main-title flex flex-col gap-3">
            <span className="sub-title" data-aos="fade-left" data-aos-delay="100">
              How It Works
            </span>

            <h2 className="heading-1 max-w-2xl mb-6" data-aos="fade-left" data-aos-delay="200">
              Unmatched quality and service for your needs
            </h2>

            <div className="content-desc flex flex-col">
              <p className="text-desc text-pera max-w-140 mb-10" data-aos="fade-up" data-aos-delay="300">
                Our streamlined process ensures a seamless car rental experience from start to finish. With easy
                online booking, flexible pick-up and drop-off options.
              </p>

              <div className="faq-list">
                {works.map((work, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={400 + index * 100}
                  >
                    <FAQItem
                      title={work.title}
                      content={work.content}
                      isOpen={activeIndex === index}
                      onClick={() => handleToggle(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 h-full lg:h-150" data-aos="fade-right" data-aos-delay="400">
          <Image
            src={workImg}
            alt="Work Process"
            wrapperClass="h-full"
            className="rounded-2xl"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="play-btn w-20 h-20 lg:w-25 lg:h-25 centered-row justify-center cursor-pointer">
              <Play size={35} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work