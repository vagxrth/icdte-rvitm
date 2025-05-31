import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { tracks } from '../../data/conferenceData';

const CallForPapers: React.FC = () => {
  const [expandedTrack, setExpandedTrack] = useState<number | null>(null);

  const toggleTrack = (trackId: number) => {
    setExpandedTrack(expandedTrack === trackId ? null : trackId);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="section-container page-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Call for Papers</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            We invite researchers, academics, and industry professionals to submit original research papers
            on the following tracks and topics. All accepted papers will be published in the conference proceedings
            and selected papers will be recommended for publication in special issues of respected journals.
          </p>
        </div>
        
        <div className="space-y-4 max-w-4xl mx-auto">
          {tracks.map((track) => (
            <div 
              key={track.id}
              className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleTrack(track.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-100 dark:bg-primary-800 w-10 h-10 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">
                    {track.id}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {track.title}
                  </h3>
                </div>
                {expandedTrack === track.id ? (
                  <ChevronUp className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                )}
              </button>
              
              {expandedTrack === track.id && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {track.description}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {track.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;