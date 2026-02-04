import { Code2, Cpu, Palette, Gamepad2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const roles = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Software Engineer',
      description: 'Building robust and scalable applications with modern technologies and best practices.',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Computer Enthusiast',
      description: 'Passionate about exploring cutting-edge technologies and understanding how systems work.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Web Designer',
      description: 'Creating beautiful, user-friendly interfaces that provide exceptional user experiences.',
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Game Developer',
      description: 'Designing and developing engaging interactive experiences and game mechanics.',
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur-xl opacity-30"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1658806264102-2c516eae5e05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcwMTg4NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Technology abstract"
              className="relative rounded-lg shadow-2xl"
            />
          </div>

          <div className="text-slate-300 space-y-4">
            <p className="text-lg">
              Hello! I'm Marc Reantaso, a passionate Computer Science student on an exciting journey through the world of technology. My pursuit of a Bachelor of Science in Computer Science has been filled with exploration, learning, and creative problem-solving.
            </p>
            <p className="text-lg">
              From writing elegant code to designing immersive game experiences, I thrive on bringing ideas to life through technology. My diverse skill set allows me to approach problems from multiple angles, whether it's architecting software solutions, crafting beautiful web interfaces, or developing engaging interactive experiences.
            </p>
            <p className="text-lg">
              I believe in continuous learning and staying updated with the latest technological advancements. Every project is an opportunity to grow, innovate, and push the boundaries of what's possible.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-all hover:transform hover:scale-105"
            >
              <div className="text-cyan-400 mb-4">{role.icon}</div>
              <h3 className="text-xl mb-3 text-white">{role.title}</h3>
              <p className="text-slate-400">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
