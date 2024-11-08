'use client'
import TypingAnimation from '@/components/ui/typing-animation';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // Check for screen size (is mobile or not)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const goToAbout = (e: any): void => {
    e.preventDefault();
    router.push('/aboutme');
  };

  // Prevent menu toggle when clicking on the logo/name (only on mobile)
  const handleLogoClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.stopPropagation(); // Prevent the click event from opening the menu on small screens
    }
  };

  return (
    <div className="flex justify-between items-center w-full top-0 left-0 p-4 bg-transparent z-96">
      
      {/* Logo / Name */}
      <motion.button 
        whileHover={{ scale: 0.75, transition: { duration: 0.2 } }} 
        whileTap={{ scale: 0.8 }}>
        <Link href="/" onClick={handleLogoClick}>
          <TypingAnimation
            text="Carlos Alvarez"
            className="tablet:text-3xl z-20 laptop:text-6xl text-current hover:text-[#0CBABA]"
            duration={90}
          />
        </Link>
      </motion.button>

      {/* Links for Larger Screens */}
      <div className="hidden tablet:flex space-x-6">
        <Link href="/aboutme" className="text-lg font-semibold text-black hover:text-[#0CBABA]">About</Link>
        <Link href="/my-projects" className="text-lg font-semibold text-black hover:text-[#0CBABA]">Projects</Link>
        <Link href="/emailme" className="text-lg font-semibold text-black hover:text-[#0CBABA]">Send Email</Link>
      </div>

      {/* Hamburger Icon for Small Screens */}
      <div className="tablet:hidden z-50">
        <button onClick={toggleMenu} className="text-3xl">
          <AiOutlineMenu />
        </button>
      </div>

      {/* Compact Floating Menu for Small Screens */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-lg shadow-lg w-3/4 max-w-md p-8 text-center relative">
            
            {/* Close Button */}
            <button onClick={toggleMenu} className="absolute top-3 right-3 text-gray-600 text-2xl">
              <AiOutlineClose />
            </button>

            {/* Compact Menu Links */}
            <div className="flex flex-col items-center space-y-4">
              <motion.button onClick={goToAbout} whileHover={{ scale: 0.9 }} className="text-xl font-semibold text-black">
                About
              </motion.button>
              <motion.button whileHover={{ scale: 0.9 }} className="text-xl font-semibold text-gray-800">
                <Link href="/my-projects" onClick={toggleMenu}>Projects</Link>
              </motion.button>
              <motion.button whileHover={{ scale: 0.9 }} className="text-xl font-semibold text-gray-800">
                <Link href="/emailme" onClick={toggleMenu}>Send Email</Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Header;
