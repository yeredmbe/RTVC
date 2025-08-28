import React from 'react'
import HeroVideoDialog from "@/components/magicui/hero-video-dialog"
import { TypingAnimation } from "@/components/magicui/typing-animation"

const TvEnDirect = () => {

   const links=[
      {
         name:'Programme 1',
         link:"https://www.youtube.com/embed/rXudXAUwwyE",
         image:"https://img.youtube.com/vi/rXudXAUwwyE/sddefault.jpg"


      },
      {
         name:'Programme 2',
         link:'https://www.youtube.com/embed/JMGL9JduB2g',
         image:"https://img.youtube.com/vi/JMGL9JduB2g/sddefault.jpg"
      },
      {
         name:'Programme 3',
         link:'https://www.youtube.com/embed/E9m4SEodg1I',
         image:"https://img.youtube.com/vi/E9m4SEodg1I/sddefault.jpg"
      },
      {
         name:'Programme 4',
         link:'https://www.youtube.com/embed/MQxe1u_J7TI',
         image:"https://img.youtube.com/vi/MQxe1u_J7TI/sddefault.jpg"
      },
      {
         name:'Programme 6',
         link:'https://www.youtube.com/embed/IjhthCVDQJg',
         image:"https://img.youtube.com/vi/sCwnPutqtJo/sddefault.jpg"
         
      },
      {
         name:'Programme 7',
         link:'https://www.youtube.com/embed/wWpywa4zzaU',
         image:"https://img.youtube.com/vi/IjhthCVDQJg/sddefault.jpg"
         
      },
      {
         name:'Programme 8',
         link:'https://www.youtube.com/embed/iHedu1Ldzw8',
       image:"https://img.youtube.com/vi/iHedu1Ldzw8/sddefault.jpg"
         
      },
      {
         name:'Programme 9',
         link:'https://www.youtube.com/embed/eJlYxp8VZu8',
        image:"https://img.youtube.com/vi/eJlYxp8VZu8/sddefault.jpg"
         
      },
      {
         name:'Programme 10',
         link:'https://www.youtube.com/embed/viIgL1vuh5o',
         image:"https://img.youtube.com/vi/viIgL1vuh5o/sddefault.jpg"
         
      },
   ]
  return (
     <div id='TV' className="flex flex-col bg-black/95 items-center justify-center"> 
        <TypingAnimation className="text-white text-4xl my-3 text-center max-sm:text-2xl font-bold" startOnView={true}>Redifussion de vos programmes</TypingAnimation>
    
     <p className='text-white text-center text-md my-3'>Suivez les programmes manque de la semaine</p>
        <div className='grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 items-center  justify-between w-11/12 max-sm:flex-col max-sm:justify-center'>
     {links.map((link, i)=> (
    <div key={i} className='m-3'>
     <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
           videoSrc={link.link}
        thumbnailSrc={link.image}
        thumbnailAlt="Hero Video"
      />
      </div>))
      }
      </div>
     
    </div>
  )
}

export default TvEnDirect
