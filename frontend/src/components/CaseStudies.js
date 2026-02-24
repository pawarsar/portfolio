import React from 'react';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { caseStudies } from '../mock';
import { Target, Lightbulb, Network, TrendingUp } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Case Studies
          </h2>
          <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Deep dives into flagship projects showcasing technical decisions and impact
          </p>
        </div>

        {/* Case studies tabs */}
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-8 bg-gray-100 dark:bg-gray-900 p-1 rounded-lg">
              {caseStudies.map((study, index) => (
                <TabsTrigger
                  key={index}
                  value={String(index)}
                  className="text-sm font-medium data-[state=active]:bg-white dark:data-[state=active]:bg-black data-[state=active]:text-gray-900 dark:data-[state=active]:text-white"
                >
                  {study.title.split('-')[0].trim()}
                </TabsTrigger>
              ))}
            </TabsList>

            {caseStudies.map((study, index) => (
              <TabsContent key={index} value={String(index)} className="space-y-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {study.title}
                </h3>

                {/* Problem */}
                <Card className="p-6 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-lg flex-shrink-0">
                      <Target className="h-5 w-5 text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Problem
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {study.problem}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Approach */}
                <Card className="p-6 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-lg flex-shrink-0">
                      <Lightbulb className="h-5 w-5 text-gray-900 dark:text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Approach
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {study.approach}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Architecture */}
                <Card className="p-6 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-lg flex-shrink-0">
                      <Network className="h-5 w-5 text-gray-900 dark:text-white" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Architecture
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {study.architecture.description}
                      </p>
                      <div className="space-y-2">
                        {study.architecture.components.map((component, compIndex) => (
                          <div
                            key={compIndex}
                            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                          >
                            <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full flex-shrink-0"></span>
                            <span className="font-mono text-sm">{component}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Tradeoffs */}
                <Card className="p-6 border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technical Tradeoffs
                  </h4>
                  <ul className="space-y-2">
                    {study.tradeoffs.map((tradeoff, tradeIndex) => (
                      <li
                        key={tradeIndex}
                        className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full mt-2 flex-shrink-0"></span>
                        <span>{tradeoff}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Results */}
                <Card className="p-6 border-2 border-gray-900 dark:border-white bg-gray-50 dark:bg-gray-900">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gray-900 dark:bg-white rounded-lg flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-white dark:text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Results & Impact
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                        {study.results}
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
