import React from 'react'
import HomePage from './home/page'
import FutureProducts from './FutureProducts/page'
import AboutPage from './About/page'
import ContactPage from './contactus/page'

const page = () => {
  return (
    <div>
      <HomePage/>
      <FutureProducts/>
      <AboutPage/>
      <ContactPage/>
    </div>
  )
}

export default page
