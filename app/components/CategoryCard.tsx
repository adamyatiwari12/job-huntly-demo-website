import { ArrowRight } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

type CategoryCardProps = {
  icon: React.ReactElement;
  title: string;
  count: number;
};

const CategoryCard = ({ icon, title, count }: CategoryCardProps) => {
  return (
    <Link href="/form">
      <div className='border border-[#D6DDEB] p-7 hover:shadow-md transition-all duration-300 max-md:hidden'>
        <div className='flex flex-col gap-4'>
          <div>{icon}</div>
          <div className='font-bold text-2xl'>{title}</div>
          <div className='flex justify-between items-center '>
            <div className='text-gray-500'>{count} jobs available</div>
            <div className='flex items-center gap-1 text-[#4640DE] font-medium'>
              Apply
              <ArrowRight className='h-4 w-4' />
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden border border-[#D6DDEB] flex gap-7 px-4 py-4 items-center'>
        <div>
          <div>{icon}</div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='font-bold text-2xl'>{title}</div>
          <div className='flex justify-between items-center'>
            <div className='text-gray-500'>{count} jobs available</div>
            <ArrowRight className='h-6 w-6 text-[#4640DE] font-medium' />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard