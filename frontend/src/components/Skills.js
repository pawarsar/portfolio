import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { skillsData } from '../mock';
import {
  Brain,
  Server,
  Database,
  Cloud,
  Wrench,
  Zap
} from 'lucide-react';

const Skills = () => {
  const categoryIcons = {
    'LLM & GenAI': Brain,
    'Backend Engineering': Server,
    'Vector Search & Retrieval': Database,
    'Cloud & MLOps': Cloud,
    'DevOps & Tools': Wrench
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building production-grade AI systems with modern tools and frameworks
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, skills], index) => {
            const Icon = categoryIcons[category] || Zap;
            return (
              <Card
                key={index}
                className="p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white transition-all duration-200 bg-white dark:bg-black group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-lg group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors duration-200">
                    <Icon className="h-5 w-5 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors font-mono text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
