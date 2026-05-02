import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { services } from "../data/services"
import { Check, Mail, MapPin, Phone } from "lucide-react"
import Button from "../../../shared/components/Button"
import PageBanner from "../../../shared/ui/PageBanner"



const ServiceDetails = () => {

  const { id } = useParams();

  const service = services.find((service) => service.id === Number(id));
  if (!service) return <p>Service not found</p>

  return (
    <>
      <PageBanner
        title="Service Details"
        currentPage="Service Details"
        productName={service.title}
      />

      <div className="container mx-auto px-4 py-[8%] section-container gap-10 lg:gap-14 items-start!">
        <div className="w-full lg:w-[70%] content">
          <div
            className="service-main-image mb-8 h-auto lg:h-180"
            data-aos="fade-center"
            data-aos-delay="300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="main-image section-image object-cover rounded"
            />
          </div>

          <div className="service-content space-y-8">
            <h3 className="heading-2 text-2xl lg:text-3xl font-semibold text-gray-900"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              {service.title}
            </h3>

            <p
              className="text-desc text-gray-600"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              We offer a wide range of car rental services designed to meet all your transportation needs. Whether you’re traveling for business, planning a family vacation, or need a reliable vehicle for a special event, we have the perfect solution for you.
            </p>

            <h3
              className="heading-2 text-2xl lg:text-3xl font-semibold text-gray-900"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              Discover premium rental services
            </h3>

            <p
              className="text-desc text-gray-600"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              We offer a comprehensive range of car rental services designed to meet the diverse needs of our clients. Whether you’re traveling for business, planning a family vacation, or need a reliable vehicle for a special event, our fleet and services are tailored to provide you with the perfect solution. Discover the various services we offer and why we are the preferred choice for car rentals.
            </p>

            <p
              className="text-desc text-gray-600"
              data-aos="fade-right"
              data-aos-delay="700"
            >
              Whether it’s daily wear or long-term neglect, our team brings back the original beauty of your car. From deep cleaning to advanced polishing, every step is handled with expertise and attention to detail.
            </p>

            <ul className="grid-col lg:grid-cols-2 gap-5">
              <li className="centered-row flex-wrap gap-2" data-aos="fade-center" data-aos-delay="800">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />

                <span className="text-lg font-medium">24/7 Roadside Assistance</span>
              </li>
              <li className="centered-row flex-wrap gap-2" data-aos="fade-center" data-aos-delay="800">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />

                <span className="text-lg font-medium">24/7 Free Cancellation & Return</span>
              </li>
              <li className="centered-row flex-wrap gap-2" data-aos="fade-center" data-aos-delay="800">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />

                <span className="text-lg font-medium">Rent Now Pay When ou Arrive</span>
              </li>
              <li className="centered-row flex-wrap gap-2" data-aos="fade-center" data-aos-delay="800">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />

                <span className="text-lg font-medium">No Hidden Charges</span>
              </li>
              <li className="centered-row flex-wrap gap-2" data-aos="fade-center" data-aos-delay="800">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />

                <span className="text-lg font-medium">Best Price Guaranteed</span>
              </li>
              <li className="centered-row flex-wrap gap-2" data-aos="fade-center" data-aos-delay="800">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />

                <span className="text-lg font-medium">Wide Range of Vehicles</span>
              </li>
            </ul>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
              <div
                className="group overflow-hidden rounded-2xl"
                data-aos="fade-center"
                data-aos-delay="800"
              >
                <img
                  src={service.post1}
                  alt="service"
                  className="section-image object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div
                className="group overflow-hidden rounded-2xl"
                data-aos="fade-center"
                data-aos-delay="800"
              >
                <img
                  src={service.post2}
                  alt="service"
                  className="section-image object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div
                className="group overflow-hidden rounded-2xl"
                data-aos="fade-center"
                data-aos-delay="800"
              >
                <img
                  src={service.post3}
                  alt="service"
                  className="section-image object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div
                className="group overflow-hidden rounded-2xl"
                data-aos="fade-center"
                data-aos-delay="800"
              >
                <img
                  src={service.post4}
                  alt="service"
                  className="section-image object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <p
              className="text-desc text-gray-600"
              data-aos="fade-center"
              data-aos-delay="800"
            >
              Our detailing service not only improves the visual appeal but also increases the lifespan of your vehicle’s paint and exterior components. We use eco-friendly products that are safe for both your car and the environment.
            </p>

            <p
              className="text-desc text-gray-600"
              data-aos="fade-center"
              data-aos-delay="800"
            >
              Customer satisfaction is our top priority. We tailor our services based on your vehicle’s condition, ensuring the best possible results every time you visit us.
            </p>

            <div
              className="overflow-hidden rounded-sm"
              data-aos="fade-center"
              data-aos-delay="800"
            >
              <img
                src={service.post3}
                alt="service"
                className="w-full h-75 lg:h-125 object-cover"
              />
            </div>

            <p
              className="text-desc text-gray-600"
              data-aos="fade-center"
              data-aos-delay="800"
            >
              Experience the difference with our expert detailing services and give your car the premium care it deserves. Book your appointment today and enjoy a flawless driving experience.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceDetails