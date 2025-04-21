import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-center h-20 w-full border-t-1 border-gray-300 mt-10 px-55 text-gray-500 text-md'>
      <p className='text-sm'>© 2025 Company Name. All rights reserved.</p>
      <div className='flex gap-4'>
        <a href="#" className=' hover:text-blue-500'>Privacy Policy</a>
        <a href="#" className=' hover:text-blue-500'>Terms of Service</a>

      </div>
    </div>
  )
}

export default Footer
