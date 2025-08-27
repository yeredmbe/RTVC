import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { useState,useRef } from "react";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import { Sun, Moon, Laptop } from "lucide-react";
import { AlignJustify, House, Radio, Tv, Contact, TableRowsSplit,X } from 'lucide-react';


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
const menuRef = useRef(null);

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
    <nav className='fixed top-0 left-0 w-full flex items-center py-4 justify-between z-40'>
     <div className='flex w-full items-center justify-between px-5'>
        <a href="#home" className="flex items-center gap-2">
         <img src="/photo.png" alt="logo" className='size-12' />
         <p className='text-white text-2xl font-bold'>RTVC</p>
       
        </a>
        
        <ul className='flex items-center gap-7 max-sm:hidden'>
         {navLinks.map((link) => (
            <li key={link.id} className='text-white'>
             <a href={`#${link.id}`}>{link.title}</a>
            </li>
         ))}
        </ul>


<ThemeSwitch
      modes={["light", "dark", "system"]}
      icons={[
        <Sun key="sun-icon" size={16} />,
        <Moon key="moon-icon" size={16} />,
        <Laptop key="laptop-icon" size={16} />,
      ]}
      showInactiveIcons="all"
      className="max-sm:hidden"
    />
  {isVisible && <AlignJustify className="max-sm:block hidden text-white" onClick={() => {
   setIsOpen(!isOpen);
   setIsVisible(false);
  }} />}
     </div>
     <div ref={menuRef} className={`absolute p-5 w-full top-0 h-screen left-0 right-0 hidden max-sm:${isOpen && 'block open'} z-50 bg-black/90`}>
      <div className='flex items-center justify-between'>
        <a href="#home" className="flex items-center gap-2">
         <img src="/photo.png" alt="logo" className='size-12' />
         <p className='text-white text-2xl font-bold'>RTVC</p>
        </a>
       {!isVisible && <X className="max-sm:block hidden text-white" onClick={() => {
   setIsOpen(!isOpen);
   setIsVisible(true);

  }}  />}
        </div>
         <div className='my-5'>
            <ul className=' self-start gap-7'>
         {navLinks.map((link) => (
            <li onClick={() => {
   setIsOpen(!isOpen);
   setIsVisible(true);
  }} key={link.id} className={`text-white flex items-center gap-2 py-4 hover:bg-black/35 hover:rounded-lg ${link.id==="contact" && "border-b border-gray-600"} py-2 border-t border-gray-600`}>
            { link.icon} <a href={`#${link.id}`}>{link.title}</a>
            </li>
         ))}
        </ul>
         </div>
    </div>
    </nav>
 )
}
export default Navbar