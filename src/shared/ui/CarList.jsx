import React from 'react'
import CarCard from './CarCard'

const CarList = ({ cars }) => {
  return (
    <>
      <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-10'>
        {cars.length > 0 ? (
          cars.map((car, index) => (
            <div
              key={car.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CarCard car={car} />
            </div>
          ))
        ) : (
          <p>
            No Car Found
          </p>
        )}
      </div>
    </>
  )
}

export default CarList