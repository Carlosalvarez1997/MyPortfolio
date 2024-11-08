'use client'
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { RainbowButton } from '@/components/ui/rainbow-button';
import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';
import emailSent from '../../../public/Animation - 1730832222188.json';

const ContactUs = () => {
  const form = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        'service_g0lkp8a',
        'contact_form',
        form.current,
        'KXxdYG2W21a8FchOV'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 2500); // Adjust the delay for animation timing

      return () => clearTimeout(timer);
    }
  }, [isSent, router]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {isSent ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <Lottie animationData={emailSent} loop={false} className="w-64 h-64 mb-4" />
          <p className="text-xl font-semibold">Email Sent Successfully! Redirecting...</p>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="bg-white shadow-lg rounded-xl p-8 w-11/12 max-w-lg mx-auto"
        >
          <h1 className="text-2xl tablet:text-4xl font-bold text-center mb-6 text-gray-800">Send an Email</h1>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input 
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-400"
              type="text" 
              name="from_name" 
              required 
              placeholder="Your name..." 
            />
            <input 
              type="email" 
              name="from_email" 
              required 
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-400" 
              placeholder="Your email..." 
            />
            <textarea 
              name="message" 
              rows={6} 
              required 
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-400" 
              placeholder="Your message..." 
            />
            <div className="text-center mt-6">
              <RainbowButton>
                <input type="submit" value="Send" className="text-lg font-semibold cursor-pointer px-8 py-3" />
              </RainbowButton>
            </div>
          </form>

     
        </motion.div>
        
      )}
    </div>
  );
};

export default ContactUs;
