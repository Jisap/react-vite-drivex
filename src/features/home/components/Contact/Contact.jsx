import React from 'react'

const Contact = () => {
  return (
    <>
      <section
        className='contact bg-no-repeat bg-cover bg-center h-200 py-[8%] mt-8 relative'
        style={{ backgroundImage: `url(${contactBgImg})` }}
      >
        <div className='absolute right-0 left-0 flex justify-center lg:justify-end items-center w-full h-full lg:mx-10 px-4'>
          <div className='contact-form bg-white p-14 w-fit space-y-12'>
            <div className="main-title flex flex-col gap-3 w-full lg:w-1/2">
              <span className="sub-title" data-aos="fade-right" data-aos-delay="100">
                Welcome to DriveX
              </span>

              <h2 className="heading-1 max-w-2xl" data-aos="fade-right" data-aos-delay="200">
                The ultimate driving experience
              </h2>
            </div>

            <form></form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact