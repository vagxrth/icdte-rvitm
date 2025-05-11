import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { committeeMembers } from '../../data/conferenceData';

const Committees: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('organizing');
  
  return (
    <section id="committees" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Conference Committees</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Meet the dedicated team of professionals working to make ICDTE 2025 a success.
          </p>
        </div>
        
        <div className="mb-8 flex justify-center reveal">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg shadow-sm">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'organizing'
                  ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              } transition-all duration-200`}
              onClick={() => setActiveTab('organizing')}
            >
              Organizing Committee
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === 'technical'
                  ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              } transition-all duration-200`}
              onClick={() => setActiveTab('technical')}
            >
              Technical Program Committee
            </button>
          </div>
        </div>
        
        {activeTab === 'organizing' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            {committeeMembers.slice(0, 6).map((member, index) => (
              <div 
                key={member.id} 
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-all duration-300"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="h-3 bg-gradient-to-r from-primary-500 to-accent-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {member.role}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{member.affiliation}, {member.country}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'technical' && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md reveal">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
                <Users className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Technical Program Committee Members
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
              {/* Sample technical committee members */}
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-medium text-gray-800 dark:text-gray-200">Dr. Academic Name {i + 1}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">University {i + 1}, Country</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="btn btn-outline">
                View Full Committee
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Committees;