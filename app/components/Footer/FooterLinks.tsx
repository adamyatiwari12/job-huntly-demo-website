import React from 'react'

const FooterLinks = () => {
  return (
    <div className='flex gap-20 justify-between max-lg:px-10 max-md:pl-5 max-sm:pl-2 '>
        <nav>
        <div className="text-white text-xl font-semibold mb-[47px]">About</div>
        <div className='flex flex-col gap-4'>
        <a
            href="#"
            className="text-[#D6DDEB] text-lg hover:text-white transition-colors"
          >
            Companies
          </a>
          <a
            href="#"
            className="text-[#D6DDEB] text-lg hover:text-white transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-[#D6DDEB] text-lg hover:text-white transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-[#D6DDEB] text-lg hover:text-white transition-colors"
          >
            Advice
          </a>
          <a
            href="#"
            className="text-[#D6DDEB] text-lg hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
        </div>
        </nav>

        <nav>
        <div className="text-white text-xl font-semibold mb-[47px]">
          Resources
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="#"
            className="text-[#D6DDEB] text-lg hover:text-white transition-colors"
          >
            Help Docs
          </a>
          <a
            href="#"
            className="text-[#D6DDEB] text-lg hover:text-white transition-colors"
          >
            Guide
          </a>
          <a
            href="#"
            className="text-[#D6DDEB] text-lg hover:text-white transition-colors"
          >
            Updates
          </a>
          <a
            href="#"
            className="text-[#D6DDEB] text-lg hover:text-white transition-colors"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  )
}

export default FooterLinks
