import React from 'react'
import PageBanner from '../../../shared/ui/PageBanner'
import AboutComponent from '../components/About/About'
import Partners from '../../../shared/components/Partners/Partners'
import Vision from '../../../shared/components/Vision/Vision'


const About = () => {
  return (
    <>
      <PageBanner
        title="About Us"
        currentPage="About"
      />

      <AboutComponent />
      <Partners />
      <Vision />
    </>
  )
}

export default About