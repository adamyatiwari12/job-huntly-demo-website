import { Search, MapPin } from "lucide-react";
import React from "react";

const JobSearch = () => {
  return (
    <div>
      <div className="bg-white mt-15 min-w-[770px] h-[90px] rounded-md shadow-lg">
        <div className="flex gap-4 items-center justify-between h-full px-3">
          <div className="flex gap-1 items-center ml-4">
            <Search className="h-4 w-4 text-[#25324B] opacity-60" />
            <input type="text" placeholder="Job title or keyword" className="border-none focus:outline-none"/>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-px h-12 bg-[#D6DDEB]" />
            <div className="flex gap-1 items-center">
            <MapPin className="h-4 w-4 text-[#25324B] opacity-60" />
            <select className="focus:outline-none opacity-60">
              <option>Florence, Italy</option>
              <option>Rome, Italy</option>
              <option>Milan, Italy</option>
              <option>New York, USA</option>
              <option>London, UK</option>
              <option>Berlin, Germany</option>
            </select>
            </div>
          </div>
          <div className="flex items-center gap-2">
          <div className="w-px h-12 bg-[#D6DDEB]" />
          <button
            type="submit"
            className="flex-[shrink] bg-[#4640DE] text-white text-lg px-[27px] py-3.5 max-md:w-full rounded-md"
          >
            Search my job
          </button>
          </div>
        </div>
      </div>
      <div className="text-[#202430] text-base opacity-70 mt-5">
        <span>Popular : </span>
        <span>UI Designer, UX Researcher, Android, Admin</span>
      </div>
    </div>
  );
};

export default JobSearch;
