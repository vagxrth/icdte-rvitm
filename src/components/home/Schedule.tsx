import React, { useState } from 'react';
import { conferenceSchedule } from '../../data/conferenceData';

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState(conferenceSchedule[0].id);
  
  const selectedDay = conferenceSchedule.find(day => day.id === activeDay) || conferenceSchedule[0];
  
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="section-container page-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Conference Schedule</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Explore our program of keynotes, paper presentations, panel discussions, and networking events.
            The schedule is subject to minor changes.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {conferenceSchedule.map((day) => (
              <button
                key={day.id}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeDay === day.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
                onClick={() => setActiveDay(day.id)}
              >
                <span className="block text-xs opacity-75">{day.day}</span>
                <span className="font-semibold">{day.date}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {selectedDay.day} - {selectedDay.date}
            </h3>
            
            <div className="space-y-6">
              {selectedDay.activities.map((activity) => (
                <div 
                  key={activity.id} 
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 pb-6 border-b border-gray-200 dark:border-gray-600 last:border-0 last:pb-0"
                >
                  <div className="sm:w-32 flex-shrink-0">
                    <span className="font-medium text-primary-600 dark:text-primary-400 text-sm sm:text-base">
                      {activity.time}
                    </span>
                  </div>
                  
                  <div className="flex-grow">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                      {activity.title}
                    </h4>
                    
                    {activity.speakers && activity.speakers.length > 0 && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                        <span className="font-medium">Speaker{activity.speakers.length > 1 ? 's' : ''}:</span>{' '}
                        {activity.speakers.join(', ')}
                      </p>
                    )}
                    
                    {activity.location && (
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        <span className="font-medium">Location:</span> {activity.location}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a href="#" className="btn btn-outline">
            Download Full Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;