'use client'
import React from 'react';
import OrbitingCircle from './orbatingCircle';
import BoxReveal from '@/components/ui/box-reveal';
import { Dock } from '@/components/ui/dock';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaJs, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiFlask, SiReact, SiTypescript } from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 via-slate-200 to-slate-100"
    >

      {/* Title Section */}
      <div className="text-center py-10 flex items-center justify-center relative">
        <div className="p-8">
          <motion.h2 
            className="text-3xl tablet:text-5xl laptop:text-7xl text-black font-extrabold font-DynaPuff z-10"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Software Engineer
          </motion.h2>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col items-center space-y-8 laptop:space-y-12 mb-10 w-full px-4">
        
        {/* Orbiting Circle */}
        <OrbitingCircle />
        
        {/* Social Links */}
        <Dock className="flex space-x-4 p-3 bg-slate-500 bg-opacity-50 rounded-full shadow-lg">
          <Link href="https://www.linkedin.com/in/carlos-alvarez-/" target="_blank">
            <FaLinkedin className="text-3xl text-[#0A66C2] hover:scale-110 transition-transform" />
          </Link>
          <Link href="https://github.com/Carlosalvarez1997" target="_blank">
            <FaGithub className="text-3xl text-[#171515] hover:scale-110 transition-transform" />
          </Link>
        </Dock>

        {/* Description */}
        <div className="bg-white bg-opacity-90 p-2 rounded-3xl shadow-md border border-slate-300 text-center w-full laptop:w-3/5 max-w-4xl">
          <BoxReveal>
                <p className="text-lg mobile:text-xl text-wrap laptop:text-2xl text-black leading-relaxed">
                     Hi, my name is Carlos Alvarez, a Junior Software Engineer passionate about web development. I specialize in <span className="text-yellow-500 font-extrabold">JavaScript</span> and <span className="text-blue-500 font-extrabold">TypeScript</span>, and work with frameworks like <span className="text-gray-800 font-extrabold">Next.js</span> and <span className="text-blue-600 font-extrabold">React.js</span> to build dynamic web applications. 
                     <br />
                     <br />

                    I also have experience with back-end technologies like <span className="text-green-900 font-extrabold">Python</span> and <span className="text-green-700 font-extrabold">Flask</span>, enabling me to develop full-stack solutions. Always eager to learn, I enjoy tackling new challenges and working on exciting projects.
                  </p>

          </BoxReveal>
        </div>

        {/* Technologies Dock */}
        <Dock className="flex items-center space-x-4 p-4 bg-white bg-opacity-50 rounded-full shadow-md">
  {[
    { Icon: FaJs, color: 'text-yellow-500', name: 'JavaScript' },
    { Icon: SiTypescript, color: 'text-blue-600', name: 'TypeScript' },
    { Icon: FaNodeJs, color: 'text-green-500', name: 'Node.js' },
    { Icon: SiReact, color: 'text-blue-600', name: 'React' },
    { Icon: RiNextjsFill, color: 'text-gray-800', name: 'NextJS' },
    { Icon: FaPython, color: 'text-blue-400', name: 'Python' },
    { Icon: SiFlask, color: 'text-gray-700', name: 'Flask' },
  ].map(({ Icon, color, name }, idx) => (
    <motion.div 
      key={idx}
      className="flex items-center space-x-2 transition-all duration-75"
      whileHover={{ scale: 1.3 }}  // On hover (desktop)
      whileTap={{ scale: 1.3 }}    // On tap (mobile)
    >
      <Icon className={`${color} text-2xl`} />
      <h2 className="hidden tablet:block text-xl text-black">{name}</h2>
    </motion.div>
  ))}
</Dock>


      </div>
    </motion.div>
  );
};

export default Hero;
