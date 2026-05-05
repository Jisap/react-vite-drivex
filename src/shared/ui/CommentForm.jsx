import React from 'react'

const CommentForm = () => {
  return (
    <>
      <div className='w-full mx-auto'>
        <span className='text-2xl font-semibold mb-3 block'>Leave a Replay</span>
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
              className='w-full bg-gray-50 border border-gray-200 resize-none rounded-lg p-5 focus:outline-none focus:border-primary transition'
            ></textarea>
          </div>
        </form>
      </div>
    </>
  )
}

export default CommentForm