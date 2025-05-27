import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProvider } from './context/ScrollContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import About from './components/home/About';
import CallForPapers from './components/home/CallForPapers';
import PaperSubmission from './components/home/PaperSubmission';
import ImportantDates from './components/home/ImportantDates';
import Committees from './components/home/Committees';
import Registration from './components/home/Registration';
import Schedule from './components/home/Schedule';
import Venue from './components/home/Venue';
import Contact from './components/home/Contact';
import Acknowledgement from './components/pages/Acknowledgement';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <CallForPapers />
    <PaperSubmission />
    <ImportantDates />
    <Committees />
    <Registration />
    <Schedule />
    <Venue />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <ThemeProvider>
        <ScrollProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/acknowledgement" element={<Acknowledgement />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ScrollProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;