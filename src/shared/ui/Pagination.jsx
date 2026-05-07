import React from 'react'

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <>
      <div className='flex gap-3 justify-center mt-10' data-aos="fade-center" data-aos-delay="300">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`
              px-4 py-2 border rounded cursor-pointer
              ${currentPage === i + 1 ? 'bg-black text-white' : ''}`} // Si la página actual es igual al índice + 1 entonces se pinta de negro y texto blanco
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  )
}

export default Pagination