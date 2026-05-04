import { Mail, MoveRight } from "lucide-react"
import Logo from "../Navbar/Logo"
import { Link } from "react-router-dom"
import Button from "../../shared/components/Button"


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
            <h3 className="text-white font-bold tracking-wide text-2xl uppercase mb-6" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
              Legal Policy
            </h3>

            <ul className="space-y-4">
              <li className="text-gray-light hover:text-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="300" data-aos-offset="0">
                Term & Condition
              </li>
              <li className="text-gray-light hover:text-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="400" data-aos-offset="0">
                Privacy Policy
              </li>
              <li className="text-gray-light hover:text-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="500" data-aos-offset="0">
                Legal Notice
              </li>
              <li className="text-gray-light hover:text-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="600" data-aos-offset="0">
                Accesibility
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold tracking-wide text-2xl uppercase mb-6" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
              Quick Links
            </h3>

            <ul className="space-y-4">
              <li className="text-gray-light hover:text-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="300" data-aos-offset="0">
                Home
              </li>
              <li className="text-gray-light hover:text-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="400" data-aos-offset="0">
                About Us
              </li>
              <li className="text-gray-light hover:text-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="500" data-aos-offset="0">
                Car Type
              </li>
              <li className="text-gray-light hover:text-white transition-all duration-300 cursor-pointer" data-aos="fade-left" data-aos-delay="600" data-aos-offset="0">
                Service
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold tracking-wide text-2xl uppercase mb-6" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0">
              Subscribe to the newsletter
            </h3>

            <form 
              className="flex items-center bg-gray-50/10 rounded-full p-1.5 h-14 w-full" 
              data-aos="fade-up" 
              data-aos-delay="300" 
              data-aos-offset="0"
            >
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent text-white outline-none flex-grow ps-5 h-full"
                required
              />

              <button
                type="submit"
                className="text-black bg-white h-full aspect-square flex items-center justify-center rounded-full hover:bg-primary transition-all duration-300 cursor-pointer"
              >
                <MoveRight size={22} />
              </button>
            </form>
          </div>
        </div>

        {/* divider */}
        <div data-aos="fade-up" data-aos-delay="300" className="border-t border-gray-800 py-8 mt-10 text-gray-300 text-lg lg:flex justify-center items-center pb-10">
          <p>
            &copy; {new Date().getFullYear()} DriveX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer