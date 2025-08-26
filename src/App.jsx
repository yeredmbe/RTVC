import { useEffect, useState } from 'react'
import HeroSection from './pages/HeroSection'
import Footer from './pages/Footer'
import Navbar from "./pages/Navbar";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from 'gsap';
import Apropo from './pages/Apropo';
import Contact from './pages/Contact';
import TvEnDirect from './pages/TvEnDirect';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
useEffect(() => {
  const handleLoad = () => {
    setIsLoading(false);
  };

  if (document.readyState === 'complete') {
    setIsLoading(false);
  } else {
    window.addEventListener('load', handleLoad);
  }

  return () => {
    window.removeEventListener('load', handleLoad);
  };
}, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br bg-black">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl font-semibold">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='fadeIn'>
        <Navbar/>
        <HeroSection/>
        <TvEnDirect/>
        <Apropo/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App