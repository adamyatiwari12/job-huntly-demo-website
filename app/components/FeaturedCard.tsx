import React from 'react'

type FeaturedCardProps = {
    logo: React.ReactElement;
    title: string;
    company: string;
    location: string;
    description: string;
    tags: {
        label:string;
        type:string;
    }[];   
}

const FeaturedCard = ({logo,title,company,location,description,tags}: FeaturedCardProps) => {
  return (
    <div className='border border-[#D6DDEB] p-7 flex flex-col gap-2'>
      <div className='flex justify-between'>
        <div>{logo}</div>
        <button className="text-[#4640DE] text-sm font-medium border border-[#4640DE] rounded px-3 py-1">Full Time</button>
      </div>
      <h2 className="text-[#25324B] text-lg font-bold">{title}</h2>
      <div className="flex items-center gap-2 text-[#515B6F] text-sm">
          <span>{company}</span>
          <span className="w-1 h-1 bg-[#515B6F] opacity-30 rounded-full" />
          <span>{location}</span>
        </div>
      <h4 className="text-[#7C8493] text-sm line-clamp-2">{description}</h4>
    </div>
  )
}

export default FeaturedCard
