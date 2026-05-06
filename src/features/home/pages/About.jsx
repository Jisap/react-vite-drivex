import React from 'react'
import PageBanner from '../../../shared/ui/PageBanner'
import AboutComponent from '../components/About/About'
import Partners from '../../../shared/components/Partners/Partners'
import Vision from '../../../shared/components/Vision/Vision'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Team from '../../../shared/components/Team/Team'
import Testimonials from '../../../shared/components/Testimonials/Testimonials'


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
      <WhyChooseUs />
      <Team />
      <Testimonials />
    </>
  )
}

export default About