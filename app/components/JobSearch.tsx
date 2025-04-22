import { Search, MapPin } from "lucide-react";
import React from "react";

const JobSearch = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 max-md:px-1">
      <div className="bg-white mt-8 rounded-md shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between p-4 gap-4">
          <div className="flex items-center w-full md:w-auto">
            <Search className="h-4 w-4 text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Job title or keyword" 
              className="w-full focus:outline-none border-b border-gray-300 md:border-b-0 pb-2 md:pb-0"
            />
          </div>
          
          <div className="hidden md:block w-px h-12 bg-gray-200" />
          
          <div className="flex items-center w-full md:w-auto pb-1">
            <MapPin className="h-4 w-4 text-gray-500 mr-2" />
            <select className="w-full focus:outline-none text-gray-500">
              <option>Florence, Italy</option>
              <option>Rome, Italy</option>
              <option>Milan, Italy</option>
              <option>New York, USA</option>
              <option>London, UK</option>
              <option>Berlin, Germany</option>
            </select>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-gray-200" />
          
          <button
            type="submit"
            className="w-full md:w-auto bg-[#4640DE] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Search my job
          </button>
        </div>
      </div>

      <div className="text-gray-700 text-base mt-5 flex flex-wrap gap-2 max-md:flex-col max-md:text-sm">
        <span className="opacity-70">Popular :</span>
        <span className="opacity-70">UI Designer, UX Researcher, Android, Admin</span>
      </div>
    </div>
  );
};

export default JobSearch;