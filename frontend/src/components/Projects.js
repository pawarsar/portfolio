import React, { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Separator } from './ui/separator';
import { projects } from '../mock';
import { ExternalLink, CheckCircle, Activity } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world AI systems solving complex problems at scale
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white transition-all duration-200 bg-white dark:bg-black group cursor-pointer flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-4">
                <Badge
                  variant={project.status === 'Completed' ? 'default' : 'outline'}
                  className={`${
                    project.status === 'Completed'
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-black'
                      : 'border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {project.status === 'Completed' ? (
                    <CheckCircle className="h-3 w-3 mr-1" />
                  ) : (
                    <Activity className="h-3 w-3 mr-1" />
                  )}
                  {project.status}
                </Badge>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {project.title}
              </h3>

              {/* Problem statement */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
                {project.problem}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.slice(0, 4).map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-xs font-mono"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.tech.length > 4 && (
                  <Badge
                    variant="outline"
                    className="border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-xs"
                  >
                    +{project.tech.length - 4}
                  </Badge>
                )}
              </div>

              {/* View details */}
              <div className="flex items-center text-gray-900 dark:text-white font-medium text-sm group-hover:underline">
                View Details
                <ExternalLink className="h-4 w-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white pr-8">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                {/* Status */}
                <Badge
                  variant={selectedProject.status === 'Completed' ? 'default' : 'outline'}
                  className={`${
                    selectedProject.status === 'Completed'
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-black'
                      : 'border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {selectedProject.status === 'Completed' ? (
                    <CheckCircle className="h-3 w-3 mr-1" />
                  ) : (
                    <Activity className="h-3 w-3 mr-1" />
                  )}
                  {selectedProject.status}
                </Badge>

                <Separator className="bg-gray-200 dark:bg-gray-800" />

                {/* Problem */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Problem
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Solution
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Architecture
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 font-mono text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-800">
                    {selectedProject.architecture}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border-2 border-gray-200 dark:border-gray-800">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Impact
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selectedProject.impact}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
