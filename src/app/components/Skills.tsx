import { 
  Code2, 
  Database, 
  Layout, 
  Smartphone,
  GitBranch,
  Terminal,
  Layers,
  Zap
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#'],
    },
    {
      title: 'Web Development',
      icon: <Layout className="w-6 h-6" />,
      skills: ['React', 'HTML/CSS', 'Node.js', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    },
    {
      title: 'Database & Backend',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'REST APIs', 'GraphQL'],
    },
    {
      title: 'Game Development',
      icon: <Layers className="w-6 h-6" />,
      skills: ['Unity', 'Unreal Engine', 'Godot', 'Game Design', '2D/3D Graphics', 'Physics'],
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6" />,
      skills: ['React Native', 'Flutter', 'Android Studio', 'iOS Development', 'Progressive Web Apps'],
    },
    {
      title: 'Tools & Technologies',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['Git', 'Docker', 'VS Code', 'Linux', 'Webpack', 'NPM/Yarn'],
    },
    {
      title: 'Version Control',
      icon: <GitBranch className="w-6 h-6" />,
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'CI/CD', 'Agile Methodologies'],
    },
    {
      title: 'Other Skills',
      icon: <Zap className="w-6 h-6" />,
      skills: ['UI/UX Design', 'Problem Solving', 'Algorithms', 'Data Structures', 'Testing', 'Debugging'],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A comprehensive set of technical skills acquired throughout my BSCS journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-cyan-400">{category.icon}</div>
                <h3 className="text-lg text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300 border border-slate-600 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-8 border border-cyan-500/20">
            <div className="text-4xl mb-2 text-cyan-400">50+</div>
            <div className="text-slate-300">Projects Completed</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-8 border border-cyan-500/20">
            <div className="text-4xl mb-2 text-cyan-400">15+</div>
            <div className="text-slate-300">Technologies Mastered</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg p-8 border border-cyan-500/20">
            <div className="text-4xl mb-2 text-cyan-400">4+</div>
            <div className="text-slate-300">Years of Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
}
