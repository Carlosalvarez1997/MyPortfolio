'use client'
import React from 'react'
import Header from '../components/header'
import { motion } from "framer-motion";
import Image from "next/image"
import upinImg from "../../../public/upinScreenshot.jpeg"
import { FaJs } from 'react-icons/fa'
import { SiReact,SiSupabase } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'
import ProjectCard from '../components/tweet';

const MyProjects = () => {
  return (
    <div>
      <Header />
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="flex flex-col items-center justify-center p-6 tablet:p-8"
      >
        
      <ProjectCard 
        title="UPIN"
        description="Upin is a user-friendly app that helps you find and manage local events while connecting with your community. Web Version still in Development. App can be downloaded on the Playstore for Android and AppStore for Iphone."
        hashtags="#React #NextJS"
        logoColor="#3ECF8E"
        techStack={[
          { icon: FaJs, name: 'JavaScript', color: '#F0DB4F' },
          { icon: SiReact, name: 'React', color: '#61DAFB' },
          { icon: RiNextjsFill, name: 'NextJS', color: '#000000' },
          { icon: SiSupabase, name:"Supabase", color: "#3ECF8E" }
        ]}
        imageSrc={upinImg}
      />
      </motion.div>
    </div>
  );
}

export default MyProjects;
