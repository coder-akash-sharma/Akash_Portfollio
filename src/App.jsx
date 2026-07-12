import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Loader from "./components/Loader/Loader";
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
