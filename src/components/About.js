'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const stats = [
    { label: 'Followers', value: '10K+' },
    { label: 'Clients Transformed', value: '100+' },
    { label: 'Content Views', value: '5M+' },
  ];

  return (
    <section id="about" className="py-24 bg-black border-t border-gray-900">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
            The Coach Behind <br />
            <span className="text-orange-500 ">The Results</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Transformation Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-full group"
          >
            <div className="absolute -inset-4 bg-orange-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative h-full w-full overflow-hidden border border-gray-800 shadow-2xl">

              <Image
                src="/transformation.jpg"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Transformation Journey"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

            </div>
          </motion.div>

          {/* Content & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6 text-white uppercase italic tracking-tight">Amritangshu Mahapatra</h3>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
              With over 10 years of experience in the fitness industry, I've dedicated my life 
              to helping people unlock their full potential. My approach is purely 
              science-based, results-driven, and designed for those who demand 
              discipline over temporary motivation.No shortcuts. No motivation dependency.
              Just habits, structure, and execution — every single day.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-gray-950/50 p-6 border border-gray-900 hover:border-orange-500/30 transition-all group">

                  <div className="text-3xl font-black text-orange-500 mb-1 group-hover:scale-110 transition-transform origin-left">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.instagram.com/lifting_monk?igsh=bzN5cnhianNrbnJm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-tr from-orange-600 to-orange-400 hover:from-orange-500 hover:to-orange-300 text-white font-bold py-4 px-8 transition-all shadow-lg shadow-orange-500/20"

              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              
              <a 
                href="https://youtube.com/@lifting_monk?si=i05FHNZKNzb_9xrv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white hover:bg-neutral-100 text-black font-bold py-4 px-8 transition-all shadow-xl"

              >
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                YouTube
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
