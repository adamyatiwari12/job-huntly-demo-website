import React from 'react'
import { Briefcase } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-white shadow-sm flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-50 w-full h-16 sm:h-22'>
      <div className='flex items-center gap-2'>
        <div className='flex justify-center items-center bg-[#4640DE] p-2 rounded-md'>
          <Briefcase color='white' size={20} className="sm:size-8" />
        </div>
        <h1 className='text-lg sm:text-xl font-bold text-gray-900'>Career Portal</h1>
      </div>
      <Link href="/"><p className='text-sm sm:text-base font-semibold'>Back to jobs</p></Link>
    </div>
  )
}

export default Header