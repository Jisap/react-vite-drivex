import React from 'react'
import PageBanner from '../../../shared/ui/PageBanner'
import AboutComponent from '../components/About/About'
import Partners from '../../../shared/components/Partners/Partners'


const About = () => {
  return (
    <>
      <PageBanner
        title="About Us"
        currentPage="About"
      />

      <AboutComponent />

      <Partners />
    </>
  )
}

export default About