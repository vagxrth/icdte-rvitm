import React from 'react';
import { Users } from 'lucide-react';

const Committees: React.FC = () => {
  
  const executiveCommittee = {
    chiefPatron: [
      {
        name: 'Dr. M.P. Shyam',
        title: 'President, RSST, Bengaluru'
      },
      {
        name: 'Dr. S. Vidyashankar',
        title: 'Vice Chancellor, VTU'
      }
    ],
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
        name: 'Sri. P.S Venkatesh Babu',
        title: 'Hon. Treasurer, RSST'
      },
      {
        name: 'Sri. P.S Nanda Kumar',
        title: 'Governing Council Chairman, RVITM'
      },
      {
        name: 'Dr. Rangaswamy B E',
        title: 'Registrar (Academics) VTU'
      },
      {
        name: 'Dr. T. N. Sreenivasa',
        title: 'Registrar (Evaluation) VTU'
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
    },
    advisoryCommittee: [
      {
        name: 'Dr. Latha C A',
        title: 'Prof. & HoD ISE'
      },
      {
        name: 'Dr. C Solaimuthu',
        title: 'Prof. & HoD ME'
      },
      {
        name: 'Dr. Gangadharaiah Y.H',
        title: 'Prof. & HoD Mathematics Dept.'
      },
      {
        name: 'Dr. Rudresh Kumar K.J',
        title: 'Prof. & HoD Chemistry Dept.'
      },
      {
        name: 'Dr.Srinatha N',
        title: 'Assistant Professor, Physics Dept.'
      },
      {
        name: 'Dr. M. Mrunalini',
        title: 'Prof. & HoD MCA'
      }
    ],
    technicalAdvisoryCommittee: [
      {
        name: 'Dr. Rajkumar Buyya',
        title: 'University of Melbourne'
      },
      {
        name: 'Dr. Subrahmanyam Murala',
        title: 'CVPR Lab, SCSS, Trinity College Dublin, Ireland'
      },
      {
        name: 'Dr. C Krishna Mohan',
        title: 'Professor, IIT Hyderabad'
      },
      {
        name: 'Dr. G. K. Singh',
        title: 'Professor, IIT Roorkee'
      },
      {
        name: 'Dr. S D Roy',
        title: 'Professor, IIT, Delhi'
      },
      {
        name: 'Dr. R S Anand',
        title: 'IIT Roorkee'
      },
      {
        name: 'Dr. Sneha Singh',
        title: 'IIT Mandi'
      },
      {
        name: 'Dr. Sudarshan Iyengar',
        title: 'IIT Ropar'
      },
      {
        name: 'Dr. Ambarisha Mishra',
        title: 'NIT Patna'
      },
      {
        name: 'Dr. Deep Gupta',
        title: 'VNIT, Nagpur'
      },
      {
        name: 'Dr. Subramanya K N ',
        title: 'Principal, RVCE'
      },
      {
        name: 'Dr. Bheemsha Arya',
        title: 'Principal, BMSCE'
      },
      {
        name: 'Dr. Krishnamurthy G N',
        title: 'Additional Director, BNMIT'
      },
      {
        name: 'Dr. Ramakanth K P',
        title: 'Professor & Dean CSE, RVCE'
      },
      {
        name: 'N.K. Cauvery',
        title: 'Professor RVCE'
      },
      {
        name: 'Dr. Girish G S',
        title: 'Professor & Chairman CSE, DSU'
      },
      {
        name: 'Dr. Shylaja S S.',
        title: 'Former Chairperson, CSE PESU'
      },
    ],
    organizingCommittee: {
      cse: [
        {
          name: 'Dr.Anitha J',
          title: 'Professor'
        },
        {
          name: 'Dr. Hema M S',
          title: 'Professor'
        },
        {
          name: 'Dr Shrishail Math',
          title: 'Professor'
        },
        {
          name: 'Mr. Sudheendra B S',
          title: 'Professor of Practice'
        },
        {
          name: 'Dr. Mallanagouda Patil',
          title: 'Associate Professor'
        },
        {
          name: 'Dr. Surbhi Agrawal',
          title: 'Associate Professor'
        },
        {
          name: 'Dr. Roopashree S',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr. Shashidhar Virupaksha',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr. Anil Kumar B',
          title: 'Assistant Professor'
        },
        {
          name: 'Mrs. Srividhya V R',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr Nandita Bangera',
          title: 'Assistant Professor'
        },
        {
          name: 'Mrs. Rachana M S',
          title: 'Assistant Professor'
        },
        {
          name: 'Mrs. Syeda Ayesha Unisa',
          title: 'Assistant Professor'
        },
        {
          name: 'Mrs. Padmasree.N',
          title: 'Assistant Professor'
        },
        {
          name: 'Mrs. Prabhavathi K',
          title: 'Assistant Professor'
        },
        {
          name: 'Mrs. Uppin Rashmi',
          title: 'Assistant Professor'
        },
        {
          name: 'Mrs. Bhavya N Javagal',
          title: 'Assistant Professor'
        },
        {
          name: 'Mrs. Shridevi A Desai',
          title: 'Assistant Professor'
        },
      ],
      ise: [
        {
          name: 'Dr. Vinoth Kumar M',
          title: 'Associate Professor'
        },
        {
          name: 'Dr. Niharika P Kumar',
          title: 'Associate Professor'
        },
        {
          name: 'Dr. Shruthi P',
          title: 'Assistant Professor'
        },
        {
          name: 'Mrs. Samatha R Swamy',
          title: 'Assistant Professor'
        },
        {
          name: 'Mr. Girish Kumar B C',
          title: 'Assistant Professor'
        },
        {
          name: 'Mr. Krupesha D',
          title: 'Assistant Professor'
        },
        {
          name: 'Mrs. Nisha Wilvicta J',
          title: 'Assistant Professor'
        },
        {
          name: 'Mrs. Namrata Brahamaprakash',
          title: 'Assistant Professor'
        },
        {
          name: 'Mrs. Pallavi K N',
          title: 'Assistant Professor'
        },
      ],
      ece: [
        {
          name: 'Dr. Prashant P P ',
          title: 'Professor'
        },
        {
          name: 'Dr. Nataraj V',
          title: 'Associate Professor'
        },
        {
          name: 'Dr. Madhumathy P',
          title: 'Associate Professor'
        },
        {
          name: 'Dr. Chethan K S',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr. Shalini Shravan',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr. Kavitha. N',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr. Hareesh Kumar ',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr. Venu Gopal B T',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr. Vikash Kumar',
          title: 'Assistant Professor'
        },
        {
          name: 'Mr. Nagesh M',
          title: 'Assistant Professor'
        },
        {
          name: 'Mrs. Divyashree M',
          title: 'Assistant Professor'
        },
        {
          name: 'Mrs. Nivedita S Desai',
          title: 'Assistant Professor'
        },
      ],
      me: [
        {
          name: 'Dr. Raghavendra Reddy N V',
          title: 'Associate Professor'
        },
        {
          name: 'Dr.Durgaprasad C ',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr.Lokesh P',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr. Gajanan M Naik',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr. Shanthala K',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr. Manish Kumar',
          title: 'Assistant Professor'
        },
        {
          name: 'Mr.Thejas C M',
          title: 'Assistant Professor'
        },  
      ],
      mca: [
        {
          name: 'Dr. Chethan Venkatesh',
          title: 'Associate Professor'
        },
        {
          name: 'Dr. N. Kumaresh',
          title: 'Associate Professor'
        },
        {
          name: 'Dr. Neetha S S',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr. R. Saravanan',
          title: 'Assistant Professor'
        },
        {
          name: 'Mr. Jayaramu M',
          title: 'Assistant Professor'
        },
        {
          name: 'Mrs. Shruthi M G',
          title: 'Assistant Professor'
        },
        {
          name: 'Mr. Tamal Sarkar',
          title: 'Assistant Professor'
        },
        {
          name: 'Mrs. Sowmya V',
          title: 'Assistant Professor'
        },
        {
          name: 'Ms. Shreya Khodanpur',
          title: 'Assistant Professor'
        },
      ],
      physics: [
        {
          name: 'Dr. S. Satyanarayana Reddy',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr. Yashwanth Venkatraman Naik',
          title: 'Assistant Professor'
        },
        {
          name: 'Mr.Sunil Kumar L',
          title: 'Assistant Instructor- Phy Lab'
        }
      ],
      mathematics: [
        {
          name: 'Dr.Sivasankar S',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr. Nagabhushana Pulla',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr. Sushma M Puranik',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr. David A Kalakop',
          title: 'Assistant Professor'
        },
      ],
      chemistry: [  
        {
          name: 'Dr.Samrat D',
          title: 'Assistant Professor'
        },
        {
          name: 'Dr. B E Prasad',
          title: 'Assistant Professor'
        },
        {
          name: 'Mr.Channappa M C',
          title: 'Assistant Instructor- Chem Lab'
        },
        {
          name: 'Mrs. Ramya T',
          title: 'Attender'
        },
      ]
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="section-container page-padding 2xl:pt-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Executive Committee and Patrons</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Meet our distinguished committee members and patrons leading ICDTE 2025.
          </p>
        </div>

        {/* Chief Patron */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center text-primary-600 dark:text-primary-400 mb-8">Chief Patrons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {executiveCommittee.chiefPatron.map((patron, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
                <div className="text-center">
                  <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{patron.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{patron.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patrons Section */}
        <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-center text-primary-600 dark:text-primary-400 mb-8">Patrons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {executiveCommittee.patrons.map((patron, index) => (
              <div key={index} className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{patron.name}</h4>
                <p className="text-gray-600 dark:text-gray-300">{patron.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* General Chair & General Co-Chair Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* General Chair */}
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
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
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
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

        {/* Other Chairs Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Organizing Chair */}
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-1">Organizing Chair</h3>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{executiveCommittee.organizingChair.name}</h4>
              <p className="text-gray-600 dark:text-gray-300">{executiveCommittee.organizingChair.title}</p>
            </div>
          </div>

          {/* Technical Program Chair */}
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-1">Technical Program Chair</h3>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{executiveCommittee.technicalProgramChair.name}</h4>
              <p className="text-gray-600 dark:text-gray-300">{executiveCommittee.technicalProgramChair.title}</p>
            </div>
          </div>
        </div>

        {/* Other Chairs Grid - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Publication Chair */}
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-1">Publication Chair</h3>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{executiveCommittee.publicationChair.name}</h4>
              <p className="text-gray-600 dark:text-gray-300">{executiveCommittee.publicationChair.title}</p>
            </div>
          </div>

          {/* Finance Chair */}
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
            <div className="text-center">
              <div className="bg-primary-100 dark:bg-primary-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-1">Finance Chair</h3>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{executiveCommittee.financeChair.name}</h4>
              <p className="text-gray-600 dark:text-gray-300">{executiveCommittee.financeChair.title}</p>
            </div>
          </div>
        </div>

        {/* Advisory Committee Section */}
        <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md mb-12">
          <h3 className="text-2xl font-semibold text-center text-primary-600 dark:text-primary-400 mb-8">
            Advisory Committee
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveCommittee.advisoryCommittee.map((member, index) => (
              <div 
                key={index} 
                className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{member.name}</h4>
                <p className="text-gray-600 dark:text-gray-300">{member.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Advisory Committee Section */}
        <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-center text-primary-600 dark:text-primary-400 mb-8">
            Technical Advisory Committee
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveCommittee.technicalAdvisoryCommittee.map((member, index) => (
              <div 
                key={index} 
                className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{member.name}</h4>
                <p className="text-gray-600 dark:text-gray-300">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committees;