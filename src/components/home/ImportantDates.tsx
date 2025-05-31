import React from 'react';
import { Calendar } from 'lucide-react';
import { importantDates } from '../../data/conferenceData';

const ImportantDates: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="section-container page-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Important Dates</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Mark your calendar with these crucial deadlines for ICDTE 2025.
            All deadlines are in Anywhere on Earth (AoE) time zone.
          </p>
        </div>
        
        <div className="space-y-12">
          {importantDates.map((date) => (
            <div 
              key={date.id} 
              className="flex flex-col sm:flex-row gap-8 items-start"
            >
              <div className="sm:w-24 flex-shrink-0 flex sm:justify-end">
                <div className="bg-primary-100 dark:bg-primary-800 w-12 h-12 rounded-full flex items-center justify-center z-10">
                  <Calendar className="w-6 h-6 text-primary-600 dark:text-primary-300" />
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md flex-1 hover:shadow-lg transition-shadow duration-300 relative">
                {/* Decorative corner */}
                <div className="absolute h-6 w-6 bg-white dark:bg-gray-700 hidden sm:block -left-3 top-3 transform rotate-45"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {date.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {date.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="inline-block px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                      <span className="text-primary-600 dark:text-primary-400 font-medium">
                        {date.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;