import React from 'react'
import HeroVideoDialog from "@/components/magicui/hero-video-dialog"
import { TypingAnimation } from "@/components/magicui/typing-animation"

const TvEnDirect = () => {
  return (
     <div id='TV' className="flex flex-col bg-black/95 items-center justify-center"> 
        <TypingAnimation className="text-white text-4xl my-3 text-center max-sm:text-2xl font-bold" startOnView={true}>Redifussion de vos programmes</TypingAnimation>
    
     <p className='text-white text-center text-md my-3'>Suivez les programmes manque de la semaine</p>
        <div className='flex items-center justify-between w-11/12 max-sm:flex-col max-sm:justify-center'>
     {Array(4).fill(0).map((_, i) => (
    <div key={i} className='m-3'>
     <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      </div>))
      }
      </div>
      <div className='flex items-center justify-between max-sm:hidden w-11/12 max-sm:flex-col max-sm:justify-center'>
     {Array(4).fill(0).map((_, i) => (
    <div key={i} className='m-3'>
     <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      </div>))
      }
      </div>
      {/* <div className='flex items-center justify-between w-11/12 max-sm:flex-col max-sm:justify-center'>
     {Array(4).fill(0).map((_, i) => (
    <div key={i} className='m-3'>
     <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      </div>))
      }
      </div> */}
    </div>
  )
}

export default TvEnDirect
