import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { registrationTypes } from '../../data/conferenceData';

const Registration: React.FC = () => {
  return (
    <section id="registration" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Registration</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Join us at ICDTE 2025 by registering for the conference. Early bird registration
            discounts are available until January 15, 2025.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {registrationTypes.map((type, index) => (
            <div 
              key={type.id} 
              className="reveal" 
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`h-full bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col ${
                index === 1 ? 'border-2 border-primary-500 dark:border-primary-400 relative' : ''
              }`}>
                {index === 1 && (
                  <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                    <span className="bg-primary-500 text-white text-sm font-semibold py-1 px-3 rounded-full inline-block shadow-sm">
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {type.type} Registration
                  </h3>
                  <div className="flex items-end mb-4">
                    <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">₹{type.price}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {type.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-0 mt-auto">
                  <button className={`w-full ${
                    index === 1 ? 'btn btn-primary' : 'btn btn-outline'
                  }`}>
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
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
            
            <div className="mt-8 flex items-start p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
              <AlertCircle className="w-5 h-5 text-amber-500 dark:text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="text-amber-800 dark:text-amber-300 text-sm">
                  <span className="font-medium">Important Note:</span> At least one author per accepted paper must register at the full rate. 
                  Early bird registration ends on January 15, 2025. Cancellations received before February 1, 2025 are eligible for a 70% refund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;