'use client';

import { motion } from 'framer-motion';

export default function PlanCard({ title, description, icon }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-gray-950 border border-gray-900 p-8 transition-all hover:border-orange-500/50 group"
    >
      <div className="mb-6 text-orange-500 group-hover:scale-110 transition-transform origin-left">
        {icon}
      </div>
      
      <h3 className="text-2xl font-black uppercase tracking-tighter mb-3 leading-none italic">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}