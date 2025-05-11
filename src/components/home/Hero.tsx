import React from 'react';
import { Link } from 'react-scroll';
import { conferenceInfo } from '../../data/conferenceData';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16"
      style={{ 
        background: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url(/rvitm.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 to-gray-900/70 mix-blend-multiply" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="animate-zoom-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            <span className="block">{conferenceInfo.shortTitle}</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-primary-300 font-normal tracking-wider">
              {conferenceInfo.title}
            </span>
          </h1>
          
          <div className="mt-6 mb-10 inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <div className="flex items-center justify-center space-x-3 text-white">
              <span className="text-lg md:text-xl">{conferenceInfo.dates}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
              <span className="text-lg md:text-xl">{conferenceInfo.location}</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
            Exploring the frontiers of technology and engineering in the digital age
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              to="registration"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className="btn btn-primary text-base md:text-lg px-8 py-3"
            >
              Register Now
            </Link>
            <Link
              to="call-for-papers"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              className="btn btn-outline text-white border-white hover:bg-white/10 text-base md:text-lg px-8 py-3"
            >
              Submit Paper
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 animate-bounce flex justify-center">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
            className="text-white cursor-pointer"
          >
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;