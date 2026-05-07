import doorIcon from "../../../assets/images/cars/icon-door.svg"
import passengersIcon from "../../../assets/images/cars/icon-passengers.svg"
import transmissionIcon from "../../../assets/images/cars/icon-transmission.svg"
import bagsIcon from "../../../assets/images/cars/icon-bags.svg"
import airconditionIcon from "../../../assets/images/cars/icon-aircondition.svg"
import ageIcon from "../../../assets/images/cars/icon-age.svg"
import slide1 from "../../../assets/images/cars/fleets-slider-img-1.jpg"
import slide2 from "../../../assets/images/cars/fleets-slider-img-2.jpg"
import slide3 from "../../../assets/images/cars/fleets-slider-img-3.jpg"
import slide4 from "../../../assets/images/cars/fleets-slider-img-4.jpg"
import icon1 from "../../../assets/images/cars/speed.png"
import icon2 from "../../../assets/images/cars/lock.png"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

import { ArrowLeft, ArrowRight, Check, X } from "lucide-react"

import { useState } from "react"
import FAQItem from "../../../shared/ui/FAQItem"
import { useParams } from "react-router-dom"
import PageBanner from "../../../shared/ui/PageBanner"
import { cars } from "../../../shared/data/cars"
import Button from "../../../shared/components/Button"
import { faqs } from "../data/faqs"

const CarDetails = () => {

  const slides = [slide1, slide2, slide3, slide4];
  const [activeIndex, setActiveIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));
  if (!car) {
    return (
      <>
        <PageBanner title="Car not found" currentPage="Error" />
        <div className="section section-container text-center py-20">
          <h2 className="text-3xl font-bold">Car not found</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <PageBanner
        title={car.name}
        currentPage="Car Details"
      />

      <div className="container mx-auto px-4 py-[8%] section-container gap-10 lg:gap-14 items-start!">

        <div className="w-full lg:w-[35%] space-y-8">
          <div className="w-full bg-white border border-gray-200/50 p-5 lg:p-8 rounded-xl lg:sticky h-full lg:top-0 lg:right-0 space-y-8">
            <div className="price flex items-end gap-1 border-b border-gray-200/50 pb-8">
              <span className="text-5xl font-bold">$</span>
              <span className="text-6xl font-bold font-barlow">{car.price}</span>
              <span className="text-xl font-medium text-gray-500 mb-2">{car.rent}</span>
            </div>

            <ul className="space-y-5 border-b border-gray-200 pb-5">
              <li className="centered-row justify-between" data-aos="fade-center" data-aos-delay="400">
                <div className="centered-row gap-2 text-[16px]">
                  <img
                    src={doorIcon}
                    alt="door"
                    className="w-6 h-6 brightness-0"
                  />

                  <span>Doors</span>
                </div>

                <span>{car.doors}</span>
              </li>

              <li className="centered-row justify-between" data-aos="fade-center" data-aos-delay="400">
                <div className="centered-row gap-2 text-[16px]">
                  <img
                    src={passengersIcon}
                    alt="passengers"
                    className="w-6 h-6 brightness-0"
                  />

                  <span>Passengers</span>
                </div>

                <span>{car.passengers}</span>
              </li>

              <li className="centered-row justify-between" data-aos="fade-center" data-aos-delay="400">
                <div className="centered-row gap-2 text-[16px]">
                  <img
                    src={transmissionIcon}
                    alt="transmission"
                    className="w-6 h-6 brightness-0"
                  />

                  <span>Transmission</span>
                </div>

                <span>{car.transmission}</span>
              </li>

              <li className="centered-row justify-between" data-aos="fade-center" data-aos-delay="400">
                <div className="centered-row gap-2 text-[16px]">
                  <img
                    src={ageIcon}
                    alt="age"
                    className="w-6 h-6 brightness-0"
                  />

                  <span>Age</span>
                </div>

                <span>{car.age}</span>
              </li>

              <li className="centered-row justify-between" data-aos="fade-center" data-aos-delay="400">
                <div className="centered-row gap-2 text-[16px]">
                  <img
                    src={bagsIcon}
                    alt="bags"
                    className="w-6 h-6 brightness-0"
                  />

                  <span>Bags</span>
                </div>

                <span>{car.luggage}</span>
              </li>

              <li className="centered-row justify-between" data-aos="fade-center" data-aos-delay="400">
                <div className="centered-row gap-2 text-[16px]">
                  <img
                    src={airconditionIcon}
                    alt="aircondition"
                    className="w-6 h-6 brightness-0"
                  />

                  <span>Air condition</span>
                </div>

                <span>{car.aircondition}</span>
              </li>
            </ul>

            <Button
              text="Book now"
              type="button"
              className="btn-black mt-0 w-full!"
              onClick={() => setShowModal(true)}
              data-aos="fade-center"
              data-aos-delay="1000"
            />
          </div>
        </div>

        <div className="w-full lg:w-[65%] flex flex-col gap-10">
          <div className="relative">
            <Splide
              options={{
                type: "loop",
                parPage: 1,
                arrows: false,
                pagination: true
              }}
            >
              {slides.map((slide, index) => (
                <SplideSlide key={index} data-aos="fade-center" data-aos-delay={index * 100}>
                  <img
                    src={slide}
                    alt={`slide ${index + 1}`}
                    className="w-full h-140 object-cover object-bottom rounded-xl"
                  />
                </SplideSlide>
              ))}
            </Splide>

            <ul className="flex justify-star items-center flex-wrap gap-10 xl:gap-20 py-8 border-b border-gray-200/50">
              <li className="centered-row flex-wrap gap-5" data-aos="fade-center" data-aos-delay="300">
                <div className="icon w-14 h-14">
                  <img
                    src={icon1}
                    alt="imcon-img"
                    className="section-image"
                  />
                </div>

                <div className="info">
                  <h6 className="text-xl font-semibold">Unlimited KMs</h6>
                  <span className="text-desc">Endless Km with no extra charge</span>
                </div>
              </li>

              <li className="centered-row flex-wrap gap-5" data-aos="fade-center" data-aos-delay="300">
                <div className="icon w-14 h-14">
                  <img
                    src={icon2}
                    alt="icon-img"
                    className="section-image"
                  />
                </div>

                <div className="info">
                  <h6 className="text-xl font-semibold">Unlimited KMs</h6>
                  <span className="text-desc">Endless Km with no extra charge</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="content">
            <span className="sub-title" data-aos="fade-right" data-aos-delay="300">
              General Information
            </span>

            <h2 className="heading-1 mb-5" data-aos="fade-right" data-aos-delay="400">
              Know about our car service
            </h2>

            <p className="text-desc mb-8" data-aos="fade-right" data-aos-delay="500">
              Unlock a world of driving pleasure with DriveX. Our diverse fleet offers something for every journey. From zippy city cars perfect for navigating urban landscapes to spacious SUVs ideal for family adventures and luxury sedans that redefine elegance, we have the perfect vehicle to match your style and needs.
            </p>

            <ul className="flex flex-col gap-5 pb-12">
              <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="600">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span className="text-lg font-medium">24/7 Roadside assistance</span>
              </li>

              <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="600">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span className="text-lg font-medium">Free Cancellation & Return</span>
              </li>

              <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="600">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span className="text-lg font-medium">Rent Now pay When You Arrive</span>
              </li>
            </ul>

            <span className="sub-title" data-aos="fade-right" data-aos-delay="300">
              Amenities
            </span>

            <h2 className="heading-1 mb-5" data-aos="fade-right" data-aos-delay="400">
              Premium amenities and features
            </h2>

            <ul className="grid lg:grid-cols-2 cl:grid-cols-4 gap-5 pb-12">
              <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="600">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span className="text-lg font-medium">Music System</span>
              </li>

              <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="600">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span className="text-lg font-medium">Toolkit</span>
              </li>

              <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="600">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span className="text-lg font-medium">Abs System</span>
              </li>

              <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="600">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span className="text-lg font-medium">Bluethooh</span>
              </li>

              <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="600">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span className="text-lg font-medium">Usb Charger</span>
              </li>

              <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="600">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span className="text-lg font-medium">Aux Input</span>
              </li>

              <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="600">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span className="text-lg font-medium">Full Boot Space</span>
              </li>

              <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="600">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span className="text-lg font-medium">Aux Input</span>
              </li>

              <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="600">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span className="text-lg font-medium">Power Steering</span>
              </li>

              <li className="centered-row flex-wrap gap-2" data-aos="fade-right" data-aos-delay="600">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span className="text-lg font-medium">Airbags</span>
              </li>
            </ul>

            <span className="sub-title" data-aos="fade-right" data-aos-delay="300">
              rental Conditions
            </span>

            <h2 className="heading-1 mb-5" data-aos="fade-right" data-aos-delay="400">
              Policies and agreement
            </h2>

            <div className="faq-content">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  title={faq.title}
                  content={faq.content}
                  isOpen={activeIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarDetails