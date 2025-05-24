import React from 'react';
import { Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { speakers } from '../../data/conferenceData';

const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-12 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-10 reveal">
          <h2 className="section-title">Keynote Speakers</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            ICDTE 2025 features renowned experts from academia and industry who will share
            their insights on cutting-edge technologies and future trends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={speaker.id} 
              className="reveal" 
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <div className="p-4 w-full flex justify-center space-x-3 mb-2">
                      {speaker.social?.linkedin && (
                        <a 
                          href={speaker.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors"
                          aria-label={`LinkedIn profile of ${speaker.name}`}
                        >
                          <Linkedin className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {speaker.social?.twitter && (
                        <a 
                          href={speaker.social.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors"
                          aria-label={`Twitter profile of ${speaker.name}`}
                        >
                          <Twitter className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {speaker.social?.website && (
                        <a 
                          href={speaker.social.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-colors"
                          aria-label={`Website of ${speaker.name}`}
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {speaker.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-1">
                    {speaker.title}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                    {speaker.organization}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-auto">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal">
          <button className="btn btn-outline">
            View All Speakers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speakers;