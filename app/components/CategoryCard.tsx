import { ArrowRight } from 'lucide-react'
import React from 'react'

type CategoryCardProps = {
    icon: React.ReactElement;
    title: string;
    count: number;
  };

  const CategoryCard = ({ icon, title, count }: CategoryCardProps) => {
  return (
    <div className='border border-[#D6DDEB] p-7'>
      <div className='flex flex-col gap-4'>
        <div>{icon}</div>
        <div className='font-bold text-2xl'>{title}</div>
        <div className='opacity-70'>{count} jobs available  <ArrowRight className='inline text-black'/></div>
      </div>
    </div>
  )
}

export default CategoryCard
