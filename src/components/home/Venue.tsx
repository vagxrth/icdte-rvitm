import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { conferenceInfo } from '../../data/conferenceData';

const Venue: React.FC = () => {
  return (
    <section id="venue" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Venue</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            ICDTE 2025 will be held at the prestigious Technology Innovation Center in Singapore,
            a state-of-the-art facility designed for academic conferences and professional gatherings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 reveal">
          <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-md h-full">
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.51932004223!2d103.8003086431961!3d1.35097355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1767b42b8ec9%3A0x400f7acaedaa420!2sSingapore!5e0!3m2!1sen!2sus!4v1625654728377!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Conference Venue Map"
              ></iframe>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md h-full">
              <h3 className="text-2xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                Technology Innovation Center
              </h3>
              
              <div className="space-y-4">
                <div className="flex">
                  <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 dark:text-gray-200">{conferenceInfo.venueAddress}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 dark:text-gray-200">{conferenceInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 dark:text-gray-200">{conferenceInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Globe className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-800 dark:text-gray-200">www.icdte2025.org</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200 mb-3">
                  Getting There
                </h4>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><span className="font-medium">From Airport:</span> 30 minutes by taxi or 45 minutes by public transport</p>
                  <p><span className="font-medium">Nearby MRT:</span> Central Station (5-minute walk)</p>
                  <p><span className="font-medium">Parking:</span> Available at the venue (limited spots)</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200 mb-3">
                  Accommodations
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Special rates are available at the following hotels:
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>Tech Plaza Hotel (5-minute walk)</li>
                  <li>Cityview Inn (10-minute walk)</li>
                  <li>Grand Central Hotel (15-minute by taxi)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;