import React from 'react'

const Count1 = () => {
  return (
    <div className="px-4 sm:px-8 flex flex-col justify-between gap-4 sm:gap-6 pt-6">
      <div className="flex items-center gap-1 sm:gap-2">
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#4640DE] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm sm:text-base">1</span>
          </div>
          <p className="text-xs sm:text-sm text-center w-16 sm:w-21 text-gray-600">Personal Info</p>
        </div>
        <div className="h-1 w-full bg-gray-200"></div>
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-sm sm:text-base">2</span>
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
        <h1 className="text-xl sm:text-2xl font-bold">Personal Information</h1>
        <p className="text-sm sm:text-base">Please provide your contact details</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="flex flex-col gap-1 sm:gap-2">
          <label htmlFor="firstName" className="text-xs sm:text-sm">
            Full Name
          </label>
          <input
            type="text"
            id="firstName"
            className="border border-gray-300 rounded-md p-2 sm:p-3 text-sm"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col gap-1 sm:gap-2">
          <label htmlFor="email" className="text-xs sm:text-sm">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-md p-2 sm:p-3 text-sm"
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="flex flex-col gap-1 sm:gap-2">
          <label htmlFor="phone" className="text-xs sm:text-sm">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="border border-gray-300 rounded-md p-2 sm:p-3 text-sm"
            placeholder="+1 (555) 123-4567"
          />
        </div>
        <div className="flex flex-col gap-1 sm:gap-2">
          <label htmlFor="address" className="text-xs sm:text-sm">
            Position Applied For
          </label>
          <select className="border border-gray-300 rounded-md p-2 sm:p-3 text-sm">
            <option>Select Position</option>
            <option>Design</option>
            <option>Sales</option>
            <option>Marketing</option>  
            <option>Finance</option>
            <option>Technology</option>
            <option>Engineering</option>
            <option>Business</option>
            <option>Human Resource</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Count1