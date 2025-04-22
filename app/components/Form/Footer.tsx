import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center h-auto sm:h-20 w-full border-t border-gray-300 mt-10 px-4 sm:px-8 md:px-16 lg:px-55 py-4 text-gray-500 text-xs sm:text-sm md:text-md'>
      <p className='mb-3 sm:mb-0'>© 2025 Company Name. All rights reserved.</p>
      <div className='flex gap-4'>
        <a href="#" className='hover:text-blue-500'>Privacy Policy</a>
        <a href="#" className='hover:text-blue-500'>Terms of Service</a>
      </div>
    </div>
  )
}

export default Footer