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
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceDetails