import { useEffect, useState } from 'react'
import HeroSection from './pages/HeroSection'
import Footer from './pages/Footer'
import Navbar from "./pages/Navbar";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from 'gsap';
import Apropo from './pages/Apropo';
import Contact from './pages/Contact';
import TvEnDirect from './pages/TvEnDirect';
import { useStore } from '../stores/usetheme';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useStore();
  
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
      <div data-theme={theme} className="flex items-center justify-center h-screen bg-gradient-to-br ">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className=" text-xl font-semibold">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='fadeIn relative' data-theme={theme}>
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