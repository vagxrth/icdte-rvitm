import React from 'react';
import { Users } from 'lucide-react';

const Committees: React.FC = () => {
  
  const executiveCommittee = {
    chiefPatron: {
      name: 'Dr. M.P. Shyam',
      title: 'President, RSST, Bengaluru'
    },
    patrons: [
      {
        name: 'Dr. A.V.S Murthy',
        title: 'Hon. Secretary, RSST'
      },
      {
        name: 'Sri. D.P Nagaraj',
        title: 'Hon. Joint Secretary, RSST'
      },
      {
        name: 'Sri. P.S. Venkatesh Babu',
        title: 'Hon. Treasurer, RSST'
      },
      {
        name: 'Sri. B.R Vishwanath Setty',
        title: 'Governing Council Chairman, RVITM'
      }
    ],
    generalChair: {
      name: 'Dr. Nagashettappa Biradar',
      title: 'Principal, RVITM'
    },
    generalCoChair: {
      name: 'Dr. Manjunatha Prasad R',
      title: 'Vice Principal, RVITM'
    },
    organizingChair: {
      name: 'Dr. Malini M Patil',
      title: 'Professor and Head, CSE Dept.'
    },
    technicalProgramChair: {
      name: 'Dr. Savitha G',
      title: 'Associate Professor, CSE Dept.'
    },
    publicationChair: {
      name: 'Dr. Deepak N A',
      title: 'Associate Professor, CSE Dept.'
    },
    financeChair: {
      name: 'Dr. Anil Kumar B',
      title: 'Assistant Professor, CSE Dept.'
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="section-container page-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Executive Committee and Patrons</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Meet our distinguished committee members and patrons leading ICDTE 2025.
          </p>
        </div>

        {/* Chief Patron */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md max-w-md mx-auto">
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-1">Chief Patron</h3>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{executiveCommittee.chiefPatron.name}</h4>
              <p className="text-gray-600 dark:text-gray-300">{executiveCommittee.chiefPatron.title}</p>
            </div>
          </div>
        </div>

        {/* Patrons Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold text-center text-primary-600 dark:text-primary-400 mb-8">Patrons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {executiveCommittee.patrons.map((patron, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{patron.name}</h4>
                <p className="text-gray-600 dark:text-gray-300">{patron.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* General Chair & General Co-Chair Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* General Chair */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md max-w-md w-full mx-auto">
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-1">General Chair</h3>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{executiveCommittee.generalChair.name}</h4>
              <p className="text-gray-600 dark:text-gray-300">{executiveCommittee.generalChair.title}</p>
            </div>
          </div>

          {/* General Co-Chair */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md max-w-md w-full mx-auto">
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-1">General Co-Chair</h3>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{executiveCommittee.generalCoChair.name}</h4>
              <p className="text-gray-600 dark:text-gray-300">{executiveCommittee.generalCoChair.title}</p>
            </div>
          </div>
        </div>

        {/* Other Chairs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Organizing Chair */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">Organizing Chair</h3>
            <h4 className="text-base font-medium text-gray-900 dark:text-white mb-1">{executiveCommittee.organizingChair.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">{executiveCommittee.organizingChair.title}</p>
          </div>

          {/* Technical Program Chair */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">Technical Program Chair</h3>
            <h4 className="text-base font-medium text-gray-900 dark:text-white mb-1">{executiveCommittee.technicalProgramChair.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">{executiveCommittee.technicalProgramChair.title}</p>
          </div>

          {/* Publication Chair */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">Publication Chair</h3>
            <h4 className="text-base font-medium text-gray-900 dark:text-white mb-1">{executiveCommittee.publicationChair.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">{executiveCommittee.publicationChair.title}</p>
          </div>

          {/* Finance Chair */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">Finance Chair</h3>
            <h4 className="text-base font-medium text-gray-900 dark:text-white mb-1">{executiveCommittee.financeChair.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">{executiveCommittee.financeChair.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committees;