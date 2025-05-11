import React from 'react';
import { Globe, Users, Award, Zap } from 'lucide-react';
import { conferenceInfo } from '../../data/conferenceData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">About The Conference</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            {conferenceInfo.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="reveal">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md h-full">
              <h3 className="text-2xl font-semibold mb-4 text-primary-600 dark:text-primary-400">Vision & Scope</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                ICDTE 2025 aims to foster collaboration between academia and industry, bringing together researchers, 
                engineers, and practitioners to exchange ideas and address challenges in the rapidly evolving fields 
                of digital technology and engineering.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                The conference provides a platform for sharing novel research findings, discussing emerging trends, 
                and exploring innovative solutions to complex problems facing our interconnected world.
              </p>
            </div>
          </div>
          
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 dark:bg-primary-900/20 rounded-bl-full -mr-10 -mt-10 z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-primary-600 dark:text-primary-400">Conference Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0">
                      <Globe size={20} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      International speakers from academia and industry
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0">
                      <Users size={20} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Networking opportunities with experts and peers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0">
                      <Award size={20} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Best paper awards and publication opportunities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0">
                      <Zap size={20} />
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      Workshops and tutorials on emerging technologies
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl overflow-hidden shadow-lg reveal">
          <div className="px-8 py-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-4xl font-bold mb-2">20+</h4>
                <p className="text-primary-100">Countries Represented</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold mb-2">50+</h4>
                <p className="text-primary-100">Expert Speakers</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold mb-2">300+</h4>
                <p className="text-primary-100">Expected Attendees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;