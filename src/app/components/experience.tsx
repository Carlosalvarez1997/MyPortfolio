'use client'
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../globals.css";
import { motion } from "framer-motion";
import { FaFlask, FaJs, FaPython } from 'react-icons/fa';
import { SiFlask, SiTypescript, SiMysql, SiReact, SiSupabase } from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";


// Experience Data Array
export const experienceData = [
  {
    year: "2023",
    dateRange: "March - September",
    title: "Started Coding",
    description: "Intensively trained in Python, Java, MySQL, and web development frameworks through Coding Dojo’s immersive program, with a strong focus on backend and full-stack development fundamentals."
  },
  {
    year: "2023",
    dateRange: "September",
    title: "FinJournal",
    description: "Designed and implemented FinJournal, a finance tracking application built with Python and Flask, leveraging MySQL for efficient data management to help users track and manage investment portfolios.",
    techLogo: [
      { Logo: <FaPython />, name: "Python", color: "text-blue-400" },
      { Logo: <SiFlask />, name: "Flask", color: "text-gray-700" },
      { Logo: <SiMysql />, name: "MySQL", color: "text-blue-500" }
    ]
  },
  {
    year: "2023",
    dateRange: "November - Current",
    title: "JavaScript/TypeScript",
    description: "Completed an in-depth Udemy course in JavaScript and TypeScript, with a strong emphasis on React for building dynamic, responsive web applications.",
    techLogo: [
      { Logo: <FaJs />, name: "JavaScript", color: "text-yellow-500" },
      { Logo: <SiTypescript />, name: "TypeScript", color: "text-blue-600" },
      { Logo: <SiReact />, name: "ReactJS", color: "text-blue-500" }
    ]
  },
  {
    year: "In Progress",
    dateRange: "July - Current",
    title: "Upin",
    description: "An interactive platform designed for real-time creation and participation in local events, enabling users to seamlessly discover, join, and organize events within their community.",
    techLogo: [
      { Logo: <SiTypescript />, name: "TypeScript", color: "text-blue-600" },
      { Logo: <RiNextjsFill />, name: "NextJs", color: "text-[#333333]" },
      { Logo: <SiReact />, name: "ReactJS", color: "text-blue-500" },
      { Logo: <SiSupabase />, name: "Supabase", color: "text-[#3ECF8E]" }
    ]
  }
];

const Experience = () => {
  return (
    <div className='w-full py-20 bg-gradient-to-b from-slate-100 to-slate-50 px-4'>
      {/* Section Title */}
      <motion.h2
        className='text-center text-3xl tablet:text-6xl font-Pompiere text-[#8B0000] mb-12'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Experience
      </motion.h2>
      
      {/* Timeline */}
      <VerticalTimeline>
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <VerticalTimelineElement
              date={item.year}
              iconStyle={{ background: "#8B0000", color: "#fff" }}
              contentStyle={{ background: "white", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}
              contentArrowStyle={{ borderRight: '7px solid #8B0000' }}
              position={index % 2 === 0 ? "left" : "right"} // Alternate positions
            >
              <h3 className='text-2xl tablet:text-3xl font-semibold mb-1 text-gray-800'>{item.title}</h3>
              <h4 className='text-lg tablet:text-xl text-gray-500 mb-4'>{item.dateRange}</h4>
              <p className='text-md tablet:text-lg text-gray-700'>{item.description}</p>
              
              {/* Tech Stack Icons */}
              {item.techLogo && (
                <div className='flex flex-wrap gap-4 mt-4'>
                  {item.techLogo.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className='flex items-center space-x-2'
                    >
                      <span className={`text-3xl ${tech.color}`}>{tech.Logo}</span>
                      <span className="hidden tablet:block text-gray-800 text-lg font-medium">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </VerticalTimelineElement>
          </motion.div>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
