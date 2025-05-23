import React from 'react';
import { Link } from 'react-scroll';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, Instagram } from 'lucide-react';
import { conferenceInfo } from '../../data/conferenceData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-400">{conferenceInfo.shortTitle}</h3>
            <p className="mb-4 text-gray-300">{conferenceInfo.dates}</p>
            <p className="mb-4 text-gray-300">{conferenceInfo.location}</p>
            <div className="flex space-x-4 mt-6">
              <a href="https://x.com/rvitm_official" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/school/rv-institute-of-technology-and-management/posts/?feedView=all" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/RVITMblr/" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/channel/UCxUL5NRpJ8c8kxFTt-8CrkQ" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/rvitmblr/" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="call-for-papers"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link
                  to="important-dates"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Important Dates
                </Link>
              </li>
              <li>
                <Link
                  to="registration"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Registration
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Sponsors */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-400">Publication Partner</h3>
            <ul className="space-y-2">
              {conferenceInfo.sponsors.map((sponsor, index) => (
                <li key={index} className="text-gray-300">
                  {sponsor.name}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary-400">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-300">
                <Mail size={18} className="mr-2 text-gray-400" />
                <a href={`mailto:${conferenceInfo.email}`} className="hover:text-primary-400 transition-colors">
                  {conferenceInfo.email}
                </a>
              </p>
              <p className="flex items-center text-gray-300">
                <Phone size={18} className="mr-2 text-gray-400" />
                <a href={`tel:${conferenceInfo.phone}`} className="hover:text-primary-400 transition-colors">
                  {conferenceInfo.phone}
                </a>
              </p>
              <p className="flex items-start text-gray-300">
                <MapPin size={18} className="mr-2 mt-1 text-gray-400 flex-shrink-0" />
                <span>{conferenceInfo.venueAddress}</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {conferenceInfo.shortTitle}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;