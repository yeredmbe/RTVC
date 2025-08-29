import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { useState,useRef, useEffect } from "react";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import { Sun, Moon, Laptop } from "lucide-react";
import { AlignJustify, House, Radio, Tv, Contact, TableRowsSplit,X,PaintBucket
 } from 'lucide-react';
 import { useStore } from "../../stores/usetheme";


const  themes= [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ]

const navLinks = [
 {
    id: 'home',
    title: 'Home',
    icon:<House className='text-violet-800' />
 },
 {
    id: 'Radio',
    title: 'Radio en direct',
    icon:<Radio className='text-red-600' />
 },
 {
    id: 'Tv',
    title: 'TV en direct',
    icon:<Tv className='text-blue-600' />
 },
 {
    id: 'Program',
    title: 'Program',
    icon:<TableRowsSplit className='text-gray-400' />
 },
 {
    id: 'contact',
    title: 'Contact',
    icon:<Contact className='text-yellow-600' />
 }
]



const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
const [isVisible, setIsVisible] = useState(true)
const [toggle, setToggle] = useState(false)
const { theme, setTheme } = useStore();

  useGSAP(() => {
    const navTween = gsap.timeline({
     scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top'
     }
    });
   
    navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
     backgroundColor: '#00000050',
     backgroundFilter: 'blur(10px)',
     duration: 1,
     ease: 'power1.inOut'
    });
  })

  
 
 return (
    <nav  className='fixed top-0 left-0 w-full flex items-center py-4 justify-between z-40'>
     <div className='flex w-full items-center justify-between px-5'>
        <a href="#home" className="flex items-center gap-2">
         <img src="./logo.jpg" alt="logo" className='size-12 rounded-full' />
         <p className=' text-2xl font-bold'>RTVC</p>
       
        </a>
        
        <ul className='flex items-center gap-7 max-sm:hidden'>
         {navLinks.map((link) => (
            <li key={link.id} className=''>
             <a href={`#${link.id}`}>{link.title}</a>
            </li>
         ))}
        </ul>

<div onClick={() => setToggle(!toggle)} className='flex items-center p-2 rounded-lg bg-blue-900'>
<PaintBucket />
</div>
  {isVisible && <AlignJustify className="max-sm:block hidden " onClick={() => {
   setIsOpen(!isOpen);
   setIsVisible(false);
  }} />}
     </div>
     <div className={`absolute p-5 w-full top-0 h-screen left-0 right-0 hidden max-sm:${isOpen && 'block open'} z-50 bg-black/90`}>
      <div className='flex items-center justify-between'>
        <a href="#home" className="flex items-center gap-2">
         <img src="/photo.png" alt="logo" className='size-12' />
         <p className=' text-2xl font-bold'>RTVC</p>
        </a>
       {!isVisible && <X className="max-sm:block hidden " onClick={() => {
   setIsOpen(!isOpen);
   setIsVisible(true);

  }}  />}
        </div>
         <div className='my-5'>
            <ul className=' self-start gap-7'>
         {navLinks.map((link) => (
            <a href={`#${link.id}`} key={link.id}>
            <li onClick={() => {
   setIsOpen(!isOpen);
   setIsVisible(true);
  }}  className={` flex items-center gap-2 py-4 hover:bg-black/35 hover:rounded-lg ${link.id==="contact" && "border-b border-gray-600"} py-2 border-t border-gray-600`}>
            { link.icon} {link.title}
            </li>
            </a>
         ))}
        </ul>
         </div>
    </div>
{toggle && <div onClick={() => setToggle(false)} className="h-screen absolute top-4 right-4 max-sm:left-1 container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
{/* this is the theme switcher */}
       <div className=" bg-black p-4 rounded-lg grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {themes.map((t) => (
            <button
              key={t}
              className={`
                group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
                ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
              `}
              onClick={() => {setTheme(t); 
               setToggle(false)}}
            >
              <div className="relative h-8 w-full rounded-md overflow-hidden" data-theme={t}>
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <span className="text-[11px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>}
    </nav>
 )
}
export default Navbar