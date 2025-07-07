import React from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <div className="mb-5 mt-5 mr-5 flex justify-end items-center space-x-2">
      <Button variant="link" className="bg-white text-black hover:bg-gray-200 cursor-pointer">
        Home
      </Button>

      <div className="group relative">
        <Button
          variant="link"
          className="bg-white text-black hover:bg-gray-200 cursor-pointer flex items-center space-x-1"
        >
          <span>Features</span>
          <ChevronDoubleDownIcon className="h-4 w-4" />
        </Button>
        <div className="absolute top-full left-0 mt-1 hidden w-48 rounded-md border border-blue-400 bg-white shadow-md group-hover:block z-10">
          <div className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer border-b">Patient Records</div>
          <div className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer border-b">Health Score Analysis</div>
          <div className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer border-b">Doctor Dashboard</div>
          <div className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">Real-Time Monitoring</div>
        </div>
      </div>

      <Button variant="link" className="bg-white text-black hover:bg-gray-200 cursor-pointer">
        About
      </Button>
    </div>
  );
}

export default Navbar;
