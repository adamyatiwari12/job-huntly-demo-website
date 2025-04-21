import React from 'react'
import Header from '../components/Form/Header'
import Main from '../components/Form/Main'
import Help from '../components/Form/Help'
import Footer from '../components/Form/Footer'

const page = () => {
  return (
    <div className='bg-gray-50 flex flex-col items-center min-h-screen'>
      <Header/>
      <Main/>
      <Help/>
      <Footer/>
    </div>
  )
}

export default page
