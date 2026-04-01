'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Modal from './Modal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative grid md:grid-cols-2 gap-16 items-center min-h-[80vh] py-20">
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-orange-500 font-bold tracking-widest text-xs uppercase">LiftingMonk's Premium Coaching</span>
        </div>

        <h1 className="text-7xl md:text-6xl font-bold leading-[0.9] tracking-tighter uppercase mb-8">
          Discipline Over Motivation <br />
          <span className="text-orange-500 font-black block mt-2 tracking-[-0.05em] transform scale-y-110 origin-left">Consistency Over Everything.
</span>
        </h1>

        <p className="max-w-md text-gray-400 text-lg leading-relaxed mb-10">
          Elite personal training designed for those who demand results. 
          This coaching is not about quick transformations - It’s about building a mindset that doesn’t quit.
          When your habits change, your body follows.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a 
            href="https://forms.gle/Qsgw5EGWJuNaVai36" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-black py-5 px-10 transition-all shadow-lg shadow-orange-500/20 active:scale-95"
          >


            Get Started
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-5 px-10 border border-white/5 transition-all active:scale-95 shadow-xl"
          >
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a smooth elegant feel
          delay: 0.2 
        }}
        className="relative h-[650px] w-full overflow-hidden shadow-2xl border border-white/5"
      >
        <motion.div
           animate={{ 
             y: [0, -15, 0],
           }}
           transition={{
             duration: 6,
             repeat: Infinity,
             ease: "easeInOut"
           }}
           className="h-full w-full"
        >
          <Image
            src="/coach.jpg"
            fill
            className="object-cover"
            alt="Coach"
            priority
          />
        </motion.div>

        
        {/* Glamour shine effect on load */}
        <motion.div 
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ duration: 1.6, delay: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] pointer-events-none"
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
      </motion.div>


      {/* Floating Action Button */}
      <div className="fixed bottom-10 right-10 z-50">
        <motion.a 
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/30 text-white transition-all shadow-xl cursor-pointer"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </motion.a>
      </div>


      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col md:flex-row h-full">
          {/* FOR YOU IF */}
          <div className="flex-1 bg-white p-12 text-black border-r border-gray-100">
            <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-8 leading-none">
              For You <span className="text-orange-500">If</span>
            </h3>
            <ul className="space-y-6">
              {[
                "You start but never stay consistent",
                "You lack discipline in routine",
                "You want a strong, aesthetic physique",
                "You're serious about long-term change"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start group">
                  <div className="h-6 w-[3px] bg-gray-200 group-hover:bg-orange-500 transition-colors mt-1"></div>
                  <p className="text-gray-600 font-medium leading-tight">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* NOT FOR YOU IF */}
          <div className="flex-1 bg-black p-12 text-white">
            <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-8 leading-none">
              Not For You <span className="text-orange-500">If</span>
            </h3>
            <ul className="space-y-6">
              {[
                "You want quick results without effort",
                "You rely only on motivation",
                "You're not ready to stay consistent"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start group">
                  <div className="h-6 w-[3px] bg-gray-800 group-hover:bg-orange-500 transition-colors mt-1"></div>
                  <p className="text-gray-400 font-medium leading-tight">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Modal>
    </section>
  );
}