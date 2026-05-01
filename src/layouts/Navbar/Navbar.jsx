
import { Link } from 'react-router-dom'
import Logo from './Logo'
import NavMenu from './NavMenu'
import Button from '../../shared/components/Button'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'
import { useEffect, useState } from 'react'

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`
        fixed top-0 left-0 right-0 w-full z-999 border-b border-gray-50/10 transition-all duration-300 bg-black
        ${scrolled ? "bg-black shadow-lg" : "bg-transparent shadow-none"}  
      `}>
        <nav className='relative container mx-auto px-4 py-5 centered-row justify-between'>
          <div className='centered-row gap-10 relative'>
            <Link to="/" data-aos="fade-center" data-aos-delay="100">
              <Logo />
            </Link>

            <NavMenu />
          </div>

          <div className='lg:centered-row gap-10 hidden'>
            <p
              className='text-white text-2xl font-barlow! font-medium tracking-wide'
              data-aos="fade-center"
              data-aos-delay="500"
            >
              1 (555) 123-4567
            </p>

            <Button
              type="link"
              to="/contact"
              text={"Get A Quote"}
              className='btn-yellow'
              data-aos="fade-center"
              data-aos-delay="600"
            />
          </div>

          <div
            className='text-white block lg:hidden cursor-pointer'
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </div>
        </nav>

        <ul className={`
          block lg:hidden overflow-hidden transition-all duration-500 bg-black
          ${open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}
        `}>
          <MobileMenu className={`block lg:hidden`} />
        </ul>
      </div>
    </>
  )
}

export default Navbar