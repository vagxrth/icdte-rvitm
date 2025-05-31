import React from 'react';
import { Globe, Users, Award, Zap, GraduationCap, Building2, BookOpen, Users2 } from 'lucide-react';
import { conferenceInfo } from '../../data/conferenceData';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-800">
      <div className="section-container page-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">About</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Learn more about RSST, RVITM, and the International Conference on Digital Technology and Engineering.
          </p>
        </div>

        <div className="mb-10 reveal">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400 text-center">About RSST</h3>
            <p className="text-gray-700 dark:text-gray-300 text-justify">
              Rashtreeya Sikshana Samithi Trust (RSST), established in 1940, is one of India's most respected educational trusts,
              known for its unwavering commitment to excellence in education and nation-building. Managing over 25
              institutions, including the renowned RV group, RSST has become a beacon of academic innovation, ethical
              leadership, and holistic student development. With a legacy of transforming young minds into responsible professionals
              and global citizens, RSST continues to set benchmarks in quality education, driven by vision, values, and a passion for
              empowering future generations.
            </p>
          </div>
        </div>

        <div className="mb-10 reveal">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400 text-center">About RV Institute of Technology and Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-justify">
                  RV Institute of Technology and Management (RVITM) is a premier engineering institution established under the aegis of Rashtreeya Sikshana Samithi Trust (RSST). Located in the heart of Bangalore, RVITM is committed to excellence in technical education, research, and innovation.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-justify">
                  The institute offers undergraduate and postgraduate programs in various engineering disciplines, fostering an environment of academic excellence, research, and industry collaboration.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0">
                    <GraduationCap size={20} />
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Academic Excellence</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-justify mb-4">State-of-the-art facilities and experienced faculty</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0">
                    <Building2 size={20} />
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Infrastructure</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-justify mb-4">Modern laboratories and research facilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0">
                    <BookOpen size={20} />
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Research Focus</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-justify mb-4">Strong emphasis on research and development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0">
                    <Users2 size={20} />
                  </span>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Industry Connect</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-justify">Strong industry partnerships and collaborations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 reveal">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400 text-center">About The Conference</h3>
            <p className="text-gray-600 dark:text-gray-300 text-justify mb-8">
              {conferenceInfo.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">Vision & Scope</h4>
                <p className="text-gray-700 dark:text-gray-300 text-justify mb-4">
                  The International Conference on Digital Technology and Engineering (ICDTE-2025) is a distinguished platform that
                  brings together experts, researchers, industry leaders, and students from around the world to engage in a comprehensive
                  exchange of ideas and knowledge. With a focus on advancing the field of digital technology and engineering, the conference
                  provides an opportunity for showcasing cutting-edge research, innovative solutions, and impactful practices.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-justify mb-4">
                  ICDTE-2025 encourages collaboration across disciplines, aiming to inspire new perspectives and drive progress in areas 
                  critical to the future of technology. The conference will serve as a space for discussions, learning, and sharing valuable 
                  insights related to the challenges and opportunities faced in digital technology and engineering.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-justify">
                  By creating an inclusive and forward-thinking environment, ICDTE-2025 plays an important role in shaping the future of 
                  the technological landscape globally. The event will feature keynote addresses, technical sessions, workshops, and panel 
                  discussions led by eminent figures from academia and industry.
                </p>
              </div>
              
              <div className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 dark:bg-primary-900/20 rounded-bl-full -mr-10 -mt-10 z-0"></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">Conference Highlights</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0">
                        <Globe size={20} />
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 text-justify">
                        International speakers from academia and industry
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0">
                        <Users size={20} />
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 text-justify">
                        Networking opportunities with experts and peers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0">
                        <Award size={20} />
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 text-justify">
                        Best paper awards and publication opportunities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0">
                        <Zap size={20} />
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 text-justify">
                        Workshops and tutorials on emerging technologies
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;