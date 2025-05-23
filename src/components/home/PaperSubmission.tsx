import React from 'react';
import { FileDown } from 'lucide-react';

const PaperSubmission: React.FC = () => {
  return (
    <section id="paper-submission" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Paper Submission</h2>
        </div>
        <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-xl p-8 max-w-6xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
            Prospective authors are encouraged to submit high quality original, previously unpublished, experimental or theoretical research papers for presentation at the Conference. Articles submitted to the conference should meet these criteria and must not be under consideration for publication elsewhere. The paper should be in the format strictly as per the Paper Template given below. The papers should be drafted in English with a maximum of Ten (10) pages and minimum of Six (6) pages including figures, tables and references. The paper will be peer reviewed by domain experts of the respective tracks by the Technical Program Committee. Authors should submit the papers through CMT Microsoft. Kindly do not submit the paper multiple times; it may lead to cancellation of your paper.
          </p>
          <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">Plagiarism Policy</h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
            Any act of plagiarism is a totally unacceptable academic misconduct and cannot be tolerated. The conference team will be checking the plagiarism level of all the submitted papers for ensuring the originality of content using iThenticate with an acceptable limit of 10%.
          </p>
          <div className="mt-8">
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-4 text-center">Template Download</h4>
            <div className="flex justify-center space-x-8">
              <a 
                href="/Word Template.zip" 
                download
                className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                <FileDown className="w-5 h-5" />
                <span>Download paper template (Microsoft Word)</span>
              </a>
              <a 
                href="/LaTex Template.zip" 
                download
                className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                <FileDown className="w-5 h-5" />
                <span>Download paper template (LaTex)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaperSubmission; 