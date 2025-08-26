'use client';
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import React, { useState, useRef } from 'react';
import { AuroraText } from "@/components/magicui/aurora-text";
import facebook from '/facebook.png'
import youtube from '/youtube.png'
import apple from '/apple.png'
import social from '/social.png'
import socialMedia from '/social-media.png'


const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>;
const LockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <circle cx="12" cy="16" r="1"></circle>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>;
const EyeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>;
const EyeOffIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>;
const GitHubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>;
const GoogleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>;
const FloatingLabelInput = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  icon,
  rightIcon,
  onRightIconClick
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground transition-colors group-focus-within:text-foreground">
        {icon}
      </div>
      <input id={id} type={type} value={value} onChange={onChange} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 peer placeholder-transparent" placeholder={placeholder} style={{
      '--tw-ring-color': 'hsl(var(--ring))'
    }} />
      <label htmlFor={id} className={`absolute left-10 transition-all duration-200 pointer-events-none text-sm font-medium ${isFocused || value ? '-top-2 text-xs bg-white dark:bg-black px-2 text-foreground rounded-sm' : 'top-2.5 text-muted-foreground'}`}>
        {placeholder}
      </label>
      {rightIcon && <button type="button" onClick={onRightIconClick} className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:text-foreground">
          {rightIcon}
        </button>}
    </div>;
};
const Contact = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const cardRef = useRef(null);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return <>
  <div id="contact" className='w-full bg-black flex flex-col items-center justify-center '>
    <div className="w-5/6 flex items-center justify-between max-sm:flex-col-reverse max-sm:items-center ">
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-sm relative">
          {}
          <div ref={cardRef} className="relative bg-black dark:bg-white border border-gray-700 rounded-lg p-6 shadow-sm transition-all duration-200 hover:shadow-md">
            {}
            <div className="flex flex-col space-y-2 text-center mb-6">
              <h1 className="text-2xl font-semibold tracking-tight  text-white">
               Laissez Nous un Message
              </h1>
              <p className="text-sm text-muted-foreground">
                Entrez vos informations et nous vous recontacterons.
              </p>
            </div>

            <form className="space-y-4">
              {}
              <div className="space-y-2">
                <FloatingLabelInput id="fullName" type="text" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Full Name" icon={<UserIcon />} />
              </div>

              {}
              <div className="space-y-2">
                <FloatingLabelInput id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" icon={<MailIcon />} />
              </div>

              {}
              <div className="space-y-2">
                <FloatingLabelInput id="password" type={"text"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Message" onRightIconClick={togglePasswordVisibility} />
              </div>

              {}
              <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                Contactez Nous
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-2" >
<h1 className="text-4xl text-center font-bold tracking-tighter md:text-5xl lg:text-7xl ">
    <AuroraText>Contactez Nous</AuroraText>
    </h1>
        <p className='text-white text-lg text-center'>Vous pouvez nous suivre sur nos differents reseaux si dessous</p>
        <div className="flex items-center justify-between mt-4 space-x-4">
          <div>
          <img src={social} alt="social" className="w-10 h-10" />
          </div>
            <div>
          <img src={socialMedia} alt="social" className="w-10 h-10" />
          </div>
            <div>
          <img src={youtube} alt="social" className="w-10 h-10" />
          </div>
            <div>
          <img src={facebook} alt="social" className="w-10 h-10" />
          </div>
            <div>
          <img src={apple} alt="social" className="w-10 h-10" />
          </div>
        </div>
      </div>
      </div>
      </div>
    </>;
};
export default Contact;