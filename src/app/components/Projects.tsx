import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3NzAxODg3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    },
    {
      title: '3D Platformer Game',
      category: 'Game Development',
      description: 'An engaging 3D platformer game built with Unity. Features include dynamic level design, enemy AI, physics-based puzzles, and immersive sound design.',
      image: 'https://images.unsplash.com/photo-1556438064-2d7646166914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjBjb250cm9sbGVyfGVufDF8fHx8MTc3MDE4ODczNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Unity', 'C#', 'Game Design', '3D Modeling'],
    },
    {
      title: 'Task Management System',
      category: 'Software Engineering',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.',
      image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZSUyMGNvZGluZ3xlbnwxfHx8fDE3NzAxNTM4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['TypeScript', 'React', 'Firebase', 'Real-time'],
    },
    {
      title: 'Portfolio Website Designer',
      category: 'Web Design',
      description: 'A drag-and-drop portfolio builder allowing users to create beautiful portfolio websites without coding. Includes template library and customization options.',
      image: 'https://images.unsplash.com/photo-1658806264102-2c516eae5e05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcwMTg4NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'UI/UX', 'Design Systems', 'Responsive'],
    },
    {
      title: 'Mobile Fitness Tracker',
      category: 'Mobile Development',
      description: 'A cross-platform mobile app for tracking workouts, nutrition, and health metrics with data visualization and goal setting features.',
      image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZSUyMGNvZGluZ3xlbnwxfHx8fDE3NzAxNTM4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'Mobile', 'Charts', 'API Integration'],
    },
    {
      title: 'AI Chat Application',
      category: 'Software Engineering',
      description: 'An intelligent chatbot application powered by machine learning. Features natural language processing and context-aware responses.',
      image: 'https://images.unsplash.com/photo-1658806264102-2c516eae5e05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcwMTg4NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'AI/ML', 'NLP', 'API'],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A showcase of my work throughout my BSCS journey, demonstrating various skills and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all group"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
