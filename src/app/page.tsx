"use client";
import Experience from "./components/experience";
import Header from "./components/header";
import Hero from "./components/hero";






export default function Home() {
   return (
    <div className="h-screen w-screen">
      <Header />
      <Hero />    
      <Experience/>
    </div>
  );
}

