import React, { useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import AOS from 'aos'
import "aos/dist/aos.css"
import About from '../components/About/About'
import Service from '../components/Service/Service'
import ServiceCategories from '../components/ServiceCategories/ServiceCategories'
import Counter from '../components/Counter/Counter'




const Index = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    window.addEventListener("load", () => {
      AOS.refreshHard();
    })
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Service />
      <ServiceCategories />
      <Counter />
    </>
  )
}

export default Index