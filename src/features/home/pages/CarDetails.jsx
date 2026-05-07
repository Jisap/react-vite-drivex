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

  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));
  const slides = car ? [car.image, slide1, slide2, slide3, slide4] : [];
  const [activeIndex, setActiveIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }
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
            <div className="price flex items-end gap-1 border-b border-gray-200/50 pb-8 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
              <span className="text-5xl font-bold text-primary">$</span>
              <span className="text-7xl font-bold font-barlow tracking-tighter">{car.price}</span>
              <span className="text-xl font-medium text-gray-400 mb-2">{car.rent}</span>
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
                    className="w-full h-64 sm:h-96 lg:h-140 object-contain rounded-xl bg-gray-light/30"
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

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] px-4 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setShowModal(false)}
          ></div>
          
          <div className="relative bg-[#111] border border-white/10 w-full max-w-4xl p-8 lg:p-12 rounded-[2rem] shadow-2xl overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>

            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 bg-white/5 hover:bg-white/10 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border border-white/10"
            >
              <X size={24} />
            </button>

            <div className="relative z-10">
              <span className="sub-title text-primary mb-4 block">Reservation</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
                Secure Your <span className="text-primary">{car.name}</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl">
                Experience the pinnacle of luxury. Complete the details below and our team will prepare your vehicle for arrival.
              </p>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-gray-500 tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-primary/50 transition-all placeholder:text-gray-600"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-gray-500 tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-primary/50 transition-all placeholder:text-gray-600"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-gray-500 tracking-widest ml-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-primary/50 transition-all placeholder:text-gray-600"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold text-gray-500 tracking-widest ml-1">Pick Up</label>
                      <select className="w-full bg-transparent border-none text-white outline-none cursor-pointer capitalize">
                        <option className="bg-[#111]">Location</option>
                        <option className="bg-[#111]">Abu Dhabi</option>
                        <option className="bg-[#111]">London</option>
                        <option className="bg-[#111]">Sharjah</option>
                        <option className="bg-[#111]">Paris</option>
                        <option className="bg-[#111]">Berlin</option>
                        <option className="bg-[#111]">New York</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold text-gray-500 tracking-widest ml-1">Date</label>
                      <input
                        type="date"
                        className="w-full bg-transparent border-none text-white outline-none cursor-pointer scheme-dark"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold text-gray-500 tracking-widest ml-1">Drop Off</label>
                      <select className="w-full bg-transparent border-none text-white outline-none cursor-pointer capitalize">
                        <option className="bg-[#111]">Location</option>
                        <option className="bg-[#111]">Abu Dhabi</option>
                        <option className="bg-[#111]">London</option>
                        <option className="bg-[#111]">Sharjah</option>
                        <option className="bg-[#111]">Paris</option>
                        <option className="bg-[#111]">Berlin</option>
                        <option className="bg-[#111]">New York</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-bold text-gray-500 tracking-widest ml-1">Date</label>
                      <input
                        type="date"
                        className="w-full bg-transparent border-none text-white outline-none cursor-pointer scheme-dark"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-gray-500 tracking-widest ml-1">Special Requirements</label>
                  <textarea
                    placeholder="Tell us any special requests (e.g., GPS, child seat...)"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-primary/50 transition-all placeholder:text-gray-600 h-24 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      <Check size={24} />
                    </div>
                    <div>
                      <p className="text-white font-bold uppercase tracking-wider">Estimated Total</p>
                      <p className="text-gray-500 text-sm">Including all taxes and fees</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <span className="text-3xl font-bold text-white">${car.price}</span>
                      <span className="text-gray-500 ml-1">/ day</span>
                    </div>
                    <Button
                      text="Confirm Booking"
                      className="btn-yellow !mt-0 px-10 py-4 h-auto"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CarDetails