import React from 'react'

const Count1 = () => {
  return (
    <div className="px-8 flex flex-col justify-between gap-6 pt-6">
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-[#4640DE] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <p className="text-sm text-center w-21 text-gray-600">Personal Info</p>
            </div>
            <div className="h-1 w-full bg-gray-200"></div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500">2</span>
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
          <h1 className="text-2xl font-bold">Personal Information</h1>
          <p>Please provide your contact deatils</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-sm">
                Full Name
              </label>
              <input
                type="text"
                id="firstName"
                className="border border-gray-300 rounded-md p-3"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-md p-3"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="border border-gray-300 rounded-md p-3"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address" className="text-sm">
                Position Applied For
              </label>
             <select className="border border-gray-300 rounded-md p-3">
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
