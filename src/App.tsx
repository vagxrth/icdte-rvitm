import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
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

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/call-for-papers" element={<CallForPapers />} />
              <Route path="/paper-submission" element={<PaperSubmission />} />
              <Route path="/important-dates" element={<ImportantDates />} />
              <Route path="/committees" element={<Committees />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/venue" element={<Venue />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/acknowledgement" element={<Acknowledgement />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;