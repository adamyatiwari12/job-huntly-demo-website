import React from 'react'
import FooterLinks from './FooterLinks'
import FooterLogo from './FooterLogo'
import FooterNewsletter from './FooterNewsletter'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <>
    <footer className='bg-[#202430] gap-10 flex justify-around py-10 px-20 max-lg:flex-col max-lg:gap-10 max-lg:px-10 max-md:px-5 max-sm:px-2'>
      <FooterLogo/>
      <FooterLinks/>
      <FooterNewsletter/>
    </footer>
    <FooterBottom/>
    </>
  )
}

export default Footer
