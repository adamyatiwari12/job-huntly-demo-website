import React from 'react'
import { Check } from 'lucide-react'

const Count2 = () => {
  return (
    <div className="px-8 flex flex-col justify-between gap-6 pt-7">
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold"><Check/></span>
              </div>
              <p className="text-sm text-center w-21 text-gray-600">Personal Info</p>
            </div>
            <div className="h-1 w-full bg-green-400"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-[#4640DE] rounded-full flex items-center justify-center">
                <span className="text-white">2</span>
              </div>
              <p className="text-sm text-center text-gray-600">Experience</p>
            </div>
            <div className="h-1 w-full bg-gray-200"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500">3</span>
              </div>
              <p className="text-sm text-center text-gray-600">Documents</p>
            </div>
          </div>
          <h1 className="text-2xl font-bold">Professional Experience</h1>
          <p>Tell us about your qualifications</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-sm">
                Years of Experience
              </label>
              <select className="border border-gray-300 rounded-md p-3">
                <option>Select Experience Level</option>
                <option value="0-1">0-1 years</option>
                <option value="2-3">1-3 years</option>
                <option value="4-5">3-5 years</option>
                <option value="6+">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm">
                Highest Education Level
              </label>
              <select className="border border-gray-300 rounded-md p-3">
                <option>Select Education</option>
                <option value="0-1">High School</option>
                <option value="2-3">Associate's Degree</option>
                <option value="4-5">Bachelor's Degree</option>
                <option value="6+">Master's Degree</option>
                <option value="10+">PhD</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm">
              LinkedIn Profile
              </label>
              <input
                type="tel"
                id="phone"
                className="border border-gray-300 rounded-md p-3"
                placeholder="https://www.linkedin.com/in/username"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-sm">
                Portfolio Website
              </label>
              <input
                type="text"
                id="address"
                className="border border-gray-300 rounded-md p-3"
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>
          </div>
  )
}

export default Count2
