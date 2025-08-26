import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { useState } from "react";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import { Sun, Moon, Laptop } from "lucide-react";
import { AlignJustify } from 'lucide-react';


const navLinks = [
 {
    id: 'home',
    title: 'Home'
 },
 {
    id: 'Radio',
    title: 'Radio en direct'
 },
 {
    id: 'Tv',
    title: 'TV en direct'
 },
 {
    id: 'Program',
    title: 'Program'
 },
 {
    id: 'contact',
    title: 'Contact'
 }
]

const Navbar = () => {

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
    <nav className='fixed top-0 left-0 w-full flex items-center py-4 justify-between z-50'>
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
   <AlignJustify className="max-sm:block hidden text-white" />

     </div>
    </nav>
 )
}
export default Navbar