import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'marc.reantaso@email.com',
      link: 'mailto:marc.reantaso@email.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Your City, Country',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      link: 'https://github.com',
      color: 'hover:text-gray-400',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      link: 'https://linkedin.com',
      color: 'hover:text-blue-400',
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: 'Twitter',
      link: 'https://twitter.com',
      color: 'hover:text-sky-400',
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and interesting projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl mb-6 text-white">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700"
                >
                  <div className="text-cyan-400 mt-1">{item.icon}</div>
                  <div>
                    <div className="text-slate-400 text-sm mb-1">{item.label}</div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-white hover:text-cyan-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl mb-6 text-white">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-slate-800/50 rounded-lg border border-slate-700 text-slate-300 transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl mb-6 text-white">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-700 text-center text-slate-400">
          <p>© 2026 Marc Reantaso. All rights reserved.</p>
          <p className="mt-2">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
}
