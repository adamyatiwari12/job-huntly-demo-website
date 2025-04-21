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
      <div className='border border-[#D6DDEB] p-7 hover:shadow-md transition-all duration-300'>
        <div className='flex flex-col gap-4'>
          <div>{icon}</div>
          <div className='font-bold text-2xl'>{title}</div>
          <div className='flex justify-between items-center'>
            <div className='text-gray-500'>{count} jobs available</div>
            <div className='flex items-center gap-1 text-[#4640DE] font-medium'>
              Apply
              <ArrowRight className='h-4 w-4' />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard