import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { conferenceInfo } from '../../data/conferenceData';

const Venue: React.FC = () => {
  return (
    <section id="venue" className="py-12 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-10 reveal">
          <h2 className="section-title">Venue</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            ICDTE 2025 will be held at the prestigious RV Institute of Technology and Management in Bangalore,
            a reputed institution known for its excellence in education and research.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 reveal">
          <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-md h-full">
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.541551615487!2d77.57329667581237!3d12.872860287433571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ab2ff6b8611%3A0x8417272c1b6f4d24!2sRV%20INSTITUTE%20OF%20TECHNOLOGY%20AND%20MANAGEMENT%20%C2%AE!5e0!3m2!1sen!2sin!4v1747008009694!5m2!1sen!2sin" 
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
                RV Institute of Technology and Management
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
                    <p className="text-gray-800 dark:text-gray-200">icdte2025.netlify.app</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200 mb-3">
                  Getting There
                </h4>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><span className="font-medium">Nearby Metro Station:</span> Konanakunte Cross (3.6 kms)</p>
                  <p><span className="font-medium">Parking:</span> Available at the venue (limited spots)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;