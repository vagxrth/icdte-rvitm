import React from 'react';
import { registrationTypes } from '../../data/conferenceData';

const Registration: React.FC = () => {
  return (
    <section id="registration" className="py-20 bg-gray-50 dark:bg-gray-800 overflow-visible">
      <div className="section-container overflow-visible py-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Registration</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Join us at ICDTE 2025 by registering for the conference. Early bird registration
            discounts are available until August 08, 2025.
          </p>
        </div>
        
        {/* Registration Cards Scroll Area */}
        <div className="relative py-6 overflow-visible">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 z-0 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent" />
          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 z-0 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent" />

          <div className="flex gap-8 overflow-x-auto pb-4 px-2 md:px-8 scrollbar-hide snap-x snap-mandatory overflow-visible"
            style={{scrollbarWidth: 'none'}}>
            {registrationTypes.map((type, index) => (
              <div
                key={type.id}
                className="reveal min-w-[320px] max-w-[370px] w-full snap-center my-8 overflow-visible"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-full bg-white dark:bg-gray-700 rounded-2xl overflow-visible shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-200 dark:border-gray-600 hover:scale-105 hover:-translate-y-1 z-20 hover:z-40">
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {type.type} Registration
                    </h3>
                    <div className="flex items-end mb-4">
                      <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">₹{type.price}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                      {type.description}
                    </p>
                  </div>
                  <div className="p-6 pt-0 mt-auto">
                    <button
                      className="w-full btn-outline text-base py-3 rounded-lg transition-all duration-200 border-2 border-primary-500 text-primary-500 bg-transparent hover:bg-primary-600 hover:text-white hover:border-primary-600"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto reveal">
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
              Registration Process
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200 mb-3">Steps to Register</h4>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Complete the online registration form</li>
                  <li>Submit your payment via secure payment gateway</li>
                  <li>Receive confirmation email with registration details</li>
                  <li>Bring your registration confirmation to the conference</li>
                </ol>
              </div>
              
              <div>
                <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200 mb-3">Payment Methods</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  We accept the following payment methods:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Credit/Debit Cards (Visa, MasterCard, RuPay)</li>
                  <li>UPI</li>
                  <li>Bank Transfer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;