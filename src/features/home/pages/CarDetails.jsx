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

const CarDetails = () => {

  const slides = [slide1, slide2, slide3, slide4];
  const [activeIndex, setActiveIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handeToggle = (index) => {
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

        <div className="w-full lg:w-[60%] space-y-8">
          <div className="w-full lg:w-[50%] bg-white border border-gray-200/50 p-5 lg:p-8 rounded-xl lg:sticky h-full lg:top-0 lg:right-0 space-y-8">
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
      </div>
    </>
  )
}

export default CarDetails