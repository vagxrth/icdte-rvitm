import React, { createContext, useContext, useState, useEffect } from 'react';

interface ScrollContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset
      
      // Get all section elements
      const sections = document.querySelectorAll('section[id]');
      
      // Find the current active section based on scroll position
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once on mount to set initial active section
    handleScroll();
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle reveal on scroll animation
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    
    // Initial check
    reveal();
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};