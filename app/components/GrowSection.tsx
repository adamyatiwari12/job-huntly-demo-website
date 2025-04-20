import React from 'react'

const GrowSection = () => {
  return (
    <div className='flex flex-col justify-around bg-white py-10 px-30'>
      <p className='block text-[#989899]'>Companies we helped grow</p>
      <div className='flex justify-between items-center'>
        <img src="/companies/vodafone.svg" alt="vodafone" className='h-26 w-38' />
        <img src="/companies/intel.svg" alt="intel" className='h-26 w-25' />
        <img src="/companies/tesla.svg" alt="tesla" className='h-26 w-40' />
        <img src="/companies/amd.svg" alt="amd" className='h-26 w-30' />
        <img src="/companies/talkit.svg" alt="talkit" className='h-26 w-28' />
      </div>
    </div>
  )
}

export default GrowSection
