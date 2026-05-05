import React from 'react'
import Button from '../components/Button'

const CommentForm = () => {
  return (
    <>
      <div className='w-full mx-auto'>
        <span className='text-2xl font-semibold mb-3 block'>Leave a Reply</span>
        <p className='text-gray-400 mb-8' data-aos="fade-right" data-aos-delay="600">
          Your email address will not be published. Required fields are marked.
        </p>

        <form>
          <div>
            <label>
              Comment<span className='text-red-500'>*</span>
            </label>
            <textarea
              rows="6"
              className='w-full bg-gray-50 border border-gray-200 resize-none rounded-lg p-5 focus:outline-none focus:border-primary transition mb-6'
            ></textarea>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
            <div data-aos="fade-center" data-aos-delay="900">
              <label className='block mb-2 text-lg'>
                Name <span className='text-red-500'>*</span>
              </label>

              <input
                type="text"
                className='w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-primary transition'
              />
            </div>

            <div data-aos="fade-center" data-aos-delay="1000">
              <label className='block mb-2 text-lg'>
                Email <span className='text-red-500'>*</span>
              </label>

              <input
                type="email"
                className='w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-primary transition'
              />
            </div>

            <div data-aos="fade-center" data-aos-delay="1100">
              <label className='block mb-2 text-lg'>
                Website <span className='text-red-500'>*</span>
              </label>

              <input
                type="text"
                className='w-full bg-gray-50 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-primary transition'
              />
            </div>
          </div>

          <div className='centered-row flex-wrap gap-2 text-lg text-gray-400' data-aos="fade-right" data-aos-delay="1200">
            <input type="checkbox" className='accent-orange-500' />
            <span>
              Save my name, email, and website in this browser for the next time I comment.
            </span>
          </div>

          <Button
            data-aos="fade-right" data-aos-delay="1300"
            type="submit"
            text="Post Comment"
            className='btn-black mt-5'
          />
        </form>
      </div>
    </>
  )
}

export default CommentForm