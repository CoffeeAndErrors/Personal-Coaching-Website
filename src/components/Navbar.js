'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[100] flex justify-between items-center px-10 py-6 bg-black/80 backdrop-blur-xl border-b border-white/5">

      <div className="text-2xl font-bold tracking-tighter text-orange-500">
        LIFTING<span className="text-white">MONK</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
        <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
        <Link href="#about" className="hover:text-orange-500 transition-colors">About</Link>
        <Link href="#gallery" className="hover:text-orange-500 transition-colors">Gallery</Link>
        <Link href="#plans" className="hover:text-orange-500 transition-colors">Details</Link>
        <Link href="#contact" className="hover:text-orange-500 transition-colors">Contact</Link>
      </div>

      <a 
        href="https://forms.gle/Qsgw5EGWJuNaVai36" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-white text-black px-5 py-2 font-bold text-sm hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105"
      >


        Enroll Now
      </a>


    </nav>
  );
}
