import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import PlanCard from '@/components/PlanCard';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <section id="home">
          <Hero />
        </section>

        <About />

        <section id="gallery" className="py-20 border-t border-gray-800">
          <h2 className="text-4xl font-bold mb-10 text-center tracking-tighter uppercase">
            Transformation <span className="text-orange-500 underline decoration-2 underline-offset-8">Gallery</span>
          </h2>
          <Gallery />
        </section>

        <section id="plans" className="py-20 border-t border-gray-900">
          <h2 className="text-6xl md:text-7xl font-black mb-16 text-center tracking-tighter uppercase leading-none">
            Coaching <span className="text-orange-500">Pillars</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <PlanCard 
              title="Personalized Training Plan" 
              description="Structured workouts based on your goal and lifestyle." 
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
            />
            <PlanCard 
              title="Simple Nutrition Plan" 
              description="No extreme dieting — just practical eating you can follow daily." 
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
            />
            <PlanCard 
              title="Habit & Discipline Coaching" 
              description="Build routines that keep you consistent even on bad days." 
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            />
            <PlanCard 
              title="Weekly Check-ins" 
              description="Track progress and make smart adjustments." 
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>}
            />
            <PlanCard 
              title="1:1 Consultation Calls" 
              description="Fix your mistakes and get clarity instantly." 
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>}
            />
            <PlanCard 
              title="Daily Accountability Support" 
              description="Stay on track. No excuses." 
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
            />
          </div>

          <div className="flex justify-center">
            <a 
              href="https://calendly.com/liftingmonkfitness/consulation-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-orange-500 hover:bg-orange-600 text-white font-black py-6 px-16 text-xl uppercase tracking-widest transition-all shadow-2xl shadow-orange-500/20 active:scale-95"
            >
              Book Free Consultation
              <svg 
                className="w-6 h-6 transition-transform group-hover:translate-x-2" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </section>

        <section id="contact" className="py-20 border-t border-gray-800 pb-40">
          <div className="max-w-xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center tracking-tighter uppercase">
              Start Your <span className="text-orange-500 underline decoration-2 underline-offset-8">Journey</span>
            </h2>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
