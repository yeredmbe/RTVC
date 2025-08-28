import { HeartIcon, HeartPulse } from 'lucide-react'
import React from 'react'
import love from '/love-always-wins.png'

export default function Footer() {
  return (
    <>
    <div id='footer' className='w-full  flex flex-col items-center justify-center'>
    <p className='text-center mx-2'>© {new Date().getFullYear()} RTVC — Radio Voix de la Croix. Tous droits réservés.</p>
     <p className=' text-xs text-center'>Developped by faurza{' '} <img src={love} className='w-4 inline'/></p>
    </div>
    </>
  )
}
