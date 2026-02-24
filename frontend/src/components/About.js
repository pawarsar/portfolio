import React from 'react';
import { Briefcase, Award, GraduationCap, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { personalInfo, education, certifications, awards } from '../mock';

const About = () => {
  const stats = [
    { icon: Briefcase, label: 'Experience', value: '3+ Years' },
    { icon: Award, label: 'Awards', value: awards.length },
    { icon: GraduationCap, label: 'Certifications', value: certifications.length },
    { icon: MapPin, label: 'Location', value: personalInfo.location }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto"></div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center border-2 border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white transition-all duration-200 bg-white dark:bg-black"
              >
                <Icon className="h-8 w-8 mx-auto mb-3 text-gray-900 dark:text-white" />
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </Card>
            );
          })}
        </div>

        {/* Bio section */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Story
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently contributing to <span className="font-semibold">Synapse Earth</span>—a geospatial AI platform leveraging satellite data and environmental parameters to compute BNG (Biodiversity Net Gain) scores and deliver AI-powered ecological improvement recommendations. Strong focus on reliability, structured outputs, data-driven evaluation, and creating real-world impact through GenAI systems.
            </p>
          </Card>

          {/* Education */}
          <Card className="p-8 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h3>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-lg">
                <GraduationCap className="h-6 w-6 text-gray-900 dark:text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {education.degree}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{education.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  {education.duration} • CGPA: {education.cgpa}
                </p>
              </div>
            </div>
          </Card>

          {/* Certifications & Awards */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Awards
              </h3>
              <ul className="space-y-3">
                {awards.map((award, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
