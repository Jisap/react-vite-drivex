import { Mail, MoveRight } from "lucide-react"
import Logo from "../Navbar/Logo"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="bg-black pt-[4%]">
      <div className="container mx-auto px-4">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-5" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
              <Logo />
            </div>

            <p className="text-desc text-gray-light leading-relaxed" data-aos="fade-up" data-aos-delay="300" data-aos-offset="0">
              Experience the ease and covenience of renting a car with DriveX
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold tracking-wide text-2xl uppercase! mb-6" data-aos="fade-center" data-aos-delay="200">
              Legal Policy
            </h3>

            <ul className="space-y-4">
              <li className="text-gray-light hover:tex-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="300">
                Term & Condition
              </li>
              <li className="text-gray-light hover:tex-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="400">
                Privacy Policy
              </li>
              <li className="text-gray-light hover:tex-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="500">
                Legal Notice
              </li>
              <li className="text-gray-light hover:tex-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="600">
                Accesibility
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold tracking-wide text-2xl uppercase! mb-6" data-aos="fade-center" data-aos-delay="200">
              Quick Links
            </h3>

            <ul className="space-y-4">
              <li className="text-gray-light hover:tex-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="300">
                Home
              </li>
              <li className="text-gray-light hover:tex-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="400">
                About Us
              </li>
              <li className="text-gray-light hover:tex-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="500">
                Car Type
              </li>
              <li className="text-gray-light hover:tex-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="600">
                Service
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold tracking-wide text-2xl uppercase! mb-6" data-aos="fade-center" data-aos-delay="200">
              Subscribe to the newsletter
            </h3>


          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer