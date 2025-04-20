import React from 'react'
import FooterLinks from './FooterLinks'
import FooterLogo from './FooterLogo'
import FooterNewsletter from './FooterNewsletter'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <>
    <footer className='bg-[#202430] flex justify-around py-10 px-20'>
      <FooterLogo/>
      <FooterLinks/>
      <FooterNewsletter/>
    </footer>
    <FooterBottom/>
    </>
  )
}

export default Footer
