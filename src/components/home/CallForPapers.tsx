import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { tracks } from '../../data/conferenceData';

const CallForPapers: React.FC = () => {
  const [expandedTrack, setExpandedTrack] = useState<number | null>(null);

  const toggleTrack = (trackId: number) => {
    setExpandedTrack(expandedTrack === trackId ? null : trackId);
  };

  return (
    <section id="call-for-papers" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
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
              className="reveal bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl overflow-hidden transition-all duration-300"
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
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {track.description}
                  </p>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Research Areas:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {track.topics.map((topic, index) => (
                      <li 
                        key={index}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 reveal">
          <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary-600 dark:text-primary-400 text-center">
              Submission Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Paper Format</h4>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Full papers: 8-10 pages including figures and references</li>
                  <li>Short papers: 4-6 pages including figures and references</li>
                  <li>Papers must be submitted in IEEE conference format</li>
                  <li>All submissions must be in PDF format</li>
                  <li>Papers must be written in English</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Review Process</h4>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Double-blind peer review by at least three reviewers</li>
                  <li>Evaluated for originality, technical soundness, and relevance</li>
                  <li>Acceptance notification within 45 days of submission deadline</li>
                  <li>At least one author must register for the conference</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="#" 
                className="btn btn-primary"
              >
                Submit Your Paper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;