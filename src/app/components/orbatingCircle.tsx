import React, { useEffect, useState } from 'react';
import OrbitingCircles from '@/components/ui/orbiting-circles';
import { RiNextjsFill } from "react-icons/ri";
import { FaJs, FaPython, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiFlask, SiTypescript } from 'react-icons/si';

const OrbitingCircle = () => {
  const [radius, setRadius] = useState(40); // Default small radius for mobile

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(40); // Smaller radius for mobile
      } else {
        setRadius(80); // Larger radius for screens >= 640px
      }
    };

    // Initial check
    updateRadius();

    // Update radius on window resize
    window.addEventListener('resize', updateRadius);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <div className="relative flex flex-col items-center p-20 tablet:justify-center space-y-6 my-10 tablet:my-20">
      <span className="pointer-events-none whitespace-pre-wrap text-xl sm:text-3xl laptop:text-8xl font-semibold leading-none  text-transparent bg-gradient-to-b from-purple-500 to-cyan-200 bg-clip-text dark:from-white dark:to-black">
        Technologies
      </span>
      {/* Inner Circles */}
      <OrbitingCircles
        className="border-none bg-transparent h-auto "
        duration={25}
        delay={20}
        radius={radius} // Responsive radius
        path={false}
      >
        <FaPython className="text-md text-green-700 bg-transparent mobile:text-2xl tablet:text-3xl" />
      </OrbitingCircles>

      <OrbitingCircles
        className="border-none bg-transparent"
        duration={20}
        delay={20}
        radius={radius}
        path={false}
      >
        <FaJs className="text-md text-yellow-500 bg-transparent mobile:text-2xl tablet:text-3xl" />
      </OrbitingCircles>

      <OrbitingCircles
        className="border-none bg-transparent"
        duration={20}
        delay={10}
        radius={radius}
        path={false}
      >
        <SiTypescript className="text-md text-blue-600 bg-transparent mobile:text-2xl tablet:text-3xl" />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={20}
        radius={radius + 60} // Slightly larger radius for outer circles
        reverse
        path={false}
      >
        <SiFlask className="text-md text-slate-500 bg-transparent mobile:text-2xl tablet:text-3xl" />
      </OrbitingCircles>
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={25}
        radius={radius + 60} // Slightly larger radius for outer circles
        reverse
        path={false}
      >
        <RiNextjsFill className="text-md text-slate-500 bg-transparent mobile:text-2xl tablet:text-3xl" />
      </OrbitingCircles>

      <OrbitingCircles
        className="border-none bg-transparent"
        duration={20}
        delay={20}
        radius={radius + 60}
        reverse
        path={false}
      >
        <FaNodeJs className="text-md text-green-800 bg-transparent mobile:text-2xl tablet:text-3xl" />
      </OrbitingCircles>

      <OrbitingCircles
        className="border-none bg-transparent"
        duration={30}
        delay={20}
        radius={radius + 60}
        reverse
        path={false}
      >
        <FaReact className="text-md text-blue-500 bg-transparent mobile:text-2xl tablet:text-3xl" />
      </OrbitingCircles>
    </div>
  );
};

export default OrbitingCircle;
