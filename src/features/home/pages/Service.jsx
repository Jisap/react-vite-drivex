import React from 'react'
import PageBanner from '../../../shared/ui/PageBanner'
import ServiceCard from '../../../shared/ui/ServiceCard'
import Testimonials from '../../../shared/components/Testimonials/Testimonials'
import Partners from '../../../shared/components/Partners/Partners'
import { services } from '../data/services'




const Service = () => {
  return (
    <>
      <PageBanner
        title="Our Services"
        currentPage="Services"
      />

      <div className="section py-[8%] relative">
        <div className='grid-col lg:grid-cols-4 gap-10'>
          {services.map((service, i) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <ServiceCard
                id={service.id}
                image={service.image}
                icon={service.icon}
                title={service.title}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='bg-gray-light'>
        <Partners />
      </div>

      <Testimonials />
    </>
  )
}

export default Service
