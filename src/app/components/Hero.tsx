import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZSUyMGNvZGluZ3xlbnwxfHx8fDE3NzAxNTM4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Coding workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="mb-6">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="w-32 h-32 rounded-full bg-slate-800 flex items-center justify-center text-5xl">
              👨‍💻
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-4 text-white">
          Marc Reantaso
        </h1>
        
        <div className="text-xl md:text-2xl text-cyan-400 mb-8 space-y-2">
          <p>Software Engineer</p>
          <p className="text-slate-300">Computer Enthusiast • Web Designer • Game Developer</p>
        </div>
        
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
          Welcome to my BSCS journey portfolio. Exploring the endless possibilities of technology and creating innovative solutions.
        </p>

        <button
          onClick={scrollToAbout}
          className="animate-bounce inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
}
