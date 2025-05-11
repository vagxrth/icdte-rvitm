import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProvider } from './context/ScrollContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import About from './components/home/About';
import CallForPapers from './components/home/CallForPapers';
import ImportantDates from './components/home/ImportantDates';
import Committees from './components/home/Committees';
import Registration from './components/home/Registration';
import Speakers from './components/home/Speakers';
import Schedule from './components/home/Schedule';
import Venue from './components/home/Venue';
import Contact from './components/home/Contact';

function App() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main>
            <Hero />
            <About />
            <CallForPapers />
            <ImportantDates />
            <Committees />
            <Registration />
            <Speakers />
            <Schedule />
            <Venue />
            <Contact />
          </main>
          <Footer />
        </div>
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;