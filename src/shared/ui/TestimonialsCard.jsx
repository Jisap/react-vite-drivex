import { Star } from 'lucide-react'
import React from 'react'

const TestimonialsCard = ({ id, position, name, image, pera }) => {
  return (
    <>
      <div className='tst-item border border-gray-200/50 rounded-xl w-full p-5 hover:shadow-xl transition-all duration-300'>
        <div className='centered-row mb-5'>
          <Star className='size-6 text-yellow-400 fill-yellow-400' />
          <Star className='size-6 text-yellow-400 fill-yellow-400' />
          <Star className='size-6 text-yellow-400 fill-yellow-400' />
          <Star className='size-6 text-yellow-400 fill-yellow-400' />
          <Star className='size-6 text-yellow-400 fill-yellow-400' />
        </div>

        <p className='text-desc border-b border-gray-200/50 pb-8'>
          {pera}
        </p>

        <div className='author centered-row justify-star pt-5 gap-5'>
          <div className='img rounded-full overflow-hidden w-16 h-16'>
            <img src={image} alt={name} className='section-image object-cover' />
          </div>

          <div className='author-content flex flex-col'>
            <strong className='text-xl'>{name}</strong>
            <span>{position}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialsCard