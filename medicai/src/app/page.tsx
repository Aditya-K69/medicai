"use client";
import React from "react";
import AnimatedHeader from "@/components/AnimatedHeader";
import Navbar from "@/components/Navbar";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Button } from "@/components/ui/button";
import { GlareCard } from "@/components/ui/glare-card";

export default function Home() {
  return (
    <div>
      <Navbar />
      <AnimatedHeader />

      <div className="bg-gray-900 p-10 flex flex-col items-center justify-center text-center space-y-2 px-4">
        <h1 className="text-3xl font-bold text-blue-400">Welcome to MedicAI</h1>
        <p className="text-white">
          AI driven medical insights for faster, smarter healthcare
        </p>
        <InteractiveHoverButton>Get Started</InteractiveHoverButton>
      </div>
    
<div className="text-2xl text-center my-10 font-bold text-blue-400">Select Your Role</div>
<div className="flex flex-wrap justify-center gap-4 mb-30">
  <Button variant={"link"} className="bg-white text-black hover:bg-gray-200 cursor-pointer">Patient</Button>
  <Button variant={"link"} className="bg-white text-black hover:bg-gray-200 cursor-pointer">Doctor</Button>
  <Button variant={"link"} className="bg-white text-black hover:bg-gray-200 cursor-pointer">Pharmacy</Button>
  <Button variant={"link"} className="bg-white text-black hover:bg-gray-200 cursor-pointer">Lab Assistant</Button>
</div>

    <div className="text-5xl text-white font-bold text-center mb-10">Explore Our AI Driven Features</div>
    
<div className="flex justify-evenly flex-wrap gap-6 mb-30">
  <GlareCard className="relative flex flex-col items-center justify-start text-white text-center p-6">
    <img
      src="https://cdn-lipbd.nitrocdn.com/NmtxoNywbwrhgCusRjwzXqAEjXRnHzOa/assets/images/optimized/rev-7d72060/www.osplabs.com/wp-content/uploads/2025/04/Service-Card_3-AI-Powered-PACS-Radiology-Data-Integration.png"
      className="h-full w-full absolute inset-0 object-cover z-0"
    />
    <div className="relative z-10 font-semibold text-2xl mt-4">
      AI-Powered Health Analysis
    </div>
  </GlareCard>

  <GlareCard className="relative flex flex-col items-center justify-start text-white text-center p-6">
    <img
      src="https://so-development.org/wp-content/uploads/2025/05/ChatGPT-Image-May-12-2025-02_28_08-PM.png"
      className="h-full w-full absolute inset-0 object-cover z-0"
    />
    <div className="relative z-10 font-bold text-2xl mt-4">
      Effective Monitoring of patients
    </div>
  </GlareCard>

  <GlareCard className="relative flex flex-col items-center justify-start text-white text-center p-6">
    <img
      src="https://trendsresearch.org/wp-content/uploads/2025/01/Cybersecurity-in-a-World-in-Crisis-V1-copy.jpg"
      className="h-full w-full absolute inset-0 object-cover z-0"
    />
    <div className="relative z-10 font-bold text-lg mt-4">
      Secure Patient Records
    </div>
  </GlareCard>

  <GlareCard className="relative flex flex-col items-center justify-start text-white text-center p-6">
    <img
      src="https://media.istockphoto.com/id/1768217932/vector/multiple-destinations-gps-tracking-map-track-navigation-pins-on-street-maps-navigate-mapping.jpg?s=612x612&w=0&k=20&c=6O3Hgw29yP5KoqWduJ3EYSWgKr72ftE1fO7UVQX8ME4="
      className="h-full w-full absolute inset-0 object-cover z-0"
    />
    <div className="relative z-10 font-bold text-lg mt-4">
      Track medicines and patient neccessities
    </div>
  </GlareCard>

    <GlareCard className="relative flex flex-col items-center justify-start text-white text-center p-6">
    <img
      src="https://i.pinimg.com/736x/d4/88/51/d488515237cfeda26b43b8ded2937358.jpg"
      className="h-full w-full absolute inset-0 object-cover z-0"
    />
    <div className="relative z-10 font-bold text-lg mt-4">
      Instant Health Updates
    </div>
  </GlareCard>

</div>
    </div>

  );
}
