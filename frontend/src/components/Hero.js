import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black"
    >
      {/* Dot grid background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0,0.05)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full">
            <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Available for opportunities
            </span>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              {personalInfo.role}
            </p>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-medium">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Headline */}
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.headline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 group"
              onClick={() => scrollToSection('#projects')}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* #### */}
            {/* <Button
              size="lg"
              variant="outline"
              className="border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-200"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button> */}
            {/* #### */}
            {/* <Button
              size="lg"
              variant="outline"
              className="border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-200"
              onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button> */}
          </div>

          {/* Scroll indicator */}
          <div className="pt-12">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full mx-auto relative">
              <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full absolute left-1/2 top-2 -translate-x-1/2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
