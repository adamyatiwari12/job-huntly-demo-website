import React from 'react'
import { Briefcase } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-white shadow-sm flex justify-between items-center px-50 w-full h-22'>
        <div className='flex items-center gap-2'>
          <div className='flex justify-center items-center bg-[#4640DE] p-2 rounded-md'>
            <Briefcase color='white' size={25}/>
          </div>
            <h1 className='text-xl font-bold text-gray-900'>Career Portal</h1>
        </div>
        <Link href="/"><p>Back to jobs</p></Link>
    </div>
  )
}

export default Header
