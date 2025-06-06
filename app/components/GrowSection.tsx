import React from 'react'

const GrowSection = () => {
  return (
    <div className='flex flex-col justify-around bg-white py-10 px-30 max-lg:px-10 max-md:px-6 max-sm:px-4 max-md:pb-2'>
      <p className='block text-[#989899]'>Companies we helped grow</p>
      <div className='flex justify-between items-center flex-wrap gap-2 max-md:gap-1'>
        <img src="/companies/vodafone.svg" alt="vodafone" className='h-26 w-38 max-md:h-19 max-sm:w-34' />
        <img src="/companies/intel.svg" alt="intel" className='h-26 w-25 max-md:h-19 max-sm:w-21' />
        <img src="/companies/tesla.svg" alt="tesla" className='h-26 w-40 max-md:h-19 max-sm:w-38' />
        <img src="/companies/amd.svg" alt="amd" className='h-26 w-30 max-md:h-19 max-sm:w-27' />
        <img src="/companies/talkit.svg" alt="talkit" className='h-26 w-28 max-md:h-19 max-sm:w-25' />
      </div>
    </div>
  )
}

export default GrowSection
