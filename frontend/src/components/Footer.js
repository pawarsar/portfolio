import React from 'react';
import { Separator } from './ui/separator';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    // { icon: Github, href: personalInfo.github, label: 'GitHub' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {personalInfo.role}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Building production-grade AI systems that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {/* {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => ( */}
              {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-900 dark:hover:bg-white transition-colors duration-200 group"
                  >
                    <Icon className="h-5 w-5 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-200 dark:bg-gray-800" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
            © {currentYear} {personalInfo.name}. 
            {/* Built with */}
            {/* <Heart className="h-4 w-4 mx-1 fill-gray-900 dark:fill-white" /> */}
            {/* using React & FastAPI */}
          </p>
          <button
            onClick={scrollToTop}
            className="text-sm font-medium text-gray-900 dark:text-white hover:underline"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
