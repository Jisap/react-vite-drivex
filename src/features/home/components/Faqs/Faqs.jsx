import { MoveRight } from "lucide-react"
import FAQItem from "../../../../shared/ui/FAQItem"
import { useState } from "react"
import { faqs } from "../../data/faqs"



const Faqs = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <>
      <section className="section relative space-y-10 pb-30">
        <div className="text-black w-full realtive gap-8">
          <div className="main-title gap-3 text-center content-col">
            <span className="sub-title" data-aos="fade-right" data-aos-delay="100">
              Frequently Asked Questions
            </span>

            <h2 className="heading-1 max-w-2xl mx-auto" data-aos="fade-right" data-aos-delay="200">
              Everything you need to know about our services
            </h2>
          </div>
        </div>

        <div className="faq-container max-w-full lg:max-w-250 mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <FAQItem
                title={faq.title}
                content={faq.content}
                isOpen={activeIndex === index}
                onClick={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Faqs