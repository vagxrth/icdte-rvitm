import React from 'react';
import { FileDown } from 'lucide-react';

const Acknowledgement: React.FC = () => {
  return (
    <section id="acknowledgement" className="py-8 bg-white dark:bg-gray-900 min-h-screen pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="section-title text-4xl font-bold text-gray-900 dark:text-white mb-4">Acknowledgement</h2>
        </div>
        <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-xl p-8 max-w-4xl mx-auto mb-8 shadow-lg">
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg leading-relaxed text-justify">
            Prospective authors are encouraged to submit high quality original, previously unpublished, experimental or theoretical research papers for presentation at the Conference. Articles submitted to the conference should meet these criteria and must not be under consideration for publication elsewhere. The paper should be in the format strictly as per the Paper Template given below. The papers should be drafted in English with a maximum of Ten (10) pages and minimum of Six (6) pages including figures, tables and references. The paper will be peer reviewed by domain experts of the respective tracks by the Technical Program Committee. Authors should submit the papers through Microsoft CMT Service. Kindly do not submit the paper multiple times; it may lead to cancellation of your paper.
          </p>
          <h3 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mb-4">Plagiarism Policy</h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 text-justify">
            Any act of plagiarism is a totally unacceptable academic misconduct and cannot be tolerated. The conference team will be checking the plagiarism level of all the submitted papers for ensuring the originality of content using iThenticate with an acceptable limit of 10%.
          </p>
        </div>

        <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-justify max-w-4xl mx-auto mb-8">
          <text>The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</text>
        </div>

        <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-justify max-w-4xl mx-auto mb-8">
          <text>I acknowledge that I have read and agree to abide by the Microsoft CMT terms of use and privacy policy.</text>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto shadow-lg">
          <h4 className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-6 text-center">Template Download</h4>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a 
              href="/Word Template.zip" 
              download
              className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors px-4 py-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20"
            >
              <FileDown className="w-6 h-6" />
              <span className="text-lg">Download paper template (Microsoft Word)</span>
            </a>
            <a 
              href="/LaTex Template.zip" 
              download
              className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors px-4 py-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20"
            >
              <FileDown className="w-6 h-6" />
              <span className="text-lg">Download paper template (LaTeX)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acknowledgement; 