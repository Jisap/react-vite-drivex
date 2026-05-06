import React, { useState } from 'react'
import PageBanner from '../../../shared/ui/PageBanner'
import gallery1 from "../../../assets/images/imagegallery/gallery-1.jpg"
import gallery2 from "../../../assets/images/imagegallery/gallery-2.jpg"
import gallery3 from "../../../assets/images/imagegallery/gallery-3.jpg"
import gallery4 from "../../../assets/images/imagegallery/gallery-4.jpg"
import gallery5 from "../../../assets/images/imagegallery/gallery-5.jpg"
import gallery6 from "../../../assets/images/imagegallery/gallery-6.jpg"
import gallery7 from "../../../assets/images/imagegallery/gallery-7.jpg"
import gallery8 from "../../../assets/images/imagegallery/gallery-8.jpg"
import gallery9 from "../../../assets/images/imagegallery/gallery-9.jpg"
import GalleryCard from '../../../shared/ui/GalleryCard'

const ImageGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Luxury", "SUV", "Sport", "Convertible"];

  const gallery = [
    { img: gallery1, category: "Luxury" },
    { img: gallery2, category: "SUV" },
    { img: gallery3, category: "Sport" },
    { img: gallery4, category: "Convertible" },
    { img: gallery5, category: "Luxury" },
    { img: gallery6, category: "SUV" },
    { img: gallery7, category: "Sport" },
    { img: gallery8, category: "Convertible" },
    { img: gallery9, category: "Luxury" },
  ];

  const filteredGallery = activeCategory === "All" 
    ? gallery 
    : gallery.filter(item => item.category === activeCategory);

  return (
    <>
      <PageBanner
        title="Our Gallery"
        currentPage="Gallery"
      />

      <div className='section py-[8%]'>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2.5 rounded-full font-semibold transition-all duration-300 border ${
                activeCategory === cat 
                ? "bg-black text-white border-black" 
                : "bg-transparent text-gray-600 border-gray-200 hover:border-black hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Layout */}
        <div className='columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6'>
          {filteredGallery.map((item, index) => (
            <GalleryCard 
              key={index} 
              image={item.img} 
              category={item.category} 
              index={index} 
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredGallery.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No images found for this category.</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ImageGallery