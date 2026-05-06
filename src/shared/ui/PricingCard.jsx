import React from 'react'
import Button from '../components/Button'

const PricingCard = ({ image, title, price, pera }) => {
  return (
    <>
      <div className="pricing-card p-5 lg:p-10 bg-gray-light space-y-8 rounded-sm">
        <div className='pricing-image w-full sm:w-60 xl:w-80 mx-auto'>
          <img src={image} alt="pricing-card" className='w-full h-full' />
        </div>

        <div className='pricing-content text-center flex flex-col gap-5'>
          <h4 className='text-3xl lg:text-4xl font-semibold tracking-wide uppercase!'>{title}</h4>
          <p className='text-desc'>{pera}</p>
          <span className='flex items-end gap-1 mx-auto'>
            <span className='text-4xl font-medium mb-1'>$</span>
            <span className='text-6xl font-bold font-barlow leading-none'>{price}</span>
            <span className='text-xl font-medium mb-1'>/mo</span>
          </span>

          <Button
            type="button"
            to="/contact"
            text="Book a rental"
            className='bg-black! text-white mx-auto text-xl mt-8'
          />
        </div>
      </div>
    </>
  )
}

export default PricingCard