import React from 'react'
import { Check } from 'lucide-react'

const Count2 = () => {
  return (
    <div className="px-4 sm:px-8 flex flex-col justify-between gap-4 sm:gap-6 pt-6 sm:pt-7">
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">
              <Check size={16} className="sm:size-auto" />
            </span>
          </div>
          <p className="text-xs sm:text-sm text-center w-16 sm:w-21 text-gray-600">Personal Info</p>
        </div>
        <div className="h-1 w-full bg-green-400"></div>
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#4640DE] rounded-full flex items-center justify-center">
            <span className="text-white text-sm sm:text-base">2</span>
          </div>
          <p className="text-xs sm:text-sm text-center text-gray-600">Experience</p>
        </div>
        <div className="h-1 w-full bg-gray-200"></div>
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-sm sm:text-base">3</span>
          </div>
          <p className="text-xs sm:text-sm text-center text-gray-600">Documents</p>
        </div>
      </div>
      <div className="mt-2 sm:mt-0">
        <h1 className="text-xl sm:text-2xl font-bold">Professional Experience</h1>
        <p className="text-sm sm:text-base">Tell us about your qualifications</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex flex-col gap-1 sm:gap-2">
          <label htmlFor="experience" className="text-xs sm:text-sm">
            Years of Experience
          </label>
          <select className="border border-gray-300 rounded-md p-2 sm:p-3 text-sm">
            <option>Select Experience Level</option>
            <option value="0-1">0-1 years</option>
            <option value="2-3">1-3 years</option>
            <option value="4-5">3-5 years</option>
            <option value="6+">5-10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 sm:gap-2">
          <label htmlFor="education" className="text-xs sm:text-sm">
            Highest Education Level
          </label>
          <select className="border border-gray-300 rounded-md p-2 sm:p-3 text-sm">
            <option>Select Education</option>
            <option value="high-school">High School</option>
            <option value="associates">Associate's Degree</option>
            <option value="bachelors">Bachelor's Degree</option>
            <option value="masters">Master's Degree</option>
            <option value="phd">PhD</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 sm:gap-2">
          <label htmlFor="linkedin" className="text-xs sm:text-sm">
            LinkedIn Profile
          </label>
          <input
            type="url"
            id="linkedin"
            className="border border-gray-300 rounded-md p-2 sm:p-3 text-sm"
            placeholder="https://www.linkedin.com/in/username"
          />
        </div>
        <div className="flex flex-col gap-1 sm:gap-2">
          <label htmlFor="portfolio" className="text-xs sm:text-sm">
            Portfolio Website
          </label>
          <input
            type="url"
            id="portfolio"
            className="border border-gray-300 rounded-md p-2 sm:p-3 text-sm"
            placeholder="https://yourwebsite.com"
          />
        </div>
      </div>
    </div>
  )
}

export default Count2