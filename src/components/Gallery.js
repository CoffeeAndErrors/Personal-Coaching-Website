'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    '/gallery1.jpg',
    '/gallery5.jpg',
    '/gallery6.jpg',
    '/gallery8.jpg',
    '/gallery9.jpg',
    '/gallery10.jpg',
  ];


  // Duplicate the array to create a seamless infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative overflow-hidden w-full bg-black py-10">
      
      {/* Infinite Scroll Container */}
      <motion.div 
        className="flex gap-6 w-max"
        animate={{ 
          x: ["0%", "-20%"] 
        }}
        transition={{ 
          duration: 30, 
          ease: "linear", 
          repeat: Infinity 
        }}
        whileHover={{ animationPlayState: "paused" }} // Smooth pause on hover
      >
        {duplicatedImages.map((img, i) => (
          <div 
            key={i} 
            className="relative w-[550px] h-[550px] flex-shrink-0 group cursor-pointer border border-gray-900 hover:border-orange-500/50 transition-all shadow-2xl"
          >
            <Image
              src={img}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              alt={`Client Transformation ${i + 1}`}
              sizes="400px"
            />

            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
            
            {/* Brand Accent Line (Sharp) */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            
            <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="text-white font-black text-sm uppercase tracking-[0.2em]">Proven Results</span>
              <div className="h-0.5 w-8 bg-orange-500 mt-2"></div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Decorative Overlays (Fade out edges) */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />

    </div>
  );
}