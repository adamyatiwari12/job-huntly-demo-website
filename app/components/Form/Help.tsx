import React from 'react'
import { MessageSquare } from 'lucide-react'

const Help = () => {
  return (
    <div className='px-8 py-6 bg-white shadow-md rounded-lg flex flex-col justify-between w-270 h-30 mt-8'>
      <h1 className='text-xl font-bold'>Need Help?</h1>
      <div className='flex items-center gap-2'>
        <div className='bg-blue-50 p-2 rounded-full flex justify-center items-center'><MessageSquare color='blue' size={20}/></div>
        <p className='text-md text-gray-900'>Having trouble with your application? Contact our support team at careers@company.com or call us at +1 (555) 123-4567.</p>
        </div>
    </div>
  )
}

export default Help
