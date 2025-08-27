
import React, { useState, useEffect } from "react";
import Globe from "@/components/ui/globe";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { FlipWords } from '../components/ui/flipwords';
import { TextAnimate } from "@/components/magicui/text-animate";


const GridBackground = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = event => {
      const {
        clientX,
        clientY
      } = event;
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      setMousePosition({
        x,
        y
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return <div className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-300 ease-out" style={{
    backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
    backgroundSize: "40px 40px",
    animation: "moveGrid 20s linear infinite",
    transform: `translate(${mousePosition.x / 30}px, ${mousePosition.y / 30}px)`
  }}>
      {}
      <div className="absolute top-1/2 left-1/2 w-[60vmin] h-[60vmin] bg-cyan-500/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      {}
      <style>
        {`
          @keyframes moveGrid {
            0% { background-position: 0 0; }
            100% { background-position: 80px 80px; }
          }
        `}
      </style>
    </div>;
};
export default function HeroSection() {
  //  const color=localStorage.getItem('theme')
  return <div id="home" className={`relative w-full bg-black overflow-hidden flex flex-col items-center justify-center `}>
      <GridBackground />
     <div className="flex flex-row items-center justify-between w-5/6 max-sm:w-full  max-sm:flex-col-reverse  max-sm:justify-center">
     <div className=" w-1/2 max-sm:w-full max-sm:mx-auto max-sm:flex max-sm:items-center max-sm:flex-col max-sm:justify-center">
      <div className="text-4xl font-bold text-white mb-2 max-sm:px-3 ">
      Bienvenue à la RTVC {" "}
      <FlipWords
        words={["creating", "building", "designing", "crafting"]}
        duration={3000}
        className="text-blue-600 "
      />
      {" "}
      Porter la Parole aux nations par des contenus audio-visuels inspirés.
    </div>
    <TextAnimate animation="blurIn" by="text" as="p" className="text-white mb-7 max-sm:mx-3">
     Un organisation basee dans plus the 150 nations.
    </TextAnimate>
    <a href="#contact">
    <ShimmerButton className="my-4">Contactez Nous</ShimmerButton>
    </a>
    </div>
        <Globe
        
        markers={[
      { location: [40.7128, -74.006], size: 0.1 },
      { location: [51.5074, -0.1278], size: 0.01 },
      { location: [35.6762, 139.6503], size: 0.1 },
      { location: [25.2048, 55.2708], size: 0.1 },
      { location: [4.0333, 9.7000], size: 0.1},
      {location:[39.9042, 116.4074],size:0.1},
      {location:[35.6762, 139.6503],size:0.1},
      {location:[48.8566, 2.3522],size:0.1},
      {location:[41.0082, 28.9784],size:0.1},
      {location:[41.9028, 12.4964],size:0.1},
      {location:[1.3521, 103.8198],size:0.1},
      {location:[7.5399, -5.547],size:0.1},
      {location:[52.5200, 13.4050],size:0.1},
      {location:[-33.8688, 151.2093],size:0.1},
      {location:[13.4931, -2.1],size:0.1},
       {location:[9.0819, 8.675],size:0.1}
    ]}/>
     </div>
    </div>;
}