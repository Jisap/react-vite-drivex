import React, { useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import AOS from 'aos'
import "aos/dist/aos.css"




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

    </>
  )
}

export default Index