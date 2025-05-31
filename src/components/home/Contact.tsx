import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { conferenceInfo } from '../../data/conferenceData';

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="section-container page-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Have questions about the conference? Contact us directly.
            Our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200 mb-1">
                    Email Us
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    General Inquiries:
                    <a href={`mailto:${conferenceInfo.email}`} className="ml-1 text-primary-600 dark:text-primary-400 hover:underline">
                      {conferenceInfo.email}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200 mb-1">
                    Call Us
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    Dr. Savitha G:
                    <a href="tel:+919964157771" className="ml-1 text-primary-600 dark:text-primary-400 hover:underline">
                      +91 99641 57771
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    Dr. Deepak N A:
                    <a href="tel:+919483866203" className="ml-1 text-primary-600 dark:text-primary-400 hover:underline">
                      +91 9483866203
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    Dr. Anil Kumar B:
                    <a href="tel:+919342834667" className="ml-1 text-primary-600 dark:text-primary-400 hover:underline">
                      +91 93428 34667
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200 mb-1">
                    Visit Us
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {conferenceInfo.venueAddress}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;