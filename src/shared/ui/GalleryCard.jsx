import React from 'react'
import { Plus } from 'lucide-react'

const GalleryCard = ({ image, category = "Luxury", index }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl mb-6 break-inside-avoid cursor-pointer"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      {/* Image */}
      <img 
        src={image} 
        alt="gallery" 
        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
          <Plus className="text-black size-6" />
        </div>
        <div className="mt-4 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
          <span className="text-white/80 text-sm font-medium tracking-wider uppercase">{category}</span>
          <h4 className="text-white text-xl font-bold">Premium Ride</h4>
        </div>
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-4 border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  )
}

export default GalleryCard
