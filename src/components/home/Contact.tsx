import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { conferenceInfo } from '../../data/conferenceData';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your server
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Show success message (in a real implementation)
    alert('Message sent successfully!');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Have questions about the conference? Contact us directly or use the form below.
            Our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="reveal">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md h-full">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="registration">Registration</option>
                    <option value="paper">Paper Submission</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md h-full">
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
      </div>
    </section>
  );
};

export default Contact;