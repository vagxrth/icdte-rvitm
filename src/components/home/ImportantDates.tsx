import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { importantDates } from '../../data/conferenceData';

const ImportantDates: React.FC = () => {
  return (
    <section id="important-dates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Important Dates</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Mark your calendars with these critical deadlines for the ICDTE 2025 conference.
            All deadlines are end of day Anywhere on Earth (AoE) time.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-4 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-700 hidden sm:block"></div>
            
            <div className="space-y-12">
              {importantDates.map((date, index) => (
                <div 
                  key={date.id} 
                  className="flex flex-col sm:flex-row gap-8 items-start reveal"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="sm:w-24 flex-shrink-0 flex sm:justify-end">
                    <div className="bg-primary-100 dark:bg-primary-800 w-12 h-12 rounded-full flex items-center justify-center z-10">
                      <Calendar className="w-6 h-6 text-primary-600 dark:text-primary-300" />
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md flex-1 hover:shadow-lg transition-shadow duration-300 relative">
                    {/* Decorative corner */}
                    <div className="absolute h-6 w-6 bg-white dark:bg-gray-700 hidden sm:block -left-3 top-3 transform rotate-45"></div>
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                          {date.title}
                        </h3>
                        {index === 0 && (
                          <span className="ml-3 px-2 py-1 text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300 rounded-full">
                            Upcoming
                          </span>
                        )}
                      </div>
                      
                      <p className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
                        {date.date}
                      </p>
                      
                      {date.description && (
                        <p className="text-gray-600 dark:text-gray-300">
                          {date.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center reveal">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg border border-green-100 dark:border-green-800">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Add these dates to your calendar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;