'use client'
import React from 'react'
import Header from '../components/header'
import { motion } from "framer-motion";

import upinImg from "../../../public/upinScreenshot.jpeg"
import upinImg2 from "../../../public/upinImg2.jpeg"
import {  FaJs, FaPython } from 'react-icons/fa'
import { SiFlask, SiMysql, SiReact,SiSupabase } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'
import ProjectCard from '../components/tweet';
import investaJournal from "../../../public/investaJournal.jpeg"

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
        images={[upinImg, upinImg2]}
      />
      <ProjectCard
      title={"InvestaJournal"}
      description= "Designed a user-friendly investment-tracking web application, harnessing the power of Python, MySQL, Flask, HTML, and CSS. With this platform, managing your investments becomes effortless and efficient. From recording purchase dates to categorizing financial types and analyzing profit/loss data, InvestaJournal provides a comprehensive solution in one convenient interface"
      hashtags="#Flask #MySQL #Python"
      logoColor="#D4AF37"
      techStack={[
        {icon: FaPython, name:"Python", color:"text-blue-400"},
        {icon: SiFlask, name: "Flask", color: "text-gray-700"},
        {icon: SiMysql, name:"MySQL", color:"text-blue-500"}
      ]}
      images={[investaJournal]}
      />
      </motion.div>
    </div>
  );
}

export default MyProjects;
