import Navbar from "./layouts/Navbar/Navbar"
import "./App.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"




const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 120
    });
  }, []);

  return (
    <>
      <Navbar className={"lg:flex hidden"} />
    </>
  )
}

export default App  