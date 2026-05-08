import React from 'react'
import PageBanner from '../../../shared/ui/PageBanner'
import ServiceCategoriesCard from '../../../shared/ui/ServiceCategoriesCard'
import serviceImg1 from '../../../assets/images/home/servicecategories/luxury-collection-img-1.jpg'
import serviceImg2 from '../../../assets/images/home/servicecategories/luxury-collection-img-2.jpg'
import serviceImg3 from '../../../assets/images/home/servicecategories/luxury-collection-img-3.jpg'
import serviceImg4 from '../../../assets/images/home/servicecategories/luxury-collection-img-4.jpg'
import serviceImg5 from '../../../assets/images/home/servicecategories/luxury-collection-img-5.jpg'
import serviceImg6 from '../../../assets/images/home/servicecategories/luxury-collection-img-6.jpg'



const CarType = () => {
  return (
    <>
      <PageBanner
        title={"Car Type"}
        currentPage="CarType"
      />

      <div className='grid-col md:grid-cols-2 xl:grid-cols-3 gap-10 section relative py-[8%]'>
        {[
          { img: serviceImg1, title: "Sport Car" },
          { img: serviceImg2, title: "Convertible Car" },
          { img: serviceImg3, title: "Sedan Car" },
          { img: serviceImg4, title: "Luxury Car" },
          { img: serviceImg5, title: "Electric Car" },
          { img: serviceImg6, title: "Coupe Car" },
        ].map((service, index) => (
          <div>
            <ServiceCategoriesCard
              image={service.img}
              title={service.title}
            />
          </div>
        ))
        }
      </div>
    </>
  )
}

export default CarType